import { readdir } from "node:fs/promises";
import path from "node:path";
import { NextRequest, NextResponse } from "next/server";
import { projectIds, projectMeta } from "@/data/site";
import type { ProjectId } from "@/data/site";

const imageExtensions = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".webp"]);
const imageNameCollator = new Intl.Collator("en", { numeric: true, sensitivity: "base" });
const projectImagesRoot = path.resolve(process.cwd(), "public", "images", "projects");

export async function GET(request: NextRequest) {
  const projectId = request.nextUrl.searchParams.get("projectId");

  if (!isProjectId(projectId)) {
    return NextResponse.json({ images: [] }, { status: 400 });
  }

  const imageDirectory = projectMeta[projectId].imageDirectory;

  if (!imageDirectory) {
    return NextResponse.json({ images: [] }, { headers: { "Cache-Control": "no-store" } });
  }

  const directoryPath = path.resolve(process.cwd(), "public", imageDirectory.replace(/^\/+/, ""));

  if (!directoryPath.startsWith(`${projectImagesRoot}${path.sep}`)) {
    return NextResponse.json({ images: [] }, { status: 400 });
  }

  try {
    const directoryEntries = await readdir(directoryPath, { withFileTypes: true });
    const images = directoryEntries
      .filter((entry) => entry.isFile() && isImageFile(entry.name))
      .sort((left, right) => imageNameCollator.compare(left.name, right.name))
      .map((entry) => `${imageDirectory}/${encodeURIComponent(entry.name)}`);

    return NextResponse.json({ images }, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    if (isFileSystemError(error) && error.code === "ENOENT") {
      return NextResponse.json({ images: [] }, { headers: { "Cache-Control": "no-store" } });
    }

    return NextResponse.json({ images: [] }, { status: 500 });
  }
}

function isProjectId(value: string | null): value is ProjectId {
  return value !== null && projectIds.some((projectId) => projectId === value);
}

function isImageFile(fileName: string) {
  return imageExtensions.has(path.extname(fileName).toLowerCase());
}

function isFileSystemError(error: unknown): error is NodeJS.ErrnoException {
  return error instanceof Error && "code" in error;
}

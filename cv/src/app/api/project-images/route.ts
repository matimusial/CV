import { readdir } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { projectIds, projectMeta } from "@/data/site";
import type { ProjectId } from "@/data/site";

export const dynamic = "force-static";
const imageExtensions = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".webp"]);
const imageNameCollator = new Intl.Collator("en", { numeric: true, sensitivity: "base" });
const projectImagesRoot = path.resolve(process.cwd(), "public", "images", "projects");

export async function GET() {
  const projectImageEntries = await Promise.all(
    projectIds.map((projectId) => getProjectImageEntry(projectId)),
  );

  return NextResponse.json({ images: Object.fromEntries(projectImageEntries) });
}

async function getProjectImageEntry(projectId: ProjectId): Promise<readonly [ProjectId, string[]]> {
  const images = await getProjectImages(projectId);

  return [projectId, images];
}

async function getProjectImages(projectId: ProjectId): Promise<string[]> {
  const imageDirectory = projectMeta[projectId].imageDirectory;

  if (!imageDirectory) {
    return [];
  }

  const directoryPath = path.resolve(process.cwd(), "public", imageDirectory.replace(/^\/+/, ""));

  if (!directoryPath.startsWith(`${projectImagesRoot}${path.sep}`)) {
    return [];
  }

  try {
    const directoryEntries = await readdir(directoryPath, { withFileTypes: true });
    return directoryEntries
      .filter((entry) => entry.isFile() && isImageFile(entry.name))
      .sort((left, right) => imageNameCollator.compare(left.name, right.name))
      .map((entry) => `${imageDirectory}/${encodeURIComponent(entry.name)}`);
  } catch (error) {
    if (isFileSystemError(error) && error.code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

function isImageFile(fileName: string) {
  return imageExtensions.has(path.extname(fileName).toLowerCase());
}

function isFileSystemError(error: unknown): error is NodeJS.ErrnoException {
  return error instanceof Error && "code" in error;
}

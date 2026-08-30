import { httpGetJson } from "@/services/http";
import type { ProjectId } from "@/data/site";

interface ProjectImagesResponse {
  images: string[];
}

export async function getProjectImages(projectId: ProjectId, signal?: AbortSignal): Promise<string[]> {
  const response = await httpGetJson<ProjectImagesResponse>(
    `/api/project-images?projectId=${encodeURIComponent(projectId)}`,
    signal,
  );

  return response.images;
}

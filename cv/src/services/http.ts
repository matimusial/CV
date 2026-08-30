export async function httpGetJson<TResponse>(url: string, signal?: AbortSignal): Promise<TResponse> {
  const response = await fetch(url, {
    cache: "no-store",
    method: "GET",
    signal,
  });

  if (!response.ok) {
    throw new Error(`GET ${url} returned ${response.status}`);
  }

  return readJsonResponse<TResponse>(response);
}

export async function httpPostJson<TPayload, TResponse = void>(
  url: string,
  payload: TPayload,
): Promise<TResponse> {
  const response = await fetch(url, {
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (!response.ok) {
    throw new Error(`POST ${url} returned ${response.status}`);
  }

  return readJsonResponse<TResponse>(response);
}

async function readJsonResponse<TResponse>(response: Response): Promise<TResponse> {
  if (response.status === 204 || !isJsonResponse(response)) {
    return undefined as TResponse;
  }

  return (await response.json()) as TResponse;
}

function isJsonResponse(response: Response) {
  return response.headers.get("content-type")?.includes("application/json") ?? false;
}

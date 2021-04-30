export interface RequestParams {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  uri: string;
  headers: Record<string, string>;
  body?: string;
}

export async function sendRequest(params: RequestParams) {
  const response = await fetch(params.uri, {
    method: params.method || "GET",
    headers: params.headers || {},
    body: params.body,
  });
  return response.json();
}

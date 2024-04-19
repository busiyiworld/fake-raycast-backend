export const httpClient = $fetch.create<any>({
  baseURL: "https://backend.raycast.com/api/v1",
  headers: {
    "x-raycast-unblock": "true"
  },
  onRequestError: ctx => {
    console.error(`[Raycast Backend] Request error`)
    console.error(ctx)
  }
})

export async function getBackendResponse(
  url: string,
  headers = {},
  method?:
    | "DELETE"
    | "GET"
    | "TRACE"
    | "HEAD"
    | "PATCH"
    | "POST"
    | "PUT"
    | "CONNECT"
    | "OPTIONS",
  data?: any
) {
  headers = {
    ...headers,
    host: "backend.raycast.com"
  }
  return await httpClient(url, {
    headers,
    method: method || "GET",
    body: data ? JSON.stringify(data) : undefined
  })
}

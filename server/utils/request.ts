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
  method:
    | "DELETE"
    | "GET"
    | "TRACE"
    | "HEAD"
    | "PATCH"
    | "POST"
    | "PUT"
    | "CONNECT"
    | "OPTIONS" = "GET",
  data?: any
) {
  headers = {
    ...headers,
    host: "backend.raycast.com"
  }
  return await httpClient(url, {
    headers,
    method,
    body: data ?? JSON.stringify(data)
  })
}

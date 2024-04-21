export default defineEventHandler(async event => {
  const URL = getRequestURL(event)
  return await sendProxy(
    event,
    URL.href.replace(URL.origin, "https://backend.raycast.com")
  )
})

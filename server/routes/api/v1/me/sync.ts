import sync from "~/services/sync"
export default defineEventHandler(async event => {
  const { req } = event.node
  switch (req.method) {
    case "PUT":
      return await sync.put(event)
    default:
      return await sync.get(event)
  }
})

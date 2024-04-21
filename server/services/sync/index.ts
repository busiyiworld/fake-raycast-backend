import { type H3Event, EventHandlerRequest } from "h3"

interface SyncContent {
  deleted: string[]
  updated_at: string
  updated: {
    client_updated_at: string
    updated_at: string
    created_at: string
    [key: string]: any
  }[]
}

const failed = {
  updated: [],
  updated_at: null,
  deleted: []
}

const user = process.env.RAYCAST_EMAIL

async function get(event: H3Event<EventHandlerRequest>) {
  if (!process.env.KV_NAME) return failed
  const dataStorage = useStorage(process.env.KV_NAME)
  if (!dataStorage) return failed

  const content: SyncContent = await dataStorage.getItem(user)
  if (content === null) return failed

  const requestAfter = getRequestURL(event).searchParams.get("after")
  if (requestAfter) {
    const after = new Date(requestAfter)
    if (after.toString() !== "Invalid Date") {
      const updated = content.updated.filter((item: any) => {
        const updated_at = new Date(item.updated_at)
        return updated_at > after
      })
      content.updated = updated
    }
  }
  return content
}

async function put(event: H3Event<EventHandlerRequest>) {
  if (!process.env.KV_NAME) return failed
  const dataStorage = useStorage(process.env.KV_NAME)
  if (!dataStorage) return failed

  const body: SyncContent = await readBody(event)

  const bodyDeleted = body.deleted // Save for later
  body.deleted = []
  const updated_at = new Date().toISOString()
  body.updated_at = updated_at

  const content: SyncContent = await dataStorage.getItem(user)

  if (!content) {
    for (const item of body.updated) {
      item.updated_at = updated_at
      item.created_at = item.client_updated_at
    }
    dataStorage.setItem(user, body)
  } else {
    let updated = content.updated.filter(
      (item: any) => !bodyDeleted.includes(item.id)
    )
    for (const item of body.updated) {
      item.updated_at = updated_at
      item.created_at = item.client_updated_at
    }
    updated = updated.concat(body.updated)
    body.updated = updated
    dataStorage.setItem(user, body)
  }

  console.info(
    `[Sync] Synced with ${body.updated.length} items and ${bodyDeleted.length} deleted items. Updated at ${updated_at} - ${user}`
  )

  return {
    updated_at
  }
}

export default {
  get,
  put
}

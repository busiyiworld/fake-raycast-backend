import { User } from "~/types"

export default defineEventHandler(async event => {
  const { req } = event.node
  const backendResponse = await getBackendResponse(
    "/me",
    req.headers,
    "GET"
  ).then(response => {
    return {
      ...response,
      has_active_subscription: true,
      has_pro_features: true,
      has_better_ai: true,
      eligible_for_pro_features: true,
      eligible_for_ai: true,
      eligible_for_gpt4: true,
      eligible_for_ai_citations: true,
      eligible_for_developer_hub: true,
      eligible_for_application_settings: true,
      publishing_bot: true,
      can_upgrade_to_pro: false,
      admin: true
    }
  })
  const store = getStore<User[]>("users") || []
  const user = store.find(u => u.email === backendResponse.email) || null
  if (user?.token !== req.headers.authorization) {
    console.info(`<${backendResponse.email}> is logged in.`)
    setStore("users", [
      ...getStore<User[]>("users"),
      {
        email: backendResponse.email,
        token: req.headers.authorization
      }
    ])
  }
  return backendResponse
})

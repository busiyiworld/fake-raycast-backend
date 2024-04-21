export default defineEventHandler(async event => {
  const { req } = event.node
  const backendResponse = await getBackendResponse("/me", req.headers, "GET")
  if (backendResponse.email === process.env.RAYCAST_EMAIL) {
    console.info(`<${backendResponse.email}> is logged in.`)
    return {
      ...backendResponse,
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
  } else return backendResponse
})

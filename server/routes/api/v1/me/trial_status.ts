export default defineEventHandler(async event => {
  const { req } = event.node
  const response = await getBackendResponse(
    "/me/trial_status",
    req.headers,
    "GET"
  )
  response.organizations = []
  response.trial_limits = {
    commands_limit: 999,
    quicklinks_limit: 999,
    snippets_limit: 999
  }
  return response
})

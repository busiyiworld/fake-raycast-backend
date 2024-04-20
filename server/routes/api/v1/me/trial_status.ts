export default defineEventHandler(async event => {
  const { req } = event.node
  const backendRes = await getBackendResponse(
    "/me/trial_status",
    req.headers,
    "GET"
  )
  backendRes.organizations = []
  backendRes.trial_limits = {
    commands_limit: 999,
    quicklinks_limit: 999,
    snippets_limit: 999
  }
  return backendRes
})

// GitHub OAuth — step 1. Sveltia/Decap CMS opens this (base_url + /auth) in a popup; we redirect
// to GitHub's authorize page. The matching callback is server/routes/callback.get.ts.
export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)
  if (!config.githubOauthId) {
    throw createError({ statusCode: 500, statusMessage: "GitHub OAuth is not configured (NUXT_GITHUB_OAUTH_ID)" })
  }

  const origin = getRequestURL(event).origin
  const scope = (getQuery(event).scope as string) || "repo,user"
  const state = `${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`

  // CSRF guard — checked in the callback
  setCookie(event, "cms_oauth_state", state, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 600,
  })

  const authorize = new URL("https://github.com/login/oauth/authorize")
  authorize.searchParams.set("client_id", config.githubOauthId)
  authorize.searchParams.set("redirect_uri", `${origin}/callback`)
  authorize.searchParams.set("scope", scope)
  authorize.searchParams.set("state", state)

  return sendRedirect(event, authorize.toString())
})

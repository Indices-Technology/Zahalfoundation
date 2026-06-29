// GitHub OAuth — step 2. GitHub redirects back here with a code; we exchange it for an access
// token and hand it to the CMS popup opener using the Decap/Netlify postMessage handshake.
function responsePage(status: "success" | "error", payload: unknown) {
  const message = `authorization:github:${status}:${JSON.stringify(payload)}`
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8" /><title>Signing in…</title></head>
<body>
<p>Completing sign-in…</p>
<script>
  (function () {
    function receiveMessage(e) {
      window.opener && window.opener.postMessage(${JSON.stringify(message)}, e.origin)
      window.removeEventListener("message", receiveMessage, false)
    }
    window.addEventListener("message", receiveMessage, false)
    window.opener && window.opener.postMessage("authorizing:github", "*")
  })()
</script>
</body></html>`
}

export default defineEventHandler(async (event) => {
  setHeader(event, "Content-Type", "text/html")
  const config = useRuntimeConfig(event)
  const origin = getRequestURL(event).origin
  const { code, state } = getQuery(event)
  const savedState = getCookie(event, "cms_oauth_state")

  if (!code || !state || state !== savedState) {
    return responsePage("error", { message: "Invalid or expired OAuth state. Please try again." })
  }

  try {
    const token = await $fetch<{ access_token?: string; error_description?: string }>(
      "https://github.com/login/oauth/access_token",
      {
        method: "POST",
        headers: { Accept: "application/json" },
        body: {
          client_id: config.githubOauthId,
          client_secret: config.githubOauthSecret,
          code,
          redirect_uri: `${origin}/callback`,
        },
      },
    )

    if (!token.access_token) {
      return responsePage("error", { message: token.error_description || "Token exchange failed." })
    }

    return responsePage("success", { token: token.access_token, provider: "github" })
  } catch (e) {
    return responsePage("error", { message: (e as Error).message || "Token exchange failed." })
  }
})

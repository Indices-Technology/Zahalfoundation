// GitHub OAuth — step 2. GitHub redirects back here with a code; we exchange it for an access
// token and hand it to the CMS popup opener using the postMessage handshake that Sveltia CMS
// expects (mirrors github.com/sveltia/sveltia-cms-auth): only respond to the exact
// "authorizing:github" message, keep listening, and send { provider, token }.
function responsePage(status: "success" | "error", content: Record<string, unknown>) {
  const message = `authorization:github:${status}:${JSON.stringify(content)}`
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8" /><title>Signing in…</title></head>
<body>
<p>Completing sign-in…</p>
<script>
  (function () {
    window.addEventListener("message", function (event) {
      if (event.data === "authorizing:github") {
        window.opener && window.opener.postMessage(${JSON.stringify(message)}, event.origin)
      }
    }, false)
    if (window.opener) {
      window.opener.postMessage("authorizing:github", "*")
    } else {
      document.body.innerHTML = "<p>Could not reach the CMS window. Please close this tab and click Sign In again.</p>"
    }
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
    return responsePage("error", { provider: "github", error: "Invalid or expired sign-in state. Please try again." })
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
      return responsePage("error", { provider: "github", error: token.error_description || "Token exchange failed." })
    }

    return responsePage("success", { provider: "github", token: token.access_token })
  } catch (e) {
    return responsePage("error", { provider: "github", error: (e as Error).message || "Token exchange failed." })
  }
})

# Zahal Foundation — Content Manager (CMS)

The site uses **[Sveltia CMS](https://sveltiacms.app)** — a free, Git-based CMS. Staff edit
content at **`/admin`**; each save commits to the GitHub repo and the site auto-redeploys on
Vercel (live in ~1 minute). **No database, no servers.**

Editable content lives as JSON files in [`content/`](content/); uploaded images go to
`public/images/uploads/`.

---

## For editors — how to update the site

1. Go to **`https://<your-site>/admin`**.
2. Sign in (see [login](#logging-in) below).
3. Pick a section in the left sidebar and edit:
   - **Site Settings** — brand name, contact email/phone/address, social links, logo
   - **Homepage** — hero slider
   - **Causes / Events / News / Volunteers / Gallery / Testimonials** — the cards/lists
4. To **change a picture**, click the image field → **Upload** a new one.
5. Click **Save / Publish**. Wait ~1 minute, then refresh the site.

Every change is saved in version history, so nothing is ever permanently lost.

### Logging in

Editors sign in with a **GitHub account that has write access to the repo**. On the `/admin`
login screen choose **"Sign in with Token"** — GitHub opens with the right permissions
pre-selected; create the token, paste it back, and you're in (the token is remembered in your
browser).

> Each editor needs their own GitHub account, added as a collaborator on the repo (one-time, done
> by the admin below).

---

## One-time setup (admin / developer)

1. **Push this repo to GitHub** (private is fine).
2. In [`public/admin/config.yml`](public/admin/config.yml), set:
   ```yaml
   backend:
     repo: OWNER/REPO   # e.g. zahal-foundation/website
   ```
3. **Deploy on Vercel**, linked to the GitHub repo (zero-config — it auto-detects Nuxt 4).
4. **Add each staff editor** as a repo collaborator (GitHub → Settings → Collaborators), or put
   them in a GitHub team with write access.

That's it — no OAuth app, no extra services. Editors use the token login above.

*(Optional upgrade later: a one-click "Sign in with GitHub" button instead of tokens, via
[Sveltia's Cloudflare Worker](https://github.com/sveltia/sveltia-cms-auth) + `base_url` in
config.yml.)*

---

## Testing the CMS locally (developer)

`config.yml` has `local_backend: true`, so you can run the editor against local files — no GitHub
needed:

```bash
# terminal 1 — local CMS proxy (reads/writes files in this repo)
npx decap-server

# terminal 2 — the site
npm run dev
```

Open `http://localhost:3000/admin/`, click **"Work with Local Repository"**, edit something, and
you'll see the matching `content/*.json` file (and `public/images/uploads/`) change on disk.

---

## What's editable (v1) vs not

**Editable now:** brand/contact/social/logo, homepage hero, and the Causes, Events, News,
Volunteers, Gallery and Testimonials lists (text **and** images).

**Not yet in the CMS:** the deep filler paragraphs and section headings still hard-coded in some
components (e.g. About copy), and the top navigation menu. These can be moved into the CMS later by
adding fields to `content/*.json` and `public/admin/config.yml`.

## How it's wired (for developers)

- `content/*.json` ← edited by Sveltia.
- `app/data/content.ts` imports those JSON files and re-exports typed values; components consume
  them unchanged (`import { causes } from "~/data/content"`).
- `app/app.config.ts` imports `content/site.json` for brand/contact/logo (`useAppConfig()`).
- Adding a field = update the JSON, the matching `interface` in `content.ts`, and the field in
  `config.yml`.

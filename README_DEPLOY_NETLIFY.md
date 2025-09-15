# Deploying to Netlify (Vite + React + React Router)

## Quickest (Drag & Drop)
1. Run `npm i && npm run build` locally.
2. Upload the `dist/` folder to Netlify **(Sites → Add new site → Deploy manually)**.

> If you upload the project root by mistake, you'll get 404s. Always upload the built `dist` folder for drag-and-drop.

## Recommended (Git)
1. Push this project to GitHub/GitLab/Bitbucket.
2. In Netlify, **Add new site → Import an existing project**.
3. Set **Build command** = `npm run build`
4. Set **Publish directory** = `dist`
5. Click **Deploy site**.

This repo includes:
- `netlify.toml` – build config + SPA fallback
- `_redirects` – SPA fallback if you prefer file-based redirects

## Fixing 404 on refresh / deep links
If you refresh a URL like `/product/1` and see 404, make sure you have one of these:
- `netlify.toml` with:
  ```toml
  [[redirects]]
    from = "/*"
    to = "/index.html"
    status = 200
  ```
- OR a `_redirects` file containing:
  ```
  /*  /index.html  200
  ```

## Environment variables
If you add API keys later: **Site settings → Build & deploy → Environment**.

## Netlify CLI (optional)
```bash
npm i -g netlify-cli
netlify login
netlify init        # link to a new or existing site
npm run build
netlify deploy --prod --dir=dist
```

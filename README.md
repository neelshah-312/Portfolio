# Neel Shah — portfolio (Vite + JavaScript)

Netflix-style single-page portfolio built with **vanilla JavaScript** (ES modules), **Vite**, and the same HTML/CSS structure as before—content is rendered from `src/app.js` so you can later split data into JSON if you want.

## Local development

```bash
cd portfolio
npm install
npm run dev
```

Vite will try to open your browser automatically. If port **5173** is already in use, it picks **5174** (or the next free port)—**always use the exact URL printed in the terminal**; opening the wrong port often looks like a blank white page.

## Production build

```bash
npm run build
npm run preview   # optional: test the dist/ folder locally
```

Static files go to `dist/`. Put **images** and **videos** in `public/` (e.g. `public/images/hero.jpg`, `public/videos/hero.mp4`); they are copied into `dist/` as `/images/...` and `/videos/...`.

## Make it public

### Option A — Vercel (simple)

1. Push this `portfolio` folder to a GitHub repository (repo root = these files).
2. Go to [vercel.com](https://vercel.com), import the repo, framework **Vite**, root directory `.`, build `npm run build`, output `dist`.
3. Deploy; you get a URL like `https://your-project.vercel.app`.

### Option B — Netlify

Same as Vercel: connect the repo, build command `npm run build`, publish directory `dist`.

### Option C — GitHub Pages

This repo includes `.github/workflows/pages.yml`. After you push to **main** (or **master**):

1. In the GitHub repo, go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
3. The workflow sets `GITHUB_PAGES=true` so `vite.config.js` picks the correct **`/<repository-name>/`** base path automatically.

For a **user** site (`https://<user>.github.io/` from a `username.github.io` repo), `vite.config.js` keeps **`base: "/"`** automatically (it detects that repo name).

## Project layout

| Path | Purpose |
|------|---------|
| `index.html` | Vite entry (mounts `#app`) |
| `src/main.js` | Bootstraps CSS, `--hero-image`, render, UI bindings |
| `src/app.js` | Renders the full page into `#app` |
| `src/bindUI.js` | Nav scroll state, mobile menu, row chevrons |
| `src/style.css` | All styles |
| `public/images/` | Hero poster / reduced-motion still |
| `public/videos/` | Optional `hero.mp4` / `hero.webm` |

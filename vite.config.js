import { defineConfig } from "vite";

/**
 * - Local / Vercel / Netlify at domain root: base stays "/"
 * - GitHub Pages project site (username.github.io/REPO/): workflow sets
 *   GITHUB_PAGES=true so base becomes "/REPO/"
 */
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserGithubIoSite = Boolean(repoName?.endsWith(".github.io"));
const base =
  process.env.GITHUB_PAGES === "true" && repoName && !isUserGithubIoSite
    ? `/${repoName}/`
    : "/";

export default defineConfig({
  base,
  server: {
    port: 5173,
    // Opens the URL Vite actually uses (avoids a blank page if 5173 was already taken).
    open: true,
  },
});

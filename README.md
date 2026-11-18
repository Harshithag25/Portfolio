# Harshitha Gontla: Portfolio

Plain HTML, CSS and vanilla JS with GSAP 3.12.5 and Lenis 1.1.13 from pinned CDNs. No build step.

## Run locally
Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.

## Edit content
Every visible word lives in `js/content.js`: intro, projects, skills, journey, certifications and contact details.
Add a project link by filling its `link` field. A project with an empty link shows no GitHub button.

## Deploy free
- **GitHub Pages:** push this folder to a repo, then Settings > Pages > deploy from the `main` branch root.
- **Netlify:** drag the folder onto app.netlify.com/drop.
- **Vercel:** `vercel` in this folder, or import the repo; no build command, output directory is the root.

After deploying, set `og:image` in `index.html` to the full URL of `assets/og-preview.png` so social previews work.

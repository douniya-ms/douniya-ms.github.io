# Douniya Maayoussi · Portfolio

A bilingual (English / French) portfolio built with **TanStack Start (React)**, **Tailwind CSS** and **Paraglide** for translations. It is a fully static site: every page is pre-rendered at build time and served for free by **GitHub Pages**.

Every push to the `main` branch rebuilds and redeploys the site automatically.

---

## 1. Put the site online (once)

You only do this the first time.

1. **Name the repository `<your-username>.github.io`**
   Repository → **Settings → General → Repository name**.
   This exact name is what makes the site live at `https://<your-username>.github.io/`. With any other name, the site would load without its styles and images.
2. **Make the repository public**
   **Settings → General → Danger Zone → Change visibility → Public**. GitHub Pages is free only for public repositories.
3. **Turn on GitHub Pages**
   **Settings → Pages → Build and deployment → Source: GitHub Actions**.
   Do **not** click the suggested "Jekyll" or "Static HTML" workflows: the project already has its own (`.github/workflows/deploy.yml`).
4. **Enable the workflow**
   Open the **Actions** tab. If GitHub asks, click **"I understand my workflows, go ahead and enable them"**. If "Deploy to GitHub Pages" shows as *disabled*, open it and click **Enable workflow**.
5. **Run the first deployment**
   **Actions → Deploy to GitHub Pages → Run workflow**. After 2–3 minutes the run turns green and the site is live at `https://<your-username>.github.io/` (French: `/fr`).

If a run turns red, open it and read the failing step. It is almost always step 3 (Pages source) or step 1 (repository name).

---

## 2. Change something on the site

Change the files, then push to `main`. The site updates by itself in a few minutes (follow it in the **Actions** tab).

| I want to change… | File |
|---|---|
| Name, email, phone, GitHub / LinkedIn links | `src/content/site.ts` |
| Short texts (menu, About, Contact, buttons, project titles and summaries on the Work page) | `messages/en.json` and `messages/fr.json` (same key in both) |
| The order or the list of projects on the Work page, their tags and images | `src/content/projects.ts` |
| A case study (the long project page) | `src/content/case-studies/<project>.ts` |
| Colors, fonts, spacing | `src/styles.css` (the `@theme` block at the top) |
| Page titles and descriptions (search results, link previews) | `seo_…` keys in `messages/en.json` / `fr.json` |
| Link-preview images (LinkedIn, WhatsApp…) | `public/og/` (1200 × 630 JPG) |
| The site icon | `public/favicon.ico` and the other icons in `public/` |

### Texts and translations

Every short text exists in both `messages/en.json` and `messages/fr.json`, under the **same key**:

```json
"contact_heading": "Let’s Build Something Together"   ← en.json
"contact_heading": "Construisons quelque chose ensemble" ← fr.json
```

Change the text, never the key. If you add a key in one file, add it to the other one too.

### A case study

Each case study is one file in `src/content/case-studies/`, with an `en` and an `fr` version that have the **same structure**. A page is a list of 6 chapters. Each chapter has:

- `marker`: the small label, e.g. `"01 / The spark"`
- `title`
- `layout`: where things go
  - `"aside-left"`: a visual on the left, text on the right
  - `"aside-right"`: text on the left, a visual on the right
  - `"marker-left"`: the label on the left, text on the right
  - `"full"`: everything stacked, full width
- `aside` (optional): the visual beside the text. One of `image`, `screenshot` (app screenshots, shown whole on a grey panel with a shadow), `diagram` or `stats` (big numbers).
- `blocks`: the content, in order. One of `text` (paragraphs), `stats`, `list` (labelled rows), `states` (3 columns), `figure` (a screenshot inside the text) or `question` (the `//` question that ends a chapter).

The easiest way to write a new one is to copy an existing file and change the words.

### Images

Images live in `src/assets/`. Each project uses:

- a **portrait** image for the Work page, shown at **580 × 682**,
- a **landscape** image for the "Other projects" cards, shown at about **530 × 224**.

Export images at **twice** that size (1160 × 1364 and 1060 × 448), as **JPG**, ideally under 300 KB. To export a frame straight from Figma at the right size:

```bash
export FIGMA_TOKEN=your_token   # Figma → Settings → Security → Personal access tokens
python3 scripts/figma_export.py <node-id> src/assets/projects/<project>/<name>.jpg
```

The `node-id` is in the frame's link (right-click the frame → **Copy link to selection**). The exported image has the frame's proportions, so make the frame the size of the slot first.

The About and Contact pages use an abstract placeholder image (`src/assets/abstract-portrait.jpg`). To use a real photo, add it to `src/assets/` and change the import at the top of `src/components/Identity.tsx`.

### Add a new project

1. Add its images to `src/assets/projects/<slug>/`.
2. Add its short texts to both `messages/en.json` and `messages/fr.json` (copy the `project_avatar_…` keys and rename them).
3. Add it to `src/content/projects.ts` (copy an existing entry). The order of that list is the order on the Work page.
4. For a full case study: create `src/content/case-studies/<slug>.ts` (copy an existing one) and `src/routes/_case/work/<slug>.tsx` (copy an existing one, change the 3 names inside).
5. In `vite.config.ts`, add `'/fr/work/<slug>'` to the `pages` list, so the French page is generated too.

Without a case study, leave out `route` and `results` in `projects.ts`: the Work page then shows the project as "Coming soon".

### Search engines and link previews

Every page sets its own title, description, canonical link, English/French alternates and link-preview card (`src/lib/seo.ts`). Each case study uses its own preview image, `public/og/<slug>.jpg`; make one for every new project.

`sitemap.xml` and `robots.txt` are generated at each build from the pages that exist, so nothing to maintain.

The site address is `https://douniya-ms.github.io`, worked out from the repository owner. With a custom domain later: add it under **Settings → Pages → Custom domain**, then add a repository variable **`SITE_URL`** (e.g. `https://douniya.dev`) under **Settings → Secrets and variables → Actions → Variables**, so links and the sitemap use it.

Once the site is live, submit `https://douniya-ms.github.io/sitemap.xml` in [Google Search Console](https://search.google.com/search-console) to get indexed faster.

---

## 3. Work on the site locally

You need [Node.js](https://nodejs.org) (version 22 or newer) and [pnpm](https://pnpm.io).

```bash
pnpm install     # once
pnpm dev         # http://localhost:3000, updates as you save
pnpm build       # the real production build, run it before pushing big changes
```

If `pnpm build` fails, the deployment would fail too, so fix the error before pushing.

---

## 4. Project structure

```
messages/              EN/FR texts
src/
  assets/              images and icons
  components/          building blocks (header, footer, Work controls…)
  components/case/     the case-study page builder
  content/             site info, project list, case-study texts
  routes/              one file per page
    _site/             About, Work, Contact
    _case/work/        one file per case study
  styles.css           design tokens, fonts, animations
scripts/figma_export.py
.github/workflows/deploy.yml   builds and deploys on every push to main
```

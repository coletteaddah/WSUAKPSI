# Beta Lambda Website

Next.js site for the Beta Lambda chapter of Alpha Kappa Psi at WSU.

## Run it

You need Node.js 18.18 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Edit content

Almost everything lives in one file: `src/data/site.ts`

- Text, FAQ, tracks, officers, links, alumni companies
- Search for `TODO` to find placeholders

## Add photos

1. Put images in `public/images/` (e.g. `public/images/hero.jpg`)
2. Set the path in `src/data/site.ts`, e.g. `image: "/images/hero.jpg"`

Empty `image: ""` shows a placeholder box.

Officer headshots work best square. Alumni logos: set `logo` on each company in `site.ts`.

## Colors

The site uses the same black/white/gray palette as the KTP site. Colors are at the top of `src/app/globals.css`.
To add AKPsi colors, change `--primary` (buttons, stat numbers, accents), e.g. `--primary: #0d2240;`.

## Hero image

The KTP site uses a photo collage saved as a PNG with a transparent background. Make one in Canva, save it to `public/images/hero.png`, and set `image: "/images/hero.png"` under `hero` in `site.ts`.

## Deploy to Vercel

1. Push this folder to a GitHub repo
2. Go to vercel.com, click "Add New Project", pick the repo
3. Click Deploy. Every push after that redeploys automatically.

## Project layout

```
src/
  app/
    layout.tsx    fonts, page title, theme setup
    page.tsx      section order
    globals.css   all styling
  components/     one file per section
  data/site.ts    all content
public/images/    your photos
```

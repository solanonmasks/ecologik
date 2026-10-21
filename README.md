# Ecologik website

The new ecologik.ca, rebuilt from the design mockup with [Astro](https://astro.build) and Tailwind CSS.
It builds to plain static files, so it can be hosted almost anywhere (Vercel is recommended).

## Pages

| Address     | File                       |
| ----------- | -------------------------- |
| `/`         | `src/pages/index.astro`    |
| `/services` | `src/pages/services.astro` |
| `/projects` | `src/pages/projects.astro` |
| `/about`    | `src/pages/about.astro`    |
| `/contact`  | `src/pages/contact.astro`  |

## Where to change things

- **Phone, email, address, menu links:** `src/data/site.ts`
- **Photos:** `src/data/images.ts`
- **Service descriptions, "From slab to faucet" stages, project photos:** `src/data/content.ts`
- **Colours, fonts, button styles:** `src/styles/global.css`
- **Header / footer:** `src/components/`
- **Page titles and SEO descriptions:** the `<Base title=... description=...>` line at the top of each page file

## Run it on your computer

You need [Node.js](https://nodejs.org) 22.22 or newer.

```bash
npm install        # first time only
npm run dev        # open http://localhost:4321 (updates as you edit)
npm run build      # makes the final site in the dist/ folder
```

## Before launch (to-do)

1. **Connect the quote form.** Make a free form at [formspree.io](https://formspree.io) that emails
   daniel@ecologik.ca, then paste its ID into `FORMSPREE_ID` in `src/data/site.ts`.
   Until then, the form tells visitors to call or email instead.
   Note: Formspree only accepts file uploads (drawings/photos) on a paid plan.
2. **Copy the remaining photos.** 6 photos are stored in `public/images`. The other 8 still load from
   the old Wix site, which will stop working if the Wix site is cancelled. Run `npm run download-images`,
   then add the `local` paths it prints to `src/data/images.ts`.
3. **Confirm with the client:** a proper SVG logo, real social media links (if any), what landscape
   services they offer, which photos are their own work, and the office postal code (`src/data/site.ts`).

## Deploy on Vercel

Import this GitHub repo at [vercel.com/new](https://vercel.com/new). Vercel detects Astro automatically,
no settings needed. Every push to `main` then updates the live site.

## Undoing a change

Every change is a git commit. To undo one: `git revert <commit-id>` and push.

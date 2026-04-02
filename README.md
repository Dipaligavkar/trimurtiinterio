# Trimurti Interio Website

Modern, responsive, SEO-ready marketing site for **Trimurti Interio** (Next.js + Tailwind).

## Features

- Premium UI (orange / black / white), animations, mobile-first layout
- Pages: Home, About, Products/Categories, Brands, Gallery, Contact
- Contact form is **local only** (no server storage, no email sending) — visitors are directed to phone / WhatsApp

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy

Works on **Vercel**, Netlify, or any Node host:

- Build: `npm run build`
- Start: `npm run start`

Set your production domain in `src/app/layout.tsx` (`metadataBase`) and in `src/app/sitemap.ts` / `src/app/robots.ts` if needed.

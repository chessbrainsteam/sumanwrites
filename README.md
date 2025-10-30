
# sumanwrites — About + Essays (Next.js + Tailwind + MDX)

A minimalist, Substack-like site focused on your writing voice.

## Quickstart
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Add a new essay
- Drop a `.mdx` file into `content/essays/` with frontmatter:
```md
---
title: "My Title"
summary: "One sentence summary."
date: "2025-01-01"
tags: ["leadership"]
---

Your MDX content here.
```
- The post is auto-listed on `/essays` and available at `/essays/my-title` (filename = slug).

## Customize
- Edit `app/page.tsx` intro paragraph.
- Change typography in `app/globals.css` / `tailwind.config.ts`.
- Update header links in `components/SiteHeader.tsx`.
- Replace Substack URL in Subscribe pages.

# haleylifrieri.com

Personal site — [Astro](https://astro.build) + Tailwind v4, static output, no client-side JS.

## Develop

Requires **Node 22.12+** (see `.nvmrc`).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview  # serve the built site
```

## Editing content

| What | Where |
| --- | --- |
| Name, email, links, resume path | `src/data/site.ts` |
| Homepage copy (hero, about, contact) | `src/pages/index.astro` |
| Case studies | `src/content/work/*.md` |
| Colors, type, spacing tokens | `src/styles/global.css` (`@theme` block) |
| Resume PDF, OG image, favicon | `public/` |

### Adding a case study

Drop a new `.md` file in `src/content/work/`. The frontmatter schema is enforced at build
time by `src/content.config.ts` — a missing or misspelled field fails the build rather than
shipping a broken page.

```yaml
---
title: "..."
blurb: "One line, shown on the homepage card."
org: "Koi"
role: "Founding Engineer"
period: "2024 — present"
stack: ["Terraform", "AWS"]
outcome: "optional headline result"
order: 5          # lower sorts first
draft: false      # true keeps it out of the build entirely
---
```

The existing Koi case studies contain `<!-- TODO -->` comments marking where more detail
would strengthen them. They render as nothing, so the pages are always publishable.

## Notes

- **Base CSS must live in `@layer base`.** Unlayered CSS outranks Tailwind's layered
  utilities, so a bare `a { color: inherit }` will silently override every `text-*` utility
  applied to a link.
- No phone number anywhere on the site, deliberately — the resume PDF carries one.
- Deployed as a static build; there is no server and no API key in this project.

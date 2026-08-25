import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    /** One-line summary shown on the homepage card. */
    blurb: z.string(),
    org: z.string(),
    role: z.string(),
    period: z.string(),
    stack: z.array(z.string()),
    /** The headline result, if there is a clean one. */
    outcome: z.string().optional(),
    /** Lower sorts first on the homepage. */
    order: z.number(),
    /** Set true to keep a page out of the build entirely. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { work };

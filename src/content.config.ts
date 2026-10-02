import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/projects",
  }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    techStack: z.array(z.string()),
    liveUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
  }),
});

const certificates = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/certificates",
  }),
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    verificationUrl: z.string().url().optional(),
  }),
});

export const collections = {
  projects,
  certificates,
};
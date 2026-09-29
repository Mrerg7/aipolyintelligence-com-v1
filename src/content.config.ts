import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const useCases = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/use-cases' }),
  schema: z.object({
    title: z.string(),
    tag: z.string(),
    description: z.string(),
    icon: z.enum(['brain', 'layers', 'globe', 'chip', 'pencil', 'chart']),
    gradient: z.string(),
    order: z.number(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['valuation', 'trends', 'case-study', 'guide']),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { useCases, blog };

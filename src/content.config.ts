import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      platform: z.string(),          // the main tool, shown on the card
      tags: z.array(z.string()),     // used for the filter chips
      year: z.number(),
      order: z.number(),             // lower comes first on the home page
      link: z.string().url().optional(),
      cover: image().optional(),
      private: z.boolean().default(false),
    }),
});

export const collections = { projects };

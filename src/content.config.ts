import { glob } from 'astro/loaders';
import { z, defineCollection } from 'astro:content';

const post = defineCollection({
  loader: glob({ pattern: '**/[^_]*.mdx', base: './src/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    thumbnail: z.object({
      src: z.string(),
      alt: z.string(),
    }),
  }),
});

export const collections = { post };

import { defineContentConfig, defineCollection, z } from '@nuxt/content';
import { asSitemapCollection } from '@nuxtjs/sitemap/content'

export default defineContentConfig({
  collections: {
    content: defineCollection(
      // adds the robots frontmatter key to the collection
      asSitemapCollection({
        type: 'page',
        source: '**/*.md',
      }),
    ),

    blog: defineCollection({
      source: 'blog/*.md',
      type: 'page',
      // Define custom schema for docs collection
      schema: z.object({
        tags: z.array(z.string()).optional(), // Tambahkan .optional() di sini
        image: z.string().optional(), // Tambahkan .optional() di sini
        date: z.date(),
      }),
    }),

    authors: defineCollection({
      type: 'data',
      source: 'authors/*.json',
      schema: z.object({
        name: z.string(),
        avatar: z.string().optional(),
        image: z.string().optional(),
        bio: z.string(),
        id: z.string(),
        social: z
          .object({
            github: z.string().optional(),
            linkedin: z.string().optional(),
            twitter: z.string().optional(),
          })
          .optional(), //make social object and the data inside optional
      }),
    }),
  },
});

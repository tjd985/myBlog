import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  return rss({
    title: 'seonghoDev',
    description: "OH SEONGHO's dev bolg",
    site: context.site,
    items: await getCollection('post'),
    customData: `<language>kr</language>`,
  });
}

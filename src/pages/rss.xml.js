import rss from "@astrojs/rss";
import { getCollection } from 'astro:content';
import { datePath } from '../scripts/FormatDate';


export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: context.site,
    stylesheet: '/rss/pretty-feed-v3.xsl',
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/${datePath(post.data.pubDate)}/${post.id}`,
    })),
    customData: `<language>en-us</language>`,
  });
}
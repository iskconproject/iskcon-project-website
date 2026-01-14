import { MetadataRoute } from 'next';
import { client } from '@/sanity/lib/client';

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ||
  process.env.BASE_URL ||
  'https://iskconproject.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch dynamic slugs from Sanity
  const query = `{
    "festivals": *[_type == "festival"].slug.current,
    "activities": *[_type == "activity"].slug.current,
    "aboutPages": *[_type == "aboutPage"].slug.current
  }`;
  
  const { festivals = [], activities = [], aboutPages = [] } = await client.fetch(query);

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/donation`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/donation/nitya-seva`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/donation/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/donation/gita-donation`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/donation/general-donation`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/iskcon/vaishnava-calendar`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
  ];

  const aboutRoutes: MetadataRoute.Sitemap = aboutPages.map((slug: string) => ({
    url: `${BASE_URL}/iskcon/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  const festivalRoutes: MetadataRoute.Sitemap = festivals.map((slug: string) => ({
    url: `${BASE_URL}/festivals/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const activityRoutes: MetadataRoute.Sitemap = activities.map((slug: string) => ({
    url: `${BASE_URL}/activities/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...festivalRoutes, ...activityRoutes, ...aboutRoutes];
}

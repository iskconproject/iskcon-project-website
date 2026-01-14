'use client';

/**
 * This route is responsible for the built-in authoring environment of Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/introduction#catch-all-routes
 *
 * For more information on how to configure and use Sanity Studio in Next.js, please refer to the official documentation:
 * https://www.sanity.io/docs/nextjs-framework-sdk
 */

import { NextStudio } from 'next-sanity/studio';
import config from '../../../sanity.config';

export default function StudioPage() {
  return <NextStudio config={config} />;
}

import { createClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03';

// Validate configuration for non-development environments
if (!projectId && process.env.NODE_ENV === 'production' && typeof window === 'undefined') {
  console.warn('WARNING: Sanity projectId is missing. Sanity features will be disabled.');
}

export const client = createClient({
  projectId: projectId || 'MISSING_PROJECT_ID', // Fallback to avoid crash during build
  dataset: dataset || 'production',
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
});

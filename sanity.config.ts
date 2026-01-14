import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schema';

import { structure } from './sanity/structure';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

const singletonActions = new Set(['publish', 'discardChanges', 'restore']);
const singletonTypes = new Set(['heroCarousel']);

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure,
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
    // Filter out singleton types from the global “New document” menu
    templates: (prev) =>
      prev.filter((template) => !singletonTypes.has(template.schemaType)),
  },
  document: {
    // For singleton types, filter out any actions that are not in the singletonActions list
    actions: (prev, { schemaType }) =>
      singletonTypes.has(schemaType)
        ? prev.filter(({ action }) => action && singletonActions.has(action))
        : prev,
  },
});

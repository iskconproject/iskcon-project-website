import { defineField, defineType } from 'sanity';
import { Calendar } from 'lucide-react';

export default defineType({
  name: 'activity',
  title: 'Activity',
  type: 'document',
  // icon: Calendar, // Icons can be passed here if imported from @sanity/icons or similar, or React components
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Short text shown on the activity card',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief summary of the activity',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      description: 'Smaller image used for activity cards (optional). If not provided, Main Image will be used.',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            }
          ]
        },
      ],
      description: 'Image gallery for the activity (e.g. for Kids Class)',
    }),
     defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative text',
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      subtitle: 'subtitle',
    },
  },
});

import { defineField, defineType } from 'sanity';
import { Eye } from 'lucide-react';

export default defineType({
  name: 'darshan',
  title: 'Divine Darshan',
  type: 'document',
  // icon: Eye,
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Behold the Divine',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Section Subtitle',
      type: 'string',
      initialValue: 'Experience the sacred presence of our beloved deities',
    }),
    defineField({
      name: 'images',
      title: 'Deity Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Deity Name',
              description: 'Name of the deity shown in the image',
            },
            {
              name: 'description',
              type: 'string',
              title: 'Description',
              description: 'Short description or subtitle for the deity',
            }
          ]
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Divine Darshan',
      };
    },
  },
});

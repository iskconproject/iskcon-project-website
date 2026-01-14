import { defineType, defineField } from 'sanity';
import { Images } from 'lucide-react';

export default defineType({
  name: 'heroCarousel',
  title: 'Hero Carousel',
  type: 'document',
  icon: Images,
  fields: [
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'href',
              title: 'Link URL',
              type: 'string',
              initialValue: '#',
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
});

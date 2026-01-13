import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'heroCarousel',
  title: 'Hero Carousel',
  type: 'document',
  fields: [
    defineField({
      name: 'items',
      title: 'Carousel Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'heroItem',
          title: 'Hero Item',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'imageAlt',
              title: 'Image Alt Text',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'topSubtitle',
              title: 'Top Subtitle',
              type: 'string',
            }),
            defineField({
              name: 'mainTitle',
              title: 'Main Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'bottomSubtitle',
              title: 'Bottom Subtitle',
              type: 'string',
            }),
            defineField({
              name: 'href',
              title: 'Link URL',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'ctaText',
              title: 'CTA Button Text',
              type: 'string',
            }),
          ],
        },
      ],
    }),
  ],
});

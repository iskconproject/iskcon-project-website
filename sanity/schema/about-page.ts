import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
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
      title: 'Hero Subtitle',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'metaItems',
      title: 'Meta Information Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Label' },
            {
              name: 'icon',
              type: 'string',
              title: 'Icon',
              options: {
                list: [
                  { title: 'Book', value: 'book' },
                  { title: 'Heart', value: 'heart' },
                  { title: 'User', value: 'user' },
                  { title: 'Globe', value: 'globe' },
                  { title: 'Calendar', value: 'calendar' },
                  { title: 'Feather', value: 'feather' },
                  { title: 'Sparkles', value: 'sparkles' },
                ],
              },
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'content',
      title: 'Page Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
        },
        {
          type: 'object',
          name: 'quote',
          title: 'Featured Quote',
          fields: [
            { name: 'text', type: 'text', title: 'Quote Text' },
            { name: 'author', type: 'string', title: 'Author' },
          ],
        },
        {
          type: 'image',
          name: 'imageWithCaption',
          title: 'Image with Caption',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
        {
          type: 'object',
          name: 'statsGrid',
          title: 'Stats Grid',
          fields: [
            {
              name: 'stats',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'number', type: 'string', title: 'Number/Stat' },
                    { name: 'label', type: 'string', title: 'Label' },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'object',
          name: 'timeline',
          title: 'Timeline',
          fields: [
            {
              name: 'events',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'year', type: 'string', title: 'Year' },
                    { name: 'title', type: 'string', title: 'Event Title' },
                    { name: 'description', type: 'text', title: 'Description' },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'object',
          name: 'keyPoints',
          title: 'Key Points List',
          fields: [
            { name: 'title', type: 'string', title: 'Section Title' },
            {
              name: 'points',
              type: 'array',
              of: [{ type: 'string' }],
            },
          ],
        },
      ],
    }),
  ],
});

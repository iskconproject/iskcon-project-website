import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Hero Carousel')
        .id('heroCarousel')
        .child(
          S.document()
            .schemaType('heroCarousel')
            .documentId('heroCarousel')
        ),
      // Filter out singleton types from the global “Every document” list
      ...S.documentTypeListItems().filter(
        (listItem) => !['heroCarousel'].includes(listItem.getId() || '')
      ),
    ]);

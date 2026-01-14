export type HeroCarouselItem = {
  image?: any; // Sanity Image
  imageUrl?: string; // Fallback URL
  alt: string;
  href: string;
};

export const heroCarouselItems: HeroCarouselItem[] = [
  {
    image: "/images/rath-yatra-new.jpg",
    alt: "Lord Jagannath Blessing",
    href: "/festivals/rath-yatra",
  },
  {
    image: "/images/jagannath_deity.jpg",
    alt: "Lord Jagannath Vigraha",
    href: "/donation/general-donation",
  },
  {
    image: "/images/jagannath-mahaprasadam.jpg",
    alt: "Jagannath Mahaprasadam",
    href: "/activities",
  },
];

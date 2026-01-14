'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from './ui/carousel';
import { heroCarouselItems as fallbackItems } from '@/config/hero-carousel';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';
import { client } from '@/sanity/lib/client';

const HERO_QUERY = `*[_type == "heroCarousel" && _id == "heroCarousel"][0]{
  images[]{
    "image": asset->url,
    alt,
    href
  }
}`;

export default function HeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [items, setItems] = React.useState<any[]>(fallbackItems);

  const plugin = React.useRef(
    Autoplay({ delay: 8000, stopOnInteraction: false })
  );

  React.useEffect(() => {
    async function fetchHero() {
      // Skip fetching if Sanity is not configured (e.g., during build without env vars)
      if (client.config().projectId === 'MISSING_PROJECT_ID') return;

      try {
        const data = await client.fetch(HERO_QUERY);
        if (data?.images?.length > 0) {
          setItems(data.images);
        }
      } catch (error) {
        console.error("Error fetching hero carousel from Sanity:", error);
      }
    }
    fetchHero();
  }, []);

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api, items]);

  return (
    <section className="relative w-full">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="relative w-full"
        opts={{ loop: true }}
      >
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <Link href={item.href || '#'} className="block relative w-full aspect-[16/9] md:aspect-[1512/538] overflow-hidden">
                {/* Background Image with Ken Burns Effect */}
                <Image
                  src={item.image || '/images/jagannath_deity.jpg'}
                  className={cn(
                    "object-cover object-top w-full h-full transition-transform duration-[8000ms]",
                    current === index && "scale-110"
                  )}
                  fill
                  alt={item.alt || 'Hero Image'}
                  priority={index === 0}
                  quality={90}
                />
                
                {/* Subtle Gradient Overlay for depth */}
                <div className="absolute inset-0 bg-black/5" />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows - Desktop Only */}
        <CarouselPrevious className="hidden md:flex left-6 w-12 h-12 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 hover:text-white" />
        <CarouselNext className="hidden md:flex right-6 w-12 h-12 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 hover:text-white" />

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "transition-all duration-300 rounded-full",
                current === index
                  ? "w-8 h-2 bg-gold-400"
                  : "w-2 h-2 bg-white/50 hover:bg-white/70"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
}
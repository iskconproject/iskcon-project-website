'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from './ui/carousel';
import { heroCarouselItems } from '@/config/hero-carousel';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';
import { ChevronDown, Clock, MapPin } from 'lucide-react';

export default function HeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 8000, stopOnInteraction: false })
  );

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[85vh] lg:h-screen">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="relative w-full h-full"
        opts={{ loop: true }}
      >
        <CarouselContent className="h-full">
          {heroCarouselItems.map((item, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative w-full min-h-[60vh] md:min-h-[85vh] lg:h-screen">
                {/* Background Image with Ken Burns Effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={item.image}
                    className={cn(
                      "object-cover object-top w-full h-full",
                      current === index && "animate-ken-burns"
                    )}
                    fill
                    alt={item.imageAlt}
                    priority={index === 0}
                    quality={90}
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/90 via-maroon-900/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end pb-24 md:pb-32 lg:pb-40">
                  <div className="container">
                    <div className="max-w-3xl animate-fade-in-up">
                      {/* Subtitle */}
                      <p className="text-gold-300 text-sm md:text-lg font-medium tracking-wider uppercase mb-2 md:mb-4">
                        {item.topSubtitle}
                      </p>
                      
                      {/* Main Title */}
                      <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 leading-tight text-shadow-lg">
                        {item.mainTitle}
                      </h1>
                      
                      {/* Description */}
                      <p className="text-cream-100/90 text-sm md:text-xl font-light max-w-2xl mb-6 md:mb-8">
                        {item.bottomSubtitle}
                      </p>

                      {/* CTA Button */}
                      {item.cta && (
                        <Link href={item.cta.href}>
                          <Button
                            size="lg"
                            className={cn(
                              "relative overflow-hidden px-8 py-6 text-base md:text-lg font-semibold text-maroon-900 rounded-full",
                              "bg-gradient-to-r from-gold-300 via-gold-400 to-gold-300",
                              "hover:from-gold-400 hover:via-gold-500 hover:to-gold-400",
                              "shadow-lg shadow-gold-500/30 hover:shadow-xl hover:shadow-gold-500/40",
                              "transition-all duration-300 transform hover:scale-105",
                              "group"
                            )}
                          >
                            <span>{item.cta.text}</span>
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows - Desktop Only */}
        <CarouselPrevious className="hidden md:flex left-6 w-12 h-12 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 hover:text-white" />
        <CarouselNext className="hidden md:flex right-6 w-12 h-12 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 hover:text-white" />

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
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

      {/* Floating Info Card - Desktop */}
      <div className="hidden lg:block absolute bottom-8 right-8 z-10">
        <div className="glass-card rounded-2xl p-6 w-80 border border-white/20">
          <h3 className="font-heading text-lg font-semibold text-maroon-800 mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-saffron-500" />
            Temple Open Today
          </h3>
          <div className="space-y-2 text-sm text-maroon-600">
            <div className="flex justify-between">
              <span>Morning</span>
              <span className="font-medium text-saffron-600">4:30 AM - 12:30 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Evening</span>
              <span className="font-medium text-saffron-600">4:30 PM - 8:45 PM</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-cream-200">
            <div className="flex items-start gap-2 text-xs text-maroon-500">
              <MapPin className="w-4 h-4 text-saffron-500 flex-shrink-0 mt-0.5" />
              <span>NH2 Bye-Pass, Garui, Asansol, West Bengal</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/60 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  );
}
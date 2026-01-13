'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Eye, Sparkles } from 'lucide-react';

const deities = [
  {
    id: 1,
    name: 'Sri Sri Jagannath, Baladeva & Subhadra',
    description: 'The divine Lords of the Universe',
    image: '/images/jagannath_deity.jpg',
    blessing: 'May Lord Jagannath bless you with devotion and divine love',
  },
  {
    id: 2,
    name: 'Lord Jagannath',
    description: 'The Lord of the Universe who accepts the love of His devotees',
    image: '/images/jagannath.svg',
    blessing: 'Jagannath Swami nayana patha gami bhavatu me',
  },
  {
    id: 3,
    name: 'Sri Sri Radha Krishna',
    description: 'The divine couple of Vrindavan',
    image: '/images/radha_krishna.svg',
    blessing: 'May Radha Krishna shower Their eternal blessings upon you',
  },
];

export default function DeityDarshanSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextDeity = () => {
    setActiveIndex((prev) => (prev + 1) % deities.length);
  };

  const prevDeity = () => {
    setActiveIndex((prev) => (prev - 1 + deities.length) % deities.length);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-cream-50 via-white to-cream-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 section-lotus opacity-50 dark:opacity-20" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-radial from-saffron-200/30 to-transparent dark:from-saffron-900/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-gold-200/30 to-transparent dark:from-gold-900/10 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container relative">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-saffron-100 dark:bg-saffron-900/30 rounded-full text-saffron-700 dark:text-saffron-300 text-sm font-medium mb-4">
            <Eye className="w-4 h-4" />
            <span>Divine Darshan</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-maroon-800 dark:text-saffron-500 mb-4">
            Behold the Divine
          </h2>
          <p className="text-maroon-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
            Experience the sacred presence of our beloved deities
          </p>
        </div>

        {/* Darshan Gallery */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Main Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-maroon-900/20 dark:shadow-black/50">
              {/* Decorative Frame */}
              <div className="absolute inset-0 border-4 border-gold-400/50 dark:border-gold-600/30 rounded-3xl z-10 pointer-events-none" />
              <div className="absolute inset-2 border border-gold-300/30 dark:border-gold-500/20 rounded-2xl z-10 pointer-events-none" />
              
              {/* Image */}
              <Image
                src={deities[activeIndex].image}
                alt={deities[activeIndex].name}
                fill
                className="object-cover transition-all duration-700"
                priority
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/60 via-transparent to-maroon-900/20 dark:from-black/80 dark:to-black/20" />
              
              {/* Deity Name Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-2 text-shadow">
                  {deities[activeIndex].name}
                </h3>
                <p className="text-cream-100/90 text-sm md:text-base">
                  {deities[activeIndex].description}
                </p>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevDeity}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-20"
                aria-label="Previous deity"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextDeity}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-20"
                aria-label="Next deity"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center gap-3 mt-6">
              {deities.map((deity, index) => (
                <button
                  key={deity.id}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "relative w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden transition-all duration-300",
                    activeIndex === index
                      ? "ring-2 ring-saffron-500 ring-offset-2 dark:ring-offset-zinc-900 scale-105"
                      : "opacity-60 hover:opacity-100"
                  )}
                >
                  <Image
                    src={deity.image}
                    alt={deity.name}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info Card */}
          <div className="space-y-8">
            {/* Blessing Card */}
            <div className="bg-gradient-to-br from-saffron-50 to-gold-50 dark:from-saffron-950/30 dark:to-gold-950/30 rounded-2xl p-6 md:p-8 border border-saffron-200 dark:border-saffron-800/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-saffron-400 to-gold-400 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-heading text-lg font-semibold text-maroon-800 dark:text-saffron-200">
                  Divine Blessing
                </h4>
              </div>
              <p className="text-maroon-700 dark:text-zinc-300 italic text-lg leading-relaxed font-medium">
                "{deities[activeIndex].blessing}"
              </p>
            </div>

            {/* Temple Timings Quick Info */}
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 md:p-8 shadow-lg shadow-maroon-900/5 dark:shadow-black/30 border border-cream-200 dark:border-zinc-800">
              <h4 className="font-heading text-xl font-semibold text-maroon-800 dark:text-saffron-500 mb-4">
                Darshan Timings
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-cream-100 dark:border-zinc-800">
                  <span className="text-maroon-600 dark:text-zinc-400">Mangala Arati</span>
                  <span className="text-saffron-600 dark:text-saffron-400 font-semibold">4:30 AM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-cream-100 dark:border-zinc-800">
                  <span className="text-maroon-600 dark:text-zinc-400">Shringar Arati</span>
                  <span className="text-saffron-600 dark:text-saffron-400 font-semibold">7:15 AM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-cream-100 dark:border-zinc-800">
                  <span className="text-maroon-600 dark:text-zinc-400">Raj Bhog Arati</span>
                  <span className="text-saffron-600 dark:text-saffron-400 font-semibold">12:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-maroon-600 dark:text-zinc-400">Sandhya Arati</span>
                  <span className="text-saffron-600 dark:text-saffron-400 font-semibold">6:30 PM</span>
                </div>
              </div>
              <Link
                href="/iskcon/vaishnava-calendar"
                className="inline-flex items-center gap-2 mt-4 text-saffron-600 dark:text-saffron-400 font-medium hover:text-saffron-700 dark:hover:text-saffron-300 transition-colors"
              >
                View Full Schedule
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

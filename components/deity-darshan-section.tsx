'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Eye, X, Sparkles } from 'lucide-react';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import * as Dialog from '@radix-ui/react-dialog';

interface DarshanData {
  title: string;
  subtitle: string;
  images: {
    asset: any;
    caption: string;
    description: string;
  }[];
}

const timings = [
  { name: 'Mangala Arati', time: '4:30 AM' },
  { name: 'Tulasi Arati', time: '5:00 AM' }, // Added
  { name: 'Guru Puja', time: '7:30 AM' }, // Added
  { name: 'Shringar Arati', time: '7:15 AM' },
  { name: 'Raj Bhog Arati', time: '12:00 PM' },
  { name: 'Utthapan Arati', time: '4:30 PM' }, // Added
  { name: 'Sandhya Arati', time: '6:30 PM' },
  { name: 'Shayana Arati', time: '8:30 PM' }, // Added
];

export default function DeityDarshanSection() {
  const [data, setData] = useState<DarshanData | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
       const query = `*[_type == "darshan"][0]{
         title,
         subtitle,
         images
       }`;
       const result = await client.fetch(query);
       setData(result);
    };
    fetchData();
  }, []);

  const nextDeity = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!data?.images) return;
    setActiveIndex((prev) => (prev + 1) % data.images.length);
  };

  const prevDeity = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!data?.images) return;
    setActiveIndex((prev) => (prev - 1 + data.images.length) % data.images.length);
  };

  if (!data || !data.images || data.images.length === 0) return null; // Or loading state

  const activeImage = data.images[activeIndex];

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
            {data.title || 'Behold the Divine'}
          </h2>
          <p className="text-maroon-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
            {data.subtitle || 'Experience the sacred presence of our beloved deities'}
          </p>
        </div>

        {/* Darshan Gallery & Timings */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch"> 
          {/* Main Image - Click to open Lightbox */}
          <div 
             className="relative cursor-pointer group h-full" 
             onClick={() => setLightboxOpen(true)}
          >
            <div className="relative h-auto aspect-[4/3] lg:h-full lg:aspect-auto w-full rounded-3xl overflow-hidden shadow-2xl shadow-maroon-900/20 dark:shadow-black/50">
              {/* Decorative Frame */}
              <div className="absolute inset-0 border-4 border-gold-400/50 dark:border-gold-600/30 rounded-3xl z-10 pointer-events-none" />
              <div className="absolute inset-2 border border-gold-300/30 dark:border-gold-500/20 rounded-2xl z-10 pointer-events-none" />
              
              {/* Image */}
              {activeImage?.asset ? (
                <Image
                  src={urlForImage(activeImage).url()}
                  alt={activeImage.caption || 'Deity Darshan'}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-maroon-900/10 dark:bg-black/20">
                  <div className="text-maroon-400 dark:text-zinc-600 text-center p-6">
                    <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-20" />
                    <p className="text-sm font-medium">Image coming soon</p>
                  </div>
                </div>
              )}
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/60 via-transparent to-maroon-900/20 dark:from-black/80 dark:to-black/20" />
              
              {/* Deity Name Overlay - Lower center */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-center">
                 <div className="inline-block px-4 py-1 bg-black/30 backdrop-blur-md rounded-full text-white/90 text-sm font-medium mb-2 border border-white/20">
                   Click to Expand
                 </div>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-2 text-shadow">
                  {activeImage?.caption}
                </h3>
                <p className="text-cream-100/90 text-sm md:text-base">
                  {activeImage?.description}
                </p>
              </div>

               {/* Navigation Arrows - Stop propagation to avoid opening lightbox when navigating */}
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
          </div>

          {/* Temple Timings Quick Info - Full Height */}
          <div className="flex flex-col h-full"> 
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 md:p-8 shadow-lg shadow-maroon-900/5 dark:shadow-black/30 border border-cream-200 dark:border-zinc-800 flex-grow flex flex-col">
              <h4 className="font-heading text-xl md:text-2xl font-semibold text-maroon-800 dark:text-saffron-500 mb-6 border-b border-cream-200 dark:border-zinc-800 pb-4 text-center">
                Daily Darshan Schedule
              </h4>
              <div className="flex-grow flex flex-col justify-center space-y-2 md:space-y-4"> {/* Distributed spacing */}
                {timings.map((t, i) => (
                    <div key={i} className="flex justify-between items-center py-2.5 md:py-3 border-b border-dashed border-cream-100 dark:border-zinc-800 last:border-0 hover:bg-cream-50 dark:hover:bg-zinc-800/50 px-1 md:px-2 rounded-lg transition-colors gap-2">
                        <span className="text-maroon-600 dark:text-zinc-400 font-medium text-sm md:text-base">{t.name}</span>
                        <span className="text-saffron-600 dark:text-saffron-400 font-bold bg-saffron-50 dark:bg-zinc-800 px-2 md:px-3 py-1 rounded-full text-[10px] xs:text-xs md:text-sm whitespace-nowrap">
                          {t.time}
                        </span>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* Full Screen Lightbox */}
      <Dialog.Root open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
            <Dialog.Content className="fixed left-[50%] top-[50%] z-[101] max-w-screen-2xl w-full h-full max-h-screen translate-x-[-50%] translate-y-[-50%] focus:outline-none p-4 md:p-8 flex items-center justify-center data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
                 <div className="relative w-full h-full flex flex-col items-center justify-center">
                     {/* Close Button */}
                     <button  
                        onClick={() => setLightboxOpen(false)}
                        className="absolute top-4 right-4 md:top-8 md:right-8 z-50 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                     >
                         <X className="w-8 h-8" />
                     </button>

                     {/* Main Lightbox Image */}
                     {activeImage?.asset ? (
                        <div className="relative w-full h-[80vh] md:h-[85vh]">
                            <Image
                                src={urlForImage(activeImage).url()}
                                alt={activeImage.caption || 'Full view'}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                     ) : (
                        <div className="w-full h-[60vh] flex items-center justify-center">
                            <p className="text-white/50 text-xl">Image not available</p>
                        </div>
                     )}

                     {/* Caption */}
                     <div className="mt-6 text-center text-white">
                         <h3 className="text-2xl font-bold font-heading">{activeImage?.caption}</h3>
                         <p className="text-white/80 mt-2">{activeImage?.description}</p>
                     </div>

                     {/* Navigation */}
                    <button
                        onClick={prevDeity}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>
                    <button
                        onClick={nextDeity}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>
                 </div>
            </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

    </section>
  );
}

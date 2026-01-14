import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';

const FESTIVALS_QUERY = `*[_type == "festival"] | order(_createdAt asc) {
  title,
  "slug": slug.current,
  dateDescription,
  subtitle,
  mainImage
}`;

interface FestivalData {
  title: string;
  slug: string;
  dateDescription: string;
  subtitle: string;
  mainImage: any;
}

const Festivals = async () => {
  const festivals: FestivalData[] = await client.fetch(FESTIVALS_QUERY);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-cream-50 via-white to-cream-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-saffron-100 dark:bg-saffron-900/30 rounded-full text-saffron-700 dark:text-saffron-400 text-sm font-medium mb-6 shadow-sm border border-saffron-200/50 dark:border-saffron-500/20">
            <Sparkles className="w-4 h-4" />
            <span>Divine Celebrations</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-maroon-800 dark:text-saffron-50 mb-6 tracking-tight">
            Temple <span className="text-saffron-600">Festivals</span>
          </h1>
          <p className="text-maroon-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Experience the nectar of devotion through our vibrant spiritual festivals. 
            Join us in honoring the divine appearance days and sacred lila celebrations.
          </p>
        </div>

        {/* Festivals Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {festivals.map((festival, index) => (
            <Link
              href={`/festivals/${festival.slug}`}
              key={index}
              className={cn(
                "group relative bg-white dark:bg-zinc-900 rounded-[2rem] overflow-hidden",
                "border border-cream-200 dark:border-zinc-800 shadow-sm",
                "hover:shadow-2xl hover:shadow-saffron-500/10 hover:-translate-y-2",
                "transition-all duration-500 ease-out"
              )}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-cream-50 dark:bg-zinc-950">
                {festival.mainImage?.asset ? (
                  <Image
                    src={urlForImage(festival.mainImage).url()}
                    alt={festival.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center p-8 bg-gradient-to-br from-saffron-50 to-gold-50 dark:from-zinc-900 dark:to-zinc-950">
                    <div className="relative w-32 h-32 opacity-20 dark:opacity-10">
                      <Image
                        src="/images/logo/iskcon-asansol-logo.svg"
                        alt="Logo Placeholder"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Sparkles className="w-12 h-12 text-saffron-400/30" />
                    </div>
                  </div>
                )}

                {/* Date Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="px-4 py-1.5 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-full text-xs font-bold text-maroon-900 dark:text-saffron-400 border border-white/20 shadow-lg">
                    {festival.dateDescription}
                  </div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-8 relative">
                {/* Accent Line */}
                <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-saffron-400 to-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                
                <h3 className="font-heading text-2xl font-bold text-maroon-800 dark:text-saffron-100 mb-3 group-hover:text-saffron-600 dark:group-hover:text-saffron-400 transition-colors duration-300">
                  {festival.title}
                </h3>
                <p className="text-maroon-600/80 dark:text-zinc-400 text-sm md:text-base leading-relaxed mb-6 line-clamp-2">
                  {festival.subtitle}
                </p>
                
                {/* Learn More Link */}
                <div className="flex items-center justify-between">
                    <span className="inline-flex items-center text-saffron-600 dark:text-saffron-400 text-sm font-bold tracking-wide uppercase group-hover:gap-3 gap-2 transition-all">
                      Discover Nectar
                      <ArrowRight className="w-4 h-4" />
                    </span>
                    <div className="w-10 h-10 rounded-full bg-saffron-50 dark:bg-zinc-800 flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                        <ArrowRight className="w-5 h-5 text-saffron-600" />
                    </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Calendar Link */}
        <div className="mt-12 text-center">
          <Link
            href="/iskcon/vaishnava-calendar"
            className={cn(
              "inline-flex items-center gap-2 px-8 py-4 rounded-full",
              "bg-gradient-to-r from-saffron-500 to-gold-500 text-white font-semibold",
              "hover:from-saffron-600 hover:to-gold-600",
              "shadow-lg shadow-saffron-500/20 hover:shadow-xl",
              "transition-all duration-300 group"
            )}
          >
            <Calendar className="w-5 h-5" />
            View Vaishnava Calendar
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Festivals;

import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, ArrowLeft, Sparkles } from 'lucide-react';
import Link from 'next/link';

interface FestivalPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const FESTIVAL_QUERY = `*[_type == "festival" && slug.current == $slug][0] {
  title,
  dateDescription,
  subtitle,
  mainImage,
  gallery,
  content
}`;

export default async function FestivalDetailPage({ params }: FestivalPageProps) {
  const { slug } = await params;
  const festival = await client.fetch(FESTIVAL_QUERY, { slug });

  if (!festival) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-cream-50 dark:bg-zinc-950">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        {festival.mainImage?.asset ? (
          <Image
            src={urlForImage(festival.mainImage).url()}
            alt={festival.title}
            fill
            className="object-cover"
            priority
          />
        ) : (
             <div className="absolute inset-0 bg-gradient-to-br from-maroon-900 to-maroon-800 flex items-center justify-center">
                <Sparkles className="w-24 h-24 text-saffron-400/20" />
             </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-cream-50 via-cream-50/20 to-transparent dark:from-zinc-950 dark:via-zinc-950/20" />
        
        <div className="absolute inset-0 container flex flex-col justify-end pb-12">
          <Link 
            href="/festivals"
            className="inline-flex items-center gap-2 text-saffron-600 dark:text-saffron-400 font-semibold mb-6 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Festivals
          </Link>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm mb-4 border border-white/20">
              <Calendar className="w-4 h-4" />
              <span>{festival.dateDescription}</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-maroon-900 dark:text-saffron-50 mb-4">
              {festival.title}
            </h1>
            <p className="text-xl text-maroon-800/80 dark:text-zinc-400 font-medium">
              {festival.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="container py-12 md:py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <PortableText 
                value={festival.content || []} 
                components={{
                    block: {
                        h2: ({children}) => <h2 className="text-3xl font-bold text-maroon-800 dark:text-saffron-100 mt-12 mb-6">{children}</h2>,
                        h3: ({children}) => <h3 className="text-2xl font-bold text-maroon-800 dark:text-saffron-100 mt-8 mb-4">{children}</h3>,
                        normal: ({children}) => <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">{children}</p>,
                        blockquote: ({children}) => (
                            <blockquote className="border-l-4 border-saffron-500 pl-6 my-8 italic text-zinc-600 dark:text-zinc-400">
                                {children}
                            </blockquote>
                        ),
                    },
                    list: {
                        bullet: ({children}) => <ul className="list-disc pl-6 mb-6 space-y-2 text-zinc-700 dark:text-zinc-300">{children}</ul>,
                    }
                }}
              />
            </div>

            {/* Gallery Section */}
            {festival.gallery && festival.gallery.length > 0 && (
              <div className="mt-16 pt-16 border-t border-cream-200 dark:border-zinc-800">
                <h2 className="font-heading text-3xl font-bold text-maroon-800 dark:text-saffron-50 mb-8">
                  Festival <span className="text-saffron-600">Moments</span>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {festival.gallery.map((image: any, index: number) => (
                    <div key={index} className="relative aspect-square rounded-2xl overflow-hidden shadow-md">
                      <Image
                        src={urlForImage(image).url()}
                        alt={`Gallery ${index}`}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar / Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] shadow-xl shadow-maroon-900/5 border border-cream-200 dark:border-zinc-800">
                <h3 className="font-heading text-xl font-bold text-maroon-800 dark:text-saffron-100 mb-6 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-saffron-500" />
                    Festival Information
                </h3>
                <div className="space-y-6">
                    <div>
                        <p className="text-xs font-bold text-maroon-400 dark:text-zinc-500 uppercase tracking-widest mb-1">When</p>
                        <p className="text-maroon-900 dark:text-zinc-300 font-medium">{festival.dateDescription}</p>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-maroon-400 dark:text-zinc-500 uppercase tracking-widest mb-1">Status</p>
                        <p className="text-saffron-600 dark:text-saffron-400 font-bold">Annual Celebration</p>
                    </div>
                </div>
                <div className="mt-10">
                    <Link
                        href="/donation"
                        className="block w-full text-center py-4 bg-gradient-to-r from-saffron-500 to-gold-500 text-white font-bold rounded-2xl shadow-lg shadow-saffron-500/20 hover:shadow-xl hover:shadow-saffron-500/30 transition-all"
                    >
                        Sponsor this Festival
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

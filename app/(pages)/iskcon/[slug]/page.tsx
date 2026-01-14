import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, BookOpen, Calendar, Globe, Quote, Feather, Heart, User, Sparkles } from 'lucide-react';

const ABOUT_PAGE_QUERY = `*[_type == "aboutPage" && slug.current == $slug][0] {
  title,
  subtitle,
  heroImage,
  metaItems,
  content
}`;

const iconMap: Record<string, any> = {
  book: BookOpen,
  heart: Heart,
  user: User,
  globe: Globe,
  calendar: Calendar,
  feather: Feather,
  sparkles: Sparkles,
};

const ptComponents = {
  types: {
    quote: ({ value }: any) => (
      <blockquote className="relative bg-gradient-to-br from-saffron-50 to-gold-50 dark:from-zinc-900 dark:to-zinc-800 rounded-2xl p-6 md:p-8 my-8 border-l-4 border-saffron-500 not-prose shadow-sm">
        <Quote className="w-8 h-8 text-saffron-400 mb-4" />
        <p className="text-lg text-maroon-800 dark:text-zinc-200 italic font-medium mb-4">
          "{value.text}"
        </p>
        {value.author && (
          <footer className="text-saffron-600 dark:text-saffron-400 font-semibold">
            — {value.author}
          </footer>
        )}
      </blockquote>
    ),
    imageWithCaption: ({ value }: any) => (
      <figure className="my-10 not-prose">
        <div className="relative h-64 md:h-80 lg:h-[400px] rounded-2xl overflow-hidden shadow-md">
          <Image
            src={urlForImage(value).url()}
            alt={value.caption || 'About Image'}
            fill
            className="object-cover"
          />
        </div>
        {value.caption && (
          <figcaption className="text-center text-sm text-maroon-500 dark:text-zinc-400 mt-4 italic">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
    statsGrid: ({ value }: any) => (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12 not-prose">
        {value.stats?.map((stat: any, index: number) => (
          <div
            key={index}
            className="text-center p-4 bg-white dark:bg-zinc-900 rounded-xl border border-cream-200 dark:border-zinc-800 shadow-sm"
          >
            <div className="font-heading text-2xl md:text-3xl font-bold text-saffron-600 dark:text-saffron-400">
              {stat.number}
            </div>
            <div className="text-sm text-maroon-500 dark:text-zinc-400">{stat.label}</div>
          </div>
        ))}
      </div>
    ),
    timeline: ({ value }: any) => (
      <div className="my-12 not-prose">
        <div className="border-l-2 border-saffron-200 dark:border-zinc-700 ml-3 space-y-8 pl-8 py-2">
          {value.events?.map((event: any, i: number) => (
            <div key={i} className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-saffron-500 border-4 border-cream-50 dark:border-zinc-950" />
              <span className="text-sm font-bold text-saffron-600 dark:text-saffron-400 block mb-1">
                {event.year}
              </span>
              <h4 className="font-semibold text-maroon-800 dark:text-zinc-100">{event.title}</h4>
              <p className="text-sm text-maroon-600 dark:text-zinc-400">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    keyPoints: ({ value }: any) => (
      <div className="my-10 p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-cream-200 dark:border-zinc-800 shadow-sm not-prose">
        {value.title && (
          <h3 className="font-heading text-xl font-semibold text-maroon-800 dark:text-saffron-400 mb-4">
            {value.title}
          </h3>
        )}
        <ul className="grid md:grid-cols-2 gap-4">
          {value.points?.map((item: string, i: number) => (
            <li key={i} className="flex items-center gap-2 text-maroon-700 dark:text-zinc-300">
              <div className="w-2 h-2 rounded-full bg-saffron-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-maroon-800 dark:text-saffron-500 mt-12 mb-6 text-center">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="font-heading text-2xl md:text-3xl font-bold text-maroon-800 dark:text-saffron-500 mt-12 mb-6">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="font-heading text-xl md:text-2xl font-bold text-maroon-800 dark:text-saffron-500 mt-8 mb-4">
        {children}
      </h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-maroon-700 dark:text-zinc-300 leading-relaxed mb-6">{children}</p>
    ),
  },
};

interface AboutPageProps {
  params: Promise<{ slug: string }>;
}

export default async function DynamicAboutPage({ params }: AboutPageProps) {
  const { slug } = await params;
  const page = await client.fetch(ABOUT_PAGE_QUERY, { slug });

  if (!page) {
    notFound();
  }

  return (
    <main className="bg-cream-50 dark:bg-zinc-950 transition-colors duration-300">
      {/* Hero Header */}
      <section className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        {page.heroImage && (
          <Image
            src={urlForImage(page.heroImage).url()}
            fill
            className="object-cover object-center"
            alt={page.title}
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/90 via-maroon-900/50 to-transparent dark:from-black/90 dark:via-black/50" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-12">
          <div className="container">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-cream-200 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              {page.title.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-gold-300">{page.title.split(' ').pop()}</span>
            </h1>
            {page.subtitle && (
              <p className="text-cream-100 max-w-2xl mt-2 text-lg md:text-xl font-light">
                {page.subtitle}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Meta Info */}
            {page.metaItems && page.metaItems.length > 0 && (
              <div className="flex flex-wrap items-center gap-4 text-sm text-maroon-600 dark:text-zinc-400 mb-8 pb-8 border-b border-cream-200 dark:border-zinc-800">
                {page.metaItems.map((item: any, index: number) => {
                  const Icon = iconMap[item.icon] || Sparkles;
                  return (
                    <div key={index} className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-saffron-500" />
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Content Rendering */}
            <div className="prose prose-lg prose-maroon dark:prose-invert max-w-none">
              <PortableText value={page.content} components={ptComponents} />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

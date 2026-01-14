import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface Activity {
  title: string;
  subtitle: string;
  description: string;
  mainImage: any;
  content: any;
  gallery: any[];
}

async function getActivity(slug: string) {
  const query = `*[_type == "activity" && slug.current == $slug][0]{
    title,
    subtitle,
    description,
    mainImage,
    content,
    gallery
  }`;
  return await client.fetch<Activity>(query, { slug });
}

// Ensure the page handles params correctly for Next.js 15
// Params should be awaited if they are promises, but in server components for dynamic routes
// params is a prop. In Next.js 15, props need to be awaited? 
// Actually, usually `params` is `{ slug: string }`.
// Let's stick to standard server component signature.

export default async function ActivityPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const activity = await getActivity(params.slug);

  if (!activity) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-cream-50 dark:bg-zinc-950 pt-24 pb-16">
      <div className="container px-4 md:px-6">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/activities">
            <Button variant="ghost" className="gap-2 text-maroon-700 dark:text-saffron-400 hover:text-maroon-900 hover:bg-maroon-50 dark:hover:bg-zinc-900">
              <ArrowLeft className="w-4 h-4" />
              Back to Activities
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-start">
          <div className="space-y-6">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-maroon-900 dark:text-saffron-500 mb-4">
                {activity.title}
              </h1>
              <p className="text-xl text-saffron-700 dark:text-saffron-400 font-medium">
                {activity.subtitle}
              </p>
            </div>

            <div className="prose prose-lg dark:prose-invert text-maroon-700 dark:text-zinc-300">
              <p>{activity.description}</p>
            </div>
          </div>

          <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-800">
            {activity.mainImage ? (
              <Image
                src={urlForImage(activity.mainImage).url()}
                alt={activity.title}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="w-full h-full bg-saffron-100 dark:bg-zinc-900 flex items-center justify-center">
                 <span className="text-saffron-400">No Image</span>
              </div>
            )}
          </div>
        </div>

        {/* Content Section */}
        {activity.content && (
           <div className="max-w-4xl mx-auto mb-16">
              <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-heading prose-headings:text-maroon-900 dark:prose-headings:text-saffron-500 prose-p:text-maroon-700 dark:prose-p:text-zinc-300 prose-a:text-saffron-600 hover:prose-a:text-saffron-700">
                <PortableText value={activity.content} />
              </div>
           </div>
        )}
        
        {/* Gallery Section */}
        {activity.gallery && activity.gallery.length > 0 && (
          <div className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-maroon-900 dark:text-saffron-500 mb-8 text-center">
              Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activity.gallery.map((image: any, index: number) => (
                <div key={index} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                  <Image
                    src={urlForImage(image).url()}
                    alt={image.alt || `Gallery image ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

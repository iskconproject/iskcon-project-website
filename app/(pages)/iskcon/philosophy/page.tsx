import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowLeft, BookOpen, Heart, User, Quote, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: "Philosophy | The Science of Self Realization",
  description: "Explore the profound philosophy of Krishna consciousness, based on the Bhagavad-gita and Srimad Bhagavatam, teaching the science of self-realization.",
};

const Philosophy = () => {
  return (
    <main className="bg-cream-50 dark:bg-zinc-950 transition-colors duration-300">
      {/* Hero Header */}
      <section className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        <Image
          src="/images/jagannath_deity.jpg" // Using a spiritual image as fallback/placeholder
          fill
          className="object-cover object-center"
          alt="Krishna Consciousness Philosophy"
          priority
        />
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
              Vedic <span className="text-gold-300">Philosophy</span>
            </h1>
            <p className="text-cream-100 max-w-2xl mt-2 text-lg md:text-xl font-light">
              The timeless science of self-realization and our eternal relationship with the Divine.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-maroon-600 dark:text-zinc-400 mb-8 pb-8 border-b border-cream-200 dark:border-zinc-800">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-saffron-500" />
                <span>Vedic Wisdom</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-saffron-500" />
                <span>Self Realization</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-saffron-500" />
                <span>Bhakti Yoga</span>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg prose-maroon dark:prose-invert max-w-none">
              <p className="text-xl text-maroon-800 dark:text-zinc-200 leading-relaxed mb-8">
                You may have encountered members of the Hare Krishna movement singing
                and dancing in public spaces, seeking donations for their books or
                magazines, or even come across them on TV or in newspapers. Perhaps
                you've wondered about their identity, their distinctive attire, their
                beliefs, and the reasons behind their constant singing. Who exactly is
                Krishna?
              </p>

              <blockquote className="relative bg-gradient-to-br from-saffron-50 to-gold-50 dark:from-zinc-900 dark:to-zinc-800 rounded-2xl p-6 md:p-8 my-8 border-l-4 border-saffron-500 not-prose shadow-sm">
                <Quote className="w-8 h-8 text-saffron-400 mb-4" />
                <p className="text-lg text-maroon-800 dark:text-zinc-200 italic font-medium mb-4">
                  "We are not these bodies; we are spirit souls. Our eternal nature is to serve the Supreme Lord, Sri Krishna, in love and devotion."
                </p>
                <footer className="text-saffron-600 dark:text-saffron-400 font-semibold">
                  — Core Teaching
                </footer>
              </blockquote>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-maroon-800 dark:text-saffron-500 mt-12 mb-6 flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-gold-500" />
                Who We Are
              </h2>

              <p className="text-maroon-700 dark:text-zinc-300 leading-relaxed mb-6">
                To offer you a comprehensive understanding, we aim to delve into the
                Hare Krishna movement, shedding light on our identity. You might be
                surprised to learn that joining the Hare Krishna movement doesn't
                require adopting traditional clothing or altering one's hairstyle or
                religious affiliation. You'll come to realize that Krishna
                consciousness transcends mere religious practice—it's a spiritual,
                universal process with a time-tested foundation that leads to inner
                happiness, satisfaction, and heightened consciousness.
              </p>

              <div className="my-10 p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-cream-200 dark:border-zinc-800 shadow-sm not-prose">
                <h3 className="font-heading text-xl font-semibold text-maroon-800 dark:text-saffron-400 mb-4">
                  Key Principles of Bhakti Yoga
                </h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  {[
                    "We are eternal spirit souls (Jiva)",
                    "Krishna is the Supreme Person",
                    "Our relationship is of loving service",
                    "Karma governs material existence",
                    "Reincarnation is a reality",
                    "Chanting liberates the mind"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-maroon-700 dark:text-zinc-300">
                      <div className="w-2 h-2 rounded-full bg-saffron-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-maroon-800 dark:text-saffron-500 mt-12 mb-6">
                A Universal Process
              </h2>

              <p className="text-maroon-700 dark:text-zinc-300 leading-relaxed mb-6">
                The Hare Krishna movement serves the unique purpose of making
                spiritual reality and its associated culture accessible to the broader
                public. Engaging with a devotee, indulging in the spiritual cuisine at
                our restaurants, participating in temple Sunday festivals, reading our
                literature, or chanting Hare Krishna even once can bring about a shift
                in your consciousness. This spiritual transformation is key to
                enhancing the quality of life on our planet.
              </p>
            </div>

            {/* Navigation */}
            <div className="flex flex-wrap justify-between items-center gap-4 mt-12 pt-8 border-t border-cream-200 dark:border-zinc-800">
              <Link
                href="/iskcon/history"
                className="inline-flex items-center gap-2 text-saffron-600 dark:text-saffron-400 hover:text-saffron-700 dark:hover:text-saffron-300 font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                History
              </Link>
              <Link
                href="/iskcon/founder"
                className="inline-flex items-center gap-2 text-saffron-600 dark:text-saffron-400 hover:text-saffron-700 dark:hover:text-saffron-300 font-medium transition-colors"
              >
                Founder Acharya
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Philosophy;

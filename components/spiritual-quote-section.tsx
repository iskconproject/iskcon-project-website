'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Quote, BookOpen, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const quotes = [
  {
    text: "The Supreme Personality of Godhead said: I am the source of all spiritual and material worlds. Everything emanates from Me. The wise who perfectly know this engage in My devotional service and worship Me with all their hearts.",
    source: "Bhagavad Gita 10.8",
    author: "Lord Krishna",
  },
  {
    text: "Just try to learn the truth by approaching a spiritual master. Inquire from him submissively and render service unto him. The self-realized souls can impart knowledge unto you because they have seen the truth.",
    source: "Bhagavad Gita 4.34",
    author: "Lord Krishna",
  },
  {
    text: "Whatever action a great man performs, common men follow. And whatever standards he sets by exemplary acts, all the world pursues.",
    source: "Bhagavad Gita 3.21",
    author: "Lord Krishna",
  },
  {
    text: "One who is not disturbed in spite of the threefold miseries or elated when there is happiness, and who is free from attachment, fear and anger, is called a sage of steady mind.",
    source: "Bhagavad Gita 2.56",
    author: "Lord Krishna",
  },
];

export default function SpiritualQuoteSection() {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-cream-50 to-white dark:from-zinc-950 dark:to-zinc-900 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-saffron-100 dark:bg-saffron-900/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-100 dark:bg-gold-900/20 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Quote Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-saffron-500 to-gold-500 text-white mb-8 shadow-lg shadow-saffron-500/30">
            <Quote className="w-8 h-8" />
          </div>

          {/* Quote Text */}
          <blockquote className="relative">
            <p className="font-heading text-xl md:text-2xl lg:text-3xl text-maroon-800 dark:text-saffron-100 leading-relaxed mb-6 transition-all duration-500">
              "{quotes[currentQuote].text}"
            </p>
            
            {/* Source */}
            <footer className="space-y-1">
              <cite className="not-italic text-saffron-600 dark:text-saffron-400 font-semibold text-lg">
                — {quotes[currentQuote].author}
              </cite>
              <p className="text-maroon-500 dark:text-zinc-400 text-sm">
                {quotes[currentQuote].source}
              </p>
            </footer>
          </blockquote>

          {/* Quote Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuote(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  currentQuote === index
                    ? "bg-saffron-500 w-8"
                    : "bg-saffron-200 dark:bg-zinc-700 hover:bg-saffron-300 dark:hover:bg-zinc-600"
                )}
                aria-label={`Go to quote ${index + 1}`}
              />
            ))}
          </div>

          {/* Learn More Link */}
          <div className="mt-12">
            <Link
              href="/learn-from-prabhupada"
              className={cn(
                "inline-flex items-center gap-2 px-8 py-4 rounded-full",
                "bg-gradient-to-r from-saffron-500 to-gold-500 text-white font-semibold",
                "hover:from-saffron-600 hover:to-gold-600",
                "shadow-lg shadow-saffron-500/20 hover:shadow-xl",
                "transition-all duration-300 group"
              )}
            >
              <BookOpen className="w-5 h-5" />
              Learn from Srila Prabhupada
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

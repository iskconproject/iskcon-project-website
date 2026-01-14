import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Home, Calendar, HelpCircle, Heart } from 'lucide-react';
import { Logo } from '@/components/logo';

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center p-6 bg-gradient-to-b from-cream-50 to-white dark:from-zinc-950 dark:to-zinc-900">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Animated Background Element (Subtle) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-saffron-200/20 dark:bg-maroon-900/10 rounded-full blur-3xl -z-10 animate-pulse" />

        {/* Visual Element */}
        <div className="relative inline-block">
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto text-maroon-800 dark:text-saffron-500 transition-transform duration-700 hover:rotate-12">
             <Logo className="w-full h-full" />
          </div>
          <div className="absolute -top-4 -right-4">
             <div className="bg-saffron-100 dark:bg-maroon-900/50 p-3 rounded-2xl shadow-sm rotate-12">
               <HelpCircle className="w-6 h-6 text-saffron-600 dark:text-saffron-400" />
             </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-maroon-900 dark:text-white">
            Hare <span className="text-saffron-600">Krishna!</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-maroon-800/80 dark:text-zinc-300">
            Dear Devotee, you seem to have taken a different path.
          </p>
          <p className="max-w-md mx-auto text-maroon-600 dark:text-zinc-400 leading-relaxed">
            The page you are looking for is currently unavailable in this material realm. 
            Perhaps it has been moved or the link has changed.
          </p>
        </div>

        {/* Navigation Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto pt-4">
          <Link href="/">
            <Button className="w-full bg-maroon-800 hover:bg-maroon-900 text-white rounded-xl py-6 h-auto text-lg transition-all duration-300 hover:scale-[1.02]">
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Button>
          </Link>
          <Link href="/festivals">
            <Button variant="outline" className="w-full border-saffron-200 dark:border-zinc-800 hover:bg-saffron-50 dark:hover:bg-zinc-800 text-maroon-800 dark:text-saffron-400 rounded-xl py-6 h-auto text-lg transition-all duration-300 hover:scale-[1.02]">
              <Calendar className="w-5 h-5 mr-2" />
              View Festivals
            </Button>
          </Link>
        </div>

        {/* Secondary Links/CTA */}
        <div className="pt-8 flex flex-col items-center gap-4">
          <p className="text-sm text-maroon-500 dark:text-zinc-500 italic">
            "By failing to plan, you are planning to fail." — Spiritual Wisdom
          </p>
          <Link href="/donation" className="inline-flex items-center text-saffron-600 hover:text-saffron-700 font-semibold transition-colors">
            <Heart className="w-4 h-4 mr-2" />
            Support Our Mission
          </Link>
        </div>
      </div>
    </main>
  );
}

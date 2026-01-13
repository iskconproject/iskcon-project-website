import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight, Users, BookOpen, Utensils, Music } from 'lucide-react';

const activities = [
  {
    title: 'Deity Worship',
    subtitle: 'Experience the divine through sacred worship',
    description: 'Participate in the daily worship of Lord Jagannath with devotion',
    icon: Music,
    image: '/images/jagannath.svg',
    link: '/activities/deity-worship',
    color: 'from-saffron-500 to-orange-600',
    bgColor: 'bg-orange-50',
  },
  {
    title: 'Devotee Prasadam',
    subtitle: 'Sacred food blessed by the Lord',
    description: 'Partake in the divine prasadam distributed daily at the temple',
    icon: Utensils,
    image: '/images/namaste.svg',
    link: '/activities/prasadam',
    color: 'from-emerald-500 to-teal-600',
    bgColor: 'bg-teal-50',
  },
  {
    title: 'Bhagavatam Classes',
    subtitle: 'Learn eternal wisdom daily',
    description: 'Deepen your understanding of Srimad Bhagavatam teachings',
    icon: BookOpen,
    image: '/images/bhagwatam.png',
    link: '/classes/bhagwatam-class',
    color: 'from-purple-500 to-violet-600',
    bgColor: 'bg-purple-50',
  },
  {
    title: 'Sunday Programs',
    subtitle: 'Weekly spiritual gathering',
    description: 'Join us every Sunday for kirtan, class, and feast',
    icon: Users,
    image: '/images/govardhan.svg',
    link: '/classes/gita-class',
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-50',
  },
];

const Activities = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-saffron-50 via-gold-50/50 to-cream-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-saffron-200/40 to-transparent dark:from-saffron-900/10 rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-radial from-gold-200/40 to-transparent dark:from-gold-900/10 rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="container relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 rounded-full text-saffron-700 dark:text-saffron-400 text-sm font-medium mb-4 shadow-sm">
              <Users className="w-4 h-4" />
              <span>Join the Community</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon-800 dark:text-saffron-500 mb-3">
              Temple <span className="text-saffron-600 dark:text-saffron-400">Activities</span>
            </h2>
            <p className="text-maroon-600 dark:text-zinc-400 max-w-lg">
              Engage in transformative spiritual practices and connect with fellow devotees
            </p>
          </div>

          <Link href="/activities">
            <Button
              variant="outline"
              className="border-saffron-300 dark:border-saffron-700 text-saffron-700 dark:text-saffron-400 hover:bg-white dark:hover:bg-zinc-800 rounded-full px-6 group bg-white/50 dark:bg-zinc-900/50"
            >
              Explore All
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Activities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <Link
              key={index}
              href={activity.link}
              className={cn(
                "group relative bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden",
                "border border-cream-200 dark:border-zinc-800 shadow-md",
                "hover:shadow-xl hover:-translate-y-2",
                "transition-all duration-300"
              )}
            >
              {/* Image Container */}
              <div className={cn("relative h-44 overflow-hidden", activity.bgColor, "dark:bg-zinc-800")}>
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="relative w-28 h-28">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Icon Badge */}
                <div className={cn(
                  "absolute top-3 right-3 w-9 h-9 rounded-lg flex items-center justify-center",
                  "bg-gradient-to-br text-white shadow-md",
                  activity.color
                )}>
                  <activity.icon className="w-4 h-4" />
                </div>

                {/* Decorative Circle */}
                <div className={cn(
                  "absolute -bottom-8 -right-8 w-24 h-24 rounded-full opacity-20",
                  "bg-gradient-to-br",
                  activity.color
                )} />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-maroon-800 dark:text-saffron-500 mb-1 group-hover:text-saffron-600 dark:group-hover:text-saffron-400 transition-colors">
                  {activity.title}
                </h3>
                <p className="text-maroon-500 dark:text-zinc-400 text-sm mb-3">
                  {activity.subtitle}
                </p>
                
                {/* Learn More Link */}
                <span className="inline-flex items-center text-saffron-600 dark:text-saffron-400 text-sm font-medium group-hover:text-saffron-700 dark:group-hover:text-saffron-300">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;

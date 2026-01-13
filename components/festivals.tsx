import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight, Sparkles } from 'lucide-react';

const festivals = [
  {
    name: 'Nityananda Trayodasi',
    description: 'Appearance day of Lord Nityananda',
    image: '/images/nityananda.svg',
    link: '/festivals/nityananda-trayodasi',
    color: 'from-teal-500 to-emerald-600',
    bgColor: 'bg-teal-50',
  },
  {
    name: 'Jagannath Snana Yatra',
    description: 'Sacred bathing ceremony of the Lord',
    image: '/images/jagannath.svg',
    link: '/festivals/jagannath-snana-yatra',
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-50',
  },
  {
    name: 'Ratha Yatra',
    description: 'Grand chariot festival of Lord Jagannath',
    image: '/images/temple.svg',
    link: '/festivals/rath-yatra',
    color: 'from-saffron-500 to-orange-600',
    bgColor: 'bg-saffron-50',
  },
  {
    name: 'Sri Krishna Janmashtami',
    description: 'Appearance day of Lord Krishna',
    image: '/images/janmasthami.svg',
    link: '/festivals/janmashtami',
    color: 'from-purple-500 to-violet-600',
    bgColor: 'bg-purple-50',
  },
  {
    name: 'Sri Radhastami',
    description: 'Appearance day of Srimati Radharani',
    image: '/images/radha_krishna.svg',
    link: '/festivals/radhastami',
    color: 'from-pink-500 to-rose-600',
    bgColor: 'bg-pink-50',
  },
  {
    name: 'Deepavali',
    description: 'Festival of lights celebrating Lord Rama',
    image: '/images/lord_ram.svg',
    link: '/festivals/deepavali',
    color: 'from-amber-500 to-yellow-600',
    bgColor: 'bg-amber-50',
  },
  {
    name: 'Govardhan Puja',
    description: 'Celebrating Krishna lifting Govardhan Hill',
    image: '/images/govardhan.svg',
    link: '/festivals/govardhan-puja',
    color: 'from-emerald-500 to-green-600',
    bgColor: 'bg-emerald-50',
  },
  {
    name: 'Guru Purnima',
    description: 'Honoring the spiritual masters',
    image: '/images/guru.svg',
    link: '/festivals/guru-purnima',
    color: 'from-indigo-500 to-blue-600',
    bgColor: 'bg-indigo-50',
  },
  {
    name: 'Srila Prabhupada Vyasapuja',
    description: 'Appearance day of our Founder Acharya',
    image: '/images/prabhupada_smiling.svg',
    link: '/festivals/srila-prabhupadas-vyasapuja',
    color: 'from-gold-500 to-saffron-600',
    bgColor: 'bg-gold-50',
  },
  {
    name: 'Srila Prabhupada Disappearance',
    description: 'Remembering our beloved Founder Acharya',
    image: '/images/prabhupada.svg',
    link: '/festivals/srila-prabhupadas-disappearance',
    color: 'from-maroon-500 to-red-700',
    bgColor: 'bg-maroon-50',
  },
];

const Festivals = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-cream-50 to-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-saffron-100 rounded-full text-saffron-700 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Celebrate with Us</span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-maroon-800 mb-4">
            Temple <span className="text-saffron-600">Festivals</span>
          </h1>
          <p className="text-maroon-600 max-w-2xl mx-auto text-lg">
            Join us in celebrating the divine festivals throughout the year. 
            Experience the joy of devotion and spiritual bliss.
          </p>
        </div>

        {/* Festivals Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {festivals.map((festival, index) => (
            <Link
              href={festival.link}
              key={index}
              className={cn(
                "group relative bg-white rounded-2xl overflow-hidden",
                "border border-cream-200 shadow-md",
                "hover:shadow-xl hover:-translate-y-2",
                "transition-all duration-300"
              )}
            >
              {/* Image Container */}
              <div className={cn("relative h-40 overflow-hidden", festival.bgColor)}>
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="relative w-24 h-24">
                    <Image
                      src={festival.image}
                      alt={festival.name}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Gradient Accent */}
                <div className={cn(
                  "absolute bottom-0 left-0 right-0 h-1",
                  "bg-gradient-to-r",
                  festival.color
                )} />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-maroon-800 mb-1 group-hover:text-saffron-600 transition-colors line-clamp-1">
                  {festival.name}
                </h3>
                <p className="text-maroon-500 text-sm mb-3 line-clamp-2">
                  {festival.description}
                </p>
                
                {/* Learn More Link */}
                <span className="inline-flex items-center text-saffron-600 text-sm font-medium group-hover:text-saffron-700">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
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

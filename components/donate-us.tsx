import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Heart, ArrowRight, Building2, Utensils, Flower2 } from "lucide-react";
import { cn } from "@/lib/utils";

const donationItems = [
  {
    title: "Temple Donation",
    subtitle: "Support daily temple operations and worship",
    icon: Building2,
    imageURL: "/images/namaste.svg",
    link: "/donation/general-donation",
    gradient: "from-teal-500 to-emerald-600",
    bgColor: "bg-teal-50",
  },
  {
    title: "Nitya Seva",
    subtitle: "Participate in daily deity worship and offerings",
    icon: Flower2,
    imageURL: "/images/lord_jagannath_idols.svg",
    link: "/donation/nitya-seva",
    gradient: "from-saffron-500 to-orange-600",
    bgColor: "bg-saffron-50",
  },
  {
    title: "Temple Projects",
    subtitle: "Contribute to temple development and expansion",
    icon: Utensils,
    imageURL: "/images/temple.svg",
    link: "/donation/projects",
    gradient: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
  },
];

const DonateUs = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-cream-50 to-white dark:from-zinc-950 dark:to-zinc-900 relative">
      {/* Decorative Background */}
      <div className="absolute inset-0 section-pattern opacity-50 dark:opacity-10" />

      <div className="container relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-saffron-100 dark:bg-saffron-900/30 rounded-full text-saffron-700 dark:text-saffron-300 text-sm font-medium mb-4">
              <Heart className="w-4 h-4" />
              <span>Make a Difference</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon-800 dark:text-saffron-500 mb-3">
              Support Our <span className="text-saffron-600 dark:text-saffron-400">Mission</span>
            </h2>
            <p className="text-maroon-600 dark:text-zinc-400 max-w-lg">
              Your generous contribution helps spread Krishna consciousness and maintain the sacred services
            </p>
          </div>

          <Link href="/donation">
            <Button
              variant="outline"
              className="border-saffron-300 dark:border-saffron-700 text-saffron-700 dark:text-saffron-400 hover:bg-saffron-50 dark:hover:bg-saffron-900/20 rounded-full px-6 group dark:bg-transparent"
            >
              View All Options
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Donation Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {donationItems.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className={cn(
                "group relative bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden",
                "border border-cream-200 dark:border-zinc-800 shadow-lg shadow-maroon-900/5 dark:shadow-black/30",
                "hover:shadow-2xl hover:shadow-saffron-500/10 hover:-translate-y-2",
                "transition-all duration-300"
              )}
            >
              {/* Image Container */}
              <div className={cn("relative h-48 overflow-hidden", item.bgColor, "dark:bg-zinc-800/50")}>
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <Image
                    src={item.imageURL}
                    alt={item.title}
                    width={150}
                    height={150}
                    className="object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-lg"
                  />
                </div>
                
                {/* Icon Badge */}
                <div className={cn(
                  "absolute top-4 right-4 w-10 h-10 rounded-xl flex items-center justify-center",
                  "bg-gradient-to-br text-white shadow-lg",
                  item.gradient
                )}>
                  <item.icon className="w-5 h-5" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-maroon-800 dark:text-saffron-500 mb-2 group-hover:text-saffron-600 dark:group-hover:text-saffron-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-maroon-600/80 dark:text-zinc-400 text-sm mb-4">
                  {item.subtitle}
                </p>

                {/* Donate Button */}
                <Button
                  className={cn(
                    "w-full rounded-full font-semibold",
                    "bg-gradient-to-r text-white",
                    item.gradient,
                    "hover:opacity-90 transition-opacity"
                  )}
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Donate Now
                </Button>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className={cn(
                  "absolute -inset-px rounded-3xl bg-gradient-to-r opacity-20",
                  item.gradient
                )} />
              </div>
            </Link>
          ))}
        </div>


      </div>
    </section>
  );
};

export default DonateUs;

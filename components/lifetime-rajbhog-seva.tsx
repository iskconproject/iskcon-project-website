import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Heart, Star, Shield, Users, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: Star,
    title: "Annual Rajbhog Prasadam",
    description: "For your family, once a year for lifetime",
  },
  {
    icon: Users,
    title: "Special Darshan",
    description: "Priority access during major festivals",
  },
  {
    icon: Heart,
    title: "Kitchen Seva",
    description: "Opportunity to serve in Lord's kitchen",
  },
  {
    icon: Shield,
    title: "Temple Ceremonies",
    description: "Participation in special pujas",
  },
];

export default function LifetimeRajbhogSeva() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-cream-50 dark:bg-zinc-950">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/jagannath-mahaprasadam.jpg"
          alt="Jagannath Mahaprasadam"
          fill
          className="object-cover"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-900/95 via-maroon-900/90 to-maroon-900/80 dark:from-black/95 dark:via-black/90 dark:to-black/80" />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-400/20 rounded-full text-gold-300 text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              <span>Limited Opportunity</span>
            </div>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Lifetime Jagannath <br />
              <span className="text-gradient-gold">Rajbhog Seva</span>
            </h2>

            <p className="text-cream-200/90 text-lg mb-8 max-w-lg">
              An eternal connection with Lord Jagannath through His divine prasadam. 
              Receive the supreme blessings of the Lord for you and your family.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-saffron-500 to-gold-500 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">
                      {benefit.title}
                    </h4>
                    <p className="text-cream-300/70 text-xs mt-0.5">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link href="/lifetime-rajbhog-seva">
              <Button
                size="lg"
                className={cn(
                  "px-8 py-6 font-semibold rounded-full text-base",
                  "bg-gradient-to-r from-gold-400 to-saffron-500 text-maroon-900",
                  "hover:from-gold-500 hover:to-saffron-600",
                  "shadow-lg shadow-gold-500/30 hover:shadow-xl",
                  "transition-all duration-300 group"
                )}
              >
                Register Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Right Card */}
          <div className="relative">
            {/* Decorative Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-saffron-500/20 to-gold-500/20 rounded-3xl blur-2xl" />
            
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              {/* Spots Badge */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                Only 365 Spots
              </div>

              <h3 className="font-heading text-2xl font-bold text-white mb-6">
                Program Details
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between py-3 border-b border-white/10">
                  <span className="text-cream-200">Prasadam Type</span>
                  <span className="text-gold-300 font-semibold">Rajbhog Thali</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/10">
                  <span className="text-cream-200">Frequency</span>
                  <span className="text-gold-300 font-semibold">Once per Year</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/10">
                  <span className="text-cream-200">Duration</span>
                  <span className="text-gold-300 font-semibold">Lifetime</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/10">
                  <span className="text-cream-200">Family Members</span>
                  <span className="text-gold-300 font-semibold">Up to 5</span>
                </div>
              </div>

              {/* Price */}
              <div className="bg-gradient-to-r from-saffron-500/20 to-gold-500/20 rounded-2xl p-6 text-center">
                <p className="text-cream-200 text-sm mb-2">One-time Contribution</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl text-gold-300">₹</span>
                  <span className="text-5xl font-bold text-white">51,001</span>
                </div>
                <p className="text-cream-300/70 text-xs mt-2">
                  80G Tax Benefits Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
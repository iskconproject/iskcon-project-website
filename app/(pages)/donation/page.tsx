import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Heart, Building2, Flower2, Utensils, ArrowRight, Shield, CheckCircle } from "lucide-react";
import OfflinePayment from "@/components/offline-payment";

export const metadata: Metadata = {
  title: "Donate | Support Sri Sri Jagannath Temple",
  description: "Support ISKCON Asansol through your generous donations. Contribute to temple operations, nitya seva, and development projects. 80G tax benefits available.",
};

const donationItems = [
  {
    title: "Temple Donation",
    subtitle: "General Temple Support",
    description: "Your contribution supports daily temple operations, deity worship, and maintenance of the sacred space.",
    icon: Building2,
    imageURL: "/images/namaste.svg",
    link: "/donation/general-donation",
    gradient: "from-teal-500 to-emerald-600",
    bgColor: "bg-teal-50",
  },
  {
    title: "Nitya Seva",
    subtitle: "Daily Deity Worship",
    description: "Participate in the daily worship of Lord Jagannath, Baladeva, and Subhadra through regular offerings.",
    icon: Flower2,
    imageURL: "/images/lord_jagannath_idols.svg",
    link: "/donation/nitya-seva",
    gradient: "from-saffron-500 to-orange-600",
    bgColor: "bg-saffron-50",
  },
  {
    title: "Temple Projects",
    subtitle: "Development & Expansion",
    description: "Help us build and expand the temple complex to serve more devotees and spread Krishna consciousness.",
    icon: Utensils,
    imageURL: "/images/temple.svg",
    link: "/donation/projects",
    gradient: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
  },
];

const Donation = () => {
  return (
    <main className="bg-cream-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-maroon-800 to-maroon-900 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-saffron-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500 rounded-full blur-3xl" />
        </div>

        <div className="container relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-400/20 rounded-full text-gold-300 text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            <span>Make a Difference</span>
          </div>

          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Support Our <span className="text-gradient-gold">Sacred Mission</span>
          </h1>

          <p className="text-cream-200/90 max-w-2xl mx-auto text-lg mb-8">
            Your generous contribution helps maintain daily worship, spread Krishna consciousness, 
            and build a spiritual sanctuary for all.
          </p>

          {/* Sanskrit Quote */}
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
            <p className="text-gold-300 text-lg md:text-xl font-medium mb-3 font-devanagari">
              दातव्यमिति यद्दानं दीयतेऽनुपकारिणे |<br />
              देशे काले च पात्रे च तद्दानं सात्त्विकं स्मृतम् || 17.20 ||
            </p>
            <p className="text-cream-200/80 text-sm md:text-base italic">
              "Charity given to a worthy person simply because it is right to give, 
              without consideration of anything in return, at the proper time and in the proper place, 
              is stated to be in the mode of goodness."
            </p>
            <p className="text-gold-400 text-sm mt-2 font-medium">
              — Bhagavad Gita 17.20
            </p>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-maroon-800 mb-3">
              Choose Your <span className="text-saffron-600">Seva</span>
            </h2>
            <p className="text-maroon-600 max-w-lg mx-auto">
              Select a donation category that resonates with your heart
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {donationItems.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className={cn(
                  "group relative bg-white rounded-3xl overflow-hidden",
                  "border border-cream-200 shadow-lg shadow-maroon-900/5",
                  "hover:shadow-2xl hover:shadow-saffron-500/10 hover:-translate-y-2",
                  "transition-all duration-300"
                )}
              >
                {/* Image Container */}
                <div className={cn("relative h-48 overflow-hidden", item.bgColor)}>
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <Image
                      src={item.imageURL}
                      alt={item.title}
                      width={140}
                      height={140}
                      className="object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Icon Badge */}
                  <div className={cn(
                    "absolute top-4 right-4 w-12 h-12 rounded-xl flex items-center justify-center",
                    "bg-gradient-to-br text-white shadow-lg",
                    item.gradient
                  )}>
                    <item.icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-saffron-600 text-sm font-medium mb-1">
                    {item.subtitle}
                  </p>
                  <h3 className="font-heading text-xl font-semibold text-maroon-800 mb-2 group-hover:text-saffron-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-maroon-600/80 text-sm mb-5">
                    {item.description}
                  </p>

                  {/* Donate Button */}
                  <Button
                    className={cn(
                      "w-full rounded-full font-semibold py-5",
                      "bg-gradient-to-r text-white",
                      item.gradient,
                      "hover:opacity-90 transition-opacity group-hover:shadow-lg"
                    )}
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Donate Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Link>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-2 text-maroon-600">
              <Shield className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium">Secure Payments</span>
            </div>
            <div className="flex items-center gap-2 text-maroon-600">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium">80G Tax Benefits</span>
            </div>
            <div className="flex items-center gap-2 text-maroon-600">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium">Instant Receipt</span>
            </div>
            <div className="flex items-center gap-2 text-maroon-600">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium">Transparent Usage</span>
            </div>
          </div>
        </div>
      </section>

      {/* Offline Payment Section */}
      <OfflinePayment className="py-16 md:py-24 bg-gradient-to-b from-white to-cream-100" />
    </main>
  );
};

export default Donation;

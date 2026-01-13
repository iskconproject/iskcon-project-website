import GitaIcon from "@/components/icons/gita-icon";
import PrasadamIcon from "@/components/icons/prasadam-icon";
import RadhaKrishnaIcon from "@/components/icons/radha-krishna-icon";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, BookOpen, Utensils, Music, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Activities | Temple Programs & Spiritual Services",
  description: "Explore various spiritual activities at ISKCON Asansol including deity worship, prasadam distribution, Bhagavatam classes, and Sunday programs.",
};

const activities = [
  {
    title: "Deity Worship",
    subtitle: "Sacred Worship Services",
    description: "Experience the divine through participation in sacred worship ceremonies. Join the daily aratis and witness the loving service to Lord Jagannath.",
    icon: Music,
    image: "/images/jagannath.svg",
    link: "/activities/deity-worship",
    color: "from-saffron-500 to-orange-600",
    bgColor: "bg-saffron-50",
  },
  {
    title: "Devotee Prasadam",
    subtitle: "Sacred Food Distribution",
    description: "Partake in the sanctified prasadam offered to the Lord. Experience the spiritual bliss of honoring the Lord's mercy in the form of food.",
    icon: Utensils,
    image: "/images/namaste.svg",
    link: "/activities/prasadam",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-teal-50",
  },
  {
    title: "Bhagavatam Classes",
    subtitle: "Daily Scripture Study",
    description: "Deepen your understanding of Srimad Bhagavatam through daily classes. Learn the eternal wisdom passed down through the disciplic succession.",
    icon: BookOpen,
    image: "/images/bhagwatam.png",
    link: "/classes/bhagwatam-class",
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50",
  },
  {
    title: "Sunday Programs",
    subtitle: "Weekly Spiritual Gathering",
    description: "Join us every Sunday for an uplifting experience of kirtan, spiritual discourse, and sumptuous feast prasadam with fellow devotees.",
    icon: Users,
    image: "/images/govardhan.svg",
    link: "/classes/gita-class",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
  },
];

const Activities = () => {
  return (
    <main className="bg-cream-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-saffron-50 via-gold-50/50 to-cream-50 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-saffron-200/40 to-transparent rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-radial from-gold-200/40 to-transparent rounded-full -translate-x-1/2 translate-y-1/2" />

        <div className="container relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-saffron-700 text-sm font-medium mb-4 shadow-sm">
              <Sparkles className="w-4 h-4" />
              <span>Engage in Devotion</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-maroon-800 mb-4">
              Temple <span className="text-saffron-600">Activities</span>
            </h1>
            <p className="text-maroon-600 max-w-2xl mx-auto text-lg">
              Our society, guided by the teachings of Srila Prabhupada, is dedicated to providing 
              individuals with the chance to lead a life filled with happiness, peace of mind, 
              and spiritual advancement through God consciousness.
            </p>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <Link
                key={index}
                href={activity.link}
                className={cn(
                  "group relative bg-white rounded-3xl overflow-hidden",
                  "border border-cream-200 shadow-lg",
                  "hover:shadow-2xl hover:-translate-y-1",
                  "transition-all duration-300"
                )}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image Container */}
                  <div className={cn("relative w-full md:w-48 h-48 md:h-auto flex-shrink-0", activity.bgColor)}>
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <div className="relative w-24 h-24 md:w-32 md:h-32">
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
                      "absolute top-4 right-4 md:top-auto md:bottom-4 md:right-4 w-10 h-10 rounded-xl flex items-center justify-center",
                      "bg-gradient-to-br text-white shadow-lg",
                      activity.color
                    )}>
                      <activity.icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 md:p-8">
                    <p className="text-saffron-600 text-sm font-medium mb-1">
                      {activity.subtitle}
                    </p>
                    <h2 className="font-heading text-xl md:text-2xl font-semibold text-maroon-800 mb-3 group-hover:text-saffron-600 transition-colors">
                      {activity.title}
                    </h2>
                    <p className="text-maroon-600/80 mb-4">
                      {activity.description}
                    </p>
                    
                    {/* Learn More Link */}
                    <span className="inline-flex items-center text-saffron-600 font-medium group-hover:text-saffron-700">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-saffron-500 to-gold-500">
        <div className="container text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Begin Your Spiritual Journey?
          </h2>
          <p className="text-saffron-100 max-w-lg mx-auto mb-8">
            Visit our temple and experience the transformative power of Krishna consciousness.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-saffron-600 font-semibold rounded-full hover:bg-cream-50 transition-colors shadow-lg hover:shadow-xl"
          >
            Plan Your Visit
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Activities;

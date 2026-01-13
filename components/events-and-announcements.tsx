"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getDay, getMonthName } from "@/lib/utils";
import { VaishnavEvent } from "@/components/vaishnava-calendar";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface EventsAndAnnouncementsProps {
  calendarEvents: VaishnavEvent[];
}

const EventsAndAnnouncements: React.FC<EventsAndAnnouncementsProps> = ({
  calendarEvents = [],
}) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-maroon-800 via-maroon-900 to-maroon-800 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-saffron-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Featured Image */}
          <div className="relative">
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden">
              {/* Decorative Border */}
              <div className="absolute inset-0 border-2 border-gold-400/30 rounded-3xl z-10 pointer-events-none" />
              
              <Image
                src="/images/govardhan.svg"
                alt="Festival Celebration"
                fill
                className="object-contain p-8 bg-gradient-to-br from-saffron-100 to-gold-100"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-gold-400 to-saffron-500 text-white px-6 py-3 rounded-2xl shadow-xl">
              <p className="text-sm font-medium">Experience Divine Joy</p>
            </div>
          </div>

          {/* Right Side - Events List */}
          <div>
            {/* Section Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-400/20 rounded-full text-gold-300 text-sm font-medium mb-4">
                <Calendar className="w-4 h-4" />
                <span>Vaishnava Calendar</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">
                Upcoming <span className="text-gradient-gold">Events</span>
              </h2>
              <p className="text-cream-200/80">
                Join us in celebrating the divine festivals and auspicious occasions
              </p>
            </div>

            {/* Events List */}
            {calendarEvents.length > 0 ? (
              <div className="space-y-4">
                {calendarEvents.slice(0, 5).map((item, index) => (
                  <div
                    key={index}
                    className={cn(
                      "group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300",
                      "bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10",
                      "hover:border-gold-400/30 hover:shadow-lg hover:shadow-gold-500/10"
                    )}
                  >
                    {/* Date Badge */}
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-saffron-500 to-gold-500 rounded-xl flex flex-col items-center justify-center text-white shadow-lg">
                      <span className="text-2xl font-bold leading-none">
                        {getDay(item.start.toLocaleString())}
                      </span>
                      <span className="text-xs font-medium uppercase tracking-wide">
                        {getMonthName(item.start.toLocaleString())}
                      </span>
                    </div>

                    {/* Event Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-semibold text-lg truncate group-hover:text-gold-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-cream-300/70 text-sm">
                        {item.isEkadasi ? "Ekadasi" : "Festival"}
                      </p>
                    </div>

                    {/* Arrow */}
                    <ArrowRight className="w-5 h-5 text-cream-400/50 group-hover:text-gold-400 group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white/5 rounded-2xl border border-white/10">
                <Sparkles className="w-12 h-12 text-gold-400 mx-auto mb-4" />
                <p className="text-cream-200">
                  No upcoming events at the moment.
                </p>
              </div>
            )}

            {/* View All Button */}
            <div className="mt-8">
              <Link href="/iskcon/vaishnava-calendar">
                <Button
                  size="lg"
                  className={cn(
                    "w-full sm:w-auto px-8 py-6 font-semibold rounded-full",
                    "bg-gradient-to-r from-gold-400 to-saffron-500 text-maroon-900",
                    "hover:from-gold-500 hover:to-saffron-600",
                    "shadow-lg shadow-gold-500/20 hover:shadow-xl hover:shadow-gold-500/30",
                    "transition-all duration-300"
                  )}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  View Vaishnava Calendar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsAndAnnouncements;

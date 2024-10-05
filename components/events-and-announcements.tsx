"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";
import useCalendarApi from "@/app/hooks/useCalendarApi";
import { VaishnavEvent } from "./vaishnava-calendar";
import { getDay, getMonthName } from "@/lib/utils";

const carouselItems = [
  {
    id: 1,
    image: "/placeholder.svg?height=600&width=800",
    alt: "Kathamrita Sindhu Audio Player Advertisement",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=600&width=800",
    alt: "Event Announcement 2",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=600&width=800",
    alt: "Event Announcement 3",
  },
];

const EventsAndAnnouncements = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const { fetchCalendarEventsByMonthAndYear } = useCalendarApi();
  const [calendarEvents, setCalendarEvents] = useState<VaishnavEvent[]>([]);

  const fetchUpcomingCalendarEvents = async (count: number) => {
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();
    const currentDay = new Date().getDate();
    const payload = JSON.stringify({ month: currentMonth, year: currentYear });
    const response = await fetchCalendarEventsByMonthAndYear(payload);
    const sortedEvents = response.events.sort((a, b) => {
        return new Date(a.start).getDate() - new Date(b.start).getDate();
    });

    return sortedEvents
      .filter((event) => {
        return new Date(event.start).getDate() >= currentDay;
      })
      .slice(0, count);
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    if (!api) {
      return;
    }

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, [api]);

  useEffect(() => {
    fetchUpcomingCalendarEvents(5).then((events) => {
      setCalendarEvents(events);
    });
  }, []);

  return (
    <section className="py-16 bg-purple-100">
      <div className="flex flex-col md:flex-row gap-8 container">
        {/* <div className="flex-1">
          <h2 className="text-3xl font-bold text-purple-900 mb-4 text-center uppercase">
            Events and Announcements
          </h2>
          <Carousel setApi={setApi} className="w-full max-w-xs mx-auto">
            <CarouselContent>
              {carouselItems.map((item) => (
                <CarouselItem key={item.id}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          width={400}
                          height={400}
                          className="rounded-lg object-cover"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="py-2 text-center text-sm text-muted-foreground">
            Slide {current} of {count}
          </div>
        </div> */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-purple-900 mb-4 text-center uppercase">
            Upcoming Events
          </h2>
          {calendarEvents.length > 0 ? (
            <div className="space-y-4">
              {calendarEvents.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-purple-200 p-4 rounded-lg"
                >
                  <div className="bg-purple-900 text-white p-2 rounded-lg text-center min-w-[60px]">
                    <div className="text-2xl font-bold">
                      {getDay(item.start.toLocaleString())}
                    </div>
                    <div className="text-sm">
                      {getMonthName(item.start.toLocaleString())}
                    </div>
                  </div>
                  <div className="text-purple-900 font-semibold">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-purple-900">
              No upcoming events found.
            </div>
          )}
          <div className="mt-6 text-center">
            <Link href={"/iskcon/vaishnava-calendar"}>
              <Button
                variant="outline"
                className="bg-purple-900 text-white uppercase"
              >
                View Vaishnava Calendar
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsAndAnnouncements;

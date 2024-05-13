import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const upcomingEvents = [
  {
    name: "Jagannath Snana Yatra 2024",
    description: ` <p>
    The Snana Yatra is a bathing festival celebrated on the Purnima (full moon day) of the Hindu month of Jyeshtha. 
    It is an important festival of the Jagannath devotees. It is the birth day of Lord Jagannath.</p>`,
    image: "/images/jagannath.svg",
    link: "/festivals/snan-yatra",
    className: "bg-teal-50",
  },
  {
    name: "Ratha Yatra 2024",
    description: ` <p>
    Ratha Yatra is a Hindu festival associated with Lord Jagannath to commemorate his annual 
    visit to Gundicha Temple via Mausi Maa Temple (maternal aunt's home) near Saradha Bali, Puri. </p>`,
    image: "/images/temple.svg",
    link: "/festivals/lord_jagannath_idols.svg",
    className: "bg-orange-50",
  },
];

const Events = () => {
  return (
    <section>
      <div className="container py-4 px-16">
        <h1 className="text-xl md:text-4xl font-semibold text-slate-600 text-center">
          Upcoming Events
        </h1>
        <div className="text-center">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full mx-auto mt-12"
          >
            <CarouselContent>
              {upcomingEvents.map((event, index) => (
                <CarouselItem key={index} className="w-full">
                  <div className={cn(event.className)}>
                    <Card className={cn(event.name)}>
                      <CardContent
                        className={cn(
                          "flex aspect-square items-center justify-center p-6 h-[250px] w-full",
                          event.className
                        )}
                      >
                        <Link
                          href={event.link}
                          className="flex flex-col items-center justify-center w-full h-full"
                        >
                          <div className="flex gap-4 items-center justify-between">
                            <div className="w-1/4">
                              <Image
                                src={event.image}
                                alt={event.name}
                                width={200}
                                height={200}
                                className="object-contain p-4"
                              />
                            </div>
                            <div className="w-3/4 text-left h-full">
                              <h2 className="text-lg font-semibold text-gray-600 mt-4">
                                {event.name}
                              </h2>
                              <div
                                className="text-sm text-gray-500 mt-8 max-w-md"
                                dangerouslySetInnerHTML={{
                                  __html: event.description,
                                }}
                              ></div>
                            </div>
                          </div>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <Button className="mt-8 rounded-full">
            <Link href="/festivals">View All Events</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Events;

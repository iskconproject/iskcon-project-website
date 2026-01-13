import { Metadata } from "next";
import Hero from "@/components/hero";
import DeityDarshanSection from "@/components/deity-darshan-section";
import EventsAndAnnouncements from "@/components/events-and-announcements";
import LifetimeRajbhogSeva from "@/components/lifetime-rajbhog-seva";
import DonateUs from "@/components/donate-us";
import Activities from "@/components/activities";
import SpiritualQuoteSection from "@/components/spiritual-quote-section";
import Social from "@/components/social";
import { getCalendarEvents } from "@/lib/calendar.server";

export const metadata: Metadata = {
  title: "ISKCON Asansol | Sri Sri Jagannath Temple - Donate & Experience Divine Darshan",
  description:
    "Welcome to ISKCON Asansol - Sri Sri Jagannath Temple. Experience divine darshan, participate in festivals, and support our temple through donations. Founded by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada. Hare Krishna!",
  creator: "ISKCON Asansol",
  keywords: [
    "iskcon",
    "asansol", 
    "hare krishna",
    "iskcon asansol",
    "jagannath temple",
    "donate",
    "festivals",
    "darshan",
    "krishna consciousness",
    "spiritual",
  ],
  openGraph: {
    title: "ISKCON Asansol | Sri Sri Jagannath Temple",
    description:
      "Experience the divine presence of Lord Jagannath at ISKCON Asansol. Join us for darshan, festivals, and spiritual programs.",
    url: "https://iskconproject.com/",
    type: "website",
    siteName: "ISKCON Asansol",
    images: [
      {
        url: "/images/jagannath_deity.jpg",
        width: 1200,
        height: 630,
        alt: "Sri Sri Jagannath Temple - ISKCON Asansol",
      },
    ],
  },
};

const jsonLD = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HinduTemple",
          name: "ISKCON Asansol - Sri Sri Jagannath Temple",
          alternateName: "ISKCON Project",
          url: "https://iskconproject.com/",
          logo: "https://iskconproject.com/images/logo/iskcon-asansol-logo.svg",
          image: "https://iskconproject.com/images/jagannath_deity.jpg",
          description: "Sri Sri Jagannath Temple managed by ISKCON Asansol. A place for spiritual growth and devotion.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "NH2 Bye-Pass, Garui",
            addressLocality: "Asansol",
            addressRegion: "West Bengal",
            postalCode: "713341",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "23.6888",
            longitude: "86.9661",
          },
          telephone: "+919433320314",
          email: "iskconasansol@gmail.com",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              opens: "04:30",
              closes: "12:30",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              opens: "16:30",
              closes: "20:45",
            },
          ],
          sameAs: [
            "https://www.facebook.com/people/Iskcon-Asansol/100072286610743/",
            "https://www.instagram.com/iskconasansol/",
            "https://www.youtube.com/@ISKCON699/",
          ],
        }),
      }}
    />
  );
};

export default async function Home() {
  const calendarEvents = await getCalendarEvents();
  
  return (
    <>
      {jsonLD()}
      
      {/* Hero Section - Full Screen */}
      <Hero />
      
      {/* Deity Darshan - Experience the Divine */}
      <DeityDarshanSection />
      
      {/* Upcoming Events & Festivals */}
      <EventsAndAnnouncements calendarEvents={calendarEvents} />
      
      {/* Lifetime Rajbhog Seva - Premium Offering */}
      <LifetimeRajbhogSeva />
      
      {/* Donation Options */}
      <DonateUs />
      
      {/* Temple Activities */}
      <Activities />
      
      {/* Spiritual Quote - Prabhupada's Wisdom */}
      <SpiritualQuoteSection />
      
      {/* Social Media & Connect */}
      <Social />
    </>
  );
}

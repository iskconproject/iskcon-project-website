import Activities from "@/components/activities";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Activities | Temple Programs & Spiritual Services",
  description: "Explore various spiritual activities at ISKCON Asansol including deity worship, prasadam distribution, Bhagavatam classes, and Sunday programs.",
};

export default function ActivitiesPage() {
  return (
    <main className="bg-cream-50 dark:bg-zinc-950">
      {/* Hero Section - Matching the style but specific for this page if needed, 
          or we can let Activities component handle it. 
          The Activities component I wrote has a section header. 
          If looking at the original page.tsx, it had a big hero section.
          I will keep the page's hero section and render the Activities grid below it, 
          OR I can modify Activities component to be more flexible.
          
          However, the user said "make it configurable", so the list itself is what matters most.
          The `components/activities.tsx` fetches data. 
          I will reuse it. But `components/activities.tsx` has its own header "Temple Activities".
          Original page had "Temple Activities" in hero.
          
          I'll use the `Activities` component. It serves the purpose.
          But `components/activities.tsx` renders a <section>, so it fits inside <main>.
      */}
      
       <Activities />

      {/* CTA Section - Preserving the CTA from the original page */}
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
}

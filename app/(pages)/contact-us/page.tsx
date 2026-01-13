'use client';

import { EnvelopeIcon, PhoneIcon } from "@/components/icons";
import MapEmbed from "@/components/map-embed";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Send } from "lucide-react";
import Image from "next/image";

const ContactUs = () => {
  return (
    <main className="bg-cream-50 dark:bg-zinc-950 transition-colors duration-300">
      <PageHeader 
        title="Contact Us" 
        subtitle="We'd love to hear from you. Reach out to us for any queries or spiritual guidance."
        className="bg-maroon-900"
      >
        <div className="absolute inset-0 opacity-20">
           <Image 
             src="/images/temple.svg" 
             fill 
             className="object-cover" 
             alt="Temple Background" 
           />
        </div>
      </PageHeader>

      <section className="py-16 md:py-24 container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-3xl font-bold text-maroon-800 dark:text-saffron-500 mb-6">
                Get in Touch
              </h2>
              <p className="text-maroon-600 dark:text-zinc-400 text-lg leading-relaxed">
                Whether you have a question about our festivals, daily darshan timings, 
                or want to know more about Krishna consciousness, we are here to help.
              </p>
            </div>

            <div className="grid gap-6">
              {[
                {
                  icon: PhoneIcon,
                  title: "Phone",
                  content: "+91 9433320314",
                  href: "tel:+919433320314",
                  color: "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                },
                {
                  icon: EnvelopeIcon,
                  title: "Email",
                  content: "iskconasansol@gmail.com",
                  href: "mailto:iskconasansol@gmail.com",
                  color: "bg-saffron-50 text-saffron-600 dark:bg-saffron-900/20 dark:text-saffron-400"
                },
                {
                  icon: MapPin,
                  title: "Address",
                  content: "Garui Village, N.H.2 Bye Pass, Beside Old Toll Tax, Asansol, West Bengal, PIN: 713341",
                  href: "https://maps.google.com",
                  color: "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-cream-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`p-3 rounded-xl ${item.color}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-maroon-800 dark:text-zinc-200 mb-1">{item.title}</h3>
                    <a 
                      href={item.href} 
                      className="text-maroon-600 dark:text-zinc-400 hover:text-saffron-600 dark:hover:text-saffron-400 transition-colors"
                    >
                      {item.content}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Legal Info */}
            <div className="p-6 bg-cream-100 dark:bg-zinc-900 rounded-2xl border border-cream-200 dark:border-zinc-800 text-sm text-maroon-600 dark:text-zinc-500">
              <h4 className="font-semibold text-maroon-800 dark:text-zinc-300 mb-2">Legal Information</h4>
              <p>Merchant Legal entity name: NAMHATTA DEVELOPMENT TRUST</p>
              <p className="mt-1">
                Registered & Operational Address: Garui Village, N.H.2 Bye Pass, Beside Old Toll Tax, Asansol, West Bengal, PIN: 713341
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-cream-200 dark:border-zinc-800 shadow-lg">
            <h3 className="font-heading text-2xl font-bold text-maroon-800 dark:text-saffron-500 mb-6">
              Send a Message
            </h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-maroon-700 dark:text-zinc-300">Name</label>
                  <Input id="name" placeholder="Your name" className="bg-cream-50 dark:bg-zinc-950 border-cream-200 dark:border-zinc-800 text-maroon-900 dark:text-zinc-100 placeholder:text-maroon-300 dark:placeholder:text-zinc-700" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-maroon-700 dark:text-zinc-300">Phone</label>
                  <Input id="phone" placeholder="Your mobile number" className="bg-cream-50 dark:bg-zinc-950 border-cream-200 dark:border-zinc-800 text-maroon-900 dark:text-zinc-100 placeholder:text-maroon-300 dark:placeholder:text-zinc-700" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-maroon-700 dark:text-zinc-300">Email</label>
                <Input id="email" type="email" placeholder="your@email.com" className="bg-cream-50 dark:bg-zinc-950 border-cream-200 dark:border-zinc-800 text-maroon-900 dark:text-zinc-100 placeholder:text-maroon-300 dark:placeholder:text-zinc-700" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-maroon-700 dark:text-zinc-300">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="How can we help you?" 
                  className="min-h-[150px] bg-cream-50 dark:bg-zinc-950 border-cream-200 dark:border-zinc-800 text-maroon-900 dark:text-zinc-100 placeholder:text-maroon-300 dark:placeholder:text-zinc-700"
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-saffron-500 to-gold-500 hover:from-saffron-600 hover:to-gold-600 text-white font-semibold py-6 rounded-xl shadow-lg shadow-saffron-500/20">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 md:mt-24">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center text-maroon-800 dark:text-saffron-500 mb-8">
            Visit Our Temple
          </h2>
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-800 h-[400px] md:h-[500px]">
             <MapEmbed width="100%" height="100%" className="h-full" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;

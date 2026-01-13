import Image from 'next/image';
import Link from 'next/link';
import { 
  Clock, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Youtube,
  Heart,
  ExternalLink
} from 'lucide-react';
import MahamantraMarquee from './mahamantra-marquee';

const templeSchedule = [
  { time: '4:30 AM', name: 'Mangala Arati' },
  { time: '5:05 AM', name: 'Tulsi Arati' },
  { time: '7:15 AM', name: 'Shringar Arati' },
  { time: '7:45 AM', name: 'Guru Puja' },
  { time: '12:00 PM', name: 'Raj Bhog Arati' },
  { time: '4:30 PM', name: 'Utthapana Arati' },
  { time: '6:30 PM', name: 'Sandhya Arati' },
  { time: '8:30 PM', name: 'Shayan Arati' },
];

const quickLinks = [
  { name: 'Donation', href: '/donation' },
  { name: 'Festivals', href: '/festivals' },
  { name: 'Activities', href: '/activities' },
  { name: 'Vaishnava Calendar', href: '/iskcon/vaishnava-calendar' },
  { name: 'Membership', href: '/members' },
  { name: 'Learn from Prabhupada', href: '/learn-from-prabhupada' },
];

const aboutLinks = [
  { name: 'History', href: '/iskcon/history' },
  { name: 'Philosophy', href: '/iskcon/philosophy' },
  { name: 'Founder Acharya', href: '/iskcon/founder' },
  { name: 'Contact Us', href: '/contact-us' },
];

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/people/Iskcon-Asansol/100072286610743/',
    icon: Facebook,
    color: 'hover:text-blue-600 hover:bg-blue-50',
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@ISKCON699/',
    icon: Youtube,
    color: 'hover:text-red-600 hover:bg-red-50',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/iskconasansol/',
    icon: Instagram,
    color: 'hover:text-pink-600 hover:bg-pink-50',
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-cream-50 to-cream-100 dark:from-zinc-950 dark:to-zinc-950 border-t border-cream-200 dark:border-zinc-800">
      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-saffron-400 via-gold-400 to-saffron-400" />

      {/* Mahamantra Marquee */}
      <MahamantraMarquee className="py-6 text-lg text-saffron-600 dark:text-saffron-500 font-medium" />

      {/* Main Footer Content */}
      <div className="container py-12 md:py-16">
        <div className="grid gap-10 md:gap-8 lg:grid-cols-4">
          {/* Temple Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 group mb-6">
              <div className="relative w-14 h-14">
                <Image
                  src="/images/logo/iskcon-asansol-logo.svg"
                  alt="ISKCON Asansol"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-maroon-800 dark:text-saffron-500">
                  ISKCON Asansol
                </h3>
                <p className="text-xs text-maroon-600 dark:text-zinc-400">
                  International Society for Krishna Consciousness
                </p>
              </div>
            </Link>

            <address className="not-italic text-sm text-maroon-600 dark:text-zinc-400 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-saffron-500 mt-0.5 flex-shrink-0" />
                <p>
                  NH2 Bye-Pass, Garui,<br />
                  Asansol, West Bengal 713341,<br />
                  India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-saffron-500 flex-shrink-0" />
                <a href="tel:+919433320314" className="hover:text-saffron-600 dark:hover:text-saffron-400 transition-colors">
                  +91 94333 20314
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-saffron-500 flex-shrink-0" />
                <a href="mailto:iskconasansol@gmail.com" className="hover:text-saffron-600 dark:hover:text-saffron-400 transition-colors">
                  iskconasansol@gmail.com
                </a>
              </div>
            </address>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-full bg-white dark:bg-zinc-900 border border-cream-200 dark:border-zinc-800 text-maroon-400 dark:text-zinc-500 transition-all duration-300 ${social.color} shadow-sm hover:shadow-md`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-maroon-800 dark:text-saffron-500 mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-saffron-400 to-gold-400 rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-maroon-600 dark:text-zinc-400 hover:text-saffron-600 dark:hover:text-saffron-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-saffron-300 group-hover:bg-saffron-500 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-maroon-800 dark:text-saffron-500 mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-saffron-400 to-gold-400 rounded-full" />
              About Us
            </h4>
            <ul className="space-y-2.5">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-maroon-600 dark:text-zinc-400 hover:text-saffron-600 dark:hover:text-saffron-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-saffron-300 group-hover:bg-saffron-500 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Temple Timings */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-maroon-800 dark:text-saffron-500 mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-saffron-400 to-gold-400 rounded-full" />
              Temple Schedule
            </h4>
            <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 border border-cream-200 dark:border-zinc-800 shadow-sm">
              <ul className="space-y-2">
                {templeSchedule.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between text-sm py-1.5 border-b border-cream-100 dark:border-zinc-800 last:border-0"
                  >
                    <span className="text-maroon-700 dark:text-zinc-300 font-medium">{item.name}</span>
                    <span className="text-saffron-600 dark:text-saffron-400 font-semibold flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      {item.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Donate Banner */}
        <div className="mt-12 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-saffron-500 via-saffron-600 to-gold-500 dark:from-saffron-600 dark:via-saffron-700 dark:to-gold-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern-lotus.svg')] opacity-10" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-heading text-xl md:text-2xl font-bold mb-1">
                Support the Temple
              </h4>
              <p className="text-saffron-100 text-sm md:text-base">
                Your donation helps maintain daily worship and spiritual programs
              </p>
            </div>
            <Link
              href="/donation"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-saffron-600 font-semibold rounded-full hover:bg-cream-50 transition-colors shadow-lg hover:shadow-xl"
            >
              <Heart className="w-5 h-5" />
              Donate Now
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream-200 dark:border-zinc-800 bg-cream-100/50 dark:bg-zinc-950">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-maroon-500 dark:text-zinc-500">
            <p>© {currentYear} ISKCON Asansol. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link href="/terms" className="hover:text-saffron-600 dark:hover:text-saffron-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="hover:text-saffron-600 dark:hover:text-saffron-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/refund-cancellation" className="hover:text-saffron-600 dark:hover:text-saffron-400 transition-colors">
                Refund Policy
              </Link>
              <Link href="/contact-us" className="hover:text-saffron-600 dark:hover:text-saffron-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

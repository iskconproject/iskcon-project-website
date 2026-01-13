import Link from 'next/link';
import { Facebook, Instagram, Youtube, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const socialLinks = [
  {
    name: 'Facebook',
    handle: '@IskconAsansol',
    description: 'Daily updates and temple news',
    href: 'https://www.facebook.com/people/Iskcon-Asansol/100072286610743/',
    icon: Facebook,
    color: 'from-blue-500 to-blue-600',
    hoverColor: 'hover:bg-blue-50',
  },
  {
    name: 'YouTube',
    handle: '@ISKCON699',
    description: 'Watch kirtans and lectures',
    href: 'https://www.youtube.com/@ISKCON699/',
    icon: Youtube,
    color: 'from-red-500 to-red-600',
    hoverColor: 'hover:bg-red-50',
  },
  {
    name: 'Instagram',
    handle: '@iskconasansol',
    description: 'Photos from temple activities',
    href: 'https://www.instagram.com/iskconasansol/',
    icon: Instagram,
    color: 'from-pink-500 to-purple-600',
    hoverColor: 'hover:bg-pink-50',
  },
];

const Social = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-cream-100">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon-800 mb-3">
            Stay <span className="text-saffron-600">Connected</span>
          </h2>
          <p className="text-maroon-600 max-w-lg mx-auto">
            Follow us on social media for daily inspiration, temple updates, and spiritual content
          </p>
        </div>

        {/* Social Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group relative bg-white rounded-2xl p-6",
                "border border-cream-200 shadow-md",
                "hover:shadow-xl hover:-translate-y-1",
                "transition-all duration-300",
                social.hoverColor
              )}
            >
              {/* Icon */}
              <div className={cn(
                "w-14 h-14 rounded-xl flex items-center justify-center mb-4",
                "bg-gradient-to-br text-white shadow-lg",
                social.color
              )}>
                <social.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-semibold text-maroon-800 mb-1">
                {social.name}
              </h3>
              <p className="text-saffron-600 font-medium text-sm mb-2">
                {social.handle}
              </p>
              <p className="text-maroon-500 text-sm">
                {social.description}
              </p>

              {/* External Link Icon */}
              <ExternalLink className="absolute top-6 right-6 w-4 h-4 text-cream-400 group-hover:text-saffron-500 transition-colors" />
            </a>
          ))}
        </div>

        {/* Newsletter Signup (Optional - placeholder for future) */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-saffron-500 to-gold-500 rounded-2xl p-8 text-center text-white">
            <h3 className="font-heading text-2xl font-bold mb-2">
              Join Our Temple Family
            </h3>
            <p className="text-saffron-100 mb-6">
              Visit us at ISKCON Asansol and experience the divine presence of Lord Jagannath
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-saffron-600 font-semibold rounded-full hover:bg-cream-50 transition-colors shadow-lg"
            >
              Get Directions
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;

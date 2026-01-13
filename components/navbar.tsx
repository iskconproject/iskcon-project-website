'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ChevronDown, Menu, X, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ModeToggle } from '@/components/theme-toggle';
import { Logo } from '@/components/logo';

const navigationItems = [
  {
    title: 'About',
    items: [
      { name: 'History', href: '/iskcon/history', description: 'The journey of ISKCON worldwide' },
      { name: 'Philosophy', href: '/iskcon/philosophy', description: 'Core teachings of Krishna consciousness' },
      { name: 'Founder Acharya', href: '/iskcon/founder', description: 'Srila Prabhupada\'s divine mission' },
      { name: 'Vaishnava Calendar', href: '/iskcon/vaishnava-calendar', description: 'Sacred dates and festivals' },
    ],
  },
];

const quickLinks = [
  { name: 'Activities', href: '/activities' },
  { name: 'Festivals', href: '/festivals' },
  { name: 'Our Members', href: 'https://members.iskconproject.com', external: true },
  ];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar - Mahamantra */}
      <div className="bg-maroon-800 text-gold-300 py-1.5 text-center text-sm font-medium tracking-wide hidden md:block dark:bg-maroon-950 dark:text-gold-400">
        <span className="animate-pulse">🙏</span>
        <span className="mx-4">
          Hare Krishna Hare Krishna Krishna Krishna Hare Hare • Hare Rama Hare Rama Rama Rama Hare Hare
        </span>
        <span className="animate-pulse">🙏</span>
      </div>

      {/* Main Navigation */}
      <nav
        className={cn(
          'w-full sticky top-0 z-50 transition-all duration-300 border-b border-transparent',
          isScrolled
            ? 'bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md shadow-lg shadow-saffron-500/5 dark:shadow-black/20 dark:border-zinc-800'
            : 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm'
        )}
      >
        <div className="container mx-auto">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 md:w-14 md:h-14 transition-transform group-hover:scale-105 text-maroon-800 dark:text-saffron-500">
                <Logo className="w-full h-full text-current" />
              </div>
              <div className="hidden sm:block">
                <h1 className="font-heading text-lg md:text-xl font-semibold text-maroon-800 dark:text-saffron-500 leading-tight">
                  ISKCON Asansol
                </h1>
                <p className="text-xs text-maroon-600/70 dark:text-zinc-400 font-medium">
                  Sri Sri Jagannath Temple
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              <NavigationMenu>
                <NavigationMenuList className="gap-1">
                  {/* Home */}
                  <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink className={cn(
                        "px-4 py-2 text-sm font-medium text-maroon-700 dark:text-zinc-300 hover:text-saffron-600 dark:hover:text-saffron-400 transition-colors rounded-lg hover:bg-saffron-50 dark:hover:bg-zinc-900"
                      )}>
                        Home
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  {/* About Dropdown */}
                  {navigationItems.map((item) => (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuTrigger className="px-4 py-2 text-sm font-medium text-maroon-700 dark:text-zinc-300 hover:text-saffron-600 dark:hover:text-saffron-400 bg-transparent hover:bg-saffron-50 dark:hover:bg-zinc-900 data-[state=open]:bg-saffron-50 dark:data-[state=open]:bg-zinc-900">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-1 p-4 bg-white dark:bg-zinc-950 rounded-xl shadow-xl border border-cream-200 dark:border-zinc-800">
                          {item.items.map((subItem) => (
                            <li key={subItem.name}>
                              <Link href={subItem.href} legacyBehavior passHref>
                                <NavigationMenuLink
                                  className={cn(
                                    "block select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors",
                                    "hover:bg-gradient-to-r hover:from-saffron-50 hover:to-gold-50",
                                    "dark:hover:from-zinc-900 dark:hover:to-zinc-900",
                                    "focus:bg-saffron-50"
                                  )}
                                >
                                  <div className="text-sm font-semibold text-maroon-800 dark:text-saffron-400 mb-1">
                                    {subItem.name}
                                  </div>
                                  <p className="text-xs text-maroon-600/70 dark:text-zinc-400 line-clamp-1">
                                    {subItem.description}
                                  </p>
                                </NavigationMenuLink>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ))}

                  {/* Quick Links */}
                  {quickLinks.map((link) => (
                    <NavigationMenuItem key={link.name}>
                      <Link
                        href={link.href}
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink
                          className={cn(
                            "px-4 py-2 text-sm font-medium text-maroon-700 dark:text-zinc-300 hover:text-saffron-600 dark:hover:text-saffron-400 transition-colors rounded-lg hover:bg-saffron-50 dark:hover:bg-zinc-900"
                          )}
                          target={link.external ? '_blank' : undefined}
                          rel={link.external ? 'noopener noreferrer' : undefined}
                        >
                          {link.name}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
              
              <div className="ml-2 flex items-center gap-3">
                <ModeToggle />
                {/* Donate CTA */}
                <Link href="/donation">
                  <Button
                    className={cn(
                      "relative overflow-hidden px-6 py-2 font-semibold text-white rounded-full",
                      "bg-gradient-to-r from-saffron-500 via-saffron-600 to-saffron-500",
                      "hover:shadow-lg hover:shadow-saffron-500/30",
                      "transition-all duration-300 ease-out",
                      "group"
                    )}
                  >
                    <Heart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    <span>Donate</span>
                  </Button>
                </Link>
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="lg:hidden flex items-center gap-2">
              <ModeToggle />
              <button
                className="p-2 text-maroon-700 dark:text-white hover:text-saffron-600 hover:bg-saffron-50 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden absolute top-full left-0 right-0 bg-white/98 dark:bg-zinc-950/98 backdrop-blur-md border-t border-cream-200 dark:border-zinc-800 shadow-xl transition-all duration-300 overflow-hidden",
            isMobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="container py-4 space-y-4">
            {/* Quick Links */}
            <div className="space-y-1">
              <Link
                href="/"
                className="block px-4 py-3 text-maroon-700 dark:text-zinc-200 font-medium hover:bg-saffron-50 dark:hover:bg-zinc-900 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 text-maroon-700 dark:text-zinc-200 font-medium hover:bg-saffron-50 dark:hover:bg-zinc-900 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* About Section */}
            <div className="border-t border-cream-200 dark:border-zinc-800 pt-4">
              <p className="px-4 text-xs font-semibold text-maroon-500 dark:text-zinc-500 uppercase tracking-wider mb-2">
                About ISKCON
              </p>
              {navigationItems[0].items.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2.5 text-maroon-600 dark:text-zinc-400 hover:bg-saffron-50 dark:hover:bg-zinc-900 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Donate Button */}
            <div className="border-t border-cream-200 dark:border-zinc-800 pt-4 px-4">
              <Link href="/donation" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-saffron-500 to-gold-500 text-white font-semibold py-3 rounded-full">
                  <Heart className="w-4 h-4 mr-2" />
                  Donate Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

"use client";

import CurrencyRupeeIcon from "@/components/icons/currency-rupee-icon";
import HomeIcon from "@/components/icons/home-icon";
import SparklesIcon from "@/components/icons/sparkles-icon";
import Link from "next/link";
import { X, Calendar, Heart, MoreHorizontal } from "lucide-react";
import { useState } from "react";
import FireIcon from "./icons/fire-icon";
import useViewport from "@/app/hooks/useViewport";
import { cn } from "@/lib/utils";

const moreItems = [
  { name: "History", href: "/iskcon/history" },
  { name: "Founder", href: "/iskcon/founder" },
  { name: "Philosophy", href: "/iskcon/philosophy" },
  { name: "Vaishnava Calendar", href: "/iskcon/vaishnava-calendar" },
  { name: "Membership", href: "/members" },
  { name: "Learn from Prabhupada", href: "/learn-from-prabhupada" },
  { name: "Contact Us", href: "/contact-us" },
];

const navItems = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Activities", href: "/activities", icon: SparklesIcon },
  { name: "Donate", href: "/donation", icon: Heart, highlight: true },
  { name: "Festivals", href: "/festivals", icon: FireIcon },
];

const MobileNav = () => {
  const [showMoreSection, setShowMoreSection] = useState(false);
  const { isMobile } = useViewport();

  if (!isMobile) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-maroon-900/60 backdrop-blur-sm z-40 transition-opacity duration-300",
          showMoreSection ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setShowMoreSection(false)}
      />

      {/* More Menu Drawer */}
      <div
        className={cn(
          "fixed bottom-[72px] left-0 right-0 bg-white rounded-t-3xl shadow-2xl z-50 transition-transform duration-300 ease-out",
          showMoreSection ? "translate-y-0" : "translate-y-full"
        )}
      >
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-12 h-1 bg-cream-300 rounded-full" />
        </div>

        {/* Header */}
        <div className="flex justify-between items-center px-6 py-3 border-b border-cream-100">
          <h3 className="font-heading text-lg font-semibold text-maroon-800">
            More Options
          </h3>
          <button
            onClick={() => setShowMoreSection(false)}
            className="p-2 text-maroon-400 hover:text-maroon-600 hover:bg-cream-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Links */}
        <div className="px-4 py-4 space-y-1 max-h-[60vh] overflow-y-auto">
          {moreItems.map((item) => (
            <Link
              href={item.href}
              key={item.name}
              className="flex items-center gap-3 px-4 py-3 text-maroon-700 hover:bg-gradient-to-r hover:from-saffron-50 hover:to-gold-50 rounded-xl transition-colors"
              onClick={() => setShowMoreSection(false)}
            >
              <span className="w-2 h-2 rounded-full bg-saffron-400" />
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 lg:hidden bg-white/95 backdrop-blur-md border-t border-cream-200 z-50 safe-area-pb">
        <div className="flex justify-around items-center h-[72px] px-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 py-2 px-4 rounded-xl transition-all duration-200",
                item.highlight
                  ? "text-white"
                  : "text-maroon-500 hover:text-saffron-600 hover:bg-saffron-50"
              )}
            >
              {item.highlight ? (
                <span className="flex items-center justify-center w-12 h-12 -mt-6 bg-gradient-to-br from-saffron-500 to-gold-500 rounded-full shadow-lg shadow-saffron-500/30">
                  <item.icon className="w-5 h-5" />
                </span>
              ) : (
                <item.icon className="w-5 h-5" />
              )}
              <span className={cn(
                "text-xs font-medium",
                item.highlight && "text-saffron-600 -mt-1"
              )}>
                {item.name}
              </span>
            </Link>
          ))}

          {/* More Button */}
          <button
            onClick={() => setShowMoreSection(!showMoreSection)}
            className={cn(
              "flex flex-col items-center justify-center gap-1 py-2 px-4 rounded-xl transition-all duration-200",
              showMoreSection
                ? "text-saffron-600 bg-saffron-50"
                : "text-maroon-500 hover:text-saffron-600 hover:bg-saffron-50"
            )}
          >
            <MoreHorizontal className="w-5 h-5" />
            <span className="text-xs font-medium">More</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;

import type { Metadata } from "next";
import { Playfair_Display, Inter, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import MobileNav from "@/components/mobile_menu";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import SchemaMarkup from "@/components/seo/schema-markup";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const notoBengali = Noto_Sans_Bengali({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600"],
  variable: "--font-bengali",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ISKCON Asansol | Sri Sri Jagannath Temple",
    template: "%s | ISKCON Asansol",
  },
  description:
    "Welcome to ISKCON Asansol - Sri Sri Jagannath Temple. Experience the divine presence of Lord Jagannath, Baladeva, and Subhadra. Join us for daily darshan, festivals, and spiritual programs. Founded by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada.",
  metadataBase: new URL("https://iskconproject.com"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "ISKCON Asansol",
    "Jagannath Temple",
    "Hare Krishna",
    "Srila Prabhupada",
    "Krishna Consciousness",
    "Bhakti Yoga",
    "Hindu Temple",
    "Spiritual",
    "Donation",
    "Prasadam",
  ],
  authors: [{ name: "ISKCON Asansol" }],
  creator: "ISKCON Asansol",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://iskconproject.com",
    siteName: "ISKCON Asansol",
    title: "ISKCON Asansol | Sri Sri Jagannath Temple",
    description:
      "Experience the divine presence of Lord Jagannath at ISKCON Asansol. Join us for daily darshan, festivals, and spiritual programs.",
    images: [
      {
        url: "/images/jagannath_deity.jpg",
        width: 1200,
        height: 630,
        alt: "Sri Sri Jagannath Temple - ISKCON Asansol",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ISKCON Asansol | Sri Sri Jagannath Temple",
    description:
      "Experience the divine presence of Lord Jagannath at ISKCON Asansol.",
    images: ["/images/jagannath_deity.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`${playfair.variable} ${inter.variable} ${notoBengali.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-cream-50 text-maroon-900">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SchemaMarkup />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <MobileNav />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

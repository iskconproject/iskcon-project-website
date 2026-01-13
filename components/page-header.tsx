import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PageHeaderProps {
  children?: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

const PageHeader = ({ children, className, title, subtitle }: PageHeaderProps) => {
  if (children) {
    return (
      <header className={cn("relative min-h-[200px] overflow-hidden", className)}>
        {children}
      </header>
    );
  }

  return (
    <header
      className={cn(
        "relative py-16 md:py-20 bg-gradient-to-b from-maroon-800 to-maroon-900 text-white overflow-hidden",
        className
      )}
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-saffron-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-500 rounded-full blur-3xl" />
      </div>

      <div className="container relative text-center">
        {title && (
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            {title}
          </h1>
        )}
        {subtitle && (
          <p className="text-cream-200/90 max-w-2xl mx-auto text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
};

export default PageHeader;

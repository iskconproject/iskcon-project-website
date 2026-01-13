import { cn } from "@/lib/utils";

interface MahamantraMarqueeProps {
  className?: string;
}

const MahamantraMarquee = ({ className }: MahamantraMarqueeProps) => {
  const mantra = "Hare Krishna Hare Krishna Krishna Krishna Hare Hare • Hare Rama Hare Rama Rama Rama Hare Hare";
  
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="flex items-center whitespace-nowrap">
        <div className="animate-marquee flex items-center gap-8">
          <span className="text-lg font-medium tracking-wide">🙏 {mantra}</span>
          <span className="text-lg font-medium tracking-wide">🙏 {mantra}</span>
          <span className="text-lg font-medium tracking-wide">🙏 {mantra}</span>
          <span className="text-lg font-medium tracking-wide">🙏 {mantra}</span>
        </div>
        <div className="animate-marquee2 flex items-center gap-8 absolute top-0">
          <span className="text-lg font-medium tracking-wide">🙏 {mantra}</span>
          <span className="text-lg font-medium tracking-wide">🙏 {mantra}</span>
          <span className="text-lg font-medium tracking-wide">🙏 {mantra}</span>
          <span className="text-lg font-medium tracking-wide">🙏 {mantra}</span>
        </div>
      </div>
    </div>
  );
};

export default MahamantraMarquee;

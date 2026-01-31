import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrustBadgeProps {
  rating?: number;
  reviews?: string;
  className?: string;
}

export function TrustBadge({ rating = 5, reviews = "500+ students", className }: TrustBadgeProps) {
  return (
    <div className={cn("inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm shadow-soft", className)}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-4 h-4",
              i < rating ? "fill-ct-yellow text-ct-yellow" : "fill-muted text-muted"
            )}
          />
        ))}
      </div>
      <span className="text-sm font-medium text-foreground">{rating}.0</span>
      <span className="text-muted-foreground text-sm">•</span>
      <span className="text-sm text-muted-foreground">{reviews}</span>
    </div>
  );
}

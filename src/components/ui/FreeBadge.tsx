import { cn } from "@/lib/utils";

interface FreeBadgeProps {
  text?: string;
  className?: string;
  pulse?: boolean;
}

export function FreeBadge({ text = "FREE", className, pulse = true }: FreeBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center px-3 py-1 rounded-full bg-ct-yellow text-accent-foreground text-sm font-bold uppercase tracking-wide",
        pulse && "pulse-badge",
        className
      )}
    >
      {text}
    </span>
  );
}

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const primaryButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-base font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-ct-green text-primary-foreground shadow-md hover:bg-ct-green-hover hover:shadow-glow hover:scale-105 active:scale-100",
        hero:
          "bg-ct-green text-primary-foreground shadow-lg hover:bg-ct-green-hover hover:shadow-glow hover:scale-105 active:scale-100 text-lg px-8 py-6",
        outline:
          "border-2 border-ct-green text-ct-green bg-transparent hover:bg-ct-green hover:text-primary-foreground",
        trust:
          "bg-trust text-trust-foreground shadow-md hover:bg-ct-blue-light hover:shadow-lg hover:scale-105",
        ghost:
          "text-ct-green hover:bg-ct-mint hover:text-ct-green-hover",
        sticky:
          "bg-ct-green text-primary-foreground shadow-xl hover:bg-ct-green-hover w-full py-4 text-lg",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 text-sm",
        lg: "h-14 px-8 py-4 text-lg",
        xl: "h-16 px-10 py-5 text-xl",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof primaryButtonVariants> {
  asChild?: boolean;
}

const PrimaryButton = React.forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(primaryButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
PrimaryButton.displayName = "PrimaryButton";

export { PrimaryButton, primaryButtonVariants };

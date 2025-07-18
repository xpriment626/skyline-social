import { forwardRef, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-light transition-colors rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-black hover:bg-gray-800 text-white",
        secondary: "border border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent",
        glass: "liquid-glass text-gray-700",
        "glass-purple": "liquid-glass-purple",
        "glass-emerald": "liquid-glass-emerald",
        outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent",
      },
      size: {
        sm: "h-8 px-6 text-sm min-w-[80px]",
        md: "h-10 px-6 text-base min-w-[100px]",
        lg: "h-12 px-8 text-lg min-w-[120px]",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
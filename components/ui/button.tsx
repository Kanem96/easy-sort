import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 tracking-wide",
  {
    variants: {
      variant: {
        default:
          "bg-white text-black border-slate-200 border-2 hover:bg-slate-100 text-slate-500",
        primary: "bg-teal-500 text-primary-foreground hover:bg-teal-400/90",
        primaryOutline: "bg-white text-teal-500 hover:bg-slate-100",
        secondary: "bg-red-400 text-primary-foreground hover:bg-red-300/90",
        secondaryOutline: "bg-white text-red-400 hover:bg-slate-100",
        danger: "bg-rose-500 text-primary-foreground hover:bg-rose-400/90",
        dangerOutline: "bg-white text-rose-500 hover:bg-slate-100",
        ghost:
          "bg-transparent text-slate-500 border-transparent border-0 hover:bg-slate-100",
      },
      size: {
        default: "h-11 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-12 px-8",
        icon: "h-10 w-10",
        rounded: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

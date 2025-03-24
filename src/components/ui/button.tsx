import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm/6 font-semibold transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none ring-offset-background ring-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive ",

  {
    variants: {
      variant: {
        default:
          "bg-violet-500 text-white shadow border border-violet-600/90 rounded-xl text-sm dark:border-white/10 scale-100 active:scale-95 ease-out duration-300 transition-all",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 scale-100 active:scale-95 ease-out duration-300 transition-all",
        outline:
          "border border-input bg-background hover:border-accent-border hover:bg-accent hover:text-accent-foreground scale-100 active:scale-95 ease-out duration-300 active:ring-1 transition-all",
        secondary:
          "bg-secondary/90 ring-input-focused/50 ring-0 hover:ring-3 ring-offset-2 text-secondary-foreground  hover:bg-secondary/80 hover:ring-primary/80 hover:  scale-100 active:scale-95 ease-out duration-300 transition-all",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        ringHover:
          "bg-primary text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:ring-2 hover:ring-primary/80 hover:ring-offset-2  ",
        field:
          "border border-input hover:bg-muted hover:border-input shadow-xs  text-input-foreground  ",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

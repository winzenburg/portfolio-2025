import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm border border-transparent font-sans text-[15px] font-medium tracking-wide transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-navy text-band hover:bg-ink",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90",
        outline:
          "border-ink/30 bg-transparent text-ink hover:border-navy hover:bg-navy hover:text-band",
        secondary:
          "border-ink/20 bg-transparent text-ink hover:border-ink/50",
        ghost: "border-transparent text-ink hover:bg-ink/5",
        link: "border-transparent text-cobalt underline-offset-4 hover:underline",
      },
      size: {
        default: "min-h-11 px-5 py-2 has-[>svg]:px-4",
        sm: "min-h-9 gap-1.5 px-3 text-sm has-[>svg]:px-2.5",
        lg: "min-h-12 px-6 text-[17px] has-[>svg]:px-5",
        icon: "size-11",
        "icon-sm": "size-9",
        "icon-lg": "size-12",
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
      data-variant={variant ?? "default"}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

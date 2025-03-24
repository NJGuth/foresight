import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "outline-none border shadow-xs   border-input    placeholder:text-placeholder    focus-visible:border-input-focused    focus-visible:ring-ring/50    focus-visible:ring-[2px]    ring-offset-1     ring-offset-background   disabled:opacity-50 hover:bg-input-background    disabled:cursor-not-allowed    aria-invalid:border-destructive    aria-invalid:focus-visible:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 flex field-sizing-content min-h-16 w-full rounded-md overflow-hidden px-3 py-2  text-base  transition-[color,box-shadow] md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { Check } from "lucide-react";

interface DisclosureProps {
  children?: React.ReactNode;
}

function Disclosure({ children }: DisclosureProps) {
  return (
    <Collapsible className="flex flex-col gap-6 overflow-hidden border rounded-md group border-input bg-card text-card-foreground">
      <CollapsibleTrigger className="py-8 outline-none hover:bg-accent/40 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]">
        <button className="flex items-center justify-between w-full px-6 py-0">
          <h3 className="text-lg font-medium">Collapsible Row</h3>
          <div className="flex border-input bg-input-background items-center justify-center gap-2 border rounded-md size-7 group-data-[state=open]:border-accent group-data-[state=open]:bg-primary text-primary-foreground">
            <Check className="size-4 group-data-[state=open]:block  hidden" />
          </div>
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent className="pb-6">
        <div className="px-6 space-y-2 divide-y">{children}</div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export { Disclosure };

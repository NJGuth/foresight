"use client";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { Checkbox } from "./checkbox";

interface DisclosureProps {
  children?: React.ReactNode;
  title: string;
  description?: string;
  defaultChecked?: boolean;
  icon?: React.ReactNode;
}

function Disclosure({
  children,
  title,
  description,
  defaultChecked,
  icon,
}: DisclosureProps) {
  const [isChecked, setIsChecked] = useState(defaultChecked);
  const [isOpen, setIsOpen] = useState(defaultChecked);

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
    setIsOpen(checked);
  };

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="flex flex-col overflow-hidden border rounded-md shadow-xs group border-input bg-card text-card-foreground"
    >
      <CollapsibleTrigger
        className="py-3  group-data-[state=open]:border-border border-b border-transparent outline-none hover:bg-muted focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] "
        asChild
      >
        <div
          className="flex items-center justify-between w-full px-3 py-0 cursor-pointer"
          onClick={() => handleCheckboxChange(!isChecked)}
        >
          <div className="flex flex-row items-start gap-2 ">
            {icon && (
              <div className="mr-2 hidden rounded-md text-accent-foreground size-11 bg-accent [&_svg]:size-6 sm:flex items-center justify-center">
                {icon}
              </div>
            )}

            <div className="grid flex-1">
              <span className="text-base font-medium truncate select-none">
                {title}
              </span>
              <span className="w-full text-sm truncate select-none text-muted-foreground">
                {description}
              </span>
            </div>
          </div>
          <Checkbox
            id="disclosure-checkbox"
            className="mr-2 rounded-sm size-6"
            checked={isChecked}
            onCheckedChange={handleCheckboxChange}
          />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="">
        <div className="px-3 divide-y">{children}</div>
      </CollapsibleContent>
    </Collapsible>
  );
}

function DisclosureRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between h-17">{children}</div>
  );
}

export { Disclosure, DisclosureRow };

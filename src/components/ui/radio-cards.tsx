"use client";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import { GenomesIcon } from "../icons";
import { Badge } from "./badge";
import Link from "next/link";

const options = [
  {
    title: "Individual Leadership Project",
    description:
      "Best for individuals seeking strategic self-awareness and personalized development plans. Includes options for assessing leadership skills, values, and personality.",
    assessments: ["LD12", "LD12-360"],
    value: "1",
  },
  {
    title: "Cohort Leadership Analysis",
    description:
      "Best for organizations looking to understand group strengths and development areas, identify high-potential leaders, and inform cohort-based learning initiatives.",
    assessments: ["Values", "Personality", "Genome"],
    value: "2",
  },
  {
    title: "Full Spectrum ",
    description:
      "Best for organizations looking to understand group strengths and development areas, identify high-potential leaders, and inform cohort-based learning initiatives.",
    assessments: ["LD12", "LD12-360", "Values", "Personality", "Genome"],
    value: "3",
  },
];

function RadioCards() {
  const [selectedValue, setSelectedValue] = useState(options[0].value);

  return (
    <RadioGroup.Root
      className={cn("flex flex-col gap-3")}
      onValueChange={setSelectedValue}
    >
      {options.map((option) => (
        <RadioGroup.Item
          value={option.value}
          key={option.title}
          className={cn(
            "text-left isolate group transition-all duration-300 ease-out hover:bg-input-background/50 flex md:flex-row flex-col  p-4 border outline-none  rounded-md shadow-xs border-input bg-card text-card-foreground",
            "hover:border-input-focused relative",
            "data-[state=checked]:bg-accent/20 data-[state=checked]:border-input-focused data-[state=checked]:ring-1 data-[state=checked]:ring-ring/50 data-[state=checked]:ring-offset-2",
            "ring-offset-background focus-visible:ring-input-focused focus-visible:ring-[3px]",
            selectedValue === option.value && "border-input-focused "
          )}
        >
          <div className="absolute flex items-center justify-center rounded-md -top-2.5 group-data-[state=checked]:scale-100 -right-2.5 size-6 bg-primary text-primary-foreground scale-0 transition-all  duration-500 ease-in-out hover:scale-100">
            <CheckIcon className="size-4" />
          </div>

          <div className="flex items-center justify-center ml-2 md:ml-0 size-10 text-red-9">
            <GenomesIcon className="size-8" />
          </div>
          <div className="flex-1 ml-2.5">
            <p className="text-xl font-medium">{option.title}</p>
            <p className=" text-muted-foreground">{option.description}</p>
            <div className="flex-wrap mt-2 space-x-2 space-y-2">
              {option.assessments.map((assessment) => (
                <Badge variant="secondary" className="rounded" key={assessment}>
                  {assessment}
                </Badge>
              ))}
            </div>
            <Link href="/" className="text-sm underline w-fit text-primary">
              Learn More
            </Link>
          </div>
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
}

export { RadioCards };

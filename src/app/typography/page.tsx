import { ValuesRadar } from "@/components/charts/radar-chart";
import { ValueData } from "@/components/data/scores";
import { Calendar1Icon, User2Icon } from "lucide-react";

export default function TypographyPage() {
  return (
    <article>
      <section className="space-y-4">
        <h1 className="mt-4 text-5xl tracking-tight font-thin text-balance">
          Values Insights Report
        </h1>
        <p className=" text-xl/7 font-thin text-foreground text-balance">
          Motives, Values, Preferences Inventory
        </p>
        <div className="flex items-center gap-2">
          <User2Icon className="size-4" />
          <p className=" text-lg/7 font-thin text-foreground text-balance">
            James Bergman
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Calendar1Icon className="size-4" />
          <p className=" text-lg/7 font-thin text-foreground text-balance">
            1-2-2025
          </p>
        </div>
      </section>
      {/* <section>
        <p className="text-muted-foreground uppercase text-sm font-medium tracking-widest">
          Reslliance in depth
        </p>
        <h2 className="mt-4 text-5xl tracking-tight font-thin text-balance">
          Executive Summary
        </h2>
        <p className="mt-4 text-lg/7 font-thin text-foreground text-balance">
          Soaring across vast seas for months without touching land, albatrosses
          command the skies with the largest wingspan of any living bird. These
          legendary mariners navigate thousands of miles of open ocean, mate for
          life in elaborate courtship dances, and can live for over 60 years –
          yet they now face extinction at human hands. Discover the untold story
          of nature's ultimate survivors and why their fate is intertwined with
          our own.
        </p>
        <hr className="my-8" />
        <ValuesRadar data={ValueData} />
        <hr className="my-8" />
      </section> */}
    </article>
  );
}

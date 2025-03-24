import { ValuesRadar } from "@/components/charts/radar-chart";
import { ValueData } from "@/components/data/scores";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div>
      <h2>Genomes</h2>
      <ValuesRadar data={ValueData} />
    </div>
  );
}

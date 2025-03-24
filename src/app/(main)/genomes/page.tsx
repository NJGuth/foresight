import { ValuesRadar } from "@/components/charts/radar-chart";
import { ValueData } from "@/components/data/scores";

export default function ProjectsPage() {
  return (
    <div>
      <h2>Genomes</h2>
      <ValuesRadar data={ValueData} />
    </div>
  );
}

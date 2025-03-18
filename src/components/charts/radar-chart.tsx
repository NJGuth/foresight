"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ValueData } from "@/components/data/scores";

// Define type for the chart data
interface ValueChartProps {
  data: typeof ValueData;
}

const chartConfig = {
  score: {
    label: "Score",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

export function ValuesRadar({ data }: ValueChartProps) {
  // Transform data for the radar chart
  const chartData = data.map((item) => ({
    dimension: item.dimension,
    score: item.score,
  }));

  return (
    <ChartContainer config={chartConfig} className="mx-auto max-h-[500px]">
      <RadarChart data={chartData}>
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <PolarAngleAxis dataKey="dimension" />
        <PolarGrid gridType="circle" />
        <Radar
          dataKey="score"
          fill="var(--chart-4)"
          fillOpacity={0.2}
          dot={{
            r: 4,
            fillOpacity: 1,
          }}
        />
      </RadarChart>
    </ChartContainer>
  );
}

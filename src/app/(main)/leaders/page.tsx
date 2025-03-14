import {
  ProjectsIcon,
  GenomesIcon,
  LeadersIcon,
  LearnIcon,
} from "@/components/icons";
import Link from "next/link";

export default function LeadersPage() {
  return (
    <Link href="/page">
      <h2>Leaders</h2>
      <div className="grid grid-cols-4 gap-1">
        <ProjectsIcon className="size-8 text-blue-500" />
        <GenomesIcon className="size-8 text-blue-500" />
        <LeadersIcon className="size-8 text-blue-500" />
        <LearnIcon className="size-8 text-blue-500" />
      </div>
    </Link>
  );
}

"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { MainNav } from "./main-nav";
import { LearnIcon, GenomesIcon, ProjectsIcon, LeadersIcon } from "../icons";
import OrgNav from "./org-nav";
const data = {
  items: [
    {
      title: "Projects",
      url: "/projects",
      icon: <ProjectsIcon className="text-blue-500" />,
    },
    {
      title: "Leaders",
      url: "/leaders",
      icon: <LeadersIcon className="text-green-500" />,
    },
    {
      title: "Genomes",
      url: "/genomes",
      icon: <GenomesIcon className="text-purple-500" />,
    },
    {
      title: "Learn",
      url: "/learn",
      icon: <LearnIcon className="text-amber-500" />,
    },
  ],
};

export function MainSidebar() {
  return (
    <Sidebar variant="inset" side="left">
      <SidebarHeader>
        <OrgNav />
      </SidebarHeader>
      <SidebarContent>
        <MainNav items={data.items} />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

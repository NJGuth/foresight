"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { MainNav } from "./main-nav";
import { LearnIcon, GenomesIcon, ProjectsIcon, LeadersIcon } from "../icons";
const data = {
  items: [
    {
      title: "Projects",
      url: "/projects",
      icon: <ProjectsIcon />,
    },
    {
      title: "Leaders",
      url: "/leaders",
      icon: <LeadersIcon />,
    },
    {
      title: "Genomes",
      url: "/genomes",
      icon: <GenomesIcon />,
    },
    {
      title: "Learn",
      url: "/learn",
      icon: <LearnIcon />,
    },
  ],
};

export function MainSidebar() {
  return (
    <Sidebar variant="inset" side="left">
      <SidebarHeader />
      <SidebarContent>
        <MainNav items={data.items} />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

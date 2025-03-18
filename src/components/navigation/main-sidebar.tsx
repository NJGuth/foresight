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
      color: "blue",
      url: "/projects",
      icon: <ProjectsIcon />,
    },
    {
      title: "Leaders",
      color: "green",
      url: "/leaders",
      icon: <LeadersIcon />,
    },
    {
      title: "Genomes",
      color: "purple",
      url: "/genomes",
      icon: <GenomesIcon />,
    },
    {
      title: "Learn",
      color: "orange",
      url: "/learn",
      icon: <LearnIcon />,
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

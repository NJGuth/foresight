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
import { UserNav } from "./user-nav";

// Navigation Items
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

// Mock user Data; Todo: Replace with Clerk Data
const userData = {
  name: "Nicholas Guthrie",
  email: "nicholas.g@example.com",
  avatar: "https://github.com/NJGuth.png",
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
      <SidebarFooter>
        <UserNav user={userData} />
      </SidebarFooter>
    </Sidebar>
  );
}

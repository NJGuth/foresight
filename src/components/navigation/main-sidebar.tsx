"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { MainNav } from "./main-nav";

const data = {
  items: [
    {
      title: "Projects",
      url: "/projects",
    },
    {
      title: "Leaders",
      url: "/leaders",
    },
    {
      title: "Genomes",
      url: "/genomes",
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

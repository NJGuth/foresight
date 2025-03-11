import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";

export function MainSidebar() {
  return (
    <Sidebar variant="inset" side="left">
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        Main Sidebar
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

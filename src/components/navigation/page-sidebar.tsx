import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";

export function PageSidebar() {
  return (
    <Sidebar variant="floating" side="right">
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        Page Sidebar
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

import PageContainer from "@/components/layout/page-container";
import PageNavigation from "@/components/navigation/page-navigation";
import { PageSidebar } from "@/components/navigation/page-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <SidebarInset className="">
        <PageNavigation title="SubPage" />
        <PageContainer>{children}</PageContainer>
      </SidebarInset>
      <PageSidebar />
    </SidebarProvider>
  );
}

import PageContainer from "@/components/layout/page-container";
import PageHeader from "@/components/navigation/page-header";
import { PageSidebar } from "@/components/navigation/page-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <SidebarInset className="">
        <PageHeader title="SubPage" fromRoute="projects" />
        <PageContainer>{children}</PageContainer>
      </SidebarInset>
      <PageSidebar />
    </SidebarProvider>
  );
}

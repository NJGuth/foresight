import PageContainer from "@/components/layout/page-container";
import MainNavigation from "@/components/navigation/main-navigation";
import { MainSidebar } from "@/components/navigation/main-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <MainSidebar />
      <SidebarInset className="flex flex-col relative h-[calc(100vh)] md:h-[calc(100vh-1rem)] overflow-auto overflow-x-hidden">
        <MainNavigation title="Dashboard" />
        <PageContainer>{children}</PageContainer>
      </SidebarInset>
    </SidebarProvider>
  );
}

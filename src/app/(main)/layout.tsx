import { MainSidebar } from "@/components/navigation/main-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <MainSidebar />
      <SidebarInset className="flex flex-col relative h-[calc(100vh)] md:h-[calc(100vh-1rem)] overflow-auto overflow-x-hidden">
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}

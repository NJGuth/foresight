import PageContainer from "@/components/layout/page-container";
import MainHeader from "@/components/navigation/main-header";
import { ReactNode } from "react";
import Drawer from "@/components/navigation/drawer";
import { Button } from "@/components/ui/button";

export default function RouteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <MainHeader
        title="Leaders"
        actions={
          <Drawer
            title="new leader"
            description="create a new leader"
            trigger={
              <Button variant="secondary" size="sm">
                Create
              </Button>
            }
          />
        }
      />
      <PageContainer>{children}</PageContainer>
    </>
  );
}

import PageContainer from "@/components/layout/page-container";
import MainHeader from "@/components/navigation/main-header";
import Modal from "@/components/navigation/modal";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

export default function RouteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <MainHeader
        title="Projects"
        actions={
          <div className="space-x-2">
            <Modal
              trigger={
                <Button variant="secondary" size="sm">
                  Create
                </Button>
              }
              title="Test"
              description="Test"
            >
              Children
            </Modal>
          </div>
        }
      />
      <PageContainer>{children}</PageContainer>
    </>
  );
}

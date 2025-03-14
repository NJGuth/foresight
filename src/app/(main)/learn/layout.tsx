import PageContainer from "@/components/layout/page-container";
import MainHeader from "@/components/navigation/main-header";
import { ReactNode } from "react";

export default function RouteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <MainHeader title="Learn" />
      <PageContainer>{children}</PageContainer>
    </>
  );
}

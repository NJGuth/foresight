import Link from "next/link";
import { SidebarTrigger } from "../ui/sidebar";
import { ChevronsLeft } from "lucide-react";
import { Button } from "../ui/button";

interface PageNavigationProps {
  title: string;
  fromRoute: string;
}

export default function PageHeader({ title, fromRoute }: PageNavigationProps) {
  return (
    <header className="sticky px-5 top-0 z-10 flex h-16 shrink-0 items-center gap-2 bg-background/90 backdrop-blur-3xl border-b border-transparent ">
      <Link href={`/${fromRoute}`}>
        <Button variant="ghost" size="icon">
          <ChevronsLeft className="size-4" />
        </Button>
      </Link>

      <h1 className="flex-1 text-base font-semibold">{title}</h1>
      <SidebarTrigger />
    </header>
  );
}

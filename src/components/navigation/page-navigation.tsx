import Link from "next/link";
import { SidebarTrigger } from "../ui/sidebar";
import { ChevronsLeft } from "lucide-react";
import { Button } from "../ui/button";

export default function PageNavigation({ title }: { title: string }) {
  return (
    <header className="sticky px-5 top-0 z-10 flex h-16 shrink-0 items-center gap-2 bg-background/90 backdrop-blur-3xl border-b border-transparent ">
      <Link href="/dashboard">
        <Button variant="ghost" size="icon">
          <ChevronsLeft className="size-4" />
        </Button>
      </Link>

      <h1 className="flex-1 text-base font-semibold">{title}</h1>
      <SidebarTrigger />
    </header>
  );
}

import Link from "next/link";
import { SidebarTrigger } from "../ui/sidebar";
import { ChevronsLeft } from "lucide-react";
import { Button } from "../ui/button";

export default function PageNavigation({ title }: { title: string }) {
  return (
    <header className="flex p-3 gap-2 h-16 items-center justify-between">
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

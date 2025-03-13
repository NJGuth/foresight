"use client";

import { usePathname } from "next/navigation";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Link from "next/link";

export function MainNav({
  items,
}: {
  items: {
    title: string;
    url: string;
    isActive?: boolean;
  }[];
}) {
  // Get the current pathname
  const pathname = usePathname();
  // Close sidebar on click with mobile.
  const { setOpenMobile } = useSidebar();

  return (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton
            asChild
            isActive={item.isActive ?? pathname === item.url}
          >
            <Link href={item.url} onClick={() => setOpenMobile(false)}>
              <span>{item.title}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}

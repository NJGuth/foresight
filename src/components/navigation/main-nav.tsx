"use client";

import { usePathname } from "next/navigation";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function MainNav({
  items,
}: {
  items: {
    title: string;
    url: string;
    isActive?: boolean;
    icon?: React.ReactNode;
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
            variant="hollow"
            asChild
            isActive={item.isActive ?? pathname === item.url}
            className={cn(
              "h-11",
              item.isActive ?? pathname === item.url
                ? "transparent"
                : "bg-transparent"
            )}
          >
            <Link href={item.url} onClick={() => setOpenMobile(false)}>
              <span
                className={cn(
                  "mr-2 size-6",
                  item.isActive ?? pathname === item.url
                    ? "text-sidebar-accent-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.icon}
              </span>
              <span>{item.title}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}

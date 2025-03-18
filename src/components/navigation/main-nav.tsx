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
    color: string;
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
    <SidebarMenu className="space-y-1">
      {items.map((item) => (
        <SidebarMenuItem key={item.title} className="px-0.5">
          <SidebarMenuButton
            variant="hollow"
            asChild
            isActive={item.isActive ?? pathname === item.url}
            className={cn(
              "h-12 transition-all duration-300  ease-out rounded-2xl pl-2 active:text-accent-foreground data-[active=true]:bg-accent hover:bg-accent active:bg-accent/90 scale-100 active:scale-95",
              item.color === "blue" &&
                "data-[active=true]:text-blue-11 hover:text-blue-11 active:text-blue-11/90 data-[active=true]:bg-blue-3  dark:data-[active=true]:bg-blue-3/50 hover:bg-blue-3 active:bg-blue-4",
              item.color === "green" &&
                "data-[active=true]:text-green-11 hover:text-green-11 active:text-green-11/90 data-[active=true]:bg-green-3 dark:data-[active=true]:bg-green-3/50 hover:bg-green-3 active:bg-green-4",
              item.color === "purple" &&
                "data-[active=true]:text-purple-11 hover:text-purple-11 active:text-purple-11/90 data-[active=true]:bg-purple-3 hover:bg-purple-3 dark:data-[active=true]:bg-purple-3/50 active:bg-purple-4",
              item.color === "orange" &&
                "data-[active=true]:text-orange-11 hover:text-orange-11 active:text-orange-11/90 data-[active=true]:bg-orange-3 hover:bg-orange-3 dark:data-[active=true]:bg-orange-3/50 active:bg-orange-4 ",
              item.color === "crimson" &&
                "data-[active=true]:text-crimson-11 hover:text-crimson-11 active:text-crimson-11/90 data-[active=true]:bg-crimson-3 hover:bg-crimson-3 active:bg-crimson-4"
            )}
          >
            <Link href={item.url} onClick={() => setOpenMobile(false)}>
              <span className={cn("mx-2 size-6")}>{item.icon}</span>
              <span className="text-lg font-medium tracking-wide">
                {item.title}
              </span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}

// className={cn(
//   "h-11 px-3.5  hover:bg-accent text-lg font-medium ",
//   item.isActive ?? pathname === item.url ? `bg-${item.color}-1` : ""
// )}

"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Switch } from "@/components/ui/switch";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenuItem
      onSelect={(e) => {
        e.preventDefault();
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      <Sun className="mr-2 h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute mr-2 h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span>Theme</span>
      <Switch
        className="ml-auto"
        checked={theme === "dark"}
        onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
    </DropdownMenuItem>
  );
}

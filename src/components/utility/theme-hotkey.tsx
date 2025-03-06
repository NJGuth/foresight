"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export function ThemeHotkey() {
  const { setTheme, theme } = useTheme();

  //Change theme color hotkey

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "a" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setTheme(theme === "dark" ? "light" : "dark");
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [setTheme, theme]);

  //Change theme component, uncomment if required.

  return <></>;
}

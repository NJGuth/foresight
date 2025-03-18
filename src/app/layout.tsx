import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import { swissFont } from "@/styles/fonts";
import "@/styles/globals.css";

import { ThemeProvider } from "@/components/utility/theme-provider";
import { ThemeHotkey } from "@/components/utility/theme-hotkey";
import { ScreenSize } from "@/components/utility/screen-size";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable} ${inter.variable} ${swissFont.variable}
           antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeHotkey />
          <ScreenSize />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}


"use client";
import React, { type ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";

// Layout Components
import { AppSidebar } from "@/app/_components/app-sidebar";
import { ChatSidebar } from "@/app/_components/chat-sidebar";
import Navbar from "@/app/_components/app-header";

// UI & Providers
import { SidebarInset, SidebarProvider } from "@/shadcn/components/ui/sidebar";
import { useIsMobile } from "@/shadcn/hooks/use-mobile";

import RootContext from "@/app/_contexts/root-context";

// Font Configurations
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <RootContext>
          <SidebarProvider>
            <div className="flex overflow-hidden w-full h-screen">
              <AppSidebar />
              <ChatSidebar />
              <SidebarInset >
                <Navbar />
                <main className={` mt-11 overflow-y-scroll overflow-x-hidden ${isMobile ? 'ml-0' : 'ml-14'}`}>
                  {children}
                </main>
              </SidebarInset>
            </div>
          </SidebarProvider>
        </RootContext>

      </body>
    </html>
  );
};

export default RootLayout;
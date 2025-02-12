
"use client";
import React, { type ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";

// Layout Components
import { AppSidebar } from "@/app/_components/app-sidebar";
import { ChatSidebar } from "@/app/_components/chat-sidebar";
import Navbar from "@/app/_components/app-header";

// UI & Providers
import { SidebarInset, SidebarProvider } from "@/shadcn/components/ui/sidebar";
import { Toaster } from "@/shadcn/components/ui/toaster";
import { ThemeProvider } from "@/shadcn/components/theme-provider";

// Error Handling & Network Monitoring
import ErrorBoundary from "@/app/_lib/error-boundary";
import NetworkAlert from "@/app/_lib/network-alert";
import { useIsMobile } from "@/shadcn/hooks/use-mobile";

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
        <ErrorBoundary>
          <NetworkAlert />
          <ThemeProvider>
            <Toaster />
            <SidebarProvider>
              <div className="flex h-screen w-full overflow-hidden">
                <AppSidebar />
                <ChatSidebar />

                {/* Main Content Area */}
                <SidebarInset className="flex flex-1 flex-col">
                  <Navbar />

                  {/* Scrollable Content Container */}
                  <main className={`flex-1 mt-12 max-w-full overflow-auto bg-red-700 p-10  ${isMobile ? 'ml-0' : 'ml-14'}`}>
                    <div className={`max-w-5xl w-full`}>
                      {children}
                    </div>
                    {/* <div className="mx-auto max-w-5xl w-full">
                      {children}
                    </div> */}
                  </main>
                </SidebarInset>
              </div>
            </SidebarProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
};

export default RootLayout;
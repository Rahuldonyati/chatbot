// app/_layouts/root.layout.tsx
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
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        {/* Error Boundary should wrap all app logic */}
        <ErrorBoundary>
          {/* Network Alert should be top-level to detect connectivity changes */}
          <NetworkAlert />

          {/* Theme & State Management */}
          <ThemeProvider>
            <Toaster />
            <SidebarProvider>
              {/* Main Layout Wrapper */}
              <div className="flex h-screen w-full">
                {/* Persistent Sidebar (App Navigation) */}
                <AppSidebar />

                {/* Chat Sidebar (Optional) */}
                <ChatSidebar />

                {/* Main Content Area */}
                <SidebarInset className="flex flex-col w-full">  
                  {/* App Header / Navbar */}
                  <Navbar />

                  {/* Page Content */}
                  <main className="flex-1 mt-8  overflow-y-auto p-4">{children}</main>
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

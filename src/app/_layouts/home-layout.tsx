
"use client";
import React, { type ReactNode } from "react";

// Layout Components
import { AppSidebar } from "@/app/_components/app-sidebar";
import { ChatSidebar } from "@/app/_components/chat-sidebar";
import Header from "@/app/_components/app-header";

// UI & Providers
import { SidebarInset, SidebarProvider } from "@/shadcn/components/ui/sidebar";
import { useIsMobile } from "@/shadcn/hooks/use-mobile";

interface HomeLayoutProps {
    children: ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
    const isMobile = useIsMobile();

    return (
        <SidebarProvider>
            <div className="flex overflow-hidden w-full h-screen">
                <AppSidebar />
                <ChatSidebar />
                <SidebarInset >
                    <Header />
                    <main className={` mt-11 overflow-y-scroll overflow-x-hidden ${isMobile ? 'ml-0' : 'ml-14'}`}>
                        {children}
                    </main>
                </SidebarInset>
            </div>
        </SidebarProvider>
    );
};

export default HomeLayout;
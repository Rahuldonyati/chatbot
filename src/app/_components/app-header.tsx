"use client";

import { Button } from "@/shadcn/components/ui/button";
import ModeToggle from "./toggle-theme";
import { Bell, LogOut } from "lucide-react";
import Link from "next/link";
import { SidebarTrigger } from "@/shadcn/components/ui/sidebar";
import { useSidebar } from "@/shadcn/components/ui/sidebar";
import { useIsMobile } from "@/shadcn/hooks/use-mobile";
import { Title } from "@/app/_constants/constants";

export default function Navbar() {
    const { open } = useSidebar();
    const isMobile = useIsMobile();

    return (
        <nav
            className={`fixed top-0 right-0 z-50 bg-background dark:bg-primary shadow-md dark:shadow-[0_4px_6px_rgba(255,255,255,0.2)] transition-all duration-300
                ${isMobile ? "left-16" : open ? "left-[16rem]" : "left-[3.5rem]"}`}
        >
            <div className="flex items-center justify-between px-2 py-1 w-full">
                {/* Left Section: Sidebar Toggle & Logo */}
                <div className="flex items-center space-x-4">
                    <SidebarTrigger />
                    <Link href="/" className="text-md font-bold text-secondary-foreground dark:text-secondary">
                        {Title}
                    </Link>
                </div>

                {/* Right Section: Notifications, Theme Toggle, Logout */}
                <div className="flex items-center space-x-4">
                    <ModeToggle />
                    {[Bell, LogOut].map((Icon, index) => (
                        <Button key={index} variant="outline" size="icon">
                            <Icon className="h-6 w-6 text-primary dark:text-primary-foreground" />
                        </Button>
                    ))}
                </div>
            </div>
        </nav>
    );
}

"use client";

import { useCallback } from "react";
import { signOut } from "next-auth/react";
import { Button } from "@/shadcn/components/ui/button";
import ModeToggle from "./toggle-theme";
import { Bell, LogOut } from "lucide-react";
import Link from "next/link";
import { SidebarTrigger } from "@/shadcn/components/ui/sidebar";
import { useSidebar } from "@/shadcn/components/ui/sidebar";
import { useIsMobile } from "@/shadcn/hooks/use-mobile";
import { TITLE } from "@/app/_constants/constants";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shadcn/components/ui/tooltip";

export default function Header() {
    const { open } = useSidebar();
    const isMobile = useIsMobile();


    const handleNotificationClick = useCallback(() => {
        console.log("Notification clicked");
    }, []);

    const handleLogoutClick = useCallback(() => {
        signOut();
    }, []);

    return (
        <nav
            className={`fixed top-0 right-0 z-50 bg-background dark:bg-background shadow-md  transition-all duration-300
        ${isMobile ? "left-0" : open ? "left-[15.5rem]" : "left-[3.5rem]"}`}
        >
            <div className="flex items-center justify-between px-2 py-1 w-full">
                {/* Left Section: Sidebar Toggle & Logo */}
                <div className="flex items-center space-x-4">
                    <SidebarTrigger />
                    <Link
                        href="/"
                        className="text-md font-bold text-secondary-foreground dark:text-secondary"
                    >
                        {TITLE}
                    </Link>
                </div>

                {/* Right Section: Notifications, Theme Toggle, Logout */}
                <div className="flex items-center space-x-4">
                    <ModeToggle />

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="outline" size="icon" onClick={handleNotificationClick}>
                                <Bell className="h-6 w-6 text-primary dark:text-primary-foreground" />
                            </Button>
                        </TooltipTrigger><TooltipContent side="bottom">Notification</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="outline" size="icon" onClick={handleLogoutClick}>
                                <LogOut className="h-6 w-6 text-primary dark:text-primary-foreground" />
                            </Button>
                        </TooltipTrigger><TooltipContent side="bottom">Logout</TooltipContent>
                    </Tooltip>
                </div>
            </div>
        </nav>
    );
}

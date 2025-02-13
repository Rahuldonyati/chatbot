"use client";

import React from "react";
import { useIsMobile } from "@/shadcn/hooks/use-mobile";
import { useUserStore } from "@/app/_hooks/user-hook";
import { AVATAR_IMAGE, LOGOICON } from "@/app/_constants/constants";

import Image from "next/image";
import { Button } from "@/shadcn/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shadcn/components/ui/tooltip";
import { Card } from "@/shadcn/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/shadcn/components/ui/avatar";

import {
  Home,
  MessageSquare,
  Share,
  LogOut,
  Phone,
  Briefcase,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shadcn/components/ui/dropdown-menu";

/** --------- Type Definitions --------- */
interface NavItemConfig {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  action: () => void;
}

interface NavItemProps {
  Icon: React.ComponentType<{ className?: string }>;
  label?: string;
  action: () => void;
  tooltipSide?: "right" | "top" | "left" | "bottom";
  isMobile?: boolean;
}

interface UserDropdownProps {
  isMobile?: boolean;
}

/** --------- Navigation Items --------- */
const navItems: NavItemConfig[] = [
  { icon: Home, label: "Home", action: () => console.log("Home clicked") },
  { icon: MessageSquare, label: "Messages", action: () => console.log("Messages clicked") },
  { icon: Share, label: "Share", action: () => console.log("Share clicked") },
];

/** --------- AppSidebar Component --------- */
export function AppSidebar(): React.ReactElement {
  const isMobile = useIsMobile();
  return isMobile ? <MobileNavigation /> : <DesktopSidebar />;
}

/** --------- Mobile Navigation Component --------- */
const MobileNavigation: React.FC = () => (
  <Card className="fixed bottom-0 left-0 w-full flex justify-around bg-primary text-white p-2 z-40">
    {navItems.map(({ icon: Icon, action }, index) => (
      <MobileNavItem key={index} Icon={Icon} action={action} isMobile />
    ))}
    <UserDropdown isMobile />
  </Card>
);

/** --------- Desktop Sidebar Component --------- */
const DesktopSidebar: React.FC = () => (
  <Card className="flex flex-col h-screen fixed left-0 top-0 w-14 pt-4 bg-primary text-white dark:bg-purple-dark rounded-none z-40">
    <div className="flex items-center justify-center">
      <Image alt="logo" width={40} height={40} src={LOGOICON} />
    </div>
    <div className="flex-1 flex flex-col items-center space-y-4 py-4">
      {navItems.map(({ icon: Icon, label, action }, index) => (
        <NavItem key={index} Icon={Icon} label={label} action={action} tooltipSide="right" />
      ))}
    </div>
    <UserDropdown />
  </Card>
);

/** --------- NavItem Component --------- */
const NavItem: React.FC<NavItemProps> = ({
  Icon,
  label,
  action,
  tooltipSide = "right",
  isMobile = false,
}) => {
  // On mobile, use a smaller icon (h-6), on desktop a larger icon (h-10)
  const iconSizeClass = isMobile ? "h-6 w-6" : "h-10 w-10";
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" className="p-3" onClick={action}>
          <Icon className={iconSizeClass} />
        </Button>
      </TooltipTrigger>
      {label && <TooltipContent side={tooltipSide}>{label}</TooltipContent>}
    </Tooltip>
  );
};

const MobileNavItem: React.FC<NavItemProps> = ({ Icon, action }) => {
  // On mobile, always use h-6
  const iconSizeClass = "h-6 w-6";
  return (
    <Button variant="ghost" className="p-3" onClick={action}>
      <Icon className={iconSizeClass} />
    </Button>
  );
};

/** --------- UserDropdown Component --------- */
const UserDropdown: React.FC<UserDropdownProps> = ({ isMobile = false }) => {
  const { user } = useUserStore();
  // Generate initials from the user's name for the avatar fallback
  const getInitials = (name: string | undefined): string => {
    if (!name) return "";
    const parts = name.split(" ");
    return parts.length === 1
      ? parts[0][0].toUpperCase()
      : parts[0][0].toUpperCase() + parts[1][0].toUpperCase();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className={`flex items-center justify-center ${isMobile ? "pb-0" : "mb-4"}`}>
          <Avatar className={`cursor-pointer text-background ${isMobile ? "w-8 h-8" : "w-10 h-10"}`}>
            <AvatarImage src={user?.image || AVATAR_IMAGE} alt="User Avatar" />
            <AvatarFallback className="rounded-lg text-primary">
              {getInitials(user?.name)}
            </AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-48 min-w-56 rounded-lg"
        side={isMobile ? "top" : "right"}
        align={isMobile ? "center" : "end"}
        sideOffset={4}
      >
        <UserMenu />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

/** --------- UserMenu Component --------- */
const UserMenu: React.FC = () => {
  const { user } = useUserStore();
  const getInitials = (name: string | undefined): string => {
    if (!name) return "";
    const parts = name.split(" ");
    return parts.length === 1
      ? parts[0][0].toUpperCase()
      : parts[0][0].toUpperCase() + parts[1][0].toUpperCase();
  };

  return (
    <>
      <DropdownMenuLabel className="p-0 font-normal">
        <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
          <Avatar className="h-8 w-8 rounded-lg">
            <AvatarImage src={user?.image || AVATAR_IMAGE} alt="User Avatar" />
            <AvatarFallback>{getInitials(user?.name)}</AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">{user?.name}</span>
            <span className="truncate text-xs">{user?.email}</span>
          </div>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem disabled className="cursor-default">
          <Phone className="mr-2 h-4 w-4" />
          {user?.phone}
        </DropdownMenuItem>
        <DropdownMenuItem disabled className="cursor-default">
          <Briefcase className="mr-2 h-4 w-4" />
          {user?.jobTitle}
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />


      {/* Additional actions can be dynamic as well */}
      {/* <DropdownMenuGroup>
        <DropdownMenuItem onClick={() => console.log("Account clicked")}>
          <BadgeCheck className="mr-2 h-4 w-4" />
          Account
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => console.log("Billing clicked")}>
          <CreditCard className="mr-2 h-4 w-4" />
          Billing
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => console.log("Notifications clicked")}>
          <Bell className="mr-2 h-4 w-4" />
          Notifications
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator /> */}


      <DropdownMenuItem className="cursor-pointer" onClick={() => console.log("Log out clicked")}>
        <LogOut className="mr-2 h-4 w-4" />
        Log out
      </DropdownMenuItem>
    </>
  );
};

export default AppSidebar;

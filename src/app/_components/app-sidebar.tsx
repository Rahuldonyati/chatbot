"use client"

import { Home, MessageSquare, Share, LogOut, Sparkles, BadgeCheck, CreditCard, Bell } from 'lucide-react';
import { Button } from "@/shadcn/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from '@/shadcn/components/ui/tooltip';
import Image from 'next/image';
import { Card } from '@/shadcn/components/ui/card';
import { useIsMobile } from "@/shadcn/hooks/use-mobile";
import { LOGOICON } from '@/app/_constants/constants';
import { Avatar, AvatarFallback, AvatarImage } from '@/shadcn/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/shadcn/components/ui/dropdown-menu';

export function AppSidebar() {
  const isMobile = useIsMobile();

  const navItems = [
    { icon: Home, label: "Home" },
    { icon: MessageSquare, label: "Messages" },
    { icon: Share, label: "Share" },
  ];

  if (isMobile) {
    return (
      <Card className="fixed rounded-none bottom-0 left-0 w-full flex justify-around bg-primary text-white p-2 z-40">
        {navItems.map(({ icon: Icon, label }, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <Button variant="ghost" className="p-3">
                <Icon className="h-6 w-6" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side='top'>{label}</TooltipContent>
          </Tooltip>
        ))}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" className="p-3">
              <LogOut className="h-6 w-6" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side='top'>Logout</TooltipContent>
        </Tooltip>
      </Card>
    );
  }

  return (
    <Card className="flex flex-col h-screen fixed left-0 top-0 w-14 pt-4 bg-primary text-white dark:bg-purple-dark rounded-br-xl rounded-tr-xl rounded-bl-none rounded-tl-none z-40">
      {/* Logo at the top */}
      <div className="flex items-center justify-center ">
        <Image alt="logo" width="40" height="40" src={LOGOICON} />
      </div>

      {/* Icons for navigation */}
      <div className="flex-1 flex flex-col items-center space-y-4 py-4">
        {navItems.map(({ icon: Icon, label }, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <Button variant="ghost" className="p-3">
                <Icon className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side='right'>{label}</TooltipContent>
          </Tooltip>
        ))}
      </div>

      {/* Logout Button at the Bottom */}
      <DropdownMenu>
      <DropdownMenuTrigger asChild>

      <div className="flex items-center justify-center pb-4 ">
        <Tooltip>
          <TooltipTrigger asChild>
            <Avatar className="w-10 h-10 cursor-pointer text-background ">
              <AvatarImage src="/path-to-avatar.jpg" alt="User Avatar" />
              <AvatarFallback className="rounded-lg text-primary">CN</AvatarFallback>
              </Avatar>
          </TooltipTrigger>
          <TooltipContent>Profile</TooltipContent>
        </Tooltip>
      </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src="" alt="user" />
                  <AvatarFallback className="rounded-lg ">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Sanjay</span>
                  <span className="truncate text-xs">sanjay.gouda@donyati.com</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Sparkles />
                Upgrade to Pro
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <BadgeCheck />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
      </DropdownMenu>
    </Card>
  );
}

"use client"

import * as React from "react"
import {
  AudioWaveform,
  Bot,
  Command,
  GalleryVerticalEnd,
  ChartBarStacked,
  SquareTerminal,
  BookMinus,
  MessagesSquare,
} from "lucide-react"


import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/shadcn/components/ui/sidebar"
import Image from "next/image"
import { useTheme } from "next-themes"



import { ChevronRight, Edit2, Forward, MoreHorizontal, Trash2, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/shadcn/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/shadcn/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shadcn/components/ui/dropdown-menu"
import { Button } from "@/shadcn/components/ui/button"


// This is sample data.
const data = {
  user: {
    name: "Sanjay Gouda",
    email: "sanjay.gouda@donyati.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Donyati Dbot",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Todays",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Test Chat 1",
          url: "#1",
        },
        {
          title: "Test Chat 2",
          url: "#2",
        },
        {
          title: "Test Chat 3",
          url: "#3",
        },
      ],
    },
    {
      title: "Yesterday",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Test Chat 4",
          url: "#4",
        },
        {
          title: "Explore Next Js",
          url: "#5",
        },
        {
          title: "Quantum Computer",
          url: "#6",
        },
      ]
    }
  ],
  publications: [
    {
      name: "Select Category",
      url: "#",
      icon: ChartBarStacked,
      subItems: [
        { title: "Technology", url: "#" },
        { title: "Science", url: "#" },
        { title: "Mathematics", url: "#" },
      ],
    },
    {
      name: "Select Subcategory",
      url: "#",
      icon: BookMinus,
      subItems: [
        { title: "AI & ML", url: "#" },
        { title: "Quantum Computing", url: "#" },
        { title: "Astrophysics", url: "#" },
      ],
    },
  ],
}

export function ChatSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { open } = useSidebar()
  const { theme } = useTheme();
  const { isMobile } = useSidebar()
  return (
    <Sidebar collapsible="offcanvas" {...props} className="left-14 border  border-purplelight">
      <SidebarHeader className="flex justify-center items-center gap-0 ">
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent  data-[state=open]:text-sidebar-accent-foreground"
        >
          {!open && <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <Image alt="logo" width="100" height="100" src="data:image/png;base64,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" />

          </div>}
          <div className="grid flex-1 text-center items-center justify-center text-sm leading-tight">
            <Image
              className="p-2"
              alt="logo"
              width={100}
              height={100}
              src={theme === "dark" ? "/assets/logos/logo-white.png" : "/assets/logos/logo-purple.png"} // Change src based on theme
            />

          </div>
        </SidebarMenuButton>
        <Button size="sm" className="text-xs bg-purplelight rounded-full px-8 flex items-cente max-w-fit space-x-0">
          <MessagesSquare size={20} strokeWidth={3} className="text-white drop-shadow-md" />
          <span className="font-bold">New Chat</span>

        </Button>
      </SidebarHeader>
      <SidebarContent className=" m-2 rounded-sm overflow-y-auto scrollbar-thin  scrollbar-track-transparent scrollbar-thumb-rounded-lg scrollbar-thumb-opacity-70 scrollbar-track-opacity-20 transition-all">
        <SidebarGroup>
          <SidebarGroupLabel>Yesterday</SidebarGroupLabel>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={item.isActive}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem, index) => (
                        <div key={subItem.url || index} className="relative">
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton asChild>
                              <a href={subItem.url} className="flex-1">

                                <span>{subItem.title}</span>
                              </a>
                            </SidebarMenuSubButton>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <SidebarMenuAction showOnHover>
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">More</span>
                                </SidebarMenuAction>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent
                                className="w-48 rounded-lg"
                                side={isMobile ? "bottom" : "right"}
                                align={isMobile ? "end" : "start"}
                              >
                                <DropdownMenuItem>
                                  <Edit2 className="mr-2 h-4 w-4 text-muted-foreground" />
                                  <span>Rename</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Trash2 className="mr-2 h-4 w-4 text-muted-foreground" />
                                  <span>Delete</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                  <Forward className="mr-2 h-4 w-4 text-muted-foreground" />
                                  <span>Share</span>
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </SidebarMenuSubItem>
                        </div>
                      ))}
                    </SidebarMenuSub>

                  </CollapsibleContent>
                </SidebarMenuItem>

              </Collapsible>
            ))}
            <SidebarMenuItem>
              <SidebarMenuButton className="text-sidebar-foreground/70">
                <MoreHorizontal className="text-sidebar-foreground/70" />
                <span>More</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        {/* <NavProjects projects={data.publications} /> */}
      </SidebarContent>
      <SidebarFooter>
        {/* <NavUser user={data.user} /> */}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

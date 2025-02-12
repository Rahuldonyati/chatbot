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
  ChevronRight, Edit2, Forward, MoreHorizontal, Trash2,
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

import {LOGO_WHITE,LOGO_PURPLE} from "@/app/_constants/constants"


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
  const { theme } = useTheme();
  const { isMobile } = useSidebar()
  return (
    <Sidebar collapsible="offcanvas" {...props} className="left-14 border-r border-purplelight">
      <SidebarHeader className="flex justify-center items-center gap-0 ">
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent  data-[state=open]:text-sidebar-accent-foreground"
        >

          <div className="grid flex-1 text-center items-center justify-center text-sm leading-tight">
            <Image
              className="p-2"
              alt="logo"
              width={100}
              height={100}
              src={theme === "dark" ? LOGO_WHITE : LOGO_PURPLE} // Change src based on theme
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

"use client";

import * as React from "react";
import {
 
  CreditCard,
  Frame,
  Image,
  Images,
  Layers,
  Settings,
  Sparkles,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar";
import { title } from "process";


const data = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: SquareTerminal,
    },
    {
      title: "Generate image",
      url: "/image-generation",
      icon: Image,
    },
    {
      title: "My models",
      url: "/models",
      icon : Frame
    },
    {
      title: "Train Images",
      url: "/model-training",
      icon : Layers
    },
    {
      title: "My Images",
      url: "/gallery",
      icon : Images
    },
    {
      title: "Billing",
      url: "/billing",
      icon : CreditCard
    },
    {
      title: "Settings",
      url: "/account-settings",
      icon : Settings
    }
    
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <Sparkles className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">AI-Image-Generator</span>
            <span className="truncate text-xs">Pro</span>
          </div>
          
        </SidebarMenuButton>
        
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data} />
      </SidebarContent>
      <SidebarFooter>{/* <NavUser user={data.user} /> */}</SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

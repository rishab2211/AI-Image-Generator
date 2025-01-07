"use client";

import { ChevronRight, CreditCard, Frame, Image, Images, Layers, Settings, SquareTerminal, type LucideIcon } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
const navItems = [
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
export function NavMain() {

  const pathName = usePathname();
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {navItems.map((item) => (
          <Link href={item.url} key={item.title} className={cn("rounded-none",
            pathName === item.url? "text-primary": "text-muted-foreground"
          )} >
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </SidebarMenuButton>
            </SidebarMenuItem>
          </Link>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}

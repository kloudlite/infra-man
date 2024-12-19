"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { TeamSwitcher } from "./team-switcher";
import {
  ChevronRight,
  CloudIcon,
  DatabaseIcon,
  HardDriveIcon,
  LayersIcon,
  MonitorIcon,
  NetworkIcon,
  ServerIcon,
  SettingsIcon,
  SlidersIcon,
  UsersIcon,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const sidebarData = [
  {
    label: "Compute",
    icon: ServerIcon,
    items: [
      { name: "Clusters", link: "/dashboard/clusters", icon: NetworkIcon },
      { name: "Instances", link: "/dashboard/instances", icon: MonitorIcon },
    ],
  },
  {
    label: "Storage",
    icon: HardDriveIcon,
    items: [
      { name: "Object", link: "/dashboard/object-storage", icon: DatabaseIcon },
      { name: "Block", link: "/dashboard/block-storage", icon: LayersIcon },
    ],
  },
  {
    label: "Settings",
    icon: SettingsIcon,
    items: [
      {
        name: "General",
        link: "/dashboard/settings/general",
        icon: SlidersIcon,
      },
      { name: "Team", link: "/dashboard/settings/team", icon: UsersIcon },
      {
        name: "Cloud Providers",
        link: "/dashboard/settings/cloud-providers",
        icon: CloudIcon,
      },
    ],
  },
];



export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarData.map((group, index) => (
                <Collapsible
                  key={group.label}
                  asChild
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton>
                        {group.icon && <group.icon size={18} />}
                        <span>{group.label}</span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {group.items.map((item, idx) => (
                          <SidebarMenuSubItem key={item.name}>
                            <SidebarMenuSubButton asChild>
                              <Link href={item.link}>
                                {item.icon && <item.icon />}
                                <span>{item.name}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

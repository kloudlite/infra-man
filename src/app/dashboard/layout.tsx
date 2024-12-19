"use client";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import {AppSidebar} from "./sidebar";
import { Separator } from "@radix-ui/react-separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { UserNav } from "@/components/user-nav";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const pathComponents = pathname.split("/").filter((c) => c!="");
  const [dashboardComponent, page, ...rest] = pathComponents;
  const tree: {
    [key: string]: {
      label: string;
      path: string;
    }
  } = {
    "clusters": {
      label: "Clusters",
      path:"/dashboard/clusters",
    }
  }
  return <div className="flex">
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
          <header className="flex h-16 px-4 bg-background/80 backdrop-blur rounded-t-xl z-50 sticky top-0 w-full border-b border-border/40">
              <div className="flex items-center gap-2 flex-1">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href={tree[page].path}>
                          {tree[page].label}
                      </Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    {rest.length > 0 && (
                      <>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          <BreadcrumbPage>
                            {rest[0]}
                          </BreadcrumbPage>
                        </BreadcrumbItem>
                      </>
                    )}
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              <div className="flex items-center space-x-2">
                <UserNav />
              </div>
          </header>
          <main>
            {children}
          </main>
      </SidebarInset>
    </SidebarProvider>
  </div>
}
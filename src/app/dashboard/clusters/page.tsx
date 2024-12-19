import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import Image from "next/image"
import { z } from "zod"

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { UserNav } from "../../../components/user-nav"
import { taskSchema } from "./data/schema"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@radix-ui/react-separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { PlusIcon, Slash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { clusterSchema } from "@/types/types"


export const metadata: Metadata = {
  title: "Clusters",
  description: "Managed clusters",
}

async function getClusters() {
  const data = await fs.readFile(
    path.join(process.cwd(), "src/app/dashboard/clusters/cluster-data/clusters.json")
  )
  const tasks = JSON.parse(data.toString())
  return z.array(clusterSchema).parse(tasks)
}

export default async function TaskPage() {
  const clusters = await getClusters()
  return (
    <>
      <div className="h-full flex-1 flex-col space-y-8 -y-8 p-8">
        <div className="flex items-center justify-between space-y-2">
            <div className="flex-1">
              <h2 className="text-2xl font-bold tracking-tight">Managed Clusters</h2>
              <p className="text-muted-foreground">
                Here&apos;s the list of your clusters and their status.
              </p>
            </div>
        </div>
        <DataTable data={clusters} columns={columns} />
      </div>
    </>
  )
}

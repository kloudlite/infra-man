"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge"

import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"
import { Cluster } from "@/types/types"
import { CheckCircle, Circle, HelpCircle, Timer } from "lucide-react"

export const columns: ColumnDef<Cluster>[] = [
  {
    accessorKey: "id",
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader title="Cluster" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex flex-col">
          <span>{row.getValue("name")}</span>
          <span className="lowercase text-muted-foreground">{row.getValue("id")}</span>
        </div>
      )
    },
    size: 80,
    maxSize: 80,
    filterFn: (row, id, value) => {
      return row.getValue<string>("id").toLowerCase().includes(value.toLowerCase()) || row.getValue<string>("name").toLowerCase().includes(value.toLowerCase())
    }
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader title="Status" />
    ),
    cell: ({ row }) => {
      const status = row.getValue<string>("status");
      return (
        <div className="flex gap-2 items-center capitalize">
          {
            {
              "ready": <CheckCircle size={16} />,
              "installing": <Timer size={16} />,
              "deleting": <Circle size={16} />,
              "pending": <HelpCircle size={16} />,
            }[status]
          }
          {status}
        </div>
      )
    },
    maxSize: 80,
    filterFn: (row, id, value:string[]) => {
      return value.includes(row.getValue(id))
    }
  },
  {
    accessorKey: "region.provider",
    header: () => (
      <DataTableColumnHeader title="Provider" />
    ),
    cell: ({ row }) => {
      const {provider} = row.getValue<{region: string, provider: string}>("region")
      return (
        <div className="flex space-x-2">
          {provider}
        </div>
      )
    },
    enableHiding: false,
  },
  {
    accessorKey: "region",
    header: () => (
      <DataTableColumnHeader title="Region" />
    ),
    cell: ({ row }) => {
      const {region} = row.getValue<{region: string, provider: string}>("region")
      return (
        <div className="flex space-x-2">
          {region}
        </div>
      )
    },
  },
  {
    accessorKey: "provider",
  },
  {
    accessorKey: "Zones",
    header: ({ column }) => (
      <DataTableColumnHeader title="Zones" />
    ),
    cell: ({ row }) => {
      const region = row.getValue<{zones: string[]}>("region")
      
      return (
        <div className="flex space-x-2 lowercase">
          {
            region.zones.map((zone) => (
              <Badge key={zone} variant="outline">{zone}</Badge>
            ))
          }
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <div>
      Created 2 days ago 
      by karthik
    </div>,
  }
  // {
  //   id: "actions",
  //   cell: ({ row }) => <DataTableRowActions row={row} />,
  // },
]

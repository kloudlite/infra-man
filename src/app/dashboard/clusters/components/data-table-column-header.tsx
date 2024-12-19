import { Column } from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ChevronsUpDown, EyeOff } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      {title}
    </div>
  );
}

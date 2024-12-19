"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

type Nodepool = {
  name: string;
  status: string;
  minMaxNodes: string;
  currentNodes: string;
  premption: string;
};

const data = [
  {
    name: "Nodepool 1",
    status: "Ready",
    minMaxNodes: "1/10",
    currentNodes: "3",
    premption: "on-demand",
  },
  {
    name: "Nodepool 2",
    status: "Ready",
    minMaxNodes: "1/10",
    currentNodes: "3",
    premption: "spot",
  },
  {
    name: "Nodepool 3",
    status: "Ready",
    minMaxNodes: "1/10",
    currentNodes: "3",
    premption: "on-demand",
  },
  {
    name: "Nodepool 4",
    status: "Ready",
    minMaxNodes: "1/10",
    currentNodes: "3",
    premption: "spot",
  },
  {
    name: "Nodepool 5",
    status: "Ready",
    minMaxNodes: "1/10",
    currentNodes: "3",
    premption: "on-demand",
  },
];

const columnHelper = createColumnHelper<Nodepool>();

const columns: ColumnDef<Nodepool, any>[] = [
  columnHelper.accessor("name", {
    header: "Name",
    cell: (props) => {
      return <div>{props.getValue()}</div>;
    },
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (props) => {
      return <div>{props.getValue()}</div>;
    },
  }),
  columnHelper.accessor("minMaxNodes", {
    header: ()=> <div className="text-center">Min/Max Nodes</div>,
    cell: (props) => {
      return <div className="text-center">{props.getValue()}</div>;
    },
  }),
  columnHelper.accessor("currentNodes", {
    header: ()=><div className="text-center">Current Nodes</div>,
    cell: (props) => {
      return <div className="text-center">{props.getValue()}</div>;
    },
  }),
  columnHelper.accessor("premption", {
    header: "Premption",
    cell: (props) => {
      return <div>{props.getValue()}</div>;
    },
  }),
];

export const NodePoolsTable = () => {
  const table = useReactTable<Nodepool>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length
            ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )
            : null}
        </TableBody>
      </Table>
    </div>
  );
};

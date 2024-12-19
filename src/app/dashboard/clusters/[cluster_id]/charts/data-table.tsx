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

type Chart = {
  name: string;
  namespace: string;
  chart: string;
  version: string;
  revision: string;
};

const data = [
  {
    name: "test-chart",
    namespace: "default",
    chart: "test-chart",
    version: "1.0.0",
    revision: "1",
  },
  {
    name: "test-chart-2",
    namespace: "default",
    chart: "test-chart",
    version: "1.0.0",
    revision: "1",
  },
  {
    name: "test-chart-3",
    namespace: "default",
    chart: "test-chart",
    version: "1.0.0",
    revision: "1",
  },
  {
    name: "test-chart-4",
    namespace: "default",
    chart: "test-chart",
    version: "1.0.0",
    revision: "1",
  },
  {
    name: "test-chart-5",
    namespace: "default",
    chart: "test-chart",
    version: "1.0.0",
    revision: "1",
  }
];

const columnHelper = createColumnHelper<Chart>();

const columns: ColumnDef<Chart, any>[] = [
  columnHelper.accessor("name", {
    header: "Name",
    cell: (props) => {
      return <div>{props.getValue()}</div>;
    },
  }),
  columnHelper.accessor("namespace", {
    header: "Namespace",
    cell: (props) => {
      return <div>{props.getValue()}</div>;
    },
  }),
  columnHelper.accessor("chart", {
    header: "Chart",
    cell: (props) => {
      return <div>{props.getValue()}</div>;
    },
  }),
  columnHelper.accessor("version", {
    header: "Version",
    cell: (props) => {
      return <div>{props.getValue()}</div>;
    },
  }),
  columnHelper.accessor("revision", {
    header: "Revision",
    cell: (props) => {
      return <div>{props.getValue()}</div>;
    },
  }),
];

export const ChartsTable = () => {
  const table = useReactTable<Chart>({
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

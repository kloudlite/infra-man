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

type Volume = {
  name: string;
  namespace: string;
  status: string;
  size: string;
};

const data = [
  {
    name: "test-volume",
    namespace: "default",
    status: "Bound",
    size: "1Gi",
  },
  {
    name: "test-volume-2",
    namespace: "default",
    status: "Bound",
    size: "1Gi",
  },
  {
    name: "test-volume-3",
    namespace: "default",
    status: "Bound",
    size: "1Gi",
  },
  {
    name: "test-volume-4",
    namespace: "default",
    status: "Bound",
    size: "1Gi",
  },
  {
    name: "test-volume-5",
    namespace: "default",
    status: "Bound",
    size: "1Gi",
  },
];

const columnHelper = createColumnHelper<Volume>();

const columns: ColumnDef<Volume, any>[] = [
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
  columnHelper.accessor("status", {
    header: "Status",
    cell: (props) => {
      return <div>{props.getValue()}</div>;
    },
  }),
  columnHelper.accessor("size", {
    header: ()=> <div className="text-center">Size in GB</div>,
    cell: (props) => {
      return <div className="text-center">{props.getValue()}GB</div>;
    },
  }),
];

export const StorageTable = () => {
  const table = useReactTable<Volume>({
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

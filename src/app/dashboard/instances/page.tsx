import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const instances = [
  {
    instanceId: "i-0a123456",
    name: "Web Server",
    status: "Running",
    type: "t2.micro",
    region: "aws-dev/us-west-1 (AWS)",
    publicIp: "100.3847.32846",
    managedBy: "Cluster-1",
    createdAt: "2021-10-01",
    updatedAt: "2021-10-01",
    createdBy: "John Doe",
  },
  {
    instanceId: "i-0b123457",
    name: "Database Server",
    status: "Stopped",
    type: "t2.medium",
    region: "aws-dev/us-east-1 (AWS)",
    publicIp: "100.3847.32847",
    managedBy: "Cluster-2",
    createdAt: "2021-11-01",
    updatedAt: "2021-11-01",
    createdBy: "Jane Doe",
  },
  {
    instanceId: "i-0c123458",
    name: "Cache Server",
    status: "Pending",
    type: "t2.large",
    region: "aws-dev/eu-central-1 (AWS)",
    publicIp: "100.3847.32848",
    managedBy: "Cluster-3",
    createdAt: "2021-12-01",
    updatedAt: "2021-12-01",
    createdBy: "Alice Smith",
  },
  {
    instanceId: "i-0d123459",
    name: "Application Server",
    status: "Terminated",
    type: "t2.xlarge",
    region: "aws-dev/ap-southeast-1 (AWS)",
    publicIp: "100.3847.32849",
    managedBy: "Cluster-4",
    createdAt: "2022-01-01",
    updatedAt: "2022-01-01",
    createdBy: "Bob Johnson",
  },
  {
    instanceId: "i-0e123460",
    name: "Load Balancer",
    status: "Running",
    type: "Standard_B1s",
    region: "azure-dev/eastus (Azure)",
    publicIp: "100.3847.32850",
    managedBy: "Cluster-5",
    createdAt: "2022-02-01",
    updatedAt: "2022-02-01",
    createdBy: "Charlie Brown",
  },
  {
    instanceId: "i-0f123461",
    name: "Storage Server",
    status: "Stopped",
    type: "n1-standard-1",
    region: "gcp-dev/us-central1 (GCP)",
    publicIp: "100.3847.32851",
    managedBy: "Cluster-6",
    createdAt: "2022-03-01",
    updatedAt: "2022-03-01",
    createdBy: "David Clark",
  }
];
export default async function InstancesPage() {
  return <div>
    <Table className="w-full">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px]">Instance ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Region</TableHead>
          <TableHead>Public IP</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {instances.map((instance) => (
          <>
            <TableRow key={instance.instanceId}>
              <TableCell className="font-medium">{instance.instanceId}</TableCell>
              <TableCell>{instance.name}</TableCell>
              <TableCell>{instance.status}</TableCell>
              <TableCell>{instance.type}</TableCell>
              <TableCell>{instance.region}</TableCell>
              <TableCell>{instance.publicIp}</TableCell>
            </TableRow>
          </>
        ))}
      </TableBody>
    </Table>
  </div>
}

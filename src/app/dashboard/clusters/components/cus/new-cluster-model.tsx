import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CheckCircle, Cloud, PlusIcon, Server } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface FormData {
  clusterName: string;
  provider: string;
  availability: string;
  region: string;
  zone: string;
}

interface CloudProvider {
  value: string;
  label: string;
}

interface RegionOption {
  value: string;
  label: string;
}

interface AvailabilityOption {
  value: string;
  label: string;
}

type RegionsType = {
  [key: string]: RegionOption[];
};

type ZonesType = {
  [key: string]: string[];
};

const ClusterConfigForm: React.FC = () => {
  const [formData, setFormData] = React.useState<FormData>({
    clusterName: "",
    provider: "",
    availability: "",
    region: "",
    zone: "",
  });

  const cloudProviders: CloudProvider[] = [
    { value: "aws", label: "Amazon Web Services" },
    { value: "gcp", label: "Google Cloud Platform" },
    { value: "azure", label: "Microsoft Azure" },
  ];

  const availabilityOptions: AvailabilityOption[] = [
    { value: "ha", label: "High - 3 masters" },
    { value: "single", label: "Basic - single master" },
  ];

  const regions: RegionsType = {
    aws: [
      { value: "us-east-1", label: "US East (N. Virginia)" },
      { value: "us-west-2", label: "US West (Oregon)" },
      { value: "eu-west-1", label: "EU (Ireland)" },
    ],
    gcp: [
      { value: "us-central1", label: "US Central (Iowa)" },
      { value: "europe-west1", label: "Europe West (Belgium)" },
      { value: "asia-east1", label: "Asia East (Taiwan)" },
    ],
    azure: [
      { value: "eastus", label: "East US" },
      { value: "westeurope", label: "West Europe" },
      { value: "southeastasia", label: "Southeast Asia" },
    ],
  };

  const zones: ZonesType = {
    "us-east-1": ["us-east-1a", "us-east-1b", "us-east-1c"],
    "us-west-2": ["us-west-2a", "us-west-2b", "us-west-2c"],
    "eu-west-1": ["eu-west-1a", "eu-west-1b", "eu-west-1c"],
    "us-central1": ["us-central1-a", "us-central1-b", "us-central1-c"],
    "europe-west1": ["europe-west1-b", "europe-west1-c", "europe-west1-d"],
    "asia-east1": ["asia-east1-a", "asia-east1-b", "asia-east1-c"],
    "eastus": ["eastus-1", "eastus-2", "eastus-3"],
    "westeurope": ["westeurope-1", "westeurope-2", "westeurope-3"],
    "southeastasia": ["southeastasia-1", "southeastasia-2", "southeastasia-3"],
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Cluster Configuration:", formData);
    // Here you would typically make an API call to create the cluster
  };

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => {
      const newData = { ...prev, [name]: value };

      // Reset dependent fields when provider changes
      if (name === "provider") {
        newData.region = "";
        newData.zone = "";
      }

      // Reset zone when region changes
      if (name === "region") {
        newData.zone = "";
      }

      return newData;
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        {/* Cluster Name */}
        <div className="col-span-2 space-y-1.5">
          <Label htmlFor="clusterName" className="font-medium">
            Cluster Name
          </Label>
          <Input
            id="clusterName"
            placeholder="Enter a unique name for your cluster"
            value={formData.clusterName}
            onChange={(e) => handleChange("clusterName", e.target.value)}
          />
        </div>

        {/* Cloud Provider */}
        <div className="space-y-1.5">
          <Label htmlFor="provider" className="font-medium">
            Cloud Provider
          </Label>
          <Select
            value={formData.provider}
            onValueChange={(value) => handleChange("provider", value)}
          >
            <SelectTrigger id="provider">
              <SelectValue placeholder="Select provider" />
            </SelectTrigger>
            <SelectContent>
              {cloudProviders.map((provider) => (
                <SelectItem key={provider.value} value={provider.value}>
                  <div className="flex items-center gap-2">
                    <Cloud className="h-4 w-4 text-primary" />
                    {provider.label}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Availability Level */}
        <div className="space-y-1.5">
          <Label htmlFor="availability" className="font-medium">
            Availability Level
          </Label>
          <Select
            value={formData.availability}
            onValueChange={(value) => handleChange("availability", value)}
          >
            <SelectTrigger id="availability">
              <SelectValue placeholder="Select availability" />
            </SelectTrigger>
            <SelectContent>
              {availabilityOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Region */}
        <div className="space-y-1.5">
          <Label htmlFor="region" className="font-medium">
            Region
          </Label>
          <Select
            value={formData.region}
            onValueChange={(value) => handleChange("region", value)}
            disabled={!formData.provider}
          >
            <SelectTrigger id="region">
              <SelectValue placeholder="Select region" />
            </SelectTrigger>
            <SelectContent>
              {formData.provider &&
                regions[formData.provider].map((region) => (
                  <SelectItem key={region.value} value={region.value}>
                    {region.label}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>

        {/* Zone */}
        <div className="space-y-1.5">
          <Label htmlFor="zone" className="font-medium">
            Zone
          </Label>
          <Select
            value={formData.zone}
            onValueChange={(value) => handleChange("zone", value)}
            disabled={!formData.region}
          >
            <SelectTrigger id="zone">
              <SelectValue placeholder="Select zone" />
            </SelectTrigger>
            <SelectContent>
              {formData.region &&
                [...zones[formData.region], ].map((zone) => (
                  <SelectItem key={zone} value={zone}>
                    {zone}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </form>
  );
};

export const NewClusterModel: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"default"} className="h-8 px-2 lg:px-3">
          <PlusIcon className="h-4 w-4" />
          Create Cluster
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-96">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            Create New Cluster
          </DialogTitle>
          <DialogDescription>
            Configure your cluster settings and deployment preferences
          </DialogDescription>
        </DialogHeader>
        <ClusterConfigForm />
        <DialogFooter className="pt-4">
          <Button type="submit">
            <CheckCircle className="mr-2 h-4 w-4" />
            Create Cluster
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ClusterConfigForm;

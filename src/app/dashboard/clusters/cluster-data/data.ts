import {
  CheckCircle,
  Circle,
  CircleOff,
  Timer
} from "lucide-react";

export const providers = [
  {
    value: "aws",
    label: "AWS",
  },
  {
    value: "gcp",
    label: "GCP",
  },
  {
    value: "azure",
    label: "Azure",
  },
]

export const statuses = [
  {
    value: "pending",
    label: "Pending",
    icon: Circle,
  },
  {
    value: "installing",
    label: "Installing",
    icon: Timer,
  },
  {
    value: "ready",
    label: "Ready",
    icon: CheckCircle,
  },
  {
    value: "deleting",
    label: "Deleting",
    icon: CircleOff,
  },
]

const digitalOceanRegions = [
  {
    continent: "North America",
    regions: [
      {
        name: "New York",
        slug: "nyc",
        zones: ["nyc1", "nyc3"]
      },
      {
        name: "San Francisco",
        slug: "sfo",
        zones: ["sfo1", "sfo2", "sfo3"]
      },
      {
        name: "Toronto",
        slug: "tor",
        zones: ["tor1"]
      }
    ]
  },
  {
    continent: "Europe",
    regions: [
      {
        name: "Amsterdam",
        slug: "ams",
        zones: ["ams2", "ams3"]
      },
      {
        name: "London",
        slug: "lon",
        zones: ["lon1"]
      },
      {
        name: "Frankfurt",
        slug: "fra",
        zones: ["fra1"]
      }
    ]
  },
  {
    continent: "Asia Pacific",
    regions: [
      {
        name: "Singapore",
        slug: "sgp",
        zones: ["sgp1"]
      },
      {
        name: "Bangalore",
        slug: "blr",
        zones: ["blr1"]
      },
      {
        name: "Sydney",
        slug: "syd",
        zones: ["syd1"]
      }
    ]
  }
];

const awsRegions = [
  {
    continent: "North America",
    regions: [
      {
        name: "US East (N. Virginia)",
        slug: "us-east-1",
        zones: ["us-east-1a", "us-east-1b", "us-east-1c", "us-east-1d", "us-east-1e", "us-east-1f"]
      },
      {
        name: "US East (Ohio)",
        slug: "us-east-2",
        zones: ["us-east-2a", "us-east-2b", "us-east-2c"]
      },
      {
        name: "US West (N. California)",
        slug: "us-west-1",
        zones: ["us-west-1a", "us-west-1b", "us-west-1c"]
      },
      {
        name: "US West (Oregon)",
        slug: "us-west-2",
        zones: ["us-west-2a", "us-west-2b", "us-west-2c", "us-west-2d"]
      },
      {
        name: "Canada (Central)",
        slug: "ca-central-1",
        zones: ["ca-central-1a", "ca-central-1b", "ca-central-1d"]
      }
    ]
  },
  {
    continent: "South America",
    regions: [
      {
        name: "South America (São Paulo)",
        slug: "sa-east-1",
        zones: ["sa-east-1a", "sa-east-1b", "sa-east-1c"]
      }
    ]
  },
  {
    continent: "Europe",
    regions: [
      {
        name: "Europe (Ireland)",
        slug: "eu-west-1",
        zones: ["eu-west-1a", "eu-west-1b", "eu-west-1c"]
      },
      {
        name: "Europe (London)",
        slug: "eu-west-2",
        zones: ["eu-west-2a", "eu-west-2b", "eu-west-2c"]
      },
      {
        name: "Europe (Paris)",
        slug: "eu-west-3",
        zones: ["eu-west-3a", "eu-west-3b", "eu-west-3c"]
      },
      {
        name: "Europe (Frankfurt)",
        slug: "eu-central-1",
        zones: ["eu-central-1a", "eu-central-1b", "eu-central-1c"]
      },
      {
        name: "Europe (Milan)",
        slug: "eu-south-1",
        zones: ["eu-south-1a", "eu-south-1b", "eu-south-1c"]
      },
      {
        name: "Europe (Stockholm)",
        slug: "eu-north-1",
        zones: ["eu-north-1a", "eu-north-1b", "eu-north-1c"]
      },
      {
        name: "Europe (Zurich)",
        slug: "eu-central-2",
        zones: ["eu-central-2a", "eu-central-2b", "eu-central-2c"]
      },
      {
        name: "Europe (Spain)",
        slug: "eu-south-2",
        zones: ["eu-south-2a", "eu-south-2b", "eu-south-2c"]
      }
    ]
  },
  {
    continent: "Asia Pacific",
    regions: [
      {
        name: "Asia Pacific (Tokyo)",
        slug: "ap-northeast-1",
        zones: ["ap-northeast-1a", "ap-northeast-1c", "ap-northeast-1d"]
      },
      {
        name: "Asia Pacific (Seoul)",
        slug: "ap-northeast-2",
        zones: ["ap-northeast-2a", "ap-northeast-2b", "ap-northeast-2c", "ap-northeast-2d"]
      },
      {
        name: "Asia Pacific (Singapore)",
        slug: "ap-southeast-1",
        zones: ["ap-southeast-1a", "ap-southeast-1b", "ap-southeast-1c"]
      },
      {
        name: "Asia Pacific (Sydney)",
        slug: "ap-southeast-2",
        zones: ["ap-southeast-2a", "ap-southeast-2b", "ap-southeast-2c"]
      },
      {
        name: "Asia Pacific (Mumbai)",
        slug: "ap-south-1",
        zones: ["ap-south-1a", "ap-south-1b", "ap-south-1c"]
      },
      {
        name: "Asia Pacific (Hong Kong)",
        slug: "ap-east-1",
        zones: ["ap-east-1a", "ap-east-1b", "ap-east-1c"]
      },
      {
        name: "Asia Pacific (Osaka)",
        slug: "ap-northeast-3",
        zones: ["ap-northeast-3a", "ap-northeast-3b", "ap-northeast-3c"]
      },
      {
        name: "Asia Pacific (Jakarta)",
        slug: "ap-southeast-3",
        zones: ["ap-southeast-3a", "ap-southeast-3b", "ap-southeast-3c"]
      },
      {
        name: "Asia Pacific (Melbourne)",
        slug: "ap-southeast-4",
        zones: ["ap-southeast-4a", "ap-southeast-4b", "ap-southeast-4c"]
      },
      {
        name: "Asia Pacific (Hyderabad)",
        slug: "ap-south-2",
        zones: ["ap-south-2a", "ap-south-2b", "ap-south-2c"]
      }
    ]
  },
  {
    continent: "Middle East",
    regions: [
      {
        name: "Middle East (Bahrain)",
        slug: "me-south-1",
        zones: ["me-south-1a", "me-south-1b", "me-south-1c"]
      },
      {
        name: "Middle East (UAE)",
        slug: "me-central-1",
        zones: ["me-central-1a", "me-central-1b", "me-central-1c"]
      }
    ]
  },
  {
    continent: "Africa",
    regions: [
      {
        name: "Africa (Cape Town)",
        slug: "af-south-1",
        zones: ["af-south-1a", "af-south-1b", "af-south-1c"]
      }
    ]
  }
];

const gcpRegions = [
  {
    continent: "North America",
    regions: [
      {
        name: "Council Bluffs, Iowa, North America",
        slug: "us-central1",
        zones: ["us-central1-a", "us-central1-b", "us-central1-c", "us-central1-f"]
      },
      {
        name: "South Carolina, North America",
        slug: "us-east1",
        zones: ["us-east1-b", "us-east1-c", "us-east1-d"]
      },
      {
        name: "Ashburn, Virginia, North America",
        slug: "us-east4",
        zones: ["us-east4-a", "us-east4-b", "us-east4-c"]
      },
      {
        name: "Oregon, North America",
        slug: "us-west1",
        zones: ["us-west1-a", "us-west1-b", "us-west1-c"]
      },
      {
        name: "Los Angeles, California, North America",
        slug: "us-west2",
        zones: ["us-west2-a", "us-west2-b", "us-west2-c"]
      },
      {
        name: "Salt Lake City, North America",
        slug: "us-west3",
        zones: ["us-west3-a", "us-west3-b", "us-west3-c"]
      },
      {
        name: "Las Vegas, Nevada, North America",
        slug: "us-west4",
        zones: ["us-west4-a", "us-west4-b", "us-west4-c"]
      },
      {
        name: "Montreal, North America",
        slug: "northamerica-northeast1",
        zones: ["northamerica-northeast1-a", "northamerica-northeast1-b", "northamerica-northeast1-c"]
      },
      {
        name: "Toronto, North America",
        slug: "northamerica-northeast2",
        zones: ["northamerica-northeast2-a", "northamerica-northeast2-b", "northamerica-northeast2-c"]
      }
    ]
  },
  {
    continent: "South America",
    regions: [
      {
        name: "São Paulo, Brazil, South America",
        slug: "southamerica-east1",
        zones: ["southamerica-east1-a", "southamerica-east1-b", "southamerica-east1-c"]
      },
      {
        name: "Santiago, Chile, South America",
        slug: "southamerica-west1",
        zones: ["southamerica-west1-a", "southamerica-west1-b", "southamerica-west1-c"]
      }
    ]
  },
  {
    continent: "Europe",
    regions: [
      {
        name: "Belgium, Europe",
        slug: "europe-west1",
        zones: ["europe-west1-b", "europe-west1-c", "europe-west1-d"]
      },
      {
        name: "London, England, Europe",
        slug: "europe-west2",
        zones: ["europe-west2-a", "europe-west2-b", "europe-west2-c"]
      },
      {
        name: "Frankfurt, Germany, Europe",
        slug: "europe-west3",
        zones: ["europe-west3-a", "europe-west3-b", "europe-west3-c"]
      },
      {
        name: "Netherlands, Europe",
        slug: "europe-west4",
        zones: ["europe-west4-a", "europe-west4-b", "europe-west4-c"]
      },
      {
        name: "Zürich, Switzerland, Europe",
        slug: "europe-west6",
        zones: ["europe-west6-a", "europe-west6-b", "europe-west6-c"]
      },
      {
        name: "Milan, Italy, Europe",
        slug: "europe-west8",
        zones: ["europe-west8-a", "europe-west8-b", "europe-west8-c"]
      },
      {
        name: "Paris, France, Europe",
        slug: "europe-west9",
        zones: ["europe-west9-a", "europe-west9-b", "europe-west9-c"]
      },
      {
        name: "Berlin, Germany, Europe",
        slug: "europe-west10",
        zones: ["europe-west10-a", "europe-west10-b", "europe-west10-c"]
      },
      {
        name: "Turin, Italy, Europe",
        slug: "europe-west12",
        zones: ["europe-west12-a", "europe-west12-b", "europe-west12-c"]
      },
      {
        name: "Warsaw, Poland, Europe",
        slug: "europe-central2",
        zones: ["europe-central2-a", "europe-central2-b", "europe-central2-c"]
      },
      {
        name: "Madrid, Spain, Europe",
        slug: "europe-southwest1",
        zones: ["europe-southwest1-a", "europe-southwest1-b", "europe-southwest1-c"]
      }
    ]
  },
  {
    continent: "Asia Pacific",
    regions: [
      {
        name: "Taiwan, Asia-Pacific",
        slug: "asia-east1",
        zones: ["asia-east1-a", "asia-east1-b", "asia-east1-c"]
      },
      {
        name: "Hong Kong, Asia-Pacific",
        slug: "asia-east2",
        zones: ["asia-east2-a", "asia-east2-b", "asia-east2-c"]
      },
      {
        name: "Tokyo, Japan, Asia-Pacific",
        slug: "asia-northeast1",
        zones: ["asia-northeast1-a", "asia-northeast1-b", "asia-northeast1-c"]
      },
      {
        name: "Osaka, Japan, Asia-Pacific",
        slug: "asia-northeast2",
        zones: ["asia-northeast2-a", "asia-northeast2-b", "asia-northeast2-c"]
      },
      {
        name: "Seoul, South Korea, Asia-Pacific",
        slug: "asia-northeast3",
        zones: ["asia-northeast3-a", "asia-northeast3-b", "asia-northeast3-c"]
      },
      {
        name: "Mumbai, India, Asia-Pacific",
        slug: "asia-south1",
        zones: ["asia-south1-a", "asia-south1-b", "asia-south1-c"]
      },
      {
        name: "Delhi, India, Asia-Pacific",
        slug: "asia-south2",
        zones: ["asia-south2-a", "asia-south2-b", "asia-south2-c"]
      },
      {
        name: "Singapore, Asia-Pacific",
        slug: "asia-southeast1",
        zones: ["asia-southeast1-a", "asia-southeast1-b", "asia-southeast1-c"]
      },
      {
        name: "Jakarta, Indonesia, Asia-Pacific",
        slug: "asia-southeast2",
        zones: ["asia-southeast2-a", "asia-southeast2-b", "asia-southeast2-c"]
      },
      {
        name: "Melbourne, Australia, Asia-Pacific",
        slug: "australia-southeast2",
        zones: ["australia-southeast2-a", "australia-southeast2-b", "australia-southeast2-c"]
      },
      {
        name: "Sydney, Australia, Asia-Pacific",
        slug: "australia-southeast1",
        zones: ["australia-southeast1-a", "australia-southeast1-b", "australia-southeast1-c"]
      }
    ]
  },
  {
    continent: "Middle East",
    regions: [
      {
        name: "Doha, Qatar, Middle East",
        slug: "me-central1",
        zones: ["me-central1-a", "me-central1-b", "me-central1-c"]
      }
    ]
  }
];

const azureRegions = [
  {
    continent: "North America",
    regions: [
      {
        name: "East US",
        slug: "eastus",
        zones: ["eastus-1", "eastus-2", "eastus-3"]
      },
      {
        name: "East US 2",
        slug: "eastus2",
        zones: ["eastus2-1", "eastus2-2", "eastus2-3"]
      },
      {
        name: "Central US",
        slug: "centralus",
        zones: ["centralus-1", "centralus-2", "centralus-3"]
      },
      {
        name: "North Central US",
        slug: "northcentralus",
        zones: []
      },
      {
        name: "South Central US",
        slug: "southcentralus",
        zones: ["southcentralus-1", "southcentralus-2", "southcentralus-3"]
      },
      {
        name: "West US",
        slug: "westus",
        zones: []
      },
      {
        name: "West US 2",
        slug: "westus2",
        zones: ["westus2-1", "westus2-2", "westus2-3"]
      },
      {
        name: "West US 3",
        slug: "westus3",
        zones: ["westus3-1", "westus3-2", "westus3-3"]
      },
      {
        name: "West Central US",
        slug: "westcentralus",
        zones: []
      },
      {
        name: "Canada Central",
        slug: "canadacentral",
        zones: ["canadacentral-1", "canadacentral-2", "canadacentral-3"]
      },
      {
        name: "Canada East",
        slug: "canadaeast",
        zones: []
      }
    ]
  },
  {
    continent: "South America",
    regions: [
      {
        name: "Brazil South",
        slug: "brazilsouth",
        zones: ["brazilsouth-1", "brazilsouth-2", "brazilsouth-3"]
      },
      {
        name: "Brazil Southeast",
        slug: "brazilsoutheast",
        zones: []
      }
    ]
  },
  {
    continent: "Europe",
    regions: [
      {
        name: "North Europe",
        slug: "northeurope",
        zones: ["northeurope-1", "northeurope-2", "northeurope-3"]
      },
      {
        name: "West Europe",
        slug: "westeurope",
        zones: ["westeurope-1", "westeurope-2", "westeurope-3"]
      },
      {
        name: "UK South",
        slug: "uksouth",
        zones: ["uksouth-1", "uksouth-2", "uksouth-3"]
      },
      {
        name: "UK West",
        slug: "ukwest",
        zones: []
      },
      {
        name: "France Central",
        slug: "francecentral",
        zones: ["francecentral-1", "francecentral-2", "francecentral-3"]
      },
      {
        name: "France South",
        slug: "francesouth",
        zones: []
      },
      {
        name: "Germany West Central",
        slug: "germanywestcentral",
        zones: ["germanywestcentral-1", "germanywestcentral-2", "germanywestcentral-3"]
      },
      {
        name: "Germany North",
        slug: "germanynorth",
        zones: []
      },
      {
        name: "Norway East",
        slug: "norwayeast",
        zones: ["norwayeast-1", "norwayeast-2", "norwayeast-3"]
      },
      {
        name: "Norway West",
        slug: "norwaywest",
        zones: []
      },
      {
        name: "Switzerland North",
        slug: "switzerlandnorth",
        zones: ["switzerlandnorth-1", "switzerlandnorth-2", "switzerlandnorth-3"]
      },
      {
        name: "Switzerland West",
        slug: "switzerlandwest",
        zones: []
      },
      {
        name: "Sweden Central",
        slug: "swedencentral",
        zones: ["swedencentral-1", "swedencentral-2", "swedencentral-3"]
      }
    ]
  },
  {
    continent: "Asia Pacific",
    regions: [
      {
        name: "East Asia",
        slug: "eastasia",
        zones: ["eastasia-1", "eastasia-2", "eastasia-3"]
      },
      {
        name: "Southeast Asia",
        slug: "southeastasia",
        zones: ["southeastasia-1", "southeastasia-2", "southeastasia-3"]
      },
      {
        name: "Japan East",
        slug: "japaneast",
        zones: ["japaneast-1", "japaneast-2", "japaneast-3"]
      },
      {
        name: "Japan West",
        slug: "japanwest",
        zones: []
      },
      {
        name: "Korea Central",
        slug: "koreacentral",
        zones: ["koreacentral-1", "koreacentral-2", "koreacentral-3"]
      },
      {
        name: "Korea South",
        slug: "koreasouth",
        zones: []
      },
      {
        name: "Australia East",
        slug: "australiaeast",
        zones: ["australiaeast-1", "australiaeast-2", "australiaeast-3"]
      },
      {
        name: "Australia Southeast",
        slug: "australiasoutheast",
        zones: []
      },
      {
        name: "Australia Central",
        slug: "australiacentral",
        zones: []
      },
      {
        name: "Australia Central 2",
        slug: "australiacentral2",
        zones: []
      }
    ]
  },
  {
    continent: "Middle East",
    regions: [
      {
        name: "UAE North",
        slug: "uaenorth",
        zones: ["uaenorth-1", "uaenorth-2", "uaenorth-3"]
      },
      {
        name: "UAE Central",
        slug: "uaecentral",
        zones: []
      },
      {
        name: "Qatar Central",
        slug: "qatarcentral",
        zones: ["qatarcentral-1", "qatarcentral-2", "qatarcentral-3"]
      }
    ]
  },
  {
    continent: "Africa",
    regions: [
      {
        name: "South Africa North",
        slug: "southafricanorth",
        zones: ["southafricanorth-1", "southafricanorth-2", "southafricanorth-3"]
      },
      {
        name: "South Africa West",
        slug: "southafricawest",
        zones: []
      }
    ]
  }
];

const ociRegions = [
  {
    continent: "North America",
    regions: [
      {
        name: "Phoenix, Arizona",
        slug: "us-phoenix-1",
        zones: ["PHX-AD-1", "PHX-AD-2", "PHX-AD-3"]
      },
      {
        name: "Ashburn, Virginia",
        slug: "us-ashburn-1",
        zones: ["IAD-AD-1", "IAD-AD-2", "IAD-AD-3"]
      },
      {
        name: "San Jose, California",
        slug: "us-sanjose-1",
        zones: ["SJC-AD-1"]
      },
      {
        name: "Chicago, Illinois",
        slug: "us-chicago-1",
        zones: ["ORD-AD-1"]
      },
      {
        name: "Montreal, Canada",
        slug: "ca-montreal-1",
        zones: ["YUL-AD-1"]
      },
      {
        name: "Toronto, Canada",
        slug: "ca-toronto-1",
        zones: ["YYZ-AD-1"]
      }
    ]
  },
  {
    continent: "South America",
    regions: [
      {
        name: "Sao Paulo, Brazil",
        slug: "sa-saopaulo-1",
        zones: ["GRU-AD-1"]
      },
      {
        name: "Vinhedo, Brazil",
        slug: "sa-vinhedo-1",
        zones: ["VCP-AD-1"]
      },
      {
        name: "Santiago, Chile",
        slug: "sa-santiago-1",
        zones: ["SCL-AD-1"]
      }
    ]
  },
  {
    continent: "Europe",
    regions: [
      {
        name: "Frankfurt, Germany",
        slug: "eu-frankfurt-1",
        zones: ["FRA-AD-1", "FRA-AD-2", "FRA-AD-3"]
      },
      {
        name: "Zurich, Switzerland",
        slug: "eu-zurich-1",
        zones: ["ZRH-AD-1"]
      },
      {
        name: "Amsterdam, Netherlands",
        slug: "eu-amsterdam-1",
        zones: ["AMS-AD-1"]
      },
      {
        name: "Madrid, Spain",
        slug: "eu-madrid-1",
        zones: ["MAD-AD-1"]
      },
      {
        name: "Marseille, France",
        slug: "eu-marseille-1",
        zones: ["MRS-AD-1"]
      },
      {
        name: "Milan, Italy",
        slug: "eu-milan-1",
        zones: ["MXP-AD-1"]
      },
      {
        name: "Paris, France",
        slug: "eu-paris-1",
        zones: ["CDG-AD-1"]
      },
      {
        name: "Stockholm, Sweden",
        slug: "eu-stockholm-1",
        zones: ["ARN-AD-1"]
      },
      {
        name: "Newport, Wales, UK",
        slug: "uk-newport-1",
        zones: ["NWP-AD-1"]
      },
      {
        name: "London, UK",
        slug: "uk-london-1",
        zones: ["LHR-AD-1"]
      }
    ]
  },
  {
    continent: "Asia Pacific",
    regions: [
      {
        name: "Tokyo, Japan",
        slug: "ap-tokyo-1",
        zones: ["NRT-AD-1"]
      },
      {
        name: "Osaka, Japan",
        slug: "ap-osaka-1",
        zones: ["KIX-AD-1"]
      },
      {
        name: "Seoul, South Korea",
        slug: "ap-seoul-1",
        zones: ["ICN-AD-1"]
      },
      {
        name: "Chuncheon, South Korea",
        slug: "ap-chuncheon-1",
        zones: ["YNY-AD-1"]
      },
      {
        name: "Mumbai, India",
        slug: "ap-mumbai-1",
        zones: ["BOM-AD-1"]
      },
      {
        name: "Hyderabad, India",
        slug: "ap-hyderabad-1",
        zones: ["HYD-AD-1"]
      },
      {
        name: "Singapore",
        slug: "ap-singapore-1",
        zones: ["SIN-AD-1"]
      },
      {
        name: "Melbourne, Australia",
        slug: "ap-melbourne-1",
        zones: ["MEL-AD-1"]
      },
      {
        name: "Sydney, Australia",
        slug: "ap-sydney-1",
        zones: ["SYD-AD-1"]
      }
    ]
  },
  {
    continent: "Middle East",
    regions: [
      {
        name: "Dubai, UAE",
        slug: "me-dubai-1",
        zones: ["DXB-AD-1"]
      },
      {
        name: "Jeddah, Saudi Arabia",
        slug: "me-jeddah-1",
        zones: ["JED-AD-1"]
      }
    ]
  },
  {
    continent: "Africa",
    regions: [
      {
        name: "Johannesburg, South Africa",
        slug: "af-johannesburg-1",
        zones: ["JNB-AD-1"]
      }
    ]
  }
];


const vultrRegions = [
  {
    continent: "North America",
    regions: [
      {
        name: "New Jersey",
        slug: "ewr",
        zones: ["ewr-1"]
      },
      {
        name: "Chicago",
        slug: "ord",
        zones: ["ord-1"]
      },
      {
        name: "Dallas",
        slug: "dfw",
        zones: ["dfw-1"]
      },
      {
        name: "Seattle",
        slug: "sea",
        zones: ["sea-1"]
      },
      {
        name: "Los Angeles",
        slug: "lax",
        zones: ["lax-1"]
      },
      {
        name: "Silicon Valley",
        slug: "sjc",
        zones: ["sjc-1"]
      },
      {
        name: "Atlanta",
        slug: "atl",
        zones: ["atl-1"]
      },
      {
        name: "Miami",
        slug: "mia",
        zones: ["mia-1"]
      },
      {
        name: "Toronto",
        slug: "yto",
        zones: ["yto-1"]
      },
      {
        name: "Mexico City",
        slug: "mex",
        zones: ["mex-1"]
      }
    ]
  },
  {
    continent: "South America",
    regions: [
      {
        name: "São Paulo",
        slug: "sao",
        zones: ["sao-1"]
      },
      {
        name: "Santiago",
        slug: "scl",
        zones: ["scl-1"]
      }
    ]
  },
  {
    continent: "Europe",
    regions: [
      {
        name: "Amsterdam",
        slug: "ams",
        zones: ["ams-1"]
      },
      {
        name: "London",
        slug: "lon",
        zones: ["lon-1"]
      },
      {
        name: "Frankfurt",
        slug: "fra",
        zones: ["fra-1"]
      },
      {
        name: "Paris",
        slug: "cdg",
        zones: ["cdg-1"]
      },
      {
        name: "Warsaw",
        slug: "waw",
        zones: ["waw-1"]
      },
      {
        name: "Stockholm",
        slug: "arn",
        zones: ["arn-1"]
      },
      {
        name: "Madrid",
        slug: "mad",
        zones: ["mad-1"]
      }
    ]
  },
  {
    continent: "Asia Pacific",
    regions: [
      {
        name: "Tokyo",
        slug: "nrt",
        zones: ["nrt-1"]
      },
      {
        name: "Seoul",
        slug: "icn",
        zones: ["icn-1"]
      },
      {
        name: "Singapore",
        slug: "sgp",
        zones: ["sgp-1"]
      },
      {
        name: "Mumbai",
        slug: "bom",
        zones: ["bom-1"]
      },
      {
        name: "Delhi NCR",
        slug: "del",
        zones: ["del-1"]
      },
      {
        name: "Bangalore",
        slug: "blr",
        zones: ["blr-1"]
      },
      {
        name: "Sydney",
        slug: "syd",
        zones: ["syd-1"]
      },
      {
        name: "Melbourne",
        slug: "mel",
        zones: ["mel-1"]
      }
    ]
  },
  {
    continent: "Africa",
    regions: [
      {
        name: "Johannesburg",
        slug: "jnb",
        zones: ["jnb-1"]
      }
    ]
  },
  {
    continent: "Middle East",
    regions: [
      {
        name: "Tel Aviv",
        slug: "tlv",
        zones: ["tlv-1"]
      }
    ]
  }
];

const linodeRegions = [
  {
    continent: "North America",
    regions: [
      {
        name: "Newark, NJ, USA",
        slug: "us-east",
        zones: ["us-east-1"]
      },
      {
        name: "Atlanta, GA, USA",
        slug: "us-southeast",
        zones: ["us-southeast-1"]
      },
      {
        name: "Dallas, TX, USA",
        slug: "us-central",
        zones: ["us-central-1"]
      },
      {
        name: "Fremont, CA, USA",
        slug: "us-west",
        zones: ["us-west-1"]
      },
      {
        name: "Toronto, ON, Canada",
        slug: "ca-central",
        zones: ["ca-central-1"]
      }
    ]
  },
  {
    continent: "South America",
    regions: [
      {
        name: "São Paulo, Brazil",
        slug: "br-gru",
        zones: ["br-gru-1"]
      }
    ]
  },
  {
    continent: "Europe",
    regions: [
      {
        name: "Frankfurt, Germany",
        slug: "eu-central",
        zones: ["eu-central-1"]
      },
      {
        name: "London, United Kingdom",
        slug: "eu-west",
        zones: ["eu-west-1"]
      },
      {
        name: "Stockholm, Sweden",
        slug: "eu-north",
        zones: ["eu-north-1"]
      },
      {
        name: "Milan, Italy",
        slug: "eu-south",
        zones: ["eu-south-1"]
      }
    ]
  },
  {
    continent: "Asia Pacific",
    regions: [
      {
        name: "Mumbai, India",
        slug: "ap-west",
        zones: ["ap-west-1"]
      },
      {
        name: "Singapore",
        slug: "ap-southeast",
        zones: ["ap-southeast-1"]
      },
      {
        name: "Tokyo, Japan",
        slug: "ap-northeast",
        zones: ["ap-northeast-1"]
      },
      {
        name: "Sydney, Australia",
        slug: "ap-southeast-sid",
        zones: ["ap-southeast-sid-1"]
      },
      {
        name: "Jakarta, Indonesia",
        slug: "ap-south",
        zones: ["ap-south-1"]
      }
    ]
  }
];

const upcloudRegions = [
  {
    continent: "North America",
    regions: [
      {
        name: "New York, NY, USA",
        slug: "us-nyc",
        zones: ["us-nyc1"]
      },
      {
        name: "Chicago, IL, USA",
        slug: "us-chi",
        zones: ["us-chi1"]
      },
      {
        name: "San Jose, CA, USA",
        slug: "us-sjo",
        zones: ["us-sjo1"]
      },
      {
        name: "Montreal, Canada",
        slug: "ca-mon",
        zones: ["ca-mon1"]
      }
    ]
  },
  {
    continent: "Europe",
    regions: [
      {
        name: "London, United Kingdom",
        slug: "uk-lon",
        zones: ["uk-lon1"]
      },
      {
        name: "Frankfurt, Germany",
        slug: "de-fra",
        zones: ["de-fra1"]
      },
      {
        name: "Helsinki, Finland",
        slug: "fi-hel",
        zones: ["fi-hel1", "fi-hel2"]
      },
      {
        name: "Amsterdam, Netherlands",
        slug: "nl-ams",
        zones: ["nl-ams1"]
      },
      {
        name: "Madrid, Spain",
        slug: "es-mad",
        zones: ["es-mad1"]
      },
      {
        name: "Warsaw, Poland",
        slug: "pl-waw",
        zones: ["pl-waw1"]
      },
      {
        name: "Stockholm, Sweden",
        slug: "se-sto",
        zones: ["se-sto1"]
      }
    ]
  },
  {
    continent: "Asia Pacific",
    regions: [
      {
        name: "Singapore",
        slug: "sg-sin",
        zones: ["sg-sin1"]
      },
      {
        name: "Sydney, Australia",
        slug: "au-syd",
        zones: ["au-syd1"]
      },
      {
        name: "Tokyo, Japan",
        slug: "jp-tok",
        zones: ["jp-tok1"]
      }
    ]
  }
];

const hetznerRegions = [
  {
    continent: "North America",
    regions: [
      {
        name: "Ashburn, VA, USA",
        slug: "us-east",
        zones: ["us-east-1", "us-east-2"]
      },
      {
        name: "Hillsboro, OR, USA",
        slug: "us-west",
        zones: ["us-west-1"]
      }
    ]
  },
  {
    continent: "Europe",
    regions: [
      {
        name: "Nuremberg, Germany",
        slug: "eu-nbg",
        zones: ["eu-nbg1"]
      },
      {
        name: "Falkenstein, Germany",
        slug: "eu-fsn",
        zones: ["eu-fsn1"]
      },
      {
        name: "Helsinki, Finland",
        slug: "eu-hel",
        zones: ["eu-hel1", "eu-hel2"]
      }
    ]
  },
  {
    continent: "Asia Pacific",
    regions: [
      {
        name: "Singapore",
        slug: "ap-sin",
        zones: ["ap-sin1"]
      }
    ]
  }
];


const ibmRegions = [
  {
    continent: "North America",
    regions: [
      {
        name: "Dallas, TX, USA",
        slug: "us-south",
        zones: ["us-south-1", "us-south-2", "us-south-3"]
      },
      {
        name: "Washington DC, USA",
        slug: "us-east",
        zones: ["us-east-1", "us-east-2", "us-east-3"]
      },
      {
        name: "Toronto, Canada",
        slug: "ca-tor",
        zones: ["ca-tor-1", "ca-tor-2", "ca-tor-3"]
      },
      {
        name: "Montreal, Canada",
        slug: "ca-mon",
        zones: ["ca-mon-1"]
      }
    ]
  },
  {
    continent: "South America",
    regions: [
      {
        name: "São Paulo, Brazil",
        slug: "br-sao",
        zones: ["br-sao-1", "br-sao-2", "br-sao-3"]
      }
    ]
  },
  {
    continent: "Europe",
    regions: [
      {
        name: "London, United Kingdom",
        slug: "eu-gb",
        zones: ["eu-gb-1", "eu-gb-2", "eu-gb-3"]
      },
      {
        name: "Frankfurt, Germany",
        slug: "eu-de",
        zones: ["eu-de-1", "eu-de-2", "eu-de-3"]
      },
      {
        name: "Madrid, Spain",
        slug: "eu-es",
        zones: ["eu-es-1", "eu-es-2", "eu-es-3"]
      }
    ]
  },
  {
    continent: "Asia Pacific",
    regions: [
      {
        name: "Tokyo, Japan",
        slug: "jp-tok",
        zones: ["jp-tok-1", "jp-tok-2", "jp-tok-3"]
      },
      {
        name: "Osaka, Japan",
        slug: "jp-osa",
        zones: ["jp-osa-1", "jp-osa-2", "jp-osa-3"]
      },
      {
        name: "Sydney, Australia",
        slug: "au-syd",
        zones: ["au-syd-1", "au-syd-2", "au-syd-3"]
      },
      {
        name: "Chennai, India",
        slug: "in-che",
        zones: ["in-che-1"]
      }
    ]
  }
];

const alibabaRegions = [
  {
    continent: "Asia Pacific",
    regions: [
      {
        name: "Hong Kong",
        slug: "cn-hongkong",
        zones: ["cn-hongkong-a", "cn-hongkong-b", "cn-hongkong-c", "cn-hongkong-d"]
      },
      {
        name: "Singapore",
        slug: "ap-southeast-1",
        zones: ["ap-southeast-1-a", "ap-southeast-1-b", "ap-southeast-1-c"]
      },
      {
        name: "Sydney",
        slug: "ap-southeast-2",
        zones: ["ap-southeast-2-a", "ap-southeast-2-b", "ap-southeast-2-c"]
      },
      {
        name: "Kuala Lumpur",
        slug: "ap-southeast-3",
        zones: ["ap-southeast-3-a", "ap-southeast-3-b"]
      },
      {
        name: "Jakarta",
        slug: "ap-southeast-5",
        zones: ["ap-southeast-5-a", "ap-southeast-5-b", "ap-southeast-5-c"]
      },
      {
        name: "Mumbai",
        slug: "ap-south-1",
        zones: ["ap-south-1-a", "ap-south-1-b"]
      },
      {
        name: "Tokyo",
        slug: "ap-northeast-1",
        zones: ["ap-northeast-1-a", "ap-northeast-1-b", "ap-northeast-1-c"]
      },
      {
        name: "Seoul",
        slug: "ap-northeast-2",
        zones: ["ap-northeast-2-a", "ap-northeast-2-b"]
      },
      {
        name: "Bangkok",
        slug: "ap-southeast-7",
        zones: ["ap-southeast-7-a", "ap-southeast-7-b", "ap-southeast-7-c"]
      },
      {
        name: "Manila",
        slug: "ap-southeast-6",
        zones: ["ap-southeast-6-a", "ap-southeast-6-b"]
      }
    ]
  },
  {
    continent: "China Mainland",
    regions: [
      {
        name: "Hangzhou",
        slug: "cn-hangzhou",
        zones: ["cn-hangzhou-h", "cn-hangzhou-i", "cn-hangzhou-j"]
      },
      {
        name: "Shanghai",
        slug: "cn-shanghai",
        zones: ["cn-shanghai-a", "cn-shanghai-b", "cn-shanghai-c", "cn-shanghai-d"]
      },
      {
        name: "Beijing",
        slug: "cn-beijing",
        zones: ["cn-beijing-a", "cn-beijing-b", "cn-beijing-c", "cn-beijing-d", "cn-beijing-e"]
      },
      {
        name: "Shenzhen",
        slug: "cn-shenzhen",
        zones: ["cn-shenzhen-a", "cn-shenzhen-b", "cn-shenzhen-c", "cn-shenzhen-d", "cn-shenzhen-e"]
      },
      {
        name: "Guangzhou",
        slug: "cn-guangzhou",
        zones: ["cn-guangzhou-a", "cn-guangzhou-b", "cn-guangzhou-c"]
      },
      {
        name: "Chengdu",
        slug: "cn-chengdu",
        zones: ["cn-chengdu-a", "cn-chengdu-b"]
      },
      {
        name: "Qingdao",
        slug: "cn-qingdao",
        zones: ["cn-qingdao-b", "cn-qingdao-c"]
      },
      {
        name: "Zhangjiakou",
        slug: "cn-zhangjiakou",
        zones: ["cn-zhangjiakou-a", "cn-zhangjiakou-b", "cn-zhangjiakou-c"]
      },
      {
        name: "Hohhot",
        slug: "cn-huhehaote",
        zones: ["cn-huhehaote-a", "cn-huhehaote-b"]
      },
      {
        name: "Ulanqab",
        slug: "cn-wulanchabu",
        zones: ["cn-wulanchabu-a", "cn-wulanchabu-b", "cn-wulanchabu-c"]
      },
      {
        name: "Heyuan",
        slug: "cn-heyuan",
        zones: ["cn-heyuan-a", "cn-heyuan-b"]
      },
      {
        name: "Nanjing",
        slug: "cn-nanjing",
        zones: ["cn-nanjing-a", "cn-nanjing-b"]
      }
    ]
  },
  {
    continent: "North America",
    regions: [
      {
        name: "Silicon Valley",
        slug: "us-west-1",
        zones: ["us-west-1-a", "us-west-1-b"]
      },
      {
        name: "Virginia",
        slug: "us-east-1",
        zones: ["us-east-1-a", "us-east-1-b"]
      }
    ]
  },
  {
    continent: "Europe",
    regions: [
      {
        name: "Frankfurt",
        slug: "eu-central-1",
        zones: ["eu-central-1-a", "eu-central-1-b", "eu-central-1-c"]
      },
      {
        name: "London",
        slug: "eu-west-1",
        zones: ["eu-west-1-a", "eu-west-1-b"]
      },
      {
        name: "Paris",
        slug: "eu-west-3",
        zones: ["eu-west-3-a", "eu-west-3-b"]
      }
    ]
  },
  {
    continent: "Middle East",
    regions: [
      {
        name: "Dubai",
        slug: "me-east-1",
        zones: ["me-east-1-a", "me-east-1-b"]
      }
    ]
  }
];

const scalewayRegions = [
  {
    continent: "Europe",
    regions: [
      {
        name: "Paris, France",
        slug: "fr-par",
        zones: ["fr-par-1", "fr-par-2", "fr-par-3"]
      },
      {
        name: "Amsterdam, Netherlands",
        slug: "nl-ams",
        zones: ["nl-ams-1", "nl-ams-2"]
      },
      {
        name: "Warsaw, Poland",
        slug: "pl-waw",
        zones: ["pl-waw-1", "pl-waw-2"]
      }
    ]
  },
  {
    continent: "Asia Pacific",
    regions: [
      {
        name: "Singapore",
        slug: "ap-sgp",
        zones: ["ap-sgp-1"]
      }
    ]
  },
  {
    continent: "Africa",
    regions: [
      {
        name: "Johannesburg, South Africa",
        slug: "af-jnb",
        zones: ["af-jnb-1"]
      }
    ]
  }
];

const ovhRegions = [
  {
    continent: "Europe",
    regions: [
      {
        name: "Gravelines, France",
        slug: "gra",
        zones: ["gra-1", "gra-2", "gra-3"]
      },
      {
        name: "Strasbourg, France",
        slug: "sbg",
        zones: ["sbg-1", "sbg-2", "sbg-3"]
      },
      {
        name: "UK",
        slug: "uk",
        zones: ["uk-1"]
      },
      {
        name: "Germany",
        slug: "de",
        zones: ["de-1", "de-2"]
      },
      {
        name: "Warsaw, Poland",
        slug: "waw",
        zones: ["waw-1"]
      },
      {
        name: "Beauharnois, Canada",
        slug: "bhs",
        zones: ["bhs-1", "bhs-2", "bhs-3"]
      }
    ]
  },
  {
    continent: "North America",
    regions: [
      {
        name: "Vint Hill, USA",
        slug: "vhk",
        zones: ["vhk-1"]
      },
      {
        name: "Hillsboro, USA",
        slug: "hil",
        zones: ["hil-1"]
      }
    ]
  },
  {
    continent: "Asia Pacific",
    regions: [
      {
        name: "Singapore",
        slug: "sgp",
        zones: ["sgp-1"]
      },
      {
        name: "Sydney, Australia",
        slug: "syd",
        zones: ["syd-1"]
      }
    ]
  }
];

const kamateraRegions = [
  {
    continent: "North America",
    regions: [
      {
        name: "New York, USA",
        slug: "us-ny",
        zones: ["us-ny-1"]
      },
      {
        name: "Santa Clara, USA",
        slug: "us-sc",
        zones: ["us-sc-1"]
      },
      {
        name: "Dallas, USA",
        slug: "us-tx",
        zones: ["us-tx-1"]
      },
      {
        name: "Montreal, Canada",
        slug: "ca-on",
        zones: ["ca-on-1"]
      }
    ]
  },
  {
    continent: "Europe",
    regions: [
      {
        name: "London, UK",
        slug: "uk-lon",
        zones: ["uk-lon-1"]
      },
      {
        name: "Frankfurt, Germany",
        slug: "de-fra",
        zones: ["de-fra-1"]
      },
      {
        name: "Amsterdam, Netherlands",
        slug: "nl-ams",
        zones: ["nl-ams-1"]
      }
    ]
  },
  {
    continent: "Asia Pacific",
    regions: [
      {
        name: "Hong Kong",
        slug: "hk-hkg",
        zones: ["hk-hkg-1"]
      },
      {
        name: "Singapore",
        slug: "sg-sin",
        zones: ["sg-sin-1"]
      }
    ]
  },
  {
    continent: "Middle East",
    regions: [
      {
        name: "Tel Aviv, Israel",
        slug: "il-tlv",
        zones: ["il-tlv-1"]
      },
      {
        name: "Petach Tikva, Israel",
        slug: "il-ptr",
        zones: ["il-ptr-1"]
      },
      {
        name: "Rosh Haayin, Israel",
        slug: "il-rh",
        zones: ["il-rh-1"]
      }
    ]
  }
];




export const regions = [
  {
    label: "DigitalOcean",
    value: "do",
    regions: digitalOceanRegions
  },
  {
    label: "AWS",
    value: "aws",
    regions: awsRegions
  },
  {
    label: "GCP",
    value: "gcp",
    regions: gcpRegions
  },
  {
    label: "Azure",
    value: "azure",
    regions: azureRegions
  },
  {
    label: "Oracle",
    value: "oracle",
    regions: ociRegions
  },
  {
    label: "Vultr",
    value: "vultr",
    regions: vultrRegions
  },
  {
    label: "Linode",
    value: "linode",
    regions: linodeRegions
  },
  {
    label: "UpCloud",
    value: "upcloud",
    regions: upcloudRegions
  },
  {
    label: "Hetzner",
    value: "hetzner",
    regions: hetznerRegions
  },
  {
    label: "IBM",
    value: "ibm",
    regions: ibmRegions
  },
  {
    label: "Alibaba",
    value: "alibaba",
    regions: alibabaRegions
  },
  {
    label: "Scaleway",
    value: "scaleway",
    regions: scalewayRegions
  },
  {
    label: "OVH",
    value: "ovh",
    regions: ovhRegions
  },
  {
    label: "Kamatera",
    value: "kamatera",
    regions: kamateraRegions
  },
]

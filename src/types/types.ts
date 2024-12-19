import { z } from "zod"

export const clusterSchema = z.object({
  id: z.string(),
  name: z.string(),
  region: z.object({
    provider: z.string(),
    region: z.string(),
    zones: z.array(z.string()),
  }),
  availibityType: z.enum(["single", "HA"]),  
  status: z.string(),
})

export type Cluster = z.infer<typeof clusterSchema>

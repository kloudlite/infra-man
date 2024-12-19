import fs from "node:fs"
import path from "node:path"
import { faker } from "@faker-js/faker"

import { regions, statuses } from "./data.ts"

const tasks = Array.from({ length: 100 }, () => ({
  status: faker.helpers.arrayElement(statuses).value,
    id: `CLUS-${faker.number.int({ min: 1000, max: 9999 })}`,
    name: faker.hacker.abbreviation().replace(/^./, (letter) => letter.toUpperCase()),
    region: (()=>{
      const p = faker.helpers.arrayElement(regions);
      return {
        provider: p.label,
        region: faker.helpers.arrayElement(faker.helpers.arrayElement(p.regions).regions).slug,
        zones: faker.helpers.arrayElements(faker.helpers.arrayElement(faker.helpers.arrayElement(p.regions).regions).zones, 2)
      }
    })(),
    availibityType: faker.helpers.arrayElement(["single", "HA"]),
}))

fs.writeFileSync(
  path.join(import.meta.dirname, "clusters.json"),
  JSON.stringify(tasks, null, 2)
)

console.log("✅ Clusters generated.")

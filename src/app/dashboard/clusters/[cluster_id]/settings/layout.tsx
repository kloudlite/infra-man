import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Page({params, children}:{params:Promise<{cluster_id:string}>, children:React.ReactNode}) {
  const {cluster_id} = await params;
  return <div className="flex">
    <ul className="flex flex-col gap-2 w-52">
      <li>
        <Button variant={"link"} asChild>
          <Link href={`/dashboard/clusters/${cluster_id}/settings/general`} >
            General
          </Link>
        </Button>
      </li>
      <li>
        <Button variant={"link"} asChild>
          <Link href={`/dashboard/clusters/${cluster_id}/settings/advanced`}>
            Advanced
          </Link>
        </Button>
      </li>
    </ul>
  <main className="flex-1">
    {children}
  </main>
  </div>
  
}
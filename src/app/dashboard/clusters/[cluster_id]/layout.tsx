import { Navbar } from "./components";

export default function Layout({children}: {children: React.ReactNode}) {
  return <>
    <div className="h-full flex-1 flex-col space-y-8 -y-8 p-8">
        <div className="flex items-center justify-between space-y-2">
            <div className="flex-1">
              <h2 className="text-2xl font-bold tracking-tight">Cluster Name</h2>
              <p className="text-muted-foreground">
                AWS - us-west-2
              </p>
            </div>
        </div>
        <Navbar />
        {children}
        </div>
    
  </>
}
import { redirect } from "next/navigation";

export const GET = async (req: {url:string}) => { 
  const url = new URL(req.url);
  const currentPath = url.pathname;
  return redirect(`${currentPath}/overview`);
}
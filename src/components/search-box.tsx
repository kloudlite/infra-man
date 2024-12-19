'use client';

import { searchClusters } from "@/actions";

export const SearchBox = ({ title}:{searchAction?: ((title:string)=>void), title: string}) => {
  return <div>
    {title}
    <input type="text" onChange={(e)=>{
      (async ()=>{
        const data = await searchClusters(e.target.value, e.target.value, e.target.value, e.target.value)
        console.log(data)
      })();
    }} />
  </div>
}
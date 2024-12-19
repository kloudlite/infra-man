"use client";
import Link from "next/link";
import cn from "classnames";
import { useParams, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import classNames from "classnames";

const links = [
  {
    name: "Overview",
    href: "overview",
  },
  {
    name: "Nodepools",
    href: "nodepools",
  },
  {
    name: "Storage",
    href: "storage",
  },
  {
    name: "Charts",
    href: "charts",
  },
  {
    name: "Settings",
    href: "settings",
  },
];

export const Navbar = () => {
  const pathName = usePathname();
  const { cluster_id } = useParams();
  return (
    <div>
      <div className="flex items-center">
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={`/dashboard/clusters/${cluster_id}/${link.href}`}
              className={cn(
                "flex h-7 items-center justify-center border rounded-full px-4 text-center text-sm transition-colors hover:text-primary text-muted-foreground",
                {
                  "text-primary font-medium border": pathName.endsWith(
                    link.href,
                  ),
                  "border-transparent": !pathName.endsWith(link.href),
                },
              )}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

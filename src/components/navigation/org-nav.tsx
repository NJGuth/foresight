"use client";
import { Settings } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
// import { useClerk, useOrganization } from "@clerk/nextjs";
import { OrgSwitch } from "./org-switch";

export default function OrgNav() {
  //   const { openOrganizationProfile } = useClerk();
  //   const { organization } = useOrganization();

  //   if (!organization) return null;

  return (
    <div className="grid gap-2 pl-2.5 pr-1 py-2 ">
      <div className="flex justify-between">
        <Avatar className="w-12 h-12 rounded-md border">
          {/* <AvatarImage src={organization.imageUrl} alt={organization.name} /> */}
          <AvatarFallback>
            {/* {organization.name?.slice(0, 2).toUpperCase()} */}
            FS
          </AvatarFallback>
        </Avatar>
        <div className="space-x-1">
          <OrgSwitch />

          <Button
            variant="ghost"
            size="icon"
            className="size-7"
            // onClick={() => openOrganizationProfile()}
          >
            <Settings />
          </Button>
        </div>
      </div>
      <p className="text-lg pt-1 pb-2 font-semibold">Foresight</p>
    </div>
  );
}

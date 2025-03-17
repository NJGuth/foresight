"use client";
import { Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
// import { useClerk, useOrganization } from "@clerk/nextjs";
// import { OrgSwitch } from "./org-switcher";

export default function OrgNav() {
  //   const { openOrganizationProfile } = useClerk();
  //   const { organization } = useOrganization();

  //   if (!organization) return null;

  return (
    <div className="grid gap-2 p-2 ">
      <div className="flex justify-between">
        <Avatar className="w-12 h-12 rounded-md border">
          {/* <AvatarImage src={organization.imageUrl} alt={organization.name} /> */}
          <AvatarFallback>
            {/* {organization.name?.slice(0, 2).toUpperCase()} */}
            FS
          </AvatarFallback>
        </Avatar>
        <div>
          {/* <OrgSwitch /> */}

          <Button
            variant="ghost"
            size="icon"
            // onClick={() => openOrganizationProfile()}
          >
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <p className="text-lg pt-1 pb-2 font-semibold">Foresight</p>
    </div>
  );
}

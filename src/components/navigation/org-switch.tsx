"use client";

import React from "react";
// import { useOrganizationList } from "@clerk/nextjs";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { LayoutGridIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function OrgSwitch() {
  const [open, setOpen] = React.useState(false);

  //Fetch list of Orgs
  //   const { isLoaded, setActive, userMemberships } = useOrganizationList({
  //     userMemberships: {
  //       infinite: true,
  //     },
  //   });

  //   if (!isLoaded) {
  //     return <></>;
  //   }

  //   //Handle company switch
  //   const handleCompanySwitch = async (organizationId: string) => {
  //     await setActive({ organization: organizationId });
  //     setOpen(false);
  //   };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="size-7"
        onClick={() => setOpen(true)}
      >
        <LayoutGridIcon />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search to switch Company..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup>
            {/* {userMemberships.data?.map((org) => (
              <CommandItem
                key={org.id}
                onSelect={() => handleCompanySwitch(org.organization.id)}
              >
                <Avatar>
                  <AvatarImage src={org.organization.imageUrl} />
                  <AvatarFallback>{org.organization.name?.[0]}</AvatarFallback>
                </Avatar>
                <span className="ml-3 font-medium">
                  {org.organization.name}
                </span>
              </CommandItem>
            ))} */}
          </CommandGroup>
        </CommandList>
        <div className="flex justify-end p-2 border-t">
          <Link href="/org-creation">
            <Button variant="outline">Create New Org</Button>
          </Link>
        </div>
      </CommandDialog>
    </>
  );
}

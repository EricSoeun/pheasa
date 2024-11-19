import { Button } from "@/components/ui/button";
import React from "react";

export default function page() {
  return (
    <div className="flex max-w-xs flex-col gap-2 p-4">
      <Button>Default</Button>
      <Button variant={"primary"}>Primary</Button>
      <Button variant={"primaryOutline"}>Primary outlined</Button>
      <Button variant={"secondary"}>Secondary</Button>
      <Button variant={"secondaryOutline"}>Secondary outlined</Button>
      <Button variant={"danger"}>Danger</Button>
      <Button variant={"dangerOutline"}>Danger outlined</Button>
      <Button variant={"super"}>Super</Button>
      <Button variant={"superOutline"}>Super outlined</Button>
      <Button variant={"sidebar"}>Sidebar</Button>
      <Button variant={"sidebarOutline"}>Sidebar outlined</Button>
      <Button variant={"ghost"}>Ghost</Button>
    </div>
  );
}

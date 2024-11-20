"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

type Props = {
  label: string;
  iconSrc: string;
  href: string;
};

export function SidebarItem(props: Props) {
  const pathname = usePathname();
  const active = pathname === props.href;

  return (
    <Button
      variant={active ? "sidebarOutline" : "sidebar"}
      className="h-[52px] justify-start"
      asChild
    >
      <Link href={props.href}>
        <Image
          src={props.iconSrc}
          alt={props.label}
          height={32}
          width={32}
          className="mr-5"
        />
        {props.label}
      </Link>
    </Button>
  );
}

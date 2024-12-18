import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
  className?: string;
};

const SIDEBAR_ITEMS = [
  {
    label: "Learn",
    href: "/learn",
    iconSrc: "/images/learn.svg",
  },
  {
    label: "Leaderboard",
    href: "/leaderboard",
    iconSrc: "/images/leaderboard.svg",
  },
  {
    label: "Quests",
    href: "/quests",
    iconSrc: "/images/quests.svg",
  },
  {
    label: "Shop",
    href: "/shop",
    iconSrc: "/images/shop.svg",
  },
];

export default function Sidebar(props: Props) {
  return (
    <div
      className={cn(
        "left-0 top-0 flex h-full flex-col border-r-2 px-4 lg:fixed lg:w-[256px]",
        props.className
      )}
    >
      <Link href={"/learn"}>
        <div className="flex items-center gap-x-3 pb-7 pl-4 pt-8">
          <Image src="/images/boy.svg" width={40} height={40} alt="boy" />
          <h1 className="text-2xl font-extrabold tracking-wide text-green-600">
            Bahasa
          </h1>
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-y-2">
        {SIDEBAR_ITEMS.map((item, index) => (
          <SidebarItem
            key={index}
            label={item.label}
            href={item.href}
            iconSrc={item.iconSrc}
          />
        ))}
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="size-5 animate-spin text-muted-foreground" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton></UserButton>
        </ClerkLoaded>
      </div>
    </div>
  );
}

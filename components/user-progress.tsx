import Link from "next/link";
import Image from "next/image";

import { InfinityIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

type UserProgressProps = {
  activeCourse: {
    title: string;
    imageSrc: string;
  };
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export function UserProgress(props: UserProgressProps) {
  return (
    <div className="flex w-full items-center justify-between gap-x-2">
      <Link href={"/courses"}>
        <Button variant={"ghost"}>
          <Image
            src={props.activeCourse.imageSrc}
            alt={props.activeCourse.title}
            width={32}
            height={32}
            className="rounded-md border"
          />
        </Button>
      </Link>

      <Link href={"/shop"}>
        <Button variant={"ghost"} className="text-orange-500">
          <Image
            src={"/images/points.svg"}
            alt={"Points"}
            width={28}
            height={28}
            className="mr-2"
          />
          {props.points}
        </Button>
      </Link>

      <Link href={"/shop"}>
        <Button variant={"ghost"} className="text-rose-500">
          <Image
            src={"/images/heart.svg"}
            alt={"Hearts"}
            width={22}
            height={22}
            className="mr-2"
          />
          {props.hasActiveSubscription ? (
            <InfinityIcon className="size-4 stroke-[3]" />
          ) : (
            props.hearts
          )}
        </Button>
      </Link>
    </div>
  );
}

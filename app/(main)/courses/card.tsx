import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";

type Props = {
  title: string;
  id: number;
  imageSrc: string;
  onClick: (id: number) => void;
  disabled?: boolean;
  active?: boolean;
};

export default function Card(props: Props) {
  return (
    <div
      onClick={() => props.onClick(props.id)}
      className={cn(
        "flex h-full min-h-[217px] min-w-[200px] cursor-pointer flex-col items-center justify-between rounded-xl border-2 p-3 pb-6 hover:bg-black/5 active:border-b-2",
        props.disabled && "pointer-events-none opacity-50"
      )}
    >
      <div className="flex min-h-[24px] w-full items-center justify-end">
        {props.active && (
          <div className="flex items-center rounded-md bg-green-500 p-1.5">
            <Check className="size-4 stroke-[4] text-white" />
          </div>
        )}
      </div>
      <Image
        src={props.imageSrc}
        alt={props.title}
        width={93.33}
        height={70}
        className="rounded-lg border object-cover drop-shadow-md"
      />
      <p className="mt-3 text-center font-bold text-neutral-700">{props.title}</p>
    </div>
  );
}

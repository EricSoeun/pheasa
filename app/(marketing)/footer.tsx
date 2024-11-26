import { Button } from "@/components/ui/button";
import Image from "next/image";

const FLAGS = [
  {
    flag: "images/flags/la.svg",
    language: "Lao",
  },
  {
    flag: "images/flags/khm.svg",
    language: "Khmer",
  },
  {
    flag: "images/flags/th.svg",
    language: "Thaï",
  },
];

export function Footer() {
  return (
    <footer className="hidden h-20 w-full border-t-2 border-slate-200 p-2 lg:block">
      <div className="mx-auto flex h-full max-w-screen-lg items-center justify-evenly">
        {FLAGS.map((item, index) => (
          <Button size={"lg"} variant={"ghost"} className="w-full" key={index}>
            <Image
              src={item.flag}
              alt={item.language}
              height={32}
              width={40}
              className="mr-4 rounded-md"
            />
            {item.language}
          </Button>
        ))}
      </div>
    </footer>
  );
}
 
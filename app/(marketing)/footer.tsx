import { Button } from "@/components/ui/button";
import Image from "next/image";

const FLAGS = [
  {
    flag: "images/flags/hr.svg",
    language: "Croatian",
  },
  {
    flag: "images/flags/es.svg",
    language: "Spanish",
  },
  {
    flag: "images/flags/fr.svg",
    language: "French",
  },
  {
    flag: "images/flags/it.svg",
    language: "Italian",
  },
  {
    flag: "images/flags/jp.svg",
    language: "Japanese",
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
 
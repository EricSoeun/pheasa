import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-[988px] flex-1 flex-col items-center justify-center gap-2 p-4 lg:flex-row">
      <div className="relative mb-8 size-[240px] lg:size-[424px]">
        <Image src={"/images/hero.svg"} alt="hero" fill />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="min-w-[480px] text-center text-lg font-bold text-neutral-600 lg:text-3xl">
          Learn Tagalog, Lorem ipsum dolor sit
        </h1>
        <ClerkLoading>
          <Loader className="size-5 animate-spin text-muted-foreground" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <Button size={"lg"} variant={"secondary"} className="w-full" asChild>
              <Link href="/learn">Continue learning</Link>
            </Button>
          </SignedIn>
          <SignedOut>
            <SignUpButton
              mode="modal"
              fallbackRedirectUrl={"/learn"}
              forceRedirectUrl={"/learn"}
            >
              <Button size="lg" variant="secondary" className="w-full">
                Get Started
              </Button>
            </SignUpButton>
            <SignInButton
              mode="modal"
              fallbackRedirectUrl={"/learn"}
              forceRedirectUrl={"/learn"}
            >
              <Button size="lg" variant="primaryOutline" className="w-full">
                I already have an account
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </div>
  );
}

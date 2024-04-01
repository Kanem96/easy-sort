import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignUpButton,
  SignedOut,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-6">
      <div className="flex flex-col items-center gap-y-4">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center pb-0 mb-0">
          Ditch doom scrolling - Connect with people near you
        </h1>
        <p className="text-md lg:text-xl text-neutral-600 max-w-[480px] text-center">
          Tired of endless scrolling and awkward swiping? Ditch the dating apps
          and spark real connections with people who share your interests. Easy
          Sort makes it effortless to find and arrange meetups in your area, so
          you can spend less time planning and more time enjoying yourself.
        </p>
        <div className="self-start ml-6">
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton
                mode="modal"
                afterSignInUrl="/find"
                afterSignUpUrl="/find"
              >
                <Button variant="primary">Join Easy Sort</Button>
              </SignUpButton>
            </SignedOut>
          </ClerkLoaded>
        </div>
      </div>
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image src="/hero.png" fill alt="hero" />
      </div>
    </div>
  );
}

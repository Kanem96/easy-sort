"use client";

import SearchBar from "@/components/searchBar";
import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export interface HeaderProps {
  signedIn?: boolean;
}

const Header = ({ signedIn = false }: HeaderProps) => {
  const router = useRouter();
  return (
    <header className="h-16 w-full border-b-2 border-slate-200 px-4">
      <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/logo.png" height={120} width={120} alt="logo" />
        </div>
        {signedIn && (
          <>
            <SearchBar />
            <Button
              size="sm"
              variant="primary"
              onClick={() => router.push("/new-event")}
            >
              Create Event
            </Button>
          </>
        )}
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <div className="flex gap-x-1">
            <SignedOut>
              <SignInButton
                mode="modal"
                afterSignInUrl="/find"
                afterSignUpUrl="/find"
              >
                <Button size="lg" variant="ghost">
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton
                mode="modal"
                afterSignInUrl="/find"
                afterSignUpUrl="/find"
              >
                <Button size="lg" variant="primary">
                  Sign Up
                </Button>
              </SignUpButton>
            </SignedOut>
          </div>
        </ClerkLoaded>
      </div>
    </header>
  );
};

export default Header;

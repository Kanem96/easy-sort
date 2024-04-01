import React from "react";
import Header from "../(marketting)/header";
import SearchContextProvider from "@/providers/SearchContextProvider";

export interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <main className="min-h-screen flex flex-col">
        <Header signedIn />
        {children}
      </main>
    </>
  );
};

export default MainLayout;

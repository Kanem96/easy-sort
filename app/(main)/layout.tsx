import React from "react";
import Header from "../(marketting)/header";

export interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <main className="min-h-screen flex flex-col">
        <Header />
        {children}
      </main>
    </>
  );
};

export default MainLayout;

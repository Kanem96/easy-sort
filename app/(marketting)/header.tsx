import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="h-16 w-full border-b-2 border-slate-200 px-4">
      <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/logo.png" height={120} width={120} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;

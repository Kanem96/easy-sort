import { Button } from "@/components/ui/button";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col p-4 space-y-4 max-w-[200px]">
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="primaryOutline">Primary Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="secondaryOutline">Secondary Outline</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="dangerOutline">Danger Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  );
};

export default Page;

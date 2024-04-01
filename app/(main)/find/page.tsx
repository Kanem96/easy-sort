"use client";
import EventList from "@/components/eventList";
import { useSearchContext } from "@/providers/SearchContextProvider";
import React from "react";

const FindPage = () => {
  const { searchValue, searchLocation } = useSearchContext();

  return (
    <div className="max-w-[988px] mx-auto w-full flex flex-col lg:flex-row items-center p-4 gap-6">
      <h1 className="font-bold md:text-[1.75] text-xl">
        {searchValue} near {searchLocation}
      </h1>
      <EventList />
    </div>
  );
};

export default FindPage;

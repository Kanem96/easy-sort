"use client";

import Categories from "@/components/categories";
import EventList from "@/components/eventList";
import prismadb from "@/lib/prismadb";
import { useSearchContext } from "@/providers/SearchContextProvider";
import React from "react";

const FindPage = async () => {
  const { searchValue, searchLocation } = useSearchContext();
  const categories = await prismadb.category.findMany();

  return (
    <div className="max-w-[988px] mx-auto w-full flex flex-col lg:flex-row items-center p-4 gap-6">
      <Categories data={categories} />
      <h1 className="font-bold md:text-[1.75] text-xl">
        {searchValue} near {searchLocation}
      </h1>
      <EventList />
    </div>
  );
};

export default FindPage;

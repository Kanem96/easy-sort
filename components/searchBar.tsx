"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { FaSearch } from "react-icons/fa";
import { Button } from "./ui/button";
import { useSearchContext } from "@/providers/SearchContextProvider";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("Newcastle, UK");

  const { setSearchValue, setSearchLocation } = useSearchContext();

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchValue(query);
    setSearchLocation(location);
  };

  return (
    <>
      <form className="flex flex-row" onSubmit={handleSearch}>
        <Input
          type="text"
          className="md:w-[300px] w-[100px] rounded-r-none"
          placeholder="Search for anything"
          value={query}
          onChange={handleQueryChange}
        />
        <Input
          type="text"
          className="md:w-[300px] w-[100px] border-l-0 rounded-l-none rounded-r-none"
          placeholder="Neighbourhood, City or Postcode"
          value={location}
          onChange={handleLocationChange}
        />
        <Button
          type="submit"
          variant="secondary"
          className="h-8 rounded-l-none"
        >
          <FaSearch />
        </Button>
      </form>
    </>
  );
};

export default SearchBar;

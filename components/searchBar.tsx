import React from "react";
import { Input } from "./ui/input";
import { FaSearch } from "react-icons/fa";
import { Button } from "./ui/button";

const SearchBar = () => {
  return (
    <>
      <form className="flex flex-row">
        <Input
          type="text"
          className="md:w-[300px] w-[100px] rounded-r-none"
          placeholder="Search for anything"
        />
        <Input
          type="text"
          className="md:w-[300px] w-[100px] border-l-0 rounded-l-none rounded-r-none"
          placeholder="Neighbourhood, City or Postcode"
          defaultValue="Newcastle, UK"
        />
        <Button variant="secondary" className="h-8 rounded-l-none">
          <FaSearch />
        </Button>
      </form>
    </>
  );
};

export default SearchBar;

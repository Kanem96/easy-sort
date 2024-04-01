"use client";

import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface SearchContextProps {
  searchValue?: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  searchLocation: string;
  setSearchLocation: Dispatch<SetStateAction<string>>;
}

export const SearchContext = createContext<SearchContextProps>({
  searchValue: "",
  setSearchValue: () => {},
  searchLocation: "Newcastle, UK",
  setSearchLocation: () => {},
});

interface SearchContextProviderProps {
  children: React.ReactNode;
}

const SearchContextProvider = ({ children }: SearchContextProviderProps) => {
  const [searchValue, setSearchValue] = useState("Events");
  const [searchLocation, setSearchLocation] = useState("Newcastle, UK");

  return (
    <SearchContext.Provider
      value={{ searchValue, setSearchValue, searchLocation, setSearchLocation }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);

export default SearchContextProvider;

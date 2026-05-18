"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type SearchContextType = {
  search: string;
  setSearch: (value: string) => void;
};

const SearchContext = createContext<SearchContextType>({
  search: "",
  setSearch: () => {},
});

export function SearchProvider({
  children,
}: {
  children: ReactNode;
}) {

  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export const useSearch = () => useContext(SearchContext);
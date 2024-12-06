import { useState } from "react";
import { DataStore } from "./useDataContext";
import type { GetSearchResultsData } from "@/data/getSearchResults/getSearchResults.types";
import type { FC, PropsWithChildren } from "react";

export const DataContext: FC<PropsWithChildren> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedId, setSelectedId] = useState<string>("");
  const [queryResult, setQueryResult] = useState<
    GetSearchResultsData | undefined
  >();

  return (
    <DataStore.Provider
      value={{
        searchTerm,
        setSearchTerm,
        queryResult,
        setQueryResult,
        selectedId,
        setSelectedId,
      }}>
      {children}
    </DataStore.Provider>
  );
};

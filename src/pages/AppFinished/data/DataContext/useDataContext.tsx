import { createContext, useContext } from "react";
import { DataContextProps } from "./DataContext.types";

export const DataStore = createContext<DataContextProps>({
  searchTerm: "",
  setSearchTerm: () => {},
  queryResult: undefined,
  setQueryResult: () => {},
  selectedId: "",
  setSelectedId: () => {},
});

export const useDataContext = () => useContext(DataStore);

import type { Dispatch, SetStateAction } from "react";
import { GetSearchResultsData } from "@/data/getSearchResults/getSearchResults.types";

export type DataContextProps = {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  queryResult: GetSearchResultsData | undefined;
  setQueryResult: Dispatch<SetStateAction<DataContextProps["queryResult"]>>;
  selectedId: // this data is intentionally missing
  // | NonNullable<
  //     NonNullable<DataContextProps["queryResult"]>["Search"]
  //   >[number]["imdbID"]
  string;
  setSelectedId: Dispatch<SetStateAction<DataContextProps["selectedId"]>>;
};

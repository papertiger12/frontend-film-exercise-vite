import { OMDB_API_KEY } from "../envVars";
import { GetSearchResultsData } from "./getSearchResults.types";

export const getSearchResults = async (
  searchTerm: string,
): Promise<GetSearchResultsData> => {
  const params = new URLSearchParams();
  params.append("apikey", OMDB_API_KEY);
  params.append("s", searchTerm);

  const result = await fetch(`http://www.omdbapi.com/?${params.toString()}`);
  return await result.json();
};

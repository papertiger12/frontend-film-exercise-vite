import debounce from "lodash.debounce";
import { useMemo, useEffect, useState } from "react";
import type { FC } from "react";

import { useDataContext } from "../../data/DataContext/useDataContext";
import { getSearchResults } from "@/data/getSearchResults/getSearchResults";
import { FilmCard } from "../FilmCard/FilmCard";
import { SearchResultsSkeleton } from "./SearchResults.skeleton";

export const SearchResults: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { queryResult, searchTerm, setQueryResult, setSelectedId } =
    useDataContext();

  // debounce the search call, so it doesn't trigger on every key stroke
  const debouncedSearch = useMemo(
    () =>
      debounce(async (searchTerm: string) => {
        const data = await getSearchResults(searchTerm);
        data.Search = data.Search?.sort((a, b) => a.Year.localeCompare(b.Year));
        setQueryResult(data);
        setLoading(false);
      }, 500),
    [setQueryResult],
  );

  useEffect(() => {
    if (searchTerm) {
      // show loading while the api call is being made
      setLoading(true);
      // reset states
      setQueryResult(undefined);
      setSelectedId("");

      debouncedSearch(searchTerm);
    }
  }, [searchTerm, debouncedSearch, setQueryResult, setSelectedId]);

  // return states
  if (!searchTerm) {
    return <>Search to see results here.</>;
  }

  if (loading) {
    return <SearchResultsSkeleton />;
  }

  if (queryResult?.Response === "False" && queryResult.Search) {
    return <span>No results found.</span>;
  }

  return (
    <>
      <div className='space-y-2'>
        {queryResult?.Search?.map((film, index) => (
          <FilmCard key={index} {...film} />
        ))}
      </div>
    </>
  );
};

import { FilmCard } from "../FilmCard/FilmCard";

import type { FC } from "react";
import type { SearchResultsProps } from "./SearchResults.types";

export const SearchResults: FC<SearchResultsProps> = ({ queryResult }) => {
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

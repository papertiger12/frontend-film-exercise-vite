import { FC } from "react";
import { Separator } from "@/components/separator";
import { SearchInput } from "./components/SearchInput";
import { SearchResults } from "./components/SearchResults/SearchResults";
import { SelectedFilm } from "./components/SelectedFilm/SelectedFilm";

export const App: FC = () => {
  /**
   * Make getSearchResults query here when search input value changes
   */

  /**
   * searchResult > filmCard is clickable, we need to track which omdbId record
   * was selected to query getSelectedFilm
   */
  return (
    <div className='container my-16 px-4 sm:mx-auto sm:px-0'>
      <h1 className='text-5xl'>Movie search</h1>
      <SearchInput />
      <Separator className='my-6' />
      <div className='flex flex-col space-x-4 sm:flex-row'>
        <div className='flex-1'>
          <SearchResults />
        </div>
        <div className='flex-1'>
          <SelectedFilm />
        </div>
      </div>
    </div>
  );
};

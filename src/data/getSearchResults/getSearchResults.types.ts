export type GetSearchResultsData = {
  Response: "True" | "False";
  Search?: Array<{
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    // intentionally don't include needed data on search result type
    // imdbID: string;
  }>;
  Error?: string;
  totalResults?: string;
};

import { GetSearchResultsData } from "@/data/getSearchResults/getSearchResults.types";

export type FilmCardProps = NonNullable<GetSearchResultsData["Search"]>[0] & {};

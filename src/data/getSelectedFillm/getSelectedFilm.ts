import { OMDB_API_KEY } from "../envVars";
import { GetSelectedFilmData } from "./getSelectedFilm.types";

export const getSelectedItem = async (
  id: string,
): Promise<GetSelectedFilmData> => {
  const params = new URLSearchParams();
  params.append("apikey", OMDB_API_KEY);
  params.append("i", id);

  const result = await fetch(`http://www.omdbapi.com/?${params.toString()}`);
  return await result.json();
};

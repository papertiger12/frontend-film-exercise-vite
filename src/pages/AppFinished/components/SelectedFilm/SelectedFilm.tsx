import { getSelectedItem } from "@/data/getSelectedFillm/getSelectedFilm";
import { GetSelectedFilmData } from "@/data/getSelectedFillm/getSelectedFilm.types";
import { FC, useEffect, useState } from "react";
import { SelectedFilmSkeleton } from "./SelectedFilm.skeleton";
import { useDataContext } from "../../data/DataContext/useDataContext";

export const SelectedFilm: FC = () => {
  const [filmData, setFilmData] = useState<GetSelectedFilmData | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const { selectedId } = useDataContext();

  useEffect(() => {
    if (selectedId) {
      (async () => {
        setLoading(true);
        const result = await getSelectedItem(selectedId);
        setFilmData(result);
        setLoading(false);
      })();
    } else {
      setFilmData(undefined);
    }
  }, [selectedId]);

  // return states
  if (loading) {
    return <SelectedFilmSkeleton />;
  }

  if (!filmData) {
    return null;
  }

  return (
    <div>
      <div className='text-center mb-4'>
        <label className='text-2xl'>
          {filmData?.Title} ({filmData?.Year})
        </label>
      </div>

      <div className='w-full h-full flex flex-row'>
        <div className='flex-1'>
          <img src={filmData.Poster} />
        </div>
        <div className='flex-1'>{filmData.Plot}</div>
      </div>
    </div>
  );
};

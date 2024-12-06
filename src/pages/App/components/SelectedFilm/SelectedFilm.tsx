import { getSelectedItem } from "@/data/getSelectedFillm/getSelectedFilm";
import { GetSelectedFilmData } from "@/data/getSelectedFillm/getSelectedFilm.types";
import { FC, useEffect, useState } from "react";
import { SelectedFilmProps } from "./SelectedFilm.types";

export const SelectedFilm: FC<SelectedFilmProps> = ({ selectedId = "" }) => {
  const [filmData, setFilmData] = useState<GetSelectedFilmData>();

  useEffect(() => {
    /**
     * this will need to be async and we need to store the data
     */
    const result = getSelectedItem(selectedId);
  }, [selectedId]);

  return (
    <div>
      <div className='text-center mb-4'>
        <label className='text-2xl'>
          {filmData?.Title} ({filmData?.Year})
        </label>
      </div>

      <div className='w-full h-full flex flex-row'>
        <div className='flex-1'>
          <img src={/* use attr from film data */ ""} />
        </div>
        <div className='flex-1'>{/* use attr from film data */ ""}</div>
      </div>
    </div>
  );
};

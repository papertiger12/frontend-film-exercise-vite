import { Card } from "@/components/card";
import { Label } from "@/components/label";
import { cn } from "@/lib/utils";
import { useDataContext } from "../../data/DataContext/useDataContext";

import type { FC, KeyboardEvent } from "react";
import type { FilmCardProps } from "./FilmCard.types";

export const FilmCard: FC<FilmCardProps & { imdbID?: string }> = ({
  Title,
  Year,
  imdbID = "",
}) => {
  const { selectedId, setSelectedId } = useDataContext();

  const handleCardClicked = () => {
    setSelectedId(imdbID);
  };
  const handleCardSelected = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      handleCardClicked();
    }
  };

  return (
    <Card
      tabIndex={0}
      onClick={handleCardClicked}
      onKeyDown={handleCardSelected}
      className={cn(
        "p-4 focus:bg-gray-300 hover:bg-gray-300 hover:cursor-pointer",
        selectedId === imdbID && "bg-gray-300",
      )}>
      <Label id='title' aria-label={Title}>
        {Title} ({Year})
      </Label>
    </Card>
  );
};

import { Card } from "@/components/card";
import { Label } from "@/components/label";
import { cn } from "@/lib/utils";
import { FC, useState } from "react";
import type { FilmCardProps } from "./FilmCard.types";

export const FilmCard: FC<FilmCardProps> = ({ Title, Year }) => {
  /**
   * REMOVE BEFORE USAGE:
   * state will need to be moved up or we can't use the selected item to make
   * the query by id
   */
  const [selectedId, setSelectedId] = useState<string>();

  return (
    <Card
      tabIndex={0}
      className={cn(
        "p-4 focus:bg-gray-300 hover:bg-gray-300 hover:cursor-pointer",
        /**
         * REMOVE BEFORE USAGE:
         * ask to hightlight the selected item
         * selectedId === imdbID && "bg-gray-300",
         */
      )}>
      <Label id='title' aria-label={Title}>
        {Title} ({Year})
      </Label>
    </Card>
  );
};

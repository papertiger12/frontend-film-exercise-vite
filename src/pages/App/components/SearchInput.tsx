import { Input } from "@/components/input";
import { useState } from "react";
import type { FC } from "react";

export const SearchInput: FC = () => {
  /** REMOVE BEFORE USAGE:
   *  state will need to be used and moved up to make the query at the parent level
   */
  const [searchTerm, setSearchTerm] = useState<string>();

  return (
    <div className='my-4'>
      <Input
        {...{
          /** REMOVE BEFORE USAGE:
           *  on change handler will need to be added here, updating state
           */
          placeholder: "Search by movie title",
        }}
      />
    </div>
  );
};

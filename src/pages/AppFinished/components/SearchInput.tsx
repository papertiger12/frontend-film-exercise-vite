import { Input } from "@/components/input";
import { useDataContext } from "../data/DataContext/useDataContext";
import type { ChangeEventHandler, FC } from "react";

export const SearchInput: FC = () => {
  const { searchTerm, setSearchTerm } = useDataContext();

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='my-4'>
      <Input
        {...{
          placeholder: "Search by movie title",
          value: searchTerm,
          onChange: handleOnChange,
        }}
      />
    </div>
  );
};

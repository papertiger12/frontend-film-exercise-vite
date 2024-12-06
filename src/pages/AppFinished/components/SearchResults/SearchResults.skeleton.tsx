import { Skeleton } from "@/components/skeleton";
import { FC } from "react";

export const SearchResultsSkeleton: FC = () => {
  return (
    <div className='my-4 items-center space-y-2'>
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <Skeleton key={index} className='h-8' />
        ))}
    </div>
  );
};

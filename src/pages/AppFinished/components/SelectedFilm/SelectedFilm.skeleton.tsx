import { Skeleton } from "@/components/skeleton";
import { FC } from "react";

export const SelectedFilmSkeleton: FC = () => {
  return (
    <div className='h-full'>
      <div className='text-center mb-4'>
        <Skeleton className='h-16 w-full' />
      </div>

      <div className='w-full h-max flex flex-row space-x-4'>
        <div className='flex-1'>
          <Skeleton className='h-full w-full' />
        </div>
        <div className='flex-1 space-y-2'>
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-full' />
          <div className='h-4'></div>
          <div className='h-4'></div>
          <div className='h-4'></div>
          <div className='h-4'></div>
        </div>
      </div>
    </div>
  );
};

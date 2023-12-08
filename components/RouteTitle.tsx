import React from 'react';
import { cn } from '@/lib/utils';

interface Props {
  title: string;
  description: string;
  id?: string;
  className?: string;
}

const RouteTitle = (props: Props) => {
  return (
    <div className={cn('flex flex-col space-y-2 mt-32')}>
      <h2 className="text-[#5746F4] lg:text-4xl font-sfprobold">
        {props.title}
      </h2>
      <p className="text-[#1F1F1F] lg:text-3xl font-sfprobold">
        {props.description}.
      </p>
    </div>
  );
};

export default RouteTitle;

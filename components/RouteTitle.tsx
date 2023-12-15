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
      <h2 className="text-[#7346F4] text-2xl font-lufgaBold">{props.title}</h2>
      <p className="text-[#0D0760] lg:text-4xl text-2xl font-lufgaBold">
        {props.description}.
      </p>
    </div>
  );
};

export default RouteTitle;

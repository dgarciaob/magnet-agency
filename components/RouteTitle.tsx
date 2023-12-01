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
    <div
      className={cn('flex flex-row space-x-2 font-lufgaBold lg:text-4xl mb-12')}
    >
      <h2>{props.title}.</h2>
      <p className="text-[#B4B2C4]">{props.description}.</p>
    </div>
  );
};

export default RouteTitle;

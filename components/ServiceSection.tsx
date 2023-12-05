'use client';

import { services } from '@/constants/services';
import React, { useRef } from 'react';
import Image from 'next/image';
import RouteTitle from './RouteTitle';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import '@/components/css/ProjectSection.css';
import { cn } from '@/lib/utils';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from 'framer-motion';

const ServiceSection = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  const getTextPosition = (name: string) => {
    if (name === 'contacto') {
      return '-mb-10';
    }
  };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1 1'],
  });
  return (
    <motion.div
      ref={ref}
      style={{ scale: scrollYProgress, opacity: scrollYProgress }}
    >
      <div className="flex flex-row justify-between items-center align-middle mb-4 mt-24">
        <RouteTitle
          title="Servicios"
          description="Planes acorde a lo que buscas"
        />
      </div>
      <div className="flex flex-row scrollbar-hide space-x-8 snap-x snap-mandatory overflow-y-hidden">
        {services.map((service) => {
          const textPosition = getTextPosition(service.name);
          return (
            <div
              key={service.id}
              className="snap-start relative rounded-[25px] cursor-pointer"
            >
              <div className="w-[420px] h-[585px]">
                <Image
                  src={service.bgImg}
                  alt={service.alt}
                  fill
                  className="rounded-[25px] object-cover"
                />
              </div>

              <div className="absolute bottom-8 w-full h-1/3 rounded-b-[50px] flex items-center justify-center">
                <div className={cn('px-10 text-white', textPosition)}>
                  <div>
                    <h2 className="font-lufgaBold text-4xl tracking-tight">
                      {service.name}
                    </h2>
                  </div>
                  <div>
                    <p className="font-sfprorounded">
                      {service.name === 'contacto' ? '' : 'Empieza en'}
                    </p>
                    <p className="font-lufgaBold text-4xl tracking-tight">
                      {service.cost}
                    </p>
                  </div>
                  <div className="mt-3">
                    <h2 className="text-base font-sfprorounded">
                      {service.description}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ServiceSection;

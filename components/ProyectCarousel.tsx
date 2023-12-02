import { proyects } from '@/constants/proyects';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ProyectCarouselProps {}

const ProyectCarousel = () => {
  const getTextClass = (alt: string) => {
    if (
      alt === 'Spaw Logo' ||
      alt === 'Zerendor Logo' ||
      alt === 'Ace Padel Logo'
    ) {
      return 'text-white';
    }
    return 'text-black';
  };

  return (
    <div className="flex flex-row space-x-8 overflow-x-auto overflow-y-hidden">
      {proyects.map((proyect) => {
        const textClass = getTextClass(proyect.alt);
        return (
          <div
            key={proyect.id}
            className="relative rounded-[50px] cursor-pointer"
          >
            <div className="w-[530px] h-[585px]">
              <Image
                src={proyect.bgImg}
                alt={proyect.alt}
                fill
                className="rounded-[50px] object-cover"
              />
            </div>

            <div className="absolute bottom-0 w-full h-1/3 backdrop-blur-md rounded-b-[50px] flex items-center justify-center">
              <div className="p-10 space-y-2">
                <div className="flex flex-row space-x-5 items-center">
                  <Image
                    src={proyect.logoImg}
                    alt="Logo de Marca"
                    width={50}
                    height={50}
                  />
                  <h2
                    className={cn(
                      'text-xl font-lufgaBold font-bold',
                      textClass,
                    )}
                  >
                    {proyect.name}
                  </h2>
                </div>

                <p className={cn('text-md font-sfprorounded', textClass)}>
                  {proyect.descripcion}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProyectCarousel;

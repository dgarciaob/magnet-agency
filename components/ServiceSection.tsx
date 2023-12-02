'use client';

import { services } from '@/constants/services';
import React from 'react';
import Image from 'next/image';
import RouteTitle from './RouteTitle';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import '@/components/css/ProjectSection.css';
import { cn } from '@/lib/utils';

const ServiceSection = () => {
  const serviceContainerRef = React.useRef<HTMLDivElement>(null);
  const handleNext = () => {
    if (serviceContainerRef.current) {
      serviceContainerRef.current.scrollTo({
        left: serviceContainerRef.current.scrollLeft + 420,
        behavior: 'smooth',
      });
    }
  };
  const handlePrev = () => {
    if (serviceContainerRef.current) {
      serviceContainerRef.current.scrollTo({
        left: serviceContainerRef.current.scrollLeft - 420,
        behavior: 'smooth',
      });
    }
  };

  const getTextPosition = (name: string) => {
    if (name === 'contacto') {
      return '-mb-10';
    }
  };
  return (
    <div>
      <div className="flex flex-row justify-between items-center align-middle mb-4 mt-24">
        <RouteTitle
          title="servicios"
          description="planes disponibles para tu negocio"
        />
        <div className="flex justify-end mt-32">
          <div className="h-[56px] w-[120px] rounded-full bg-white flex items-center justify-between align-middle px-4">
            <button
              onClick={handlePrev}
              className="rounded-full bg-[#5746F4]/20 hover:bg-[#5746f4]/80 transition duration-300 h-9 w-9 flex items-center justify-center cursor-pointer"
            >
              <ArrowLeft className="cursor-pointer" />
            </button>

            <button
              onClick={handleNext}
              className="rounded-full bg-[#5746F4]/20 hover:bg-[#5746f4]/80 transition duration-300 h-9 w-9 flex items-center justify-center cursor-pointer"
            >
              <ArrowRight className="cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
      <div
        className="flex flex-row scrollbar-hide space-x-8 snap-x snap-mandatory overflow-y-hidden"
        ref={serviceContainerRef}
      >
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
                    <h2 className="font-sfprorounded">{service.description}</h2>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceSection;

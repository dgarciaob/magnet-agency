'use client';

import { services } from '@/constants/services';
import React from 'react';
import Image from 'next/image';
import RouteTitle from './RouteTitle';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import '@/components/css/ProjectSection.css';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const ServiceSection = () => {
  const projectContainerRef = React.useRef<HTMLDivElement>(null);
  const handleNext = () => {
    if (projectContainerRef.current) {
      projectContainerRef.current.scrollTo({
        left: projectContainerRef.current.scrollLeft + 530,
        behavior: 'smooth',
      });
    }
  };
  const handlePrev = () => {
    if (projectContainerRef.current) {
      projectContainerRef.current.scrollTo({
        left: projectContainerRef.current.scrollLeft - 530,
        behavior: 'smooth',
      });
    }
  };

  const getTextPosition = (name: string) => {
    if (name === 'contacto') {
      return '-mb-10';
    }
  };

  const getCheckStyle = (name: string) => {
    if (name === 'brand' || name === 'suscripción') {
      return 'text-white';
    } else if (name === 'webdev') {
      return 'text-[#FFF45C]';
    } else if (name === 'appdev') {
      return 'text-[#7346F4]';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.3 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-row justify-between items-center align-middle mb-4 mt-24">
        <RouteTitle title="Services" description="Plans to fit your needs" />
        <div className="sm:flex justify-end mt-32 hidden">
          <div className="h-[56px] w-[120px] rounded-full bg-white flex items-center justify-between align-middle px-4">
            <button
              onClick={handlePrev}
              className="rounded-full bg-[#5746F4]/20 hover:bg-[#5746f4]/70 transition duration-300 h-9 w-9 flex items-center justify-center cursor-pointer"
            >
              <ArrowLeft className="cursor-pointer" />
            </button>

            <button
              onClick={handleNext}
              className="rounded-full bg-[#5746F4]/20 hover:bg-[#5746f4]/70 transition duration-300 h-9 w-9 flex items-center justify-center cursor-pointer"
            >
              <ArrowRight className="cursor-pointer" />
            </button>
          </div>
        </div>
      </div>

      <div
        className="md:flex md:flex-row md:space-x-8 md:snap-x md:snap-mandatory md:space-y-0 flex flex-col space-y-6 scrollbar-hide overflow-y-hidden"
        ref={projectContainerRef}
      >
        {services.map((service) => {
          const textPosition = getTextPosition(service.name);
          const checkStyle = getCheckStyle(service.name);
          return (
            <div
              key={service.id}
              className="snap-start relative rounded-[25px] cursor-pointer"
            >
              <div className="md:w-[420px] md:h-[585px] w-[350px] h-[600px]">
                <Image
                  src={service.bgImg}
                  alt={service.alt}
                  fill
                  className="rounded-[25px] object-cover"
                />
              </div>

              <div className="absolute bottom-16 w-full h-1/3 rounded-b-[50px] flex flex-col">
                <div className={cn('px-10 text-white', textPosition)}>
                  <div>
                    <h2 className="font-lufgaBold text-4xl tracking-tight">
                      {service.name}
                    </h2>
                  </div>
                  {/* <div>
                    <p className="font-sfpro">
                      {service.name === 'contacto' ? '' : 'Desde'}
                    </p>
                    <p className="font-sfprobold text-4xl">{service.cost}</p>
                  </div> */}
                  <div className="mt-3 flex flex-col space-y-1">
                    <div className="flex flex-row space-x-2 items-center">
                      <Check className={cn('h-4 w-4', checkStyle)} />
                      <p className="font-sfpro">{service.firstCheck}</p>
                    </div>
                    <div className="flex flex-row space-x-2 items-center">
                      <Check className={cn('h-4 w-4', checkStyle)} />
                      <p className="font-sfpro">{service.secondCheck}</p>
                    </div>
                    <div className="flex flex-row space-x-2 items-center">
                      <Check className={cn('h-4 w-4', checkStyle)} />
                      <p className="font-sfpro">{service.thirdCheck}</p>
                    </div>
                    <div className="flex flex-row space-x-2 items-center">
                      <Check className={cn('h-4 w-4', checkStyle)} />
                      <p className="font-sfpro">{service.fourthCheck}</p>
                    </div>
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

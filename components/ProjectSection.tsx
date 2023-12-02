'use client';
import { projects } from '@/constants/projects';
import Image from 'next/image';
import React from 'react';
import { cn } from '@/lib/utils';
import RouteTitle from './RouteTitle';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import '@/components/css/ProjectSection.css';

const ProjectSection = () => {
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
    <div>
      <div className="flex flex-row justify-between items-center align-middle mb-4 mt-24">
        <RouteTitle
          title="proyectos"
          description="ideas convertidas en éxito"
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
        ref={projectContainerRef}
        className="flex flex-row scrollbar-hide space-x-8 snap-x snap-mandatory overflow-y-hidden"
      >
        {projects.map((project) => {
          const textClass = getTextClass(project.alt);
          return (
            <div
              key={project.id}
              className="snap-start relative rounded-[50px] cursor-pointer"
            >
              <div className="w-[530px] h-[585px]">
                <Image
                  src={project.bgImg}
                  alt={project.alt}
                  fill
                  className="rounded-[50px] object-cover"
                />
              </div>

              <div className="absolute bottom-0 w-full h-1/3 backdrop-blur-md rounded-b-[50px] flex items-center justify-center">
                <div className="p-10 space-y-2">
                  <div className="flex flex-row space-x-5 items-center">
                    <Image
                      src={project.logoImg}
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
                      {project.name}
                    </h2>
                  </div>

                  <p className={cn('text-md font-sfprorounded', textClass)}>
                    {project.descripcion}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectSection;

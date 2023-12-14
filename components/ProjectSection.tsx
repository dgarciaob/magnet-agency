'use client';

import { projects } from '@/constants/projects';
import Image from 'next/image';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import RouteTitle from './RouteTitle';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import '@/components/css/ProjectSection.css';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const ProjectSection = () => {
  const ref = React.useRef<HTMLDivElement>(null);
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
    if (alt === 'Spaw Logo' || alt === 'Zerendor Logo' || alt === 'IUI Logo') {
      return 'text-white';
    }
    return 'text-black';
  };

  const router = useRouter();

  const handleProjectClick = (path: string) => {
    router.push(`/projects/${path}`);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.3 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-row justify-between items-center align-middle md:mb-4 mb-8 mt-24 mx-auto w-full max-w-screen-2xl px-4 lg:px-[70px]">
        <RouteTitle
          title="Proyectos"
          description="Nuestras más recientes historias"
        />
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

      <div>
        <div
          ref={projectContainerRef}
          className="md:flex md:flex-row md:space-x-8 md:snap-x md:snap-mandatory md:space-y-0 flex flex-col space-y-6 scrollbar-hide overflow-y-hidden px-4 lg:px-[70px]"
        >
          {projects.map((project) => {
            const textClass = getTextClass(project.alt);

            return (
              <div
                key={project.id}
                className="snap-center relative rounded-[50px] cursor-pointer"
                onClick={() => handleProjectClick(project.pathToPage)}
              >
                <div className="md:w-[530px] md:h-[585px] w-[350px] h-[440px]">
                  <Image
                    src={project.bgImg}
                    alt={project.alt}
                    fill
                    className="rounded-[50px] object-cover"
                  />
                </div>

                <div className="absolute bottom-0 w-full h-[210px] backdrop-blur-md rounded-b-[50px] flex items-center justify-center">
                  <div className="px-10 pt-5 pb-10 space-y-2">
                    <div className="flex flex-row space-x-5 items-center mb-5">
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

                    <p className={cn('text-base font-sfpro', textClass)}>
                      {project.descripcion}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* {isModalOpen && (
        <div>
          <Modal id={selectedId} onClose={handleModalClose} />
        </div>
      )} */}
    </motion.div>
  );
};

export default ProjectSection;

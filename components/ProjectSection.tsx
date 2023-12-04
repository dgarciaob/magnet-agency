'use client';
import { projects } from '@/constants/projects';
import Image from 'next/image';
import React from 'react';
import { cn } from '@/lib/utils';
import RouteTitle from './RouteTitle';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import '@/components/css/ProjectSection.css';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from 'framer-motion';

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
    if (
      alt === 'Spaw Logo' ||
      alt === 'Zerendor Logo' ||
      alt === 'Ace Padel Logo'
    ) {
      return 'text-white';
    }
    return 'text-black';
  };

  // code for tilt hover effect

  // const x = useMotionValue(0);
  // const y = useMotionValue(0);

  // const mouseXSpring = useSpring(x);
  // const mouseYSpring = useSpring(y);

  // const rotateX = useTransform(
  //   mouseYSpring,
  //   [-0.5, 0.5],
  //   ['17.5deg', '-17.5deg'],
  // );
  // const rotateY = useTransform(
  //   mouseXSpring,
  //   [-0.5, 0.5],
  //   ['-17.5deg', '17.5deg'],
  // );

  // const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  //   const rect = e.currentTarget.getBoundingClientRect();

  //   const width = rect.width;
  //   const height = rect.height;

  //   const mouseX = e.clientX - rect.left;
  //   const mouseY = e.clientY - rect.top;

  //   const xPct = mouseX / width - 0.5;
  //   const yPct = mouseY / height - 0.5;

  //   x.set(xPct);
  //   y.set(yPct);
  // };

  // const handleMouseLeave = () => {
  //   x.set(0);
  //   y.set(0);
  // };

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
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        // viewport={{ once: true }}
        // transition={{ duration: 1 }}
        className="flex flex-row scrollbar-hide space-x-8 snap-x snap-mandatory overflow-y-hidden"
      >
        {projects.map((project) => {
          const textClass = getTextClass(project.alt);

          return (
            <div
              key={project.id}
              // onMouseMove={handleMouseMove}
              // onMouseLeave={handleMouseLeave}
              // style={{
              //   rotateY,
              //   rotateX,
              //   transformStyle: 'preserve-3d',
              // }}
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

              <div className="absolute bottom-0 w-full h-[190px] backdrop-blur-md rounded-b-[50px] flex items-center justify-center">
                <div className="px-10 py-5 space-y-2">
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

                  <p className={cn('text-base font-sfprorounded', textClass)}>
                    {project.descripcion}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ProjectSection;

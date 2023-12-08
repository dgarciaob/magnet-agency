import Image from 'next/image';
import { X, ArrowRight } from 'lucide-react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  AnimatePresence,
} from 'framer-motion';
import { projects } from '@/constants/projects';
import { colors } from '@/constants/colors';
import React, { useState, useEffect } from 'react';

interface ModalProps {
  id: number | null;
  onClose: () => void;
}

const Modal = ({ id, onClose }: ModalProps) => {
  const project = projects.find((project) => project.id === id);

  return (
    <AnimatePresence>
      <motion.div
        className="h-screen w-screen z-[9999] backdrop-blur-md fixed top-0 left-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="h-2/3 w-2/3 bg-white rounded-3xl p-10 flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-row justify-between">
            <div className="">
              <h2 className="text-3xl font-lufgaBold">
                {project?.name} ·{' '}
                <span className="text-slate-400">{project?.serviceType}</span>
              </h2>
            </div>

            <div onClick={onClose}>
              <X className="cursor-pointer text-black font-bold" />
            </div>
          </div>

          <div className="rounded-lg mt-8 h-full flex justify-between gap-x-4">
            <div className="rounded-xl h-full w-1/3">
              <div className="h-1/3 flex-1 font-sfprorounded">
                {project?.descripcionModal}
              </div>
              <div className="h-2/3 flex-1 relative rounded-xl">
                <Image
                  src={project?.modalImgOne || '/'}
                  alt={project?.alt || 'Imagen del Proyecto'}
                  fill
                  className="rounded-xl object-cover"
                />
              </div>
            </div>

            <div className="rounded-xl h-full w-1/3 relative">
              <Image
                src={project?.modalImgTwo || '/'}
                alt={project?.alt || 'Imagen del Proyecto'}
                fill
                className="rounded-xl object-cover"
              />
            </div>

            <div className="rounded-xl h-full w-1/3 flex flex-col space-y-4">
              <div className="h-1/3 flex gap-x-2 rounded-xl">
                <div className="w-1/2 relative rounded-xl">
                  <Image
                    src={project?.modalImgThree || '/'}
                    alt={project?.alt || 'Imagen del Proyecto'}
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
                <div className="w-1/2 relative rounded-xl">
                  <Image
                    src={project?.modalImgFour || '/'}
                    alt={project?.alt || 'Imagen del Proyecto'}
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>

              <div className="h-2/3 relative rounded-xl">
                <Image
                  src={project?.modalImgFive || '/'}
                  alt={project?.alt || 'Imagen del Proyecto'}
                  fill
                  className="rounded-xl object-cover"
                />
              </div>

              <div className="flex flex-row justify-end">
                <a
                  href={project?.linkToWeb || '/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-sfprorounded text-slate-400 hover:text-black hover:underline hover:underline-offset-2 transition duration-300 flex flex-row items-center justify-center`}
                >
                  Conoce más <ArrowRight className="h-5 w-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;

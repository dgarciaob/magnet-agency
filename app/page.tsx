'use client';

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';
import RouteTitle from '@/components/RouteTitle';
import { motion } from 'framer-motion';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import Footer from '@/components/Footer';
import Link from 'next/link';
import React from 'react';
import ServiceSection from '@/components/ServiceSection';
import '@/components/css/Page.css';
import ProjectSection from '@/components/ProjectSection';

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div
          className=" md:grid md:grid-cols-2 flex flex-col items-center md:pt-36 pt-20 md:h-screen w-full"
          id="inicio"
        >
          {/* Logo, Hero & CTA */}
          <div className="animate-hero-slide-up order-last">
            {/* TODO: Agregar animación al logo pequeño con Framer Motion */}
            <h1 className="font-lufgaBold sm:text-6xl text-5xl mb-16 sm:text-left text-center">
              el partner digital <br />
              de tu siguiente <br />
              gran idea
            </h1>
            <div className="md:space-x-5 space-y-5 flex flex-col md:block sm:px-0 px-8">
              <Link href="#contacto" scroll className=" scroll-smooth">
                <Button
                  variant="default"
                  className="font-lufgaMedium h-[72px] md:w-[200px] w-full text-2xl"
                >
                  agendar cita
                </Button>
              </Link>

              <Link href="#proyectos" className="scroll-smooth">
                <Button
                  variant="secondary"
                  className="font-lufgaMedium h-[72px] md:w-[200px] w-full text-2xl "
                >
                  descubre <ArrowDown className="ml-3" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="animate-magnet-fade-in md:absolute relative md:-right-1/4">
            <motion.img
              className="4xl:w-[1800px] 3xl:w-[1600px] 2xl:w-[1400px] xl:w-[1200px] lg:w-[900px] md:w-[800px] w-[600px]"
              drag
              dragSnapToOrigin
              dragElastic={0.4}
              dragConstraints={{ right: 0, left: 0, top: 0, bottom: 0 }}
              src="/images/MagnetHero.png"
            />
          </div>
        </div>

        {/* Proyectos */}
        <div className="mt-[200px] mb-44" id="proyectos">
          <ProjectSection />
        </div>

        {/* Servicios */}
        <div className="mt-[200px] mb-44" id="servicios">
          <ServiceSection />
        </div>

        {/* Proceso */}
        <div className="mt-[200px] mb-44">
          <div className="flex flex-row justify-between items-center align-middle mb-4 mt-24">
            <RouteTitle
              title="proceso"
              description="nuestra aproximación al double diamond"
            />
            <div className="flex justify-end mt-32">
              <div className="h-[56px] w-[120px] rounded-full bg-white flex items-center justify-between align-middle px-4">
                <button className="rounded-full bg-[#5746F4]/20 hover:bg-[#5746f4]/80 transition duration-300 h-9 w-9 flex items-center justify-center cursor-pointer">
                  <ArrowLeft className="cursor-pointer" />
                </button>

                <button className="rounded-full bg-[#5746F4]/20 hover:bg-[#5746f4]/80 transition duration-300 h-9 w-9 flex items-center justify-center cursor-pointer">
                  <ArrowRight className="cursor-pointer" />
                </button>
              </div>
            </div>
          </div>
          <ScrollArea>
            <div className="flex flex-row space-x-8">
              <div className="w-[420px] h-[585px] rounded-[50px] bg-gradient-to-b from-[#ffb103] to-[#ffcc34] p-2 cursor-pointer">
                <div className="flex h-full w-full items-center justify-center bg-[#FFD747] back rounded-[43px]"></div>
              </div>
              <div className="w-[420px] h-[585px] rounded-[50px] bg-gradient-to-b from-[#ffb103] to-[#ffcc34] p-2 cursor-pointer">
                <div className="flex h-full w-full items-center justify-center bg-[#FFD747] back rounded-[43px]"></div>
              </div>
              <div className="w-[420px] h-[585px] rounded-[50px] bg-gradient-to-b from-[#ffb103] to-[#ffcc34] p-2 cursor-pointer">
                <div className="flex h-full w-full items-center justify-center bg-[#FFD747] back rounded-[43px]"></div>
              </div>
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        <Footer />
      </MaxWidthWrapper>
    </>
  );
}

'use client';

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';
import RouteTitle from '@/components/RouteTitle';
import { motion } from 'framer-motion';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import Footer from '@/components/Footer';
import Link from 'next/link';
import React, { useState, useRef } from 'react';

export default function Home() {
  const positionRef = useRef<HTMLDivElement>(null);

  const handleScrollRight = () => {
    if (positionRef.current) {
      let xAxis = positionRef.current.scrollLeft;
      xAxis += 530; // Ajusta este valor según sea necesario
      positionRef.current.scrollLeft = xAxis;
    }
  };

  return (
    <>
      <MaxWidthWrapper>
        <div className="lg:grid lg:grid-cols-2 mt-64 w-full">
          {/* Logo, Hero & CTA */}
          <div>
            {/* TODO: Agregar animación al logo pequeño con Framer Motion */}
            <h1 className="font-lufgaBold md:text-6xl md:mb-16">
              el partner digital <br />
              de tu siguiente <br />
              gran idea
            </h1>
            <div className="md:space-x-5">
              <Link href="#contacto">
                <Button
                  variant="default"
                  className="font-lufgaMedium md:h-[72px] md:w-[200px] md:text-2xl"
                >
                  agendar cita
                </Button>
              </Link>

              <Link href="#proyectos" scroll={true} className="scroll-smooth">
                <Button
                  variant="secondary"
                  className="font-lufgaMedium md:h-[72px] md:w-[200px] md:text-2xl"
                >
                  descrubir
                  <ArrowDown className="ml-3" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block w-full">
            <motion.div
              className="w-96 h-96 bg-black absolute right-4"
              drag
              dragConstraints={{ right: 0, left: 0, top: 0, bottom: 0 }}
            >
              {/* <Image
              src="/images/Union3.png"
              width={1000}
              height={1000}
              alt="first logo"
            /> */}
            </motion.div>
            {/* <FirstHeroSvg
            constraintsRef={constraintsRef}
            className="absolute z-20 "
          /> */}
            {/* <SecondHeroSvg className="absolute z-10 md:bottom-[6.5rem] lg:bottom-1 right-0  xl:w-[800px] lg:w-[700px] md:w-[500px]" />
          <ThirdHeroSvg className="absolute z-0 md:bottom-28 lg:bottom-3  right-0  xl:w-[880px] lg:w-[780px] md:w-[550px]" /> */}
          </div>
        </div>

        {/* Proyectos */}
        <div className="mt-[317px] mb-44" id="proyectos">
          <RouteTitle
            title="proyectos"
            description="ideas convertidas en éxito"
          />
          <ScrollArea>
            <div className="flex flex-row space-x-8">
              <div
                className="w-[530px] h-[585px] rounded-[50px] bg-gradient-to-b from-[#ffb103] to-[#ffcc34] p-2 cursor-pointer"
                ref={positionRef}
              >
                <div className="flex h-full w-full items-center justify-center bg-[#FFD747] back rounded-[43px]"></div>
              </div>
              <div className="w-[530px] h-[585px] rounded-[50px] bg-gradient-to-b from-[#ffb103] to-[#ffcc34] p-2 cursor-pointer">
                <div className="flex h-full w-full items-center justify-center bg-[#FFD747] back rounded-[43px]"></div>
              </div>
              <div className="w-[530px] h-[585px] rounded-[50px] bg-gradient-to-b from-[#ffb103] to-[#ffcc34] p-2 cursor-pointer">
                <div className="flex h-full w-full items-center justify-center bg-[#FFD747] back rounded-[43px]"></div>
              </div>
              <div className="w-[530px] h-[585px] rounded-[50px] bg-gradient-to-b from-[#ffb103] to-[#ffcc34] p-2 cursor-pointer">
                <div className="flex h-full w-full items-center justify-center bg-[#FFD747] back rounded-[43px]"></div>
              </div>
              <div className="w-[530px] h-[585px] rounded-[50px] bg-gradient-to-b from-[#ffb103] to-[#ffcc34] p-2 cursor-pointer">
                <div className="flex h-full w-full items-center justify-center bg-[#FFD747] back rounded-[43px]"></div>
              </div>
              <div className="w-[530px] h-[585px] rounded-[50px] bg-gradient-to-b from-[#ffb103] to-[#ffcc34] p-2 cursor-pointer">
                <div className="flex h-full w-full items-center justify-center bg-[#FFD747] back rounded-[43px]"></div>
              </div>
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          <div className="flex justify-end mt-6">
            <div className="h-[56px] w-[120px] rounded-full bg-white flex items-center justify-between align-middle px-4">
              <button className="rounded-full bg-[#5746F4]/20 hover:bg-[#5746f4]/80 transition duration-300 h-9 w-9 flex items-center justify-center cursor-pointer">
                <ArrowLeft className="cursor-pointer" />
              </button>

              <button
                className="rounded-full bg-[#5746F4]/20 hover:bg-[#5746f4]/80 transition duration-300 h-9 w-9 flex items-center justify-center cursor-pointer"
                onClick={handleScrollRight}
              >
                <ArrowRight className="cursor-pointer" />
              </button>
            </div>
          </div>
        </div>

        {/* Servicios */}
        <div className="mt-[317px] mb-44">
          <RouteTitle
            title="servicios"
            description="planes disponibles para tu negocio"
          />
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
          <div className="flex justify-end mt-6">
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

        {/* Proceso */}
        <div className="mt-[317px] mb-44">
          <RouteTitle
            title="proceso"
            description="nuestra aproximación al double diamond"
          />
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
          <div className="flex justify-end mt-6">
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

        <Footer />
      </MaxWidthWrapper>
    </>
  );
}

'use client';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import RouteTitle from '@/components/RouteTitle';
import { motion } from 'framer-motion';

export default function Home() {
  const constraintsRef = useRef(null);
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
              <Button
                variant="default"
                className="font-lufgaMedium md:h-[72px] md:w-[200px] md:text-2xl"
              >
                agendar cita
              </Button>
              <Button
                variant="secondary"
                className="font-lufgaMedium md:h-[72px] md:w-[200px] md:text-2xl"
              >
                descrubir <ArrowDown className="ml-3" />
              </Button>
            </div>
          </div>

          <div className="hidden md:block w-full">
            {/* <FirstHeroSvg className="absolute z-20 md:bottom-28 lg:bottom-0 right-0 xl:w-[750px] lg:w-[650px] md:w-[450px]" />
          <SecondHeroSvg className="absolute z-10 md:bottom-[6.5rem] lg:bottom-1 right-0  xl:w-[800px] lg:w-[700px] md:w-[500px]" />
          <ThirdHeroSvg className="absolute z-0 md:bottom-28 lg:bottom-3  right-0  xl:w-[880px] lg:w-[780px] md:w-[550px]" /> */}
          </div>
        </div>
        <div className="hidden md:block w-full">
          <motion.div
            className="w-40 h-40 bg-black absolute right-0"
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
      </MaxWidthWrapper>

      <div className="mt-[317px] mb-44 lg:px-[70px]">
        <RouteTitle
          title="proyectos"
          description="ideas convertidas en éxito"
        />
        <div className="flex flex-row space-x-4">
          <div className="w-[530px] h-[585px] rounded-[50px] bg-gradient-to-b from-[#ffb103] to-[#ffcc34] p-2">
            <div className="flex h-full w-full items-center justify-center bg-[#FFD747] back rounded-[43px]"></div>
          </div>
          <div className="w-[530px] h-[585px] rounded-[50px] bg-gradient-to-b from-[#ffb103] to-[#ffcc34] p-2">
            <div className="flex h-full w-full items-center justify-center bg-[#FFD747] back rounded-[43px]"></div>
          </div>
        </div>
      </div>
    </>
  );
}

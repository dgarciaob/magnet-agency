'use client';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import FirstHeroSvg from '@/components/firstHeroSvg';
import SecondHeroSvg from '@/components/secondHeroSvg';
import ThirdHeroSvg from '@/components/thirdHeroSvg';
import { useRef } from 'react';

export default function Home() {
  const constraintsRef = useRef(null);
  return (
    <MaxWidthWrapper>
      <div
        className="absolute bottom-0 top-0 left-0 right-0 w-4 h-4"
        ref={constraintsRef}
      ></div>
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
              className="font-lufgaMedium md:h-[93px] md:w-[200px] md:text-2xl"
            >
              agenda
            </Button>
            <Button
              variant="secondary"
              className="font-lufgaMedium md:h-[93px] md:w-[200px] md:text-2xl"
            >
              escoge
            </Button>
          </div>
        </div>

        <div className="hidden md:block w-full">
          <FirstHeroSvg
            constraintsRef={constraintsRef}
            className="absolute z-20 md:bottom-28 lg:bottom-0 right-0 xl:w-[750px] lg:w-[650px] md:w-[450px]"
          />
          <SecondHeroSvg className="absolute z-10 md:bottom-[6.5rem] lg:bottom-1 right-0  xl:w-[800px] lg:w-[700px] md:w-[500px]" />
          <ThirdHeroSvg className="absolute z-0 md:bottom-28 lg:bottom-3  right-0  xl:w-[880px] lg:w-[780px] md:w-[550px]" />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

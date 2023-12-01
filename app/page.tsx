'use client';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Button } from '@/components/ui/button';
import RouteTitle from '@/components/RouteTitle';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="md:grid md:grid-cols-2 items-center pt-36 md:h-screen md:max-h-[950px] w-full">
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

          <div className="hidden md:block absolute -right-1/4">
            <motion.img
              className="4xl:w-[1600px] 2xl:w-[1400px] xl:w-[1200px] lg:w-[1000px] md:w-[800px]"
              drag
              dragSnapToOrigin
              dragElastic={0.3}
              dragConstraints={{ right: 0, left: 0, top: 0, bottom: 0 }}
              src="/images/MagnetHero.png"
            />
          </div>
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

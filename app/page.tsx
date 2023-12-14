'use client';

import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import ServiceSection from '@/components/ServiceSection';
import '@/components/css/Page.css';
import '@/components/css/Buttons.css';
import ProjectSection from '@/components/ProjectSection';
import AboutUsSection from '@/components/AboutUsSection';
import ContactFormSection from '@/components/ContactFormSection';
import PartnersSection from '@/components/PartnersSection';
import SocialProofSection from '@/components/SocialProofSection';

export default function Home() {
  return (
    <main>
      <div
        className="md:grid md:grid-cols-2 flex flex-col items-center md:pt-36 pt-16 md:h-screen w-full mx-auto max-w-screen-2xl lg:px-[70px] relative"
        id="inicio"
      >
        {/* Logo, Hero & CTA */}
        <div className="animate-hero-slide-up order-last">
          <Link href="/" className="hidden lg:block">
            <Image
              src="/logos/white-logo.svg"
              alt="magnet logo"
              width={40}
              height={40}
              className="mb-8"
            />
          </Link>
          <h1 className="font-lufgaBold sm:text-7xl text-5xl sm:text-left text-center select-none hero-title-gradient">
            El partner digital <br />
            de tu siguiente <br />
            <span className="hero-text-gradient">gran idea</span>
          </h1>
          <p className="font-sfpro mb-16 mt-8 text-center lg:text-left max-w-md lg:max-w-[430px]">
            Magnet es un grupo de emprendedores innatos, desarrolladores y
            diseñadores. Nos dedicamos a empoderar a emprendedores como tú.
          </p>
          <div className="md:space-x-5 space-y-5 flex flex-col md:block sm:px-0 px-8">
            <Link href="#contacto" scroll className="scroll-smooth">
              <Button
                variant="default"
                className="font-sfpro h-[56px] md:w-[200px] w-full text-xl shadow-lg heroButton"
              >
                Agendar cita
              </Button>
            </Link>

            <Link href="#proyectos" className="scroll-smooth">
              <Button
                variant="secondary"
                className="font-sfpro h-[56px] md:w-[200px] w-full text-xl shadow-sm"
              >
                Descubre <ArrowDown className="ml-3" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="animate-magnet-fade-in md:absolute relative md:-right-1/4">
          <motion.img
            className="4xl:w-[1800px] 3xl:w-[1600px] 2xl:w-[1400px] xl:w-[1200px] lg:w-[900px] md:w-[800px] w-[600px]"
            drag
            dragSnapToOrigin
            dragElastic={0.5}
            dragConstraints={{ right: 0, left: 0, top: 0, bottom: 0 }}
            src="/images/MagnetHero.png"
          />
        </div>

        {/* Circles */}
        <div className="absolute top-[-35rem] left-[34rem] first-circle h-[58.125rem] w-[58.125rem] z-[-10]"></div>
        <div className="absolute top-[-40.5rem] left-[29.5rem] second-circle h-[67.813rem] w-[67.813rem] z-[-20]"></div>
        <div className="absolute top-[-45rem] left-[25rem] third-circle h-[77.5rem] w-[77.5rem] z-[-30]"></div>
        <div className="absolute top-[-49.5rem] left-[20rem] fourth-circle h-[87.188rem] w-[87.188rem] z-[-40]"></div>
        <div className="absolute top-[-54.5rem] left-[15rem] fifth-circle h-[96.875rem] w-[96.875rem] z-[-50]"></div>
        <div className="absolute top-[-59rem] left-[10rem] sixth-circle h-[106.563rem] w-[106.563rem] z-[-60]"></div>
      </div>

      <div className="mt-64 mx-auto w-full max-w-screen-2xl px-4 lg:px-[70px]">
        <PartnersSection />
      </div>

      {/* Proyectos */}
      <div className="mt-[100px] mb-44" id="proyectos">
        <ProjectSection />
      </div>

      <div className="mt-40 mx-auto w-full max-w-screen-2xl px-4 lg:px-[70px]">
        <SocialProofSection />
      </div>

      {/* Servicios */}
      <div
        className="mt-[90px] mb-44 mx-auto w-full max-w-screen-2xl px-4 lg:px-[70px]"
        id="servicios"
      >
        <ServiceSection />
      </div>

      {/* Nosotros */}
      <div className="mt-[200px] mb-44 w-full max-w-screen-2xl" id="nosotros">
        <AboutUsSection />
      </div>

      <div
        className="mt-[200px] mb-44 mx-auto w-full max-w-screen-2xl px-4 lg:px-[70px]"
        id="contacto"
      >
        <ContactFormSection />
      </div>
    </main>
  );
}

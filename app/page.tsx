'use client';

import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import Link from 'next/link';
import React from 'react';
import ServiceSection from '@/components/ServiceSection';
import '@/components/css/Page.css';
import ProjectSection from '@/components/ProjectSection';
import AboutUsSection from '@/components/AboutUsSection';
import ContactFormSection from '@/components/ContactFormSection';
import PartnersSection from '@/components/PartnersSection';
import SocialProofSection from '@/components/SocialProofSection';

export default function Home() {
  return (
    <div>
      <div
        className="md:grid md:grid-cols-2 flex flex-col items-center md:pt-36 pt-20 md:h-screen w-full mx-auto max-w-screen-2xl lg:px-[70px]"
        id="inicio"
      >
        {/* Logo, Hero & CTA */}
        <div className="animate-hero-slide-up order-last">
          <h1 className="font-lufgaBold sm:text-7xl text-5xl mb-16 sm:text-left text-center">
            El partner digital <br />
            de tu siguiente <br />
            gran idea
          </h1>
          <div className="md:space-x-5 space-y-5 flex flex-col md:block sm:px-0 px-8">
            <Link href="#contacto" scroll className="scroll-smooth">
              <Button
                variant="default"
                className="font-sfpro h-[56px] md:w-[200px] w-full text-xl shadow-lg"
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
      </div>

      <div className="mt-64 mx-auto w-full max-w-screen-2xl px-4 lg:px-[70px]">
        <PartnersSection />
      </div>

      {/* Proyectos */}
      <div
        className="mt-[100px] mb-44 mx-auto w-full max-w-screen-2xl px-4 lg:px-[70px]"
        id="proyectos"
      >
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

      <Footer />
    </div>
  );
}

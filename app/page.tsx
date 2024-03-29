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
        className="md:grid md:grid-cols-2 flex flex-col items-center md:pt-36 pt-16 md:h-screen w-full mx-auto max-w-screen-2xl px-4 lg:px-[70px] relative"
        id="init"
      >
        {/* Logo, Hero & CTA */}
        <div className="animate-hero-slide-up order-last">
          <Link href="/" className="hidden md:block w-10 h-10 mb-8">
            <Image
              src="/logos/white-logo.svg"
              alt="magnet logo"
              width={40}
              height={40}
              className="mb-8"
            />
          </Link>
          <h1 className="font-lufgaBold sm:text-7xl text-5xl sm:text-left text-center select-none hero-title-gradient">
            Crafting digital <br />
            solutions <br />
            <span className="hero-text-gradient">for success.</span>
          </h1>
          <div className="flex items-center justify-center md:flex md:justify-normal">
            <p className="font-sfpro mb-16 mt-8 text-center md:text-left max-w-md lg:max-w-[430px]">
              We support and enable entrepreneurs to transform their vision into
              action.
            </p>
          </div>
          <div className="space-y-5 md:space-y-0 flex flex-col md:space-x-2 md:flex-row sm:px-0 px-8">
            <Link
              href="#contact"
              scroll
              className="scroll-smooth w-full md:w-auto"
            >
              <Button
                variant="default"
                className="font-sfpro h-[56px] md:w-[200px] w-full text-xl shadow-lg heroButton"
              >
                Contact Us
              </Button>
            </Link>

            <Link href="#work" className="scroll-smooth w-full md:w-auto">
              <Button
                variant="secondary"
                className="font-sfpro h-[56px] md:w-[200px] w-full text-xl shadow-sm"
              >
                Learn More <ArrowDown className="ml-3" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="animate-magnet-fade-in md:absolute relative md:-right-1/4">
          <motion.img
            className="4xl:w-[1800px] 3xl:w-[1600px] 2xl:w-[1400px] xl:w-[1200px] lg:w-[900px] md:w-[750px] w-[600px]"
            drag
            dragSnapToOrigin
            dragElastic={0.5}
            dragConstraints={{ right: 0, left: 0, top: 0, bottom: 0 }}
            src="/images/MagnetHero.png"
          />
        </div>

        {/* Circles */}
        <div className="hidden lg:block lg:absolute lg:top-[-35rem] lg:left-[34rem] first-circle lg:h-[58.125rem] lg:w-[58.125rem] lg:z-[-10]"></div>
        <div className="hidden lg:block lg:absolute lg:top-[-40.5rem] lg:left-[29.5rem] second-circle lg:h-[67.813rem] lg:w-[67.813rem] lg:z-[-20]"></div>
        <div className="hidden lg:block lg:absolute lg:top-[-45rem] lg:left-[25rem] third-circle lg:h-[77.5rem] lg:w-[77.5rem] lg:z-[-30]"></div>
        <div className="hidden lg:block lg:absolute lg:top-[-49.5rem] lg:left-[20rem] fourth-circle lg:h-[87.188rem] lg:w-[87.188rem] lg:z-[-40]"></div>
        <div className="hidden lg:block lg:absolute lg:top-[-54.5rem] lg:left-[15rem] fifth-circle lg:h-[96.875rem] lg:w-[96.875rem] lg:z-[-50]"></div>
        <div className="hidden lg:block lg:absolute lg:top-[-59rem] lg:left-[10rem] sixth-circle lg:h-[106.563rem] lg:w-[106.563rem] lg:z-[-60]"></div>
      </div>

      <div className="mt-64 mx-auto w-full max-w-screen-3xl px-4 lg:px-[70px]">
        <PartnersSection />
      </div>

      {/* Proyectos */}
      <div
        className="mt-[100px] mb-44 mx-auto w-full max-w-screen-3xl px-4 lg:px-[70px]"
        id="work"
      >
        <ProjectSection />
      </div>

      <div className="mt-40 mx-auto w-full max-w-screen-3xl px-4 lg:px-[70px]">
        <SocialProofSection />
      </div>

      {/* Servicios */}
      <div
        className="mt-[90px] mb-44 mx-auto w-full max-w-screen-3xl px-4 lg:px-[70px]"
        id="services"
      >
        <ServiceSection />
      </div>

      {/* Nosotros */}
      <div
        className="mt-[200px] mb-44 w-full max-w-screen-3xl 2xl:px-[70px]"
        id="aboutus"
      >
        <AboutUsSection />
      </div>

      <div
        className="mt-[200px] mb-44 mx-auto w-full max-w-screen-3xl px-4 lg:px-[70px]"
        id="contact"
      >
        <ContactFormSection />
      </div>
    </main>
  );
}

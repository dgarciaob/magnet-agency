'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

function SaaS() {
  return (
    <main className="px-4 lg:px-[70px] py-32 lg:py-[100px]">
      <div className="mb-10 z-50 relative" style={{ zIndex: 1 }}>
        <Link href="/#work" legacyBehavior>
          <a className="text-blue-600 hover:underline font-sfprobold text-lg">
            <ArrowLeft className="inline mr-2 h-5 w-5 text-blue-600 hover:underline" />
            Back
          </a>
        </Link>
      </div>
      <div className="flex flex-col space-y-8 lg:flex lg:flex-row lg:items-center">
        <div className="font-lufgaBold text-4xl lg:text-6xl lg:w-1/3 lg:space-y-10 space-y-4 relative">
          <h1>Nous</h1>
          <p className="font-sfpro text-lg lg:text-2xl">
            Software as a Service for Psychologists. Nous is an all-in-one app
            that helps psychologists organize their life and work. Giving them
            back the time to focus on their patients.
          </p>
          <div className="absolute top-[-8rem] bg-[#34C759] rounded-full h-[10rem] w-[10rem] blur-[6rem]"></div>
        </div>
        <div className="lg:w-2/3 flex items-center justify-center">
          <Image
            src="/images/mockup-nous.png"
            alt="Magnet pic"
            width={800}
            height={600}
            placeholder="blur"
            blurDataURL="/images/mockup-nous.png"
          />
        </div>
      </div>
    </main>
  );
}

export default SaaS;

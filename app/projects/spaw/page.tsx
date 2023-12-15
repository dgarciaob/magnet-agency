'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

function Spaw() {
  return (
    <main className="px-4 lg:px-[70px] py-32 lg:py-[100px]">
      <div className="mb-10 z-50 relative" style={{ zIndex: 1 }}>
        <Link href="/#proyectos" legacyBehavior>
          <a className="text-blue-600 hover:underline font-sfprobold text-lg">
            <ArrowLeft className="inline mr-2 h-5 w-5 text-blue-600 hover:underline" />
            Regresar
          </a>
        </Link>
      </div>
      <div className="flex flex-col space-y-8 lg:flex lg:flex-row lg:items-center">
        <div className="font-lufgaBold text-4xl lg:text-6xl lg:w-1/3 lg:space-y-10 space-y-4 relative">
          <h1>spatial (-.-) awareness</h1>
          <p className="font-sfpro text-lg lg:text-2xl">
            SPAW is a brand that encompasses several fields, hence the need to
            have an everchanging but recognizable logo. A brand that thrives on
            the reminiscence of simpler times.
          </p>
          <div className="absolute top-[-8rem] bg-[#668BFC] rounded-full h-[10rem] w-[10rem] blur-[6rem]"></div>
        </div>
        <div className="lg:w-2/3 flex items-center justify-center">
          <Image
            src="/images/mockup-spaw.png"
            alt="Spaw pic"
            width={800}
            height={600}
            placeholder="blur"
            blurDataURL="/images/mockup-spaw.png"
          />
        </div>
      </div>
    </main>
  );
}

export default Spaw;

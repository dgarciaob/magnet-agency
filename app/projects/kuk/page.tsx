'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

function Kuk() {
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
          <h1>Kuk App</h1>
          <p className="font-sfpro text-lg lg:text-2xl">
            Kuk, an app for beginners in homemade cooking. Provides a
            customizable meal diary to manage time and money. <br />{' '}
            <Link
              href="https://www.behance.net/gallery/164030461/Kuk-a-cooking-app"
              className="font-bold text-[#FE9C38]"
              target="_blank"
              rel="noopener noreferrer"
            >
              UX/UI Design
            </Link>{' '}
            for homemade cooking industry.
          </p>
          <div className="absolute top-[-8rem] bg-[#FE9C38] rounded-full h-[10rem] w-[10rem] blur-[6rem]"></div>
        </div>
        <div className="lg:w-2/3 flex items-center justify-center">
          <Image
            src="/images/mockup-kuk.png"
            alt="KUK pic"
            width={800}
            height={600}
            placeholder="blur"
            blurDataURL="/images/mockup-kuk.png"
          />
        </div>
      </div>
    </main>
  );
}

export default Kuk;

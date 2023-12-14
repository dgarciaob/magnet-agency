'use client';
import React from 'react';
import Image from 'next/image';

function Giko() {
  return (
    <main className="px-4 lg:px-[70px] py-32 lg:py-[100px] flex flex-col space-y-8 lg:flex lg:flex-row lg:items-center">
      <div className="font-lufgaBold text-4xl lg:text-6xl lg:w-1/3 lg:space-y-10 space-y-4 relative">
        <h1>Giko [+]</h1>
        <p className="font-sfpro text-lg lg:text-2xl">
          Completo diseño de marca para Giko [+]. Desarrollo de identidad y
          posicionamiento de marca dentro del rubro de teclados mecánicos.
        </p>
        <div className="absolute top-[-8rem] bg-[#77ADFE] rounded-full h-[10rem] w-[10rem] blur-[6rem]"></div>
      </div>
      <div className="relative lg:w-2/3 flex items-center justify-center">
        <Image
          src="/images/giko5.png"
          alt="Giko pic"
          width={800}
          height={600}
        />
      </div>

      <div></div>
    </main>
  );
}

export default Giko;

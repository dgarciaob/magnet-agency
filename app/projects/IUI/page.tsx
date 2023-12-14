'use client';
import React from 'react';
import Image from 'next/image';

function IUI() {
  return (
    <main className="px-4 lg:px-[70px] py-32 lg:py-[100px]">
      <div className="flex flex-col space-y-8 lg:flex lg:flex-row lg:items-center">
        <div className="font-lufgaBold text-4xl lg:text-6xl lg:w-1/3 lg:space-y-10 space-y-4 relative">
          <h1>Interpreters UI</h1>
          <p className="font-sfpro text-lg lg:text-2xl">
            Para visualizar una experiencia concisa para el usuario final de los
            intérpretes, la IUI o Interfaz de Usuario del Intérprete ofrece una
            interfaz hecha a medida para la interpretación telefónica.
          </p>
          <div className="absolute top-[-8rem] bg-[#34C759] rounded-full h-[10rem] w-[10rem] blur-[6rem]"></div>
        </div>
        <div className="lg:w-2/3 flex items-center justify-center">
          <Image
            src="/images/macbookIUI.png"
            alt="Giko pic"
            width={800}
            height={600}
            placeholder="blur"
            blurDataURL="/images/macbookIUI.png"
          />
        </div>
      </div>

      {/* <div className="mt-10 lg:mt-20 rounded-xl">
    <div>
      <Image
        src="/images/gikoProjectImages.png"
        alt="Giko pic"
        width={1000}
        height={600}
        placeholder="blur"
        blurDataURL="/images/gikoProjectImages.png"
        className="rounded-xl"
      />
    </div>
  </div> */}
    </main>
  );
}

export default IUI;

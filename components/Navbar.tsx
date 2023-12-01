'use client';
import Link from 'next/link';
import Image from 'next/image';

import { navscreen } from '@/navscreens/navscreens';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const date = new Date();
  const [topOfPage, setTopOfPage] = useState(true);
  let year = date.getFullYear();

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setTopOfPage(false);
    } else {
      setTopOfPage(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <div
        className={cn(
          'md:flex md:flex-row px-[70px] py-4 md:flex-nowrap w-full backdrop-blur-md z-50 fixed hidden justify-between align-middle items-center',
          {
            'border-b-slate-200': !topOfPage,
            'border-b-2': !topOfPage,
          },
        )}
      >
        <Image
          src="/logos/white-logo.svg"
          alt="magnet logo"
          width={70}
          height={70}
        />
        <div className="hidden md:flex flex-row space-x-28 font-lufgaBold">
          {navscreen.map((navscreen) => {
            return (
              <div
                key={navscreen.name}
                className="transition ease-in-out duration-300 hover:text-[#5746F4] hover:scale-110 hover:-translate-y-1"
              >
                <Link href={navscreen.linkTo}>{navscreen.name}</Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden ">
        <Sheet>
          <SheetTrigger>
            <Image
              src="/logos/white-logo.svg"
              alt="magnet logo"
              width={60}
              height={60}
            />
          </SheetTrigger>
          <SheetContent side="left" className="w-[250px] bg-[#F6F5FF]">
            <div className="flex flex-row space-x-2 mb-20">
              <Image
                src="/logos/black-logo.svg"
                alt="magnet logo black"
                width={30}
                height={30}
              />
              <p className="font-lufgaBold tracking-tight">magnet</p>
            </div>

            <div className="space-y-8">
              {navscreen.map((navscreen) => {
                return (
                  <div
                    key={navscreen.name}
                    className="transition ease-in-out hover:text-[#5746F4] hover:scale-110 hover:-translate-y-1"
                  >
                    <Link href={navscreen.linkTo}>{navscreen.name}</Link>
                  </div>
                );
              })}
            </div>

            <div className="tracking-light font-sfprorounded absolute bottom-8">
              Copyright © magnet {year}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Navbar;

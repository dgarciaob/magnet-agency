import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <MaxWidthWrapper>
      {/* Hero Section */}
      <div className="lg:flex lg:flex-row lg:mt-24">
        {/* Logo, Hero & CTA */}
        <div>
          {/* TODO: Agregar animación al logo pequeño con Framer Motion */}
          <Image
            src="/logos/white-logo.svg"
            alt="magnet logo"
            width={90}
            height={90}
            className="lg:mb-48"
          />
          <div>
            <h1 className="font-lufgaBold lg:text-6xl lg:mb-16">
              el partner digital <br />
              de tu siguiente <br />
              gran idea
            </h1>
            <div className="lg:space-x-5">
              <Button
                variant="default"
                className="font-lufgaMedium lg:h-[93px] lg:w-[200px] lg:text-2xl"
              >
                agenda
              </Button>
              <Button
                variant="secondary"
                className="font-lufgaMedium lg:h-[93px] lg:w-[200px] lg:text-2xl"
              >
                escoge
              </Button>
            </div>
          </div>
        </div>

        {/* Animated Big Logo */}
        <div className="h-auto w-auto">
          <Image
            src="/images/bottomdormant.svg"
            alt="primer logolayout"
            width={1044.16}
            height={642.56}
            className="absolute -right-80 top-20"
          />
          <Image
            src="/images/middledormant.svg"
            alt="segundo logolayout"
            width={1044.16}
            height={642.56}
            className="absolute -right-64 top-20"
          />
          <Image
            src="/images/topdormant.svg"
            alt="segundo logolayout"
            width={1044.16}
            height={642.56}
            className="absolute -right-60 top-20"
          />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

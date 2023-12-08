import React, { useState, useEffect } from 'react';
import RouteTitle from './RouteTitle';
import { team } from '@/constants/team';
import Image from 'next/image';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from 'framer-motion';

const AboutUsSection = (name: string) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [currentFounder, setCurrentFounder] = useState('');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', mouseMove);
    return () => window.removeEventListener('mousemove', mouseMove);
  }, []);

  const handleMouseEnter = (founderName: string) => {
    setIsHovered(true);
    setCurrentFounder(founderName);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentFounder('');
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center align-middle mb-4 mt-24 px-4 lg:px-[70px]">
        <RouteTitle
          title="Equipo"
          description="Las personas que forman magnet"
        />
      </div>
      <div className="relative w-screen h-screen flex items-center justify-center">
        <Image
          src="/images/BG4X.png"
          alt="Background Magnet"
          layout="fill"
          objectFit="cover"
        />
        <div className="relative h-[30%] w-[30%]">
          <Image
            src="/images/magnetTeamLogo.png"
            alt="Magnet Team Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div
          className="absolute top-[15%] right-[18%] h-[20%] w-[20%]"
          onMouseEnter={() => handleMouseEnter('Diego Garcia')}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src="/images/diego.png"
            alt="Diego Garcia"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div
          className="absolute top-[38%] right-[4%] h-[25%] w-[25%]"
          onMouseEnter={() => handleMouseEnter('Bruno Jacobs')}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src="/images/bj.png"
            alt="Bruno Jacobs"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div
          className="absolute top-[25%] left-[19%] h-[20%] w-[20%]"
          onMouseEnter={() => handleMouseEnter('Bruno Gardini')}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src="/images/zere.png"
            alt="Bruno Gardini"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div
          className="absolute top-[52%] left-[4%] h-[25%] w-[25%]"
          onMouseEnter={() => handleMouseEnter('Guille Zumarán')}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src="/images/zumi.png"
            alt="Guille Zumarán"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {isHovered && (
          <motion.div
            className="fixed bg-[#5746F4]"
            style={{ top: mousePosition.y + 1, left: mousePosition.x + 1 }}
          >
            <p className="text-white font-sfprorounded">{currentFounder}</p>
          </motion.div>
        )}
      </div>

      <div className="flex flex-row justify-between mt-20">
        {team.map((founder) => {
          return (
            <div key={founder.name} className="relative">
              <div className="h-[310px] w-1/4">
                <Image
                  src={founder.image}
                  alt={founder.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[25px]"
                />
              </div>
              <div className="absolute bottom-0 w-full h-1/3 backdrop-blur-md rounded-b-[25px] flex items-center justify-center">
                <div className="flex flex-row">
                  <h2 className="text-xl font-sfprorounded font-bold text-white">
                    {founder.name} ·{' '}
                  </h2>
                  <p className="text-base font-sfprorounded text-white">
                    {founder.role}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutUsSection;

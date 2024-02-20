import React, { useState, useEffect } from 'react';
import RouteTitle from './RouteTitle';
import { team } from '@/constants/team';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutUsSection = () => {
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
          title="Team"
          description="The team that makes it all happen"
        />
      </div>
      <div className="relative w-full h-screen flex items-center justify-center">
        <Image
          src="/images/BG4X.png"
          alt="Background Magnet"
          fill
          className="object-cover"
        />
        <div className="relative h-[30%] w-[30%]">
          <Image
            src="/images/magnetTeamLogo.png"
            alt="Magnet Team Logo"
            fill
            className="object-contain"
          />
        </div>
        <div
          className="absolute top-[15%] right-[18%] h-[20%] w-[20%]"
          onMouseEnter={() => handleMouseEnter('Diego Garcia')}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src="/images/4xprimo.png"
            alt="Diego Garcia"
            fill
            className="object-contain"
          />
        </div>
        <div
          className="absolute top-[38%] right-[4%] h-[25%] w-[25%]"
          onMouseEnter={() => handleMouseEnter('Bruno Jacobs')}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src="/images/4xbru.png"
            alt="Bruno Jacobs"
            fill
            className="object-contain"
          />
        </div>
        <div
          className="absolute top-[25%] left-[19%] h-[20%] w-[20%]"
          onMouseEnter={() => handleMouseEnter('Bruno Gardini')}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src="/images/4xyo.png"
            alt="Bruno Gardini"
            fill
            className="object-contain"
          />
        </div>
        <div
          className="absolute top-[52%] left-[4%] h-[25%] w-[25%]"
          onMouseEnter={() => handleMouseEnter('Guille Zumarán')}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src="/images/4xzumi.png"
            alt="Guille Zumarán"
            fill
            className="object-contain"
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

      {/* <div className="md:flex md:flex-row md:space-y-0 justify-between flex flex-col items-center space-y-6 mt-20 mx-auto w-full max-w-screen-2xl px-4 lg:px-[70px]">
        {team.map((founder) => {
          return (
            <div
              key={founder.name}
              className="relative overflow-x-hidden overflow-y-clip w-[310px] h-[410px] bg-white rounded-[25px]"
            >
              <Image
                src={founder.image}
                alt={founder.alt}
                width={310}
                height={310}
                className="rounded-[25px] object-cover"
              />

              <div className="absolute bottom-0 w-full h-[25%] backdrop-blur-md rounded-b-[25px] px-4 pt-4">
                <div className="flex flex-row items-center space-x-2">
                  <h2 className="text-base font-sfprobold text-white">
                    {founder.name}
                  </h2>
                  <span className="text-white">·</span>
                  <p className="text-base font-sfpro text-white">
                    {founder.role}
                  </p>
                </div>
                <div>
                  <p className="text-base font-sfpro text-white">
                    {founder.phrase}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div> */}

      <div className="mt-20 mx-auto w-full max-w-screen-2xl px-4 lg:px-[70px] flex flex-col space-y-6 items-center md:flex-row md:space-y-0 md:flex-wrap md:gap-6 md:justify-center md:items-center">
        <div className="relative rounded-[25px]">
          <Image
            src="/images/profilePicDiego.png"
            alt="Diego García"
            width={310}
            height={310}
            className="object-cover rounded-[25px] w-[310px] h-[350px]"
          />
          <div className="absolute bottom-0 w-full h-[15%] backdrop-blur-md rounded-b-[25px] px-4 pt-4">
            <div className="flex flex-row items-center space-x-2">
              <h2 className="text-base font-sfprobold text-white">
                Diego Garcia
              </h2>
              <span className="text-white">·</span>
              <p className="text-base font-sfpro text-white">
                Co-founder & Dev
              </p>
            </div>
          </div>
        </div>
        <div className="relative rounded-[25px]">
          <Image
            src="/images/380.png"
            alt="Bruno Gardini"
            width={310}
            height={310}
            className="object-cover rounded-[25px] w-[310px] h-[350px]"
          />
          <div className="absolute bottom-0 w-full h-[15%] backdrop-blur-md rounded-b-[25px] px-2 pt-4">
            <div className="flex flex-row items-center space-x-2">
              <h2 className="text-base font-sfprobold text-white">
                Bruno Gardini
              </h2>
              <span className="text-white">·</span>
              <p className="text-base font-sfpro text-white">
                Co-founder & Design
              </p>
            </div>
          </div>
        </div>
        <div className="relative rounded-[25px]">
          <Image
            src="/images/profilePicBJ2.jpeg"
            alt="Bruno Jacobs"
            width={310}
            height={310}
            className="object-cover rounded-[25px] w-[310px] h-[350px]"
          />
          <div className="absolute bottom-0 w-full h-[15%] backdrop-blur-md rounded-b-[25px] px-4 pt-4">
            <div className="flex flex-row items-center space-x-2">
              <h2 className="text-base font-sfprobold text-white">
                Bruno Jacobs
              </h2>
              <span className="text-white">·</span>
              <p className="text-base font-sfpro text-white">Senior Dev</p>
            </div>
          </div>
        </div>
        <div className="relative rounded-[25px]">
          <Image
            src="/images/zumijpg.png"
            alt="Guille Zumarán"
            width={310}
            height={310}
            className="object-cover rounded-[25px] w-[310px] h-[350px]"
          />
          <div className="absolute bottom-0 w-full h-[15%] backdrop-blur-md rounded-b-[25px] px-4 pt-4">
            <div className="flex flex-row items-center space-x-2">
              <h2 className="text-base font-sfprobold text-white">
                Guillermo Zumarán
              </h2>
              <span className="text-white">·</span>
              <p className="text-base font-sfpro text-white">Senior Dev</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;

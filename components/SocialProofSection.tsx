import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { proofImages } from '@/constants/proofImages';

const fadeInAnimationVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const SocialProofSection = () => {
  return (
    <div className="flex flex-col">
      <div className="mb-16">
        <h2 className="font-sfprobold lg:text-4xl text-3xl text-center text-[#5746F4]">
          Trusted by
        </h2>
      </div>
      <div className="lg:flex lg:flex-row lg:space-x-8 lg:items-center lg:justify-center grid grid-cols-3 gap-y-8 justify-items-center">
        {proofImages.map((partner, index) => {
          return (
            <motion.div
              key={partner.id}
              className="relative"
              variants={fadeInAnimationVariant}
              initial="initial"
              whileInView="animate"
              custom={index}
            >
              <Image
                src={partner.img}
                alt={partner.alt}
                width={93}
                height={93}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SocialProofSection;

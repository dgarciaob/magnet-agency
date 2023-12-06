import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion';

import React, { useRef, ReactNode } from 'react';

import { wrap } from '@motionone/utils';

import '@/components/css/Partners.css';

interface PartnersProps {
  children: ReactNode;
  baseVelocity: number;
  className?: ReactNode;
  style?: React.CSSProperties;
}

function PartnersSectionFunct({ children, baseVelocity = 100 }: PartnersProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

export default function PartnersSection() {
  return (
    <section>
      <PartnersSectionFunct baseVelocity={-4}>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#7346F4] to-[#4603FF] font-lufgaBold ml-8">
          Somos Magnet
        </p>
      </PartnersSectionFunct>
      <PartnersSectionFunct baseVelocity={4}>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#7346F4] to-[#4603FF] font-lufgaBold ml-8">
          Somos Magnet
        </p>
      </PartnersSectionFunct>
    </section>
  );
}

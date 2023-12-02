import { services } from '@/constants/services';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const ServiceCarousel = () => {
  return (
    <div className="flex flex-row space-x-8 overflow-x-auto overflow-y-hidden">
      {services.map((service) => {
        return (
          <div
            key={service.id}
            className={cn(
              'relative rounded-[25px] cursor-pointer w-[420px] h-[585px] overflow-hidden',
              service.bgColor,
            )}
          >
            {/* <Image
              src={service.bgImg2}
              alt={service.alt}
              fill
              className="object-cover bg-position"
            /> */}
          </div>
        );
      })}
    </div>
  );
};

export default ServiceCarousel;

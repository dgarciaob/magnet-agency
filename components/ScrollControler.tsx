import { ArrowLeft, ArrowRight } from 'lucide-react';

const ScrollControler = () => {
  return (
    <div className="flex justify-end mt-6">
      <div className="h-[56px] w-[120px] rounded-full bg-white flex items-center justify-between align-middle px-4">
        <button className="rounded-full bg-[#5746F4]/20 h-9 w-9 flex items-center justify-center cursor-pointer">
          <ArrowLeft className="cursor-pointer" />
        </button>

        <button className="rounded-full bg-[#5746F4]/20 h-9 w-9 flex items-center justify-center cursor-pointer">
          <ArrowRight className="cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default ScrollControler;

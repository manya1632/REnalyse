import Image from 'next/image';
import CardImage from '@/public/image_1.png'; 

const HeroSection = () => {
  return (
    <section className="relative min-h-screen lg:h-screen w-full bg-renalyse-light overflow-hidden flex items-center pt-20 lg:pt-0">
      {/* Background Bleed - Hidden on mobile for performance/clarity */}
      <div className="hidden lg:block absolute top-1/2 left-0 -translate-y-1/2 select-none pointer-events-none">
        <h2 className="text-[18vw] font-black text-renalyse-dark/[0.03] leading-none uppercase">
          Renal-Care
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center relative z-10">
        
        {/* Left Content */}
        <div className="col-span-1 lg:col-span-7 flex flex-col justify-center text-left">
          <div className="flex items-center gap-4 mb-4 lg:mb-6">
            <div className="h-px w-8 lg:w-12 bg-renalyse-primary"></div>
            <span className="text-renalyse-primary font-bold tracking-[0.3em] text-[9px] lg:text-[10px] uppercase">
              2026 Diagnostic Standard
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-renalyse-dark leading-[0.9] tracking-tighter mb-6 lg:mb-8">
            RE<span className="text-renalyse-primary">.</span>nalyse <br />
            <span className="text-3xl md:text-5xl lg:text-6xl font-light tracking-normal text-renalyse-text-gray block mt-2">
              Screening Reimagined.
            </span>
          </h1>

          <div className="max-w-md">
            <p className="text-renalyse-text-gray text-base lg:text-lg border-l-2 border-renalyse-primary pl-4 lg:pl-6 mb-8 lg:mb-10">
              Transforming Whatman cellulose matrices into clinical insights via AI. Screening costs reduced by <span className="text-renalyse-dark font-bold">95%</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
              <button className="w-full sm:w-auto bg-renalyse-dark text-white px-8 py-4 lg:py-5 font-bold uppercase text-[10px] tracking-widest hover:text-renalyse-primary transition-all">
                Request Card
              </button>
              <button className="w-full sm:w-auto text-renalyse-dark font-bold uppercase text-[10px] tracking-widest border-b-2 border-renalyse-dark/10 py-2">
                Track order
              </button>
            </div>
          </div>
        </div>

        {/* Right Card - Responsive Tilt & Hover Effect */}
        <div className="col-span-1 lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center lg:block perspective-2000">
          <div className="relative z-20 
            /* Base Mobile Styles (Flat) */
            rotate-0 scale-100 
            /* Desktop Entry Animation Styles */
            lg:-rotate-12 lg:translate-x-10 lg:scale-110 
            /* Desktop Hover Interaction */
            lg:hover:rotate-0 lg:hover:translate-x-0 lg:hover:scale-[1.15]
            transition-all duration-700 ease-out cursor-pointer group"
          >
            <div className="p-2 bg-white shadow-xl lg:shadow-[40px_40px_80px_-20px_rgba(15,27,76,0.2)] rounded-[2rem] border border-gray-100/50">
              <Image 
                src={CardImage} 
                alt="REnalyse Card"
                width={800}
                height={600}
                className="rounded-[1.8rem] w-full h-auto transition-opacity group-hover:opacity-100 opacity-90"
                priority
              />
            </div>
            
            {/* Price Badge - Follows the tilt */}
            <div className="absolute -bottom-4 -right-4 lg:-bottom-10 lg:-left-10 bg-renalyse-primary p-4 lg:p-6 text-white rounded-tr-[2rem] lg:rounded-tr-[3rem] shadow-2xl transition-transform duration-500 group-hover:scale-110">
              <p className="text-[8px] lg:text-[10px] font-bold uppercase mb-1">Cost / Unit</p>
              <p className="text-2xl lg:text-4xl font-black">₹30</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
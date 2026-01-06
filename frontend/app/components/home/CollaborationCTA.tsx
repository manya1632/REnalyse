import { ArrowRight } from 'lucide-react';

const CollaborationCTA = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="bg-renalyse-dark rounded-[3rem] lg:rounded-[4rem] p-10 md:p-24 relative overflow-hidden">
          
          {/* Abstract background graphics */}
          <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-renalyse-primary rounded-full blur-[120px]"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7">
              <h2 className="text-5xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter mb-8">
                Partner with <br /> 
                <span className="text-renalyse-primary italic font-serif">the Future.</span>
              </h2>
              <p className="text-xl text-blue-100/60 max-w-xl leading-relaxed">
                Deploying clinical-grade AI diagnostics for hospitals, NGOs, and Government bodies. 2026 infrastructure ready for mass renal screening.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-6">
              <button className="w-full bg-renalyse-primary text-renalyse-dark p-6 rounded-2xl font-black uppercase text-xs tracking-[0.2em] flex justify-between items-center group hover:bg-white transition-all">
                Partnership Team
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              
              <div className="grid grid-cols-2 gap-4">
                <a href="mailto:partners@renalyse.com" className="p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-all text-center">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2">Email</span>
                  <span className="text-white font-bold">Contact</span>
                </a>
                <div className="p-6 border border-white/10 rounded-2xl bg-white/5 text-center">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2">Compliance</span>
                  <span className="text-white font-bold">FHIR v4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationCTA;
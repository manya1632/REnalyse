import { AlertTriangle, Wallet, TrendingUp, MapPin, Zap, CheckCircle2, ShieldCheck, Microscope } from 'lucide-react';

const problemStats = [
  { label: "Affected Adults", value: "105M+", icon: TrendingUp, size: "w-48 h-48", pos: "top-0 left-0" },
  { label: "Undiagnosed", value: "80%", icon: AlertTriangle, size: "w-40 h-40", pos: "top-10 right-10" },
  { label: "Rural Access", value: "70%", icon: MapPin, size: "w-36 h-36", pos: "bottom-10 left-10" },
  { label: "Annual Cost", value: "₹3L+", icon: Wallet, size: "w-44 h-44", pos: "bottom-0 right-0" },
];

const advantages = [
  {
    title: "Cost Efficiency",
    traditional: "₹500 - ₹1,500 per test",
    renalyse: "₹30 per unit",
    metric: "95% Reduction",
    icon: Wallet
  },
  {
    title: "Time to Result",
    traditional: "24 - 48 Hour Turnaround",
    renalyse: "Sub-100ms Inference",
    metric: "Instant Action",
    icon: Zap
  },
  {
    title: "Infrastructure",
    traditional: "Centralized Lab Grade",
    renalyse: "Point-of-Care (Smartphone)",
    metric: "Decentralized",
    icon: Microscope
  }
];

const WhyREnalyse = () => {
  return (
    <section className="relative py-24 lg:py-40 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP: The Crisis Cloud (Visualized Problem) */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="text-red-500 font-bold uppercase tracking-[0.3em] text-[10px]">Contextual Urgency</h2>
            <h3 className="text-6xl lg:text-8xl font-black text-renalyse-dark leading-none tracking-tighter">
              The CKD <br /><span className="text-red-500 italic font-serif">Dead-End.</span>
            </h3>
            <p className="text-xl text-renalyse-text-gray max-w-md leading-relaxed">
              Standard diagnostics have hit a ceiling. High costs and urban centralization mean <span className="text-renalyse-dark font-bold underline decoration-red-500">millions are excluded</span> from early detection.
            </p>
          </div>

          <div className="relative h-[450px] order-1 lg:order-2">
            {problemStats.map((stat, idx) => (
              <div key={idx} className={`absolute ${stat.size} ${stat.pos} bg-renalyse-light rounded-full flex flex-col items-center justify-center text-center p-6 border border-renalyse-primary/5 shadow-xl transition-transform hover:scale-105 group`}>
                <stat.icon size={20} className="text-renalyse-primary mb-2 opacity-40 group-hover:opacity-100" />
                <span className="text-3xl font-black text-renalyse-dark tracking-tighter">{stat.value}</span>
                <span className="text-[8px] font-bold uppercase tracking-widest text-renalyse-secondary">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM: The Paradigm Shift (Why it's Better) */}
        <div className="bg-renalyse-dark rounded-[3rem] p-8 lg:p-20 text-white relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-renalyse-primary/5 skew-x-12 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <div className="mb-16">
              <h4 className="text-renalyse-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-4">Engineering Superiority</h4>
              <h3 className="text-4xl lg:text-6xl font-black tracking-tighter">Why REnalyse is a <br />Clinical Must.</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {advantages.map((adv, i) => (
                <div key={i} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-renalyse-primary/20 flex items-center justify-center mb-6 text-renalyse-primary">
                    <adv.icon size={24} />
                  </div>
                  <h5 className="text-xl font-bold mb-6">{adv.title}</h5>
                  
                  <div className="space-y-4 mb-8">
                    <div className="opacity-40">
                      <p className="text-[9px] uppercase tracking-widest mb-1">Traditional</p>
                      <p className="text-sm line-through">{adv.traditional}</p>
                    </div>
                    <div className="text-renalyse-primary">
                      <p className="text-[9px] uppercase tracking-widest mb-1 font-black">REnalyse</p>
                      <p className="text-lg font-bold">{adv.renalyse}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Efficiency Gain</span>
                    <span className="text-xs font-black py-1 px-3 bg-renalyse-primary/20 rounded-full text-renalyse-primary">
                      {adv.metric}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Validation Bar */}
            <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { label: "Compliance", val: "FHIR v4 / HL7", icon: ShieldCheck },
                  { label: "Accuracy", val: "98.2% Correlation", icon: CheckCircle2 },
                  { label: "Latency", val: "Sub-100ms Inference", icon: Zap },
                  { label: "Material", val: "Whatman Grade 1", icon: Microscope }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <item.icon size={16} className="text-renalyse-primary" />
                    <div>
                      <p className="text-[8px] uppercase tracking-widest opacity-40">{item.label}</p>
                      <p className="text-xs font-bold">{item.val}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyREnalyse;
import { Users, HeartPulse, HandHeart, Building2 } from 'lucide-react';

const targetGroups = [
  {
    title: "Frontline Workers",
    subtitle: "ASHA Workers & ANMs",
    description: "A simple, offline-capable tool for executing mass screening in community settings, replacing complex lab procedures.",
    icon: Users,
    side: "left"
  },
  {
    title: "High-Risk Groups",
    subtitle: "Diabetics & Hypertensives",
    description: "Cost-effective, frequent screening to enable early intervention with disease-modifying therapies.",
    icon: HeartPulse,
    side: "right"
  },
  {
    title: "Underserved Rural",
    subtitle: "Low-income Populations",
    description: "Reducing out-of-pocket expenditure for those relying on public healthcare infrastructure.",
    icon: HandHeart,
    side: "left"
  },
  {
    title: "Systemic Clients",
    subtitle: "Govt Agencies & NGOs",
    description: "Primary procurement channel for high-volume, low-cost diagnostics to meet national goals.",
    icon: Building2,
    side: "right"
  },
];

const TargetUsersSection = () => {
  return (
    <section id="users" className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Asymmetric Editorial Style */}
        <div className="mb-32 relative">
          <h2 className="text-[12vw] font-black text-renalyse-dark/[0.03] absolute -top-16 left-0 leading-none select-none">
            IMPACT
          </h2>
          <div className="relative z-10">
            <h3 className="text-5xl lg:text-7xl font-black text-renalyse-dark leading-[0.9] tracking-tighter">
              Healthcare Delivery <br />
              <span className="text-renalyse-primary">Across the Spectrum.</span>
            </h3>
            <p className="mt-6 text-renalyse-text-gray max-w-xl text-lg lg:text-xl font-medium">
              REnalyse bridges gaps in clinical accessibility, serving those who need it most.
            </p>
          </div>
        </div>

        {/* Timeline Pipeline */}
        <div className="relative">
          
          {/* Central Pillar (Hidden on small mobile, shown on lg) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1.5 -translate-x-1/2 bg-gradient-to-b from-renalyse-primary via-renalyse-secondary to-renalyse-dark rounded-full hidden lg:block"></div>

          <div className="space-y-12 lg:space-y-0">
            {targetGroups.map((group, index) => (
              <div 
                key={index} 
                className={`flex flex-col lg:flex-row items-center justify-center w-full lg:mb-24 last:mb-0 ${
                  group.side === "right" ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content Card */}
                <div className="w-full lg:w-[45%] group">
                  <div className={`p-8 bg-renalyse-light rounded-[2.5rem] border border-gray-100 hover:shadow-2xl hover:shadow-renalyse-primary/10 transition-all duration-500 relative ${
                    group.side === "left" ? "lg:text-right" : "lg:text-left"
                  }`}>
                    <h4 className="text-2xl font-black text-renalyse-dark mb-1">{group.title}</h4>
                    <p className="text-renalyse-primary font-bold text-xs uppercase tracking-widest mb-4">{group.subtitle}</p>
                    <p className="text-renalyse-text-gray leading-relaxed text-sm lg:text-base">
                      {group.description}
                    </p>

                    {/* Horizontal Connector Line (Hidden on mobile) */}
                    <div className={`absolute top-1/2 -translate-y-1/2 w-16 h-px bg-renalyse-primary/30 hidden lg:block ${
                      group.side === "left" ? "-right-16" : "-left-16"
                    }`}></div>
                  </div>
                </div>

                {/* Central Icon Node */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-white border-4 border-renalyse-light shadow-xl rounded-full my-6 lg:my-0 lg:mx-12 group-hover:scale-110 transition-transform">
                  <group.icon className="text-renalyse-primary w-8 h-8 lg:w-10 lg:h-10" />
                  
                  {/* Subtle Node Pulse */}
                  <div className="absolute inset-0 bg-renalyse-primary/20 rounded-full animate-ping opacity-20"></div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden lg:block lg:w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetUsersSection;
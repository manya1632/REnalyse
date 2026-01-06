import Image from 'next/image';
import { FlaskConical, QrCode, FileText, Activity } from 'lucide-react';

const steps = [
  { 
    id: "01", 
    title: "Obtain & Prepare", 
    icon: FlaskConical, 
    image: "/step1.png", 
    description: "The REnalyse card is unsealed from its sterile moisture-barrier foil. Each card is uniquely serialized for FHIR-compliant patient tracking." 
  },
  { 
    id: "02", 
    title: "Apply Sample", 
    icon: Activity, 
    image: "/step2.png", 
    description: "A mid-stream urine sample is applied to the Whatman Grade 1 matrix. Capillary action ensures precise reagent-to-sample contact on the uACR pads." 
  },
  { 
    id: "03", 
    title: "Azure AI Scan", 
    icon: QrCode, 
    image: "/step2.png", 
    description: "The smartphone app captures the colorimetric shift. Azure AI Foundry handles the sub-100ms inference to determine Albumin and Creatinine levels." 
  },
  { 
    id: "04", 
    title: "Clinical Insights", 
    icon: FileText, 
    image: "/step4.png", 
    description: "Immediate risk-stratification results are generated. Data is encrypted and synced with the hospital’s EMR portal for immediate doctor review." 
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-20 lg:py-32 px-6 bg-renalyse-light overflow-hidden" id='how-it-works'>
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 lg:mb-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <h3 className="text-5xl lg:text-7xl font-black text-renalyse-dark tracking-tighter">The Protocol.</h3>
          <p className="text-renalyse-primary font-bold uppercase tracking-[0.2em] text-[10px] lg:text-sm">
            Whatman Matrix Process
          </p>
        </div>

        <div className="space-y-24 lg:space-y-40">
          {steps.map((step, i) => (
            <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative flex justify-center">
                <div className="absolute -top-6 lg:-top-10 -left-2 lg:-left-10 text-6xl lg:text-[10rem] font-black text-renalyse-dark/[0.05] leading-none">
                  {step.id}
                </div>
                <div className="relative z-10 p-2 lg:p-4 bg-white shadow-xl rounded-[2rem] transform rotate-0 lg:rotate-2 group-hover:rotate-0 transition-transform duration-500">
                  <Image src={step.image} width={600} height={400} alt={step.title} className="rounded-[1.5rem] w-full h-auto" />
                </div>
              </div>
              {/* Text Side */}
              <div className="w-full lg:w-1/2 text-left space-y-4 lg:space-y-6">
                <step.icon size={32} className="text-renalyse-primary lg:w-12 lg:h-12" />
                <h4 className="text-3xl lg:text-4xl font-bold text-renalyse-dark">{step.title}</h4>
                <p className="text-lg lg:text-xl text-renalyse-text-gray leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
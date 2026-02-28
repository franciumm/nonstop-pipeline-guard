import { Cloud, Cpu, Shield } from "lucide-react";

const TechSection = () => {
  return (
    <section className="section-dark rounded-t-[18px] overflow-hidden px-6 md:px-16 lg:px-24 pb-[150px] -mt-[190px] md:-mt-[300px] pt-[340px] md:pt-[450px] relative z-10 font-['Inter']">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-[48px]">
          <p className="font-['Inter'] text-[#F0A500] text-[22px] font-medium leading-none uppercase mb-[24px]">BUILT ON PROVEN TECHNOLOGY</p>
          <h2 className="text-[36px] font-semibold text-[#F7F7F7] gap-4 flex items-center justify-center leading-none">
            Enterprise-grade infrastructure you can trust
          </h2>
        </div>

        {/* Tech logos row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-[115px] mb-[96px] text-[#BEBEBE]">
          {[
            { icon: Cloud, label: "Google Cloud" },
            { icon: Cpu, label: "Gemini AI" },
            { icon: Shield, label: "Enterprise Security" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-[8px] font-medium text-[24px] hover:text-[#F7F7F7] hover:font-bold transition-all duration-300 cursor-default">
              <Icon size={24} strokeWidth={1.5} />
              <span className="text-center">{label}</span>
            </div>
          ))}
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[18px] justify-center">
          {[
            { value: "500+", label: "Exclusive Listings" },
            { value: "98%", label: "AI Match Rate" },
            { value: "24/7", label: "VIP Concierge" },
          ].map((s) => (
            <div key={s.label} className="bg-[#F7F7F7] mx-auto rounded-[14px] w-[296px] h-[134px] flex flex-col items-center justify-center hover:-translate-y-1 hover:shadow-lg hover:border hover:border-amber-400/30 transition-all duration-300 cursor-default group">
              <div className="text-[#161616] text-[32px] font-bold group-hover:text-[#F0A500] group-hover:font-extrabold transition-all duration-300 leading-none mb-1">{s.value}</div>
              <div className="text-[#4E4E4E] text-[24px] font-medium leading-none">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;

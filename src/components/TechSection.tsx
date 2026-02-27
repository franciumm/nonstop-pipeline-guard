import { Cloud, Cpu, Shield } from "lucide-react";

const TechSection = () => {
  return (
    <section className="section-dark px-6 md:px-16 lg:px-24 py-20 -mt-[280px] pt-[360px]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-amber-500 text-lg mb-5 tracking-widest">BUILT ON PROVEN TECHNOLOGY</p>
          <h2 className="text-xl md:text-2xl font-semibold text-white gap-4 mb-2 flex items-center justify-center">
            Enterprise-grade infrastructure you can trust
          </h2>
        </div>

        {/* Tech logos row */}
        <div className="flex flex-wrap items-center justify-center gap-32 mb-14 text-stone-400">
          {[
            { icon: Cloud, label: "Google Cloud" },
            { icon: Cpu, label: "Gemini AI" },
            { icon: Shield, label: "Enterprise Security" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 font-medium text-xl">
              <Icon size={20} />
              {label}
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
            <div key={s.label} className="bg-white rounded-[14px] p-6 text-center w-full max-w-[260px] aspect-[260/116] flex flex-col items-center justify-center">
              <div className="text-neutral-900 text-3xl font-bold">{s.value}</div>
              <div className="text-zinc-500 text-base font-medium mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;

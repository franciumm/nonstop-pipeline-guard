import { Cloud, Cpu, Shield } from "lucide-react";

const TechSection = () => {
  return (
    <section className="section-dark px-6 md:px-16 lg:px-24 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="label-amber mb-3">Built on Proven Technology</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Enterprise-grade infrastructure you can trust
          </h2>
        </div>

        {/* Tech logos row */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-12 text-stone-400">
          {[
            { icon: Cloud, label: "Google Cloud" },
            { icon: Cpu, label: "Gemini AI" },
            { icon: Shield, label: "Enterprise Security" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 font-medium text-lg">
              <Icon size={20} />
              {label}
            </div>
          ))}
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { value: "500+", label: "Exclusive Listings" },
            { value: "98%", label: "AI Match Rate" },
            { value: "24/7", label: "VIP Concierge" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-6 text-center">
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

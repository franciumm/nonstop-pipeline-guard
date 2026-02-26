import { Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-start pt-24 pb-40 px-6 md:px-16 lg:px-24"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-4xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-stone-300/20 backdrop-blur-sm text-stone-200 text-base md:text-xl font-medium rounded-2xl px-4 py-2 mb-8">
          <Zap size={18} className="text-amber-400 fill-amber-400" />
          UAE agencies lose leads at 2 AM. We fix that.
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
          <span className="text-white">Your Competitors Never Sleep.</span>
          <br />
          <span className="text-amber-500">Neither Should Your Pipeline.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-stone-300 text-base md:text-xl font-medium max-w-2xl mb-10 leading-relaxed">
          24/7 AI agents that scrape every new listing, qualify every lead, and respond in seconds.
          Zero lead leakage. Higher commissions.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button
            onClick={() => scrollTo("contact")}
            className="btn-primary text-base md:text-lg px-8 py-4 w-full sm:w-auto text-center"
          >
            Claim Setup Discount
          </button>
          <button
            onClick={() => scrollTo("demo")}
            className="btn-outline text-base md:text-lg px-8 py-4 w-full sm:w-auto text-center"
          >
            Experience AI Live
          </button>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-neutral-900 rounded-tl-2xl rounded-tr-2xl px-6 md:px-16 py-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-around gap-6">
          {[
            { value: "5,000+", label: "Listings monitored daily" },
            { value: "< 3s", label: "Average response time" },
            { value: "0%", label: "Lead leakage rate" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-white text-3xl font-bold">{stat.value}</div>
              <div className="text-zinc-400 text-lg font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

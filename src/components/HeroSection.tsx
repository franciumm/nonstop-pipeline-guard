import heroBg from "@/assets/hero-bg.jpg";
import zapIcon from "@/assets/zap-icon.png";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-40 px-6 md:px-16 lg:px-24"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 w-full flex flex-col items-center text-center" style={{ maxWidth: "calc(77vw)" }}>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 backdrop-blur-sm text-white text-base md:text-xl font-medium rounded-2xl px-4 py-2 mb-8" style={{ background: "rgba(255,255,255,0.15)" }}>
          <img src={zapIcon} alt="zap" className="w-5 h-5 object-contain" />
          UAE agencies lose leads at 2 AM. We fix that.
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 w-full" style={{ width: "calc(77vw / 0.9)" }}>
          <span className="text-white">Your Competitors Never Sleep.</span>
          <br />
          <span className="text-amber-500">Neither Should Your Pipeline.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-stone-300 text-base md:text-xl font-medium mb-10 leading-relaxed">
          24/7 AI agents that scrape every new listing, qualify every lead, and respond in seconds.
          Zero lead leakage. Higher commissions.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center w-full"
          style={{
            gap: "calc(100vw / 45)",
            paddingLeft: "calc(97vw / 360)",
            paddingRight: "calc(97vw / 360)",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() => scrollTo("contact")}
            className="text-base md:text-lg font-bold rounded-2xl transition-all duration-200 cursor-pointer text-center"
          style={{
              width: "calc(79 / 360 * 100vw)",
              minWidth: "160px",
              padding: "1rem 0",
              backgroundColor: "#F59E0B",
              color: "#ffffff",
            }}
          >
            Claim Setup Discount
          </button>
          <button
            onClick={() => scrollTo("demo")}
            className="btn-outline text-base md:text-lg text-center"
            style={{
              width: "calc(79 / 360 * 100vw)",
              minWidth: "160px",
              padding: "1rem 0",
            }}
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


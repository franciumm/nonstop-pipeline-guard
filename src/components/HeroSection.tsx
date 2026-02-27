import heroBg from "@/assets/hero-bg.jpg";
import zapIcon from "@/assets/zap-icon.png";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-neutral-900 overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[104px] pt-12 sm:pt-16 md:pt-24 lg:pt-[183px] pb-32 lg:pb-0">
        <div className="max-w-[1232px] mx-auto w-full">
          {/* Content Wrapper - Items centered by default, overridden by specific children */}
          <div className="flex flex-col items-center text-center gap-6 lg:gap-[48px] w-full">
            
            {/* Badge (Glassy Component) - Left Aligned */}
            <div className="self-start text-left w-fit max-w-[583px] h-[45px] bg-[#C0BFBF26] backdrop-blur-md rounded-[14px] border border-white/10 px-[16px] py-[8px] flex items-center gap-[8px]">
              <img src={zapIcon} alt="zap" className="w-5 h-5 flex-shrink-0 object-contain" />
              <span className="text-white font-medium text-sm font-inter">UAE agencies lose leads at 2 AM. We fix that.</span>
            </div>

            {/* Headline Container - Left Aligned */}
            <div className="self-start text-left max-w-[1232px]">
              <h1 className="text-[72px] font-extrabold font-inter leading-[100%] tracking-[0] text-neutral-100 mb-0">
                Your Competitors Never Sleep.
              </h1>
              <h1 className="text-[72px] font-extrabold font-inter leading-[100%] tracking-[0]" style={{ color: "#F59E0B" }}>
                Neither Should Your Pipeline.
              </h1>
            </div>

            {/* Subheadline - Left Aligned */}
            <p className="self-start text-left max-w-[873px] text-[20px] font-medium font-inter leading-[100%] text-[#BEBEBE]">
              24/7 AI agents that scrape every new listing, qualify every lead, and respond in seconds. Zero lead leakage. Higher commissions.
            </p>

            {/* Buttons Container - Remains Centered */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center sm:justify-center gap-3 sm:gap-4 lg:gap-[24px]">
              <button
                onClick={() => scrollTo("contact")}
                className="w-full sm:w-auto lg:w-[316px] h-12 sm:h-14 lg:h-[61px] bg-amber-500 rounded-lg lg:rounded-[14px] flex items-center justify-center transition-all duration-200 hover:bg-amber-600 px-4"
              >
                <span className="text-neutral-100 text-sm sm:text-base lg:text-[20px] font-semibold font-inter">Claim Setup Discount</span>
              </button>
              <button
                onClick={() => scrollTo("demo")}
                className="w-full sm:w-auto lg:w-[316px] h-12 sm:h-14 lg:h-[66px] rounded-lg lg:rounded-[14px] border-[1px] flex items-center justify-center transition-all duration-200 hover:bg-white/10 px-4"
                style={{ borderColor: "#F7F7F7" }}
              >
                <span className="text-neutral-100 text-sm sm:text-base lg:text-[20px] font-semibold font-inter">Experience AI Live</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar - Remains Centered */}
      <div className="absolute bottom-0 left-0 right-0 w-full bg-neutral-900 rounded-tl-2xl rounded-tr-2xl">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-6 lg:px-0 py-6 sm:py-8 lg:py-8">
            {[
              { value: "5,000+", label: "Listings monitored daily" },
              { value: "< 3s", label: "Average response time" },
              { value: "0%", label: "Lead leakage rate" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center justify-center text-center">
                <div className="text-neutral-100 text-2xl sm:text-3xl font-bold font-inter mb-2">{stat.value}</div>
                <div className="text-zinc-500 text-xs sm:text-sm lg:text-[20px] font-medium font-inter">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
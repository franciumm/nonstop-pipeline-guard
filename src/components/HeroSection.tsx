import heroBg from "@/assets/hero-bg.jpeg";
import zapIcon from "@/assets/zap-icon.png";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-neutral-900 overflow-hidden rounded-t-[40px] z-10"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/5" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1296px] mx-auto px-4 sm:px-5 lg:px-[93.6px] pt-24 sm:pt-16 md:pt-24 lg:pt-[190px] pb-[340px] md:pb-32 lg:pb-[180px]">
        <div className="max-w-[1109px] mx-auto w-full">
          {/* Content Wrapper - No uniform gap; spacing handled per element */}
          <div className="flex flex-col items-center text-center w-full">

            {/* Badge (Glassy Component) - Left Aligned */}
            <div className="self-start text-left w-fit max-w-[620px] h-auto md:h-[47.9px] bg-[#C0BFBF26] backdrop-blur-md rounded-[14.9px] border border-white/10 px-[17.2px] py-[8.5px] flex items-center gap-[8.5px] hover:bg-white/10 hover:border-white/20 transition-all duration-200 cursor-default">
              <img src={zapIcon} alt="zap" className="w-[18px] md:w-[21.3px] h-[18px] md:h-[21.3px] flex-shrink-0 object-contain" />
              <span className="text-white text-[14.7px] md:text-[16.9px] font-inter">UAE agencies lose leads at 2 AM. We fix that.</span>
            </div>

            {/* Headline Container - Left Aligned */}
            <div className="self-start text-left w-full max-w-[1145px] mt-8 md:mt-[50.7px]">
              <h1 className="text-[38px] sm:text-[60px] lg:text-[76.6px] font-extrabold font-inter leading-[105%] tracking-[-0.02em] text-neutral-100 flex flex-col">
                <span className="sm:whitespace-nowrap">Your Competitors Never Sleep.</span>
                <span className="text-[#F0A500] sm:whitespace-nowrap">Neither Should Your Pipeline.</span>
              </h1>
            </div>


            {/* Subheadline - Left Aligned */}
            <p className="self-start text-left max-w-[928px] text-[18.5px] md:text-[21.3px] font-inter leading-[140%] md:leading-[100%] text-[#BEBEBE] mt-6 md:mt-[50.7px]">
              24/7 AI agents that scrape every new listing, qualify every lead, and respond in seconds. Zero lead leakage. Higher commissions.
            </p>

            {/* Buttons Container - Centered — 2× gap from subheadline */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center sm:justify-center gap-[22px] sm:gap-[18px] lg:gap-[25.5px] mt-8 md:mt-[101.5px] w-full sm:w-auto">
              <button
                onClick={() => scrollTo("contact")}
                className="w-full max-w-[384px] mx-auto sm:max-w-none sm:w-auto lg:w-[336.1px] h-[62px] sm:h-14 lg:h-[64.9px] bg-amber-500 rounded-xl lg:rounded-[14.9px] flex items-center justify-center transition-all duration-200 group px-5 cursor-pointer"
              >
                <span className="text-neutral-100 text-[19px] sm:text-base lg:text-[21.3px] font-semibold font-inter transition-all duration-200 group-hover:font-bold inline-block">Claim My Setup Discount</span>
              </button>
              <button
                onClick={() => scrollTo("demo")}
                className="w-full max-w-[384px] mx-auto sm:max-w-none sm:w-auto lg:w-[336.1px] h-[62px] sm:h-14 lg:h-[70.2px] rounded-xl lg:rounded-[14.9px] border-[1px] flex items-center justify-center transition-all duration-200 group px-5 cursor-pointer"
                style={{ borderColor: "#F7F7F7" }}
              >
                <span className="text-neutral-100 text-[19px] sm:text-base lg:text-[21.3px] font-inter font-normal transition-all duration-200 group-hover:font-semibold inline-block">Experience AI Live</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar - Remains Centered */}
      <div className="absolute bottom-0 left-0 right-0 w-full bg-neutral-900 rounded-tl-2xl rounded-tr-2xl">
        <div className="w-full max-w-[1296px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-5 lg:px-0 py-4 sm:py-5 lg:py-5">
            {[
              { value: "5,000+", label: "Listings monitored daily" },
              { value: "< 3s", label: "Average response time" },
              { value: "0%", label: "Lead leakage rate" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center justify-center text-center group cursor-default">
                <div className="text-neutral-100 text-[22px] sm:text-[28px] font-bold font-inter mb-1.5 group-hover:text-[#F0A500] group-hover:font-extrabold transition-all duration-300">{stat.value}</div>
                <div className="text-zinc-500 text-xs sm:text-sm lg:text-[18px] font-medium font-inter group-hover:text-[#F7F7F7] group-hover:font-semibold transition-all duration-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

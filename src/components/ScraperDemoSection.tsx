import logoImg from "@/assets/logo.png";
import demoVideoImg from "@/assets/Demo Video.png";

const ScraperDemoSection = () => {
  return (
    <section className="w-full bg-transparent py-24 relative z-10">
      <div className="max-w-[1232px] mx-auto rounded-[32px] overflow-hidden flex relative h-[360px] ">
          
          {/* Centered Image */}
          <img
            src={demoVideoImg}
            alt="Scraper Demo Dashboard"
            className="h-full w-full object-contain relative z-10"
          />

        {/* Play Button - Absolute Center */}
        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#F59E0B] rounded-[20px] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-xl z-20">
          <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ScraperDemoSection;

import logoImg from "@/assets/logo.png";
import demoVideoImg from "@/assets/Demo Video.png";

const ScraperDemoSection = () => {
  return (
    <section className="w-full bg-transparent py-16 md:py-24 relative z-30 px-5 md:px-0">
      <div className="max-w-[1232px] mx-auto rounded-[32px] overflow-hidden flex relative h-auto min-h-[250px] md:h-[432px] ">

        {/* Centered Image */}
        <img
          src={demoVideoImg}
          alt="Scraper Demo Dashboard"
          className="h-auto min-h-[250px] md:h-[432px] w-full max-w-[1478px] object-cover md:object-contain relative z-10 mx-auto"
        />

        {/* Play Button - Absolute Center */}
        <button aria-label="Play demo video" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[101px] h-[101px] bg-[#F0A500] rounded-[10px] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-xl z-20">
          <svg className="w-[45px] h-[45px] text-white ml-1" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <polygon points="6,4 20,12 6,20" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ScraperDemoSection;

import { Search, Bot, Clock } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "AI Market Scraper",
    bullets: [
      "Monitors 5,000+ listings daily across Dubai, Abu Dhabi, and secondary markets",
      "Detects new listings within minutes of posting",
      "Filters by price, type, location, and ROI potential",
    ],
  },
  {
    icon: Bot,
    title: "24/7 AI Lead Agent",
    bullets: [
      "Instant response to every inquiry, day or night",
      "Qualifies leads with smart questions before handoff",
      "Speaks Arabic and English natively",
    ],
  },
  {
    icon: Clock,
    title: "Automated Follow-Up",
    bullets: [
      "Nurture cold leads with timed, personalized sequences",
      "Re-engage prospects who went silent",
      "Never let a warm lead cool down again",
    ],
  },
];

const WhatWeDoSection = () => {
  return (
    <section id="what-we-do" className="bg-neutral-100 rounded-tl-2xl rounded-tr-2xl relative z-10 px-[104px] py-24 mt-0">
      <div className="max-w-[1232px] mx-auto">
        <div className="text-center mb-16 w-[813px] mx-auto">
          <p className="text-amber-500 text-xl font-medium font-inter mb-3">WHAT WE DO</p>
          <h2 className="text-4xl font-semibold text-neutral-900 mb-6 font-inter">
            Every tool your agency needs to dominate
          </h2>
          <p className="text-zinc-500 text-lg font-normal font-inter">
            Stop doing manual work. Let AI handle scraping, qualification, and follow-up while you close deals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-[1232px]">
          {features.map(({ icon: Icon, title, bullets }) => (
            <div key={title} className="bg-neutral-900 text-white rounded-[14px] p-6 w-[400px] h-[416px] flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-amber-500 rounded-[14px] p-2.5 flex-shrink-0">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold font-inter">{title}</h3>
              </div>
              <ul className="flex flex-col gap-8 flex-1">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-neutral-100 text-base font-normal font-inter leading-relaxed">
                    <span className="text-amber-500 flex-shrink-0 mt-0.5">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;

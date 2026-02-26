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
    <section id="what-we-do" className="section-light rounded-tl-2xl rounded-tr-2xl -mt-4 relative z-10 px-6 md:px-16 lg:px-24 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="label-amber mb-3">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
            Every tool your agency needs to dominate
          </h2>
          <p className="text-zinc-500 text-lg max-w-xl mx-auto">
            Stop doing manual work. Let AI handle scraping, qualification, and follow-up while you close deals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, bullets }) => (
            <div key={title} className="card-dark text-white">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-amber-500 rounded-xl p-2.5">
                  <Icon size={22} className="text-neutral-900" />
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
              </div>
              <ul className="space-y-3">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-stone-300 text-sm leading-relaxed">
                    <span className="text-amber-500 mt-0.5">•</span>
                    {b}
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

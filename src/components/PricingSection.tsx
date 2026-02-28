import { Check } from "lucide-react";

const plans = [
  {
    name: "THE HUNTER",
    price: "2,500",
    setup: null,
    cta: "START HUNTING",
    popular: false,
    features: [
      "AI Market Scraper",
      "Top real-time listings across the UAE Daily",
      "Verified Lead Lists",
      "Immediate data for aggressive outreach",
      "Self-Service Dashboard",
      "Total control over your search filters",
    ],
  },
  {
    name: "THE CLOSER",
    price: "5,000",
    setup: "+3,000 Setup",
    cta: "SCALE MY AGENCY",
    popular: true,
    features: [
      'Everything in "The Hunter"',
      "24/7 Dual-Language Agent",
      "AI qualifications in English & Arabic in <3 seconds",
      "Zero-Lead-Leakage Guarantee",
      "An agreement plan that uses loss aversion, protected pipeline",
      "Expert optimization: maximize your ROI",
    ],
  },
  {
    name: "THE EMPIRE",
    price: "10,000",
    setup: null,
    cta: "BUILD AN EMPIRE",
    popular: false,
    features: [
      'Everything in "The Closer"',
      "Automated CRM Pipelines",
      "Fix & Automate your Salesforce, Zoho, or Hubspot",
      "Custom AI Voice Agents",
      "VIP Concierge Support",
      "Priority implementation & custom ROI reporting",
    ],
  },
];

const PricingSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="section-dark rounded-t-[18px] relative z-30 px-6 md:px-16 lg:px-24 py-24 -mt-3">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="label-amber mb-3">Investment</p>
          <h2 className="text-3xl md:text-3xl font-bold text-white mb-4">
            Automate Your Revenue. Close More Deals.
          </h2>
          <p className="text-zinc-400 text-base md:text-lg max-w-3xl mx-auto">
            Stop losing warm leads to response delays. Transform your agency with a frictionless sales journey
            that qualifies every prospect in real-time—even while you sleep.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-baseline">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col border transition-all duration-300 hover:-translate-y-1 ${plan.popular
                ? "border-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.2)] hover:shadow-[0_0_40px_rgba(245,158,11,0.35)] min-h-[620px]"
                : "border-neutral-700 hover:border-amber-500/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.1)] min-h-[614px]"
                }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-[0.42rem] text-amber-500 text-[16.8px] font-semibold whitespace-nowrap z-10 flex items-center justify-center">
                  {/* Thin mask to hide the border without blocking the glow */}
                  <div className="absolute top-[calc(50%-2px)] left-0 w-full h-[4px] bg-neutral-900 -z-10" />
                  Most Popular
                </div>
              )}

              <div className="mb-0 flex flex-col items-center">
                <h3 className="text-white text-[31.5px] font-semibold tracking-wide mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1.5 mb-1 justify-center">
                  <span className="text-white text-[46.2px] font-medium tracking-tight">{plan.price}</span>
                  <span className="text-white text-[23.1px] font-medium">AED</span>
                  <span className="text-zinc-400 text-[17.85px] font-medium">/month</span>
                </div>
                {plan.setup && (
                  <p className="text-zinc-400 text-sm">{plan.setup}</p>
                )}
              </div>

              <div className="flex justify-center mt-6 mb-10 w-full">
                <button
                  onClick={() => {
                    const planMap: Record<string, string> = {
                      "THE HUNTER": "The Hunter",
                      "THE CLOSER": "The Closer",
                      "THE EMPIRE": "The Empire"
                    };
                    window.dispatchEvent(new CustomEvent("selectPlan", { detail: planMap[plan.name] }));
                    scrollTo("contact");
                  }}
                  className={`px-[29px] py-3 rounded-[12px] font-medium text-[18px] tracking-wide transition-all duration-200 group ${plan.popular
                    ? "bg-amber-500 text-neutral-900"
                    : "border-2 border-amber-500/80 text-amber-500 hover:border-amber-500"
                    }`}
                >
                  <span className="transition-all duration-200 group-hover:font-extrabold inline-block">{plan.cta}</span>
                </button>
              </div>

              <ul className="space-y-[28px] flex-1 px-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-4 text-stone-100 text-[16.5px] leading-snug">
                    <Check size={20} className="text-[#00C853] flex-shrink-0 mt-[2px] stroke-[2]" />
                    {f}
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

export default PricingSection;

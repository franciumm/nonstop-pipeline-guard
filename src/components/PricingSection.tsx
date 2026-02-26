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
    <section id="pricing" className="section-dark px-6 md:px-16 lg:px-24 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="label-amber mb-3">Investment</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Automate Your Revenue. Close More Deals.
          </h2>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto">
            Stop losing warm leads to response delays. Transform your agency with a frictionless sales journey
            that qualifies every prospect in real-time—even while you sleep.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col border ${
                plan.popular
                  ? "border-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.2)]"
                  : "border-neutral-700"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-neutral-900 px-4 text-amber-500 text-sm font-semibold whitespace-nowrap flex items-center gap-3">
                  <span className="h-px w-8 bg-amber-500/50" />
                  Most Popular
                  <span className="h-px w-8 bg-amber-500/50" />
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-white text-xl font-bold mb-4">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-white text-5xl font-bold">{plan.price}</span>
                  <span className="text-white text-xl font-semibold">AED</span>
                  <span className="text-zinc-400 text-base">/month</span>
                </div>
                {plan.setup && (
                  <p className="text-zinc-400 text-sm">{plan.setup}</p>
                )}
              </div>

              <button
                onClick={() => scrollTo("contact")}
                className={`w-full py-3 rounded-2xl font-bold text-sm tracking-wide mb-8 transition-all duration-200 ${
                  plan.popular
                    ? "bg-amber-500 hover:bg-amber-400 text-neutral-900"
                    : "border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-neutral-900"
                }`}
              >
                {plan.cta}
              </button>

              <ul className="space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-stone-300 text-sm">
                    <Check size={16} className="text-green-400 flex-shrink-0 mt-0.5" />
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

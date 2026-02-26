import { useState } from "react";
import { Check, Zap } from "lucide-react";
import logoLetterImg from "@/assets/logo-letter.png";
import logoImg from "@/assets/logo.png";

type Plan = "The Hunter" | "The Closer" | "The Empire" | null;

type AnimState = "idle" | "logo" | "done";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [plan, setPlan] = useState<Plan>(null);
  const [anim, setAnim] = useState<AnimState>("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAnim("logo");
    setTimeout(() => setAnim("done"), 2200);
  };

  return (
    <section id="contact" className="section-light rounded-tl-2xl rounded-tr-2xl -mt-4 relative z-10 px-6 md:px-16 lg:px-24 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left copy */}
        <div>
          <p className="label-amber mb-3">Get Started!</p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 leading-tight">
            Become the envy of your competitors
          </h2>
          <p className="text-zinc-500 text-base md:text-lg mb-8">
            Book a free strategy session. We will show you exactly how many leads your agency is leaving on the table and how our AI agents can capture every single one.
          </p>
          <ul className="space-y-5">
            {[
              "Free audit of your current lead pipeline",
              "Custom demo with your actual market data",
              "Limited-time setup discount for early adopters",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center">
                  <Check size={14} className="text-neutral-900 stroke-[3]" />
                </span>
                <span className="text-neutral-900 font-medium text-base md:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right form */}
        <div className="bg-neutral-900 rounded-2xl p-8 relative overflow-hidden">
          {/* Success animation overlay */}
          {anim !== "idle" && (
            <div className="absolute inset-0 bg-neutral-900 flex flex-col items-center justify-center z-20 rounded-2xl">
              {anim === "logo" && (
                <img
                  src={logoLetterImg}
                  alt="A"
                  className="w-24 h-24 object-contain animate-scale-up"
                />
              )}
              {anim === "done" && (
                <div className="flex flex-col items-center gap-6 animate-fade-in px-4 text-center">
                  <div className="flex items-center gap-2">
                    <img src={logoImg} alt="Advancify" className="h-8 object-contain" />
                  </div>
                  <h3 className="text-white text-2xl font-bold">Claiming Setup Discount <Zap className="inline text-amber-500" size={22} /></h3>
                  <div className="bg-neutral-800 rounded-xl p-5 w-full text-left space-y-2">
                    <p className="text-zinc-400 text-sm">Name</p>
                    <p className="text-white font-medium">{form.name || "Your Name"}</p>
                    <p className="text-zinc-400 text-sm mt-3">Email</p>
                    <p className="text-white font-medium">{form.email || "your@email.com"}</p>
                  </div>
                  <div className="border border-amber-500 rounded-xl px-6 py-4 w-full text-center">
                    <p className="text-amber-500 font-bold tracking-widest text-sm uppercase mb-1">CHECK YOUR INBOX</p>
                  </div>
                  <p className="text-zinc-400 text-sm">WAIT FOR OUR CALL <span className="text-amber-500">%</span></p>
                </div>
              )}
            </div>
          )}

          <h3 className="text-white text-2xl font-bold mb-1">Claim Setup Discount</h3>
          <p className="text-zinc-400 text-sm mb-6">Fill in the details below and we will contact you within the hour.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-white text-sm font-medium mb-2 block">Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border border-neutral-600 text-white rounded-2xl px-4 py-3 text-sm placeholder:text-neutral-500 focus:outline-none focus:border-amber-500 transition-colors"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-white text-sm font-medium mb-2 block">Phone Number</label>
                <div className="flex border border-neutral-600 rounded-2xl overflow-hidden focus-within:border-amber-500 transition-colors">
                  <span className="text-zinc-400 text-sm px-3 py-3 border-r border-neutral-600 bg-neutral-800">+971</span>
                  <input
                    type="tel"
                    placeholder="Enter Phone Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="flex-1 bg-transparent text-white px-3 py-3 text-sm placeholder:text-neutral-500 focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="text-white text-sm font-medium mb-2 block">Email</label>
                <input
                  type="email"
                  placeholder="ex: company@gmail.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent border border-neutral-600 text-white rounded-2xl px-4 py-3 text-sm placeholder:text-neutral-500 focus:outline-none focus:border-amber-500 transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-white text-sm font-medium mb-3 block">Investment Needed:</label>
              <div className="flex flex-wrap gap-3">
                {(["The Hunter", "The Closer", "The Empire"] as Plan[]).map((p) => (
                  <button
                    key={p!}
                    type="button"
                    onClick={() => setPlan(p)}
                    className={`border rounded-full px-4 py-2 text-sm font-medium transition-all ${
                      plan === p
                        ? "border-amber-500 bg-amber-500 text-neutral-900"
                        : "border-neutral-500 text-white hover:border-amber-500 hover:text-amber-400"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-white text-sm font-medium mb-2 block">Message</label>
              <textarea
                rows={4}
                placeholder="What's on your mind?"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent border border-neutral-600 text-white rounded-2xl px-4 py-3 text-sm placeholder:text-neutral-500 focus:outline-none focus:border-amber-500 transition-colors resize-none"
              />
            </div>

            <button type="submit" className="btn-primary w-full text-center flex items-center justify-center gap-2 text-base font-bold py-4">
              Claim Setup Discount <Zap size={18} className="fill-neutral-900" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

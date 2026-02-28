import { useState, useEffect } from "react";
import { Check, Zap, Mail, Phone, CheckCircle } from "lucide-react";
import goldLogoSvg from "@/assets/Property 1=Gold-Logo.svg";
import textLogoSvg from "@/assets/Property 1=White-Text.svg";

type Plan = "The Hunter" | "The Closer" | "The Empire" | null;

type AnimState = "idle" | "rotating-a" | "a-with-text" | "done";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [plan, setPlan] = useState<Plan>(null);
  const [anim, setAnim] = useState<AnimState>("idle");
  const [logoScale, setLogoScale] = useState("start");

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (anim === "rotating-a") {
      // If currently at 'end' (rotated), wait 400ms (transition) + 250ms (hold) = 650ms
      // If currently at 'start' (original), wait 400ms (transition) + 500ms (hold) = 900ms
      const delay = logoScale === "end" ? 650 : 900;
      timeout = setTimeout(() => {
        setLogoScale((prev) => (prev === "start" ? "end" : "start"));
      }, delay);
    }
    return () => clearTimeout(timeout);
  }, [anim, logoScale]);

  useEffect(() => {
    const handleSelectPlan = (e: any) => {
      setPlan(e.detail);
    };
    window.addEventListener("selectPlan", handleSelectPlan);
    return () => window.removeEventListener("selectPlan", handleSelectPlan);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAnim("rotating-a");
    setLogoScale("start");
    // Trigger transition slightly after mount
    setTimeout(() => setLogoScale("end"), 50);
    // Let it rotate back and forth for ~2.4 seconds
    setTimeout(() => setAnim("a-with-text"), 2400);
    // Show final success card
    setTimeout(() => setAnim("done"), 3200);
  };

  return (
    <section id="contact" className="section-light rounded-t-[16px] relative z-40 px-6 md:px-16 lg:px-24 py-24 -mt-3">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left copy */}
        <div className="font-['Inter']">
          <p className="text-[#B8860B] text-[22px] font-medium leading-none uppercase mb-[24px]">
            GET STARTED!
          </p>

          <h2 className="text-[#161616] text-[36px] font-semibold leading-none mb-[16px]">
            Become the envy of your competitors
          </h2>

          <p className="text-[#5F5F5F] text-[18px] font-normal leading-snug mb-[35px]">
            Book a free strategy session. We will show you exactly how many leads your agency is leaving on the table and how our AI agents can capture every single one.
          </p>

          <ul className="flex flex-col gap-[32px]">
            {[
              "Free audit of your current lead pipeline",
              "Custom demo with your actual market data",
              "Limited-time setup discount for early adopters",
            ].map((item) => (
              <li key={item} className="flex items-center gap-[16px]">
                <div className="w-[24px] h-[24px] rounded-full border-[1.5px] border-[#F0A500] flex items-center justify-center flex-shrink-0">
                  <Check
                    size={14}
                    className="text-[#F0A500]"
                    strokeWidth={3}
                  />
                </div>
                <span className="text-[#161616] text-[18px] font-medium leading-none">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right form */}
        <div className="bg-[#111111] border border-white/5 rounded-[24px] p-8 sm:p-10 relative overflow-hidden">
          {/* Success animation overlay */}
          {anim !== "idle" && (
            <div className={`absolute inset-0 bg-[#111111] flex flex-col items-center justify-center z-20 rounded-[24px] ${anim === "done" ? "p-8" : ""}`}>
              {anim === "rotating-a" && (
                <img
                  src={goldLogoSvg}
                  alt="A"
                  className={`object-contain transition-all duration-[400ms] ease-in-out ${logoScale === "start"
                    ? "w-[200px] h-[168px] rotate-0"
                    : "w-[276px] h-[232px] rotate-[130deg]"
                    }`}
                />
              )}
              {anim === "a-with-text" && (
                <img
                  src={textLogoSvg}
                  alt="Advancify"
                  className="h-[63px] object-contain animate-fade-in -mt-[30px]"
                />
              )}
              {anim === "done" && (
                <div className="flex flex-col items-center w-full animate-fade-in text-center mx-auto font-['Inter']">
                  {/* Top Logo */}
                  <div className="flex items-center justify-center mb-[64px] -mt-[30px]">
                    <img src={textLogoSvg} alt="Advancify" className="h-[54px] object-contain" />
                  </div>

                  {/* Main Heading */}
                  <h3 className="text-[#F7F7F7] text-[31.2px] font-normal mb-[64px] flex items-center justify-center gap-2">
                    Claiming Setup Discount <Zap className="text-[#F7F7F7] fill-transparent" size={24} strokeWidth={1.5} />
                  </h3>

                  {/* Primary Box: CHECK YOUR INBOX */}
                  <div className="w-full sm:w-[305px] h-[123px] border-[1px] border-[#F0A500] bg-transparent rounded-[14px] p-[16px] flex flex-col items-center justify-center gap-[16px]">
                    <p className="text-[#F0A500] text-[22px] font-medium leading-none tracking-normal flex items-center justify-center gap-2 uppercase">
                      CHECK YOUR INBOX <Mail size={22} strokeWidth={1.5} />
                    </p>
                    <p className="text-[#878787] text-[18px] font-normal leading-none tracking-normal px-2 text-center">
                      Get the best-suited meeting appointment with our team
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="text-[#BEBEBE] text-[18px] font-normal leading-none my-[32px]">
                    or
                  </div>

                  {/* Secondary Box: WAIT FOR OUR CALL */}
                  <div className="w-full sm:w-[305px] h-[99px] border-[1px] border-[#F7F7F7] bg-transparent rounded-[14px] p-[16px] flex flex-col items-center justify-center gap-[16px]">
                    <p className="text-[#F7F7F7] text-[22px] font-medium leading-none tracking-normal flex items-center justify-center gap-2 uppercase">
                      WAIT FOR OUR CALL <Phone size={22} strokeWidth={1.5} />
                    </p>
                    <p className="text-[#878787] text-[20px] font-normal leading-none tracking-normal">
                      within 48h
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          <h3 className="text-white text-[26px] font-bold mb-2">Claim Setup Discount</h3>
          <p className="text-zinc-400 text-[15px] mb-8">Fill in the details below and we will contact you within the hour.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-white text-[13px] font-medium mb-2 block">Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border border-[#333] text-white rounded-[12px] px-4 py-3 text-[15px] placeholder:text-neutral-500 focus:outline-none focus:border-[#F0A500] transition-colors"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-white text-[13px] font-medium mb-2 block">Phone Number</label>
                <div className="flex border border-[#333] rounded-[12px] overflow-hidden focus-within:border-[#F0A500] transition-colors">
                  <span className="text-zinc-400 text-[15px] px-3 py-3 border-r border-[#333] bg-transparent">+971</span>
                  <input
                    type="tel"
                    placeholder="Enter Phone Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="flex-1 bg-transparent text-white px-3 py-3 text-[15px] placeholder:text-neutral-500 focus:outline-none w-full"
                  />
                </div>
              </div>
              <div>
                <label className="text-white text-[13px] font-medium mb-2 block">Email</label>
                <input
                  type="email"
                  placeholder="ex: company@gmail.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent border border-[#333] text-white rounded-[12px] px-4 py-3 text-[15px] placeholder:text-neutral-500 focus:outline-none focus:border-[#F0A500] transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-white text-[13px] font-medium mb-3 block mt-2">Investment Needed:</label>
              <div className="flex flex-wrap gap-2.5">
                {(["The Hunter", "The Closer", "The Empire"] as Plan[]).map((p) => (
                  <button
                    key={p!}
                    type="button"
                    onClick={() => setPlan(p)}
                    className={`border rounded-[100px] px-5 py-2 text-[14px] font-medium transition-all ${plan === p
                      ? "border-[#F0A500] bg-[#1a1405] text-[#F0A500]"
                      : "border-[#333] text-zinc-300 hover:border-[#F0A500] hover:text-[#F0A500]"
                      }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-white text-[13px] font-medium mb-2 block mt-2">Message</label>
              <textarea
                rows={3}
                placeholder="What's on your mind?"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent border border-[#333] text-white rounded-[12px] px-4 py-3 text-[15px] placeholder:text-neutral-500 focus:outline-none focus:border-[#F0A500] transition-colors resize-none"
              />
            </div>

            <button type="submit" className="w-full bg-[#F0A500] text-neutral-900 rounded-[12px] text-center flex items-center justify-center gap-2 text-[17px] font-bold py-3.5 mt-2 hover:bg-[#F59E0B] transition-colors group">
              <span className="flex items-center gap-2">
                Claim Setup Discount <Zap size={18} className="fill-neutral-900" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

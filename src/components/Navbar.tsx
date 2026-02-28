import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/Property 1=White-Text.svg";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-900 rounded-b-2xl px-5 md:px-[calc(100vw*13/180)] py-3 md:py-4 flex items-center justify-between">
      <button onClick={() => scrollTo("hero")} className="flex items-center hover:opacity-80 transition-opacity duration-200 cursor-pointer">
        <img src={logoImg} alt="Advancify" className="h-[47px] w-auto object-contain" />
      </button>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-[calc(100vw/12)]">
        {[["What We Do", "what-we-do"], ["Demo", "demo"], ["Pricing", "pricing"]].map(([label, id]) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="text-zinc-400 hover:text-white font-semibold text-[16px] transition-colors"
          >
            {label}
          </button>
        ))}
      </div>

      {/* Desktop CTA */}
      <button onClick={() => scrollTo("contact")} className="hidden md:block btn-primary rounded-[14px] font-medium text-[16.8px] px-[28.8px] py-[12px] group">
        <span className="transition-all duration-200 group-hover:font-bold inline-block">Get Discount</span>
      </button>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-amber-500"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-neutral-900 rounded-b-2xl px-7 pb-7 pt-3 flex flex-col gap-5 md:hidden">
          {[["What We Do", "what-we-do"], ["Demo", "demo"], ["Pricing", "pricing"]].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-zinc-400 hover:text-white font-semibold text-[19.8px] text-left transition-colors"
            >
              {label}
            </button>
          ))}
          <button onClick={() => scrollTo("contact")} className="btn-primary rounded-[14px] font-medium text-base w-full text-center py-3.5 group">
            <span className="transition-all duration-200 group-hover:font-bold inline-block">Get Discount</span>
          </button>
        </div>
      )}
    </nav>

  );
};

export default Navbar;

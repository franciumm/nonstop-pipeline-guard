import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-900 rounded-b-2xl px-6 md:px-12 py-4 flex items-center justify-between">
      <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
        <img src={logoImg} alt="Advancify" className="h-8 object-contain" />
      </button>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-10">
        {[["What We Do", "what-we-do"], ["Demo", "demo"], ["Pricing", "pricing"]].map(([label, id]) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="text-zinc-400 hover:text-white font-semibold text-lg transition-colors"
          >
            {label}
          </button>
        ))}
      </div>

      {/* Desktop CTA */}
      <button onClick={() => scrollTo("contact")} className="hidden md:block btn-primary text-sm px-5 py-2.5">
        Get Discount
      </button>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-amber-500"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-neutral-900 rounded-b-2xl px-6 pb-6 pt-4 flex flex-col gap-4 md:hidden">
          {[["What We Do", "what-we-do"], ["Demo", "demo"], ["Pricing", "pricing"]].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-zinc-400 hover:text-white font-semibold text-lg text-left transition-colors"
            >
              {label}
            </button>
          ))}
          <button onClick={() => scrollTo("contact")} className="btn-primary text-sm w-full text-center">
            Get Discount
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

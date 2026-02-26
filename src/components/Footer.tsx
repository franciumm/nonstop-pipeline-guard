import logoImg from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 px-6 md:px-16 lg:px-24 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <img src={logoImg} alt="Advancify" className="h-8 object-contain" />

        {/* Copyright */}
        <p className="font-epilogue text-zinc-400 text-sm text-center">
          Copyright © 2026 Advancify. All Rights Reserved.
        </p>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {["FAQs", "Blogs", "Terms of Use", "Privacy Policy"].map((link) => (
            <a
              key={link}
              href="#"
              className="font-epilogue text-zinc-400 hover:text-amber-400 text-sm transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

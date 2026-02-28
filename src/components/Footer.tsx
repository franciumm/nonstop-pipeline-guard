import textLogoSvg from "@/assets/Property 1=White-Text.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-[#161616] rounded-t-[40px] relative z-50 px-6 lg:px-[104px] py-10 lg:py-[24px] font-['Epilogue'] flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-0 mt-auto -mt-4">

      {/* Left Side: Logo & Copyright */}
      <div className="flex flex-col gap-[24px]">
        {/* Logo */}
        <img
          src={textLogoSvg}
          alt="Advancify"
          className="h-[47px] object-contain self-start"
        />

        {/* Copyright Text */}
        <p className="text-[#878787] text-[16px] font-normal leading-[32px] m-0">
          Copyright © 2026 Advancify. All Rights Reserved.
        </p>
      </div>

      {/* Right Side: Navigation Links */}
      <ul className="flex flex-wrap md:flex-nowrap items-center gap-[24px]">
        {["FAQs", "Blogs", "Terms of Use", "Privacy Policy"].map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-[#878787] text-[16px] font-normal leading-[32px] hover:text-[#F7F7F7] transition-colors duration-200"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

    </footer>
  );
};

export default Footer;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => setIsSticky(window.scrollY > 50);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) {
      const offset = 100; // sticky navbar offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setMenuOpen(false);
    }
  };

  return (
    <section
      id="home"
      className="relative flex flex-col items-center max-md:px-2 bg-black text-white text-sm pb-28 pt-8 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/green-gradient-bg.svg')] bg-top bg-no-repeat"
    >
      {/* Navbar */}
      <nav
        className={`flex items-center justify-between px-6 py-3 rounded-full w-full max-w-5xl mx-auto transition-shadow ${
          isSticky
            ? "shadow-xl bg-black/95 fixed top-4 left-1/2 -translate-x-1/2 z-50"
            : "bg-black"
        }`}
      >
      {/* Logo */}
<div className="flex items-center">
  <div className="flex flex-col items-center leading-none">
    <img
      src="/src/assets/scalev3.svg"
      alt="Scaleform Studio"
      className="h-10 w-auto object-contain"
    />
    <span className="text-white text-[10px] tracking-widest mt-1">
      SCALEFORM
    </span>
    <span className="text-gray-400 text-[8px] tracking-[0.3em]">
      STUDIO
    </span>
  </div>
</div>




        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-white hover:text-green-600 transition-colors font-medium"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Desktop CTA - scroll to Contact page */}
        <button
          className="hidden md:block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition transform hover:scale-105"
          onClick={() => scrollToSection("#contact")} // <-- changed
        >
          Message Us
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden ml-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d={
                menuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-black/95 flex flex-col items-center justify-center gap-6 md:hidden z-50">
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 p-2 bg-gray-800 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>

            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-white hover:text-green-600 font-medium text-lg"
              >
                {link.name}
              </button>
            ))}

            {/* Mobile CTA - scroll to Contact page */}
            <button
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition"
              onClick={() => scrollToSection("#contact")} // <-- changed
            >
              Message Us
            </button>
          </div>
        )}
      </nav>

      {/* Hero Content with extra top padding */}
      <div className="pt-40 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl text-center font-bold max-w-4xl mt-5 bg-gradient-to-r from-white to-[#748298] text-transparent bg-clip-text">
We Build Websites That Grow Your Business        </h1>

        <p className="text-slate-300 md:text-base max-md:px-2 text-center max-w-2xl mt-3">
We help founders, starters, and B2B companies turn unclear ideas into high-converting websites & digital products. Using user-first design and psychology-backed UX.        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 text-sm">
          {/* Replace this button */}
<Link
  to="/book"
  className="px-6 py-2.5 bg-green-600 hover:bg-green-700 transition rounded-full text-center"
>
 Book a Free Strategy Call →

</Link>


          <button
            onClick={() => scrollToSection("#projects")}
            className="px-6 py-2.5 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition rounded-full text-center"
          >
            View Our Work
          </button>
        </div>

        <p className="text-xs text-slate-400 mt-3 text-center">Not just pretty screens. Real business growth.</p>
      </div>
    </section>
  );
}

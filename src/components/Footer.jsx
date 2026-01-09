export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Pricing", href: "#pricing" },
  ];

  const services = [
    { name: "Web Development", href: "#services" },
    { name: "UI/UX Design", href: "#services" },
    { name: "Performance Optimization", href: "#services" },
    { name: "SEO & Growth", href: "#services" },
  ];

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-600/5 rounded-full blur-3xl" />

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-2">
             {/* Logo */}
<div className="flex items-center">
  <div className="bg-black px-3 py-2 rounded-xl flex flex-col items-center leading-none">
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
<br />
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
                We build conversion-focused websites that help businesses grow. From startups to established brands, we combine design, development, and strategy to deliver real results.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a
                  href="https://x.com/PratikCDev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-900 hover:bg-green-600 border border-gray-800 hover:border-green-600 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label="X / Twitter"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-gray-400 group-hover:text-white transition-colors">
                    <path
                      d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/pratik-chaudhari-886b71237/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-900 hover:bg-green-600 border border-gray-800 hover:border-green-600 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label="LinkedIn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-gray-400 group-hover:text-white transition-colors">
                    <path
                      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6M6 9H2v12h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    />
                  </svg>
                </a>

                <a
                  href="mailto:scaleformstudio@gmail.com"
                  className="w-10 h-10 rounded-full bg-gray-900 hover:bg-green-600 border border-gray-800 hover:border-green-600 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label="Email"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-gray-400 group-hover:text-white transition-colors">
                    <path
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-green-500 transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-green-500 group-hover:w-4 transition-all duration-300" />
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Services
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <button
                      onClick={() => scrollToSection(service.href)}
                      className="text-gray-400 hover:text-green-500 transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-green-500 group-hover:w-4 transition-all duration-300" />
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Section */}
         

          {/* Divider */}
          {/* <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-8" /> */}

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>© 2025 Scaleform Studio. All rights reserved.</p>
            
            <div className="flex items-center gap-6">
              <button
                onClick={() => scrollToSection("#home")}
                className="hover:text-green-500 transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => scrollToSection("#home")}
                className="hover:text-green-500 transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-green-600 hover:bg-green-500 text-white shadow-lg hover:shadow-green-600/50 flex items-center justify-center transition-all hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
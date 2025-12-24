export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>

      <footer className="w-full bg-black text-white pt-10 pb-6">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          
          {/* Left: Brand + description */}
          <div className="flex flex-col gap-4 md:gap-2">
            <span className="text-white text-lg font-bold">Scaleform Studio</span>
            <p className="text-white/70 text-sm max-w-md">
              One flexible agency for your entire company to share knowledge, ship projects, and collaborate. Dedicated support and enterprise features to manage user access and build the best plan for your company.
            </p>
          </div>

          {/* Right: Social Media + Contact */}
          <div className="flex flex-col items-start md:items-end gap-4">
            {/* Social Media */}
            <div className="flex gap-4">
              <a
                href="https://x.com/PratikCDev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6M6 9H2v12h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
                    stroke="url(#linkedinGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient id="linkedinGradient" x1="0" y1="0" x2="24" y2="0">
                      <stop stopColor="#0077B5"/>
                      <stop offset="1" stopColor="#00FF9C"/>
                    </linearGradient>
                  </defs>
                </svg>
              </a>

              <a
                href="https://x.com/PratikCDev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2"
                    stroke="url(#xGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient id="xGradient" x1="0" y1="0" x2="24" y2="0">
                      <stop stopColor="#1DA1F2"/>
                      <stop offset="1" stopColor="#00FF9C"/>
                    </linearGradient>
                  </defs>
                </svg>
              </a>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-start md:items-end">
              <h2 className="font-semibold text-white mb-1">Contact</h2>
              <a href="mailto:pratikchaudhari5321@gmail.com" className="hover:text-green-400 transition">
                pratikchaudhari5321@gmail.com
              </a>
            </div>
          </div>

        </div>

        {/* Bottom: Copyright */}
        <p className="mt-8 text-center text-white/70 text-sm">
          © ScaleForm Studio 2025. All rights reserved.
        </p>
      </footer>
    </>
  );
}

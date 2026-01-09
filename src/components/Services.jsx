import { useState } from "react";
import { Link } from "react-router-dom";
export default function Services() {
  const [stopScroll, setStopScroll] = useState(false);

  const services = [
    {
      title: "Web Development",
      subtitle: "From Concept to Conversion",
      desc: "Custom websites and web apps engineered to turn traffic into revenue. Built with performance, scalability, and your bottom line in mind.",
      icon: (
        <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      gradient: "from-green-500 to-emerald-600",
      stats: "10+ Projects",
    },
    {
      title: "UI/UX Design",
      subtitle: "Beautiful Meets Functional",
      desc: "Interfaces designed with psychology-backed principles. Every pixel serves a purpose—to guide users toward action and keep them engaged.",
      icon: (
        <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      gradient: "from-green-400 to-teal-500",
      stats: "98% Satisfaction",
    },
    {
      title: "Performance & Speed",
      subtitle: "Fast Loads, More Conversions",
      desc: "Optimized for lightning-fast load times. Every millisecond counts when 40% of users abandon slow sites. We make sure yours isn't one of them.",
      icon: (
        <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: "from-emerald-500 to-green-600",
      stats: "<2s Load Time",
    },
    {
      title: "SEO & Growth",
      subtitle: "Built to Be Found",
      desc: "Technical SEO built into every page. Get found on Google, rank higher, and turn organic traffic into paying customers from day one.",
      icon: (
        <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      gradient: "from-green-600 to-emerald-700",
      stats: "150% Traffic Boost",
    },
    {
      title: "Brand Identity",
      subtitle: "Stand Out, Be Remembered",
      desc: "Cohesive branding that tells your story and builds trust. From logos to color systems—every element works together to make an impact.",
      icon: (
        <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      ),
      gradient: "from-green-500 to-emerald-600",
      stats: "Unique Identity",
    },
    {
      title: "E-Commerce",
      subtitle: "Sell More, Stress Less",
      desc: "Online stores that convert browsers into buyers. Seamless checkout, mobile-optimized, and integrated with the tools you need to scale.",
      icon: (
        <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      gradient: "from-green-400 to-teal-500",
      stats: "High Conversions",
    },
  ];

  return (
    <>
      <style>{`
        .marquee-inner {
          animation: marqueeScroll linear infinite;
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .service-card {
          position: relative;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          padding: 2px;
          background: linear-gradient(135deg, transparent 0%, rgba(16, 185, 129, 0.3) 50%, transparent 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .service-card:hover::before {
          opacity: 1;
        }
        @media (max-width: 768px) {
  /* Remove side fade shadows on mobile */
  #services > div > div > div > .absolute.left-0,
  #services > div > div > div > .absolute.right-0 {
    display: none !important;
  }
}
      `}</style>

      <section id="services" className="relative py-24 bg-black text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-600/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600/10 border border-green-600/30 backdrop-blur-sm mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 text-sm font-medium">What We Do</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
                Everything You Need to
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">
                Win Online
              </span>
            </h2>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              We don't just "make websites." We solve business problems through design, code, and strategy. Every project is custom-built to match your <span className="text-green-500 font-semibold">goals, audience, and growth stage</span>.
            </p>
          </div>

          {/* Marquee Container */}
          <div
            className="overflow-hidden w-full relative"
            onMouseEnter={() => setStopScroll(true)}
            onMouseLeave={() => setStopScroll(false)}
          >
            {/* Left Gradient Fade */}
            <div className="absolute left-0 top-0 h-full w-32 z-10 pointer-events-none bg-gradient-to-r from-black via-black/80 to-transparent" />

            {/* Scrolling Cards */}
            <div
              className="marquee-inner flex w-fit"
              style={{
                animationPlayState: stopScroll ? "paused" : "running",
                animationDuration: services.length * 3000 + "ms",
              }}
            >
              <div className="flex gap-6">
                {[...services, ...services].map((service, index) => (
                  <div
                    key={index}
                    className="service-card w-80 h-[26rem] flex flex-col items-start justify-between
                               bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800
                               p-8 transition-all duration-500 hover:border-green-600/50 hover:shadow-2xl 
                               hover:shadow-green-600/20 hover:scale-105 hover:-translate-y-2 group"
                  >
                    {/* Glow Effect on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500 pointer-events-none`} />
                    
                    {/* Content */}
                    <div className="relative z-10 flex-1 flex flex-col">
                      {/* Icon & Stats */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="text-gray-400 group-hover:text-green-500 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                          {service.icon}
                        </div>
                        <div className="px-3 py-1 rounded-full bg-green-600/10 border border-green-600/30 backdrop-blur-sm">
                          <span className="text-green-400 text-xs font-medium">{service.stats}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                        {service.title}
                      </h3>

                      {/* Subtitle */}
                      <p className="text-green-500 text-sm font-medium mb-4">
                        {service.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                        {service.desc}
                      </p>

                      {/* Learn More Link */}
                      {/* <button className="inline-flex items-center gap-2 text-green-500 font-medium group-hover:gap-3 transition-all self-start">
                        <span className="text-sm">Learn more</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button> */}
                    </div>

                    {/* Animated Corner Accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl ${service.gradient} opacity-20 blur-2xl rounded-full`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Gradient Fade */}
            <div className="absolute right-0 top-0 h-full w-32 md:w-48 z-10 pointer-events-none bg-gradient-to-l from-black via-black/80 to-transparent" />
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 text-lg mb-6">
              Need something custom? We build solutions tailored to your exact needs.
            </p>
           <Link to="/book">
  <button className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-500 text-white rounded-full font-semibold text-lg transition-all hover:shadow-2xl hover:shadow-green-600/50 transform hover:scale-105 group">
    <span>Discuss Your Project</span>
    <svg
      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </button>
</Link>

          </div>
        </div>
      </section>
    </>
  );
}

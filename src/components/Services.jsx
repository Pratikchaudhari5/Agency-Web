import React from "react";
import { FaLaptopCode, FaMobileAlt, FaRocket, FaSearch } from "react-icons/fa";

const Services = () => {
  const [stopScroll, setStopScroll] = React.useState(false);

  const cardData = [
    {
      title: "Custom Web Development",
      desc: "Websites and web apps built to convert visitors into leads, users, and customers.",
      icon: <FaLaptopCode />,
      color: "#10B981", // green
    },
    {
      title: "Responsive Design",
      desc: "Your product looks and works perfectly on desktop, tablet, and mobile — without compromise.",
      icon: <FaMobileAlt />,
      color: "#F59E0B", // orange
    },
    {
      title: "Performance Optimization",
      desc: "Fast load times, smooth interactions, and clean code that users love.",
      icon: <FaRocket />,
      color: "#3B82F6", // blue
    },
    {
      title: "SEO & Analytics",
      desc: "Improve online visibility and track your success with insights.",
      icon: <FaSearch />,
      color: "#EF4444", // red
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
      `}</style>

      <section id ="services" className="w-full py-16 bg-black text-white font-body">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          What we do
        </h2>
        <h2 className="text-3xl md:text-4xl font-heading text-center mb-4">
An All-in-One Web Partner for Growing Businesses        </h2>
        <p className="text-slate-300 text-center max-w-3xl mx-auto mb-12 px-2">
We don’t just “make websites.”
We solve business problems through design, code, and clarity.

Every project is custom-built to match your goals, audience, and growth stage.        </p>

        {/* Marquee Container */}
        <div
          className="overflow-hidden w-full relative max-w-6xl mx-auto"
          onMouseEnter={() => setStopScroll(true)}
          onMouseLeave={() => setStopScroll(false)}
        >
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-black to-transparent" />

          <div
            className="marquee-inner flex w-fit"
            style={{
              animationPlayState: stopScroll ? "paused" : "running",
              animationDuration: cardData.length * 2500 + "ms",
            }}
          >
            <div className="flex">
              {[...cardData, ...cardData].map((card, index) => (
                <div
                  key={index}
                  className="w-56 mx-4 h-[20rem] relative group flex flex-col items-center justify-center
                             bg-black/70 rounded-lg border border-green-600 shadow-2xl shadow-black/50
                             overflow-hidden transition-all duration-300 hover:scale-105 hover:border-green-400 hover:bg-green-900/40 hover:shadow-2xl hover:shadow-green-600/50"
                >
                  {/* Icon */}
                  <div
                    className="text-5xl mb-4 flex justify-center items-center transition-colors duration-300"
                    style={{ color: card.color }}
                  >
                    <span className="group-hover:text-white">{card.icon}</span>
                  </div>

                  {/* Title */}
                  <p className="text-white font-heading text-center text-lg px-2 group-hover:text-green-400 transition-colors duration-300 transform group-hover:-translate-y-1">
                    {card.title}
                  </p>

                  {/* Description */}
                  <p className="text-slate-300 text-xs text-center mt-2 px-3 font-body group-hover:text-green-300 transition-colors duration-300 transform group-hover:-translate-y-1">
                    {card.desc}
                  </p>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-30 transition-all duration-300 rounded-lg" />
                </div>
              ))}
            </div>
          </div>

          <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-black to-transparent" />
        </div>
      </section>
    </>
  );
};

export default Services;

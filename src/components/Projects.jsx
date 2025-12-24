import React, { useState } from "react";
import UihackathonImg from "../assets/Uihackathon.png";
import BannerOmegaImg from "../assets/banneromega.png";
import BeyondDreamImg from "../assets/BeyondDream.png";
import ELegalifyImg from "../assets/elegalify.png";
import EleganceImg from "../assets/Elegance.png";
import FastAndFabImg from "../assets/fast&fab.png";
import FocusfeedImg from "../assets/focusfeed.png";
import FunkyTweetImg from "../assets/FunkyTweet.png";
import GenerateMemeImg from "../assets/Generatememe.png";
import HarishImg from "../assets/harish.png";
import ImageProcessorImg from "../assets/imageprocessor.png";
import InstaChipImg from "../assets/instachip.png";
import IPhoneImg from "../assets/iphone.png";
import LetsGrowSportsImg from "../assets/letsgrowsports.png";
import PanekkaImg from "../assets/pankekka.png";
import PerfectScaledImg from "../assets/perfectscaled.png";
import PixelBrainImg from "../assets/pixelbrain.png";
import RedditFlowImg from "../assets/redditflow.png";
import SpeakClearlyImg from "../assets/speakclearly.png";
import TaskFlowImg from "../assets/taskflow.png";
import TimelyChajaImg from "../assets/TimelyChaja.png";
import VoiceFilterImg from "../assets/voicefilter.png";

export default function Projects() {
  const categories = [
    "UI/UX Design for Businesses",
    "B2B SaaS & Digital Solutions",
    "Freelance & Client Partnerships",
    "AI, Automation & Smart Tools",
  ];

  const allProjects = [
    {
      category: "B2B SaaS & Digital Solutions",
      projects: [
        { title: "Reddit Flow", url: "https://redditflow.vercel.app/", img: RedditFlowImg },
        { title: "Pixel Brain IQ", url: "https://iq-quiz-kappa.vercel.app/", img: PixelBrainImg },
        { title: "Voice Filter App", url: "https://www.speakclearly.xyz/", img: VoiceFilterImg },
        { title: "TaskFlow", url: "https://task-flow-x-seven.vercel.app/", img: TaskFlowImg },
      ],
    },
    {
      category: "UI/UX Design for Businesses",
      projects: [
        { title: "UI-Hackathon", url: "https://ui-hackathon-jam.vercel.app/", img: UihackathonImg },
        { title: "InstaChip ", url: "https://residency-client.vercel.app/", img: InstaChipImg },
        { title: "Perfect Scaled", url: "https://perfect-scaled.vercel.app/", img: PerfectScaledImg },
        { title: "Focusfeed News Blog", url: "https://focusfeed-daily-glance.vercel.app/", img: FocusfeedImg },
        { title: "Elegance", url: "https://elegance-orpin.vercel.app/", desc: "Cosmetic showcase", img: EleganceImg },
        { title: "Panekka", url: "https://pankekka-website.vercel.app/", desc: "Cool Recipe website design", img: PanekkaImg },
        { title: "FunkyTweets", url: "https://funky-tweet-vibes.vercel.app/", desc: "Gen Z tweets", img: FunkyTweetImg },
        { title: "Portfolio", url: "https://harish-ten.vercel.app/", desc: "Founder's portfolio", img: HarishImg },
        { title: "Timely", url: "https://timely-chaja-21ff77.netlify.app/", desc: "Aesop app UI", img: TimelyChajaImg },
        { title: "Banner Omega", url: "https://banner-omega.vercel.app/", desc: "Marketing banners showcase", img: BannerOmegaImg },
      ],
    },
    {
      category: "Freelance & Client Partnerships",
      projects: [
        { title: "Fast & Fab", url: "https://fastandfab.in/", img: FastAndFabImg },
        { title: "Beyond Dream", url: "https://www.beyonddream.in/", img: BeyondDreamImg },
        { title: "Sibling Space", url: "https://sibling.space/" },
        { title: "Let’s Grow Esports", url: "http://letsgrowesports.com/", img: LetsGrowSportsImg },
        { title: "E-Legalify", url: "https://elegalify.com/", img: ELegalifyImg },
      ],
    },
    {
      category: "AI, Automation & Smart Tools",
      projects: [
        { title: "Random Meme Generator", url: "https://mohammadharish52.github.io/randommemegenrator/", img: GenerateMemeImg },
        { title: "Image Processor", url: "https://imageprocessor-psi.vercel.app/", img: ImageProcessorImg },
        { title: "Speak Clearly", url: "https://www.speakclearly.xyz/", img: SpeakClearlyImg },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState("UI/UX Design for Businesses");

  const displayedProjects = allProjects.find(p => p.category === activeCategory)?.projects || [];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>

      <section id="projects" className="py-16 bg-black text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Selected Work <br />
        </h2>
        <p className="text-slate-400 text-center max-w-3xl mx-auto mb-8 px-2">
          Explore projects by category — each crafted with care, style, and intention.
          <br />
          Every project starts with why — not just what.
        </p>

        {/* Category Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full font-semibold transition-colors duration-300 ${
                activeCategory === cat
                  ? "bg-green-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {displayedProjects.map((project, idx) => (
            <a
              key={idx}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group w-64 h-40 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              {/* Project Image */}
              {project.img && (
                <img
                  src={project.img}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}

              {/* Bottom gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-all duration-300"></div>

              {/* Content */}
              <div className="absolute bottom-0 w-full p-3 text-center">
                <h3 className="font-bold text-white text-sm md:text-base line-clamp-2">
                  {project.title}
                </h3>
                {project.desc && <p className="text-xs text-white/70 mt-1 line-clamp-2">{project.desc}</p>}
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

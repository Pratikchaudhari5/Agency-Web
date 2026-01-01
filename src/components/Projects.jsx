import { useState } from "react";

export default function Projects() {
  const categories = [
    "All Projects",
    "UI/UX Design",
    "B2B SaaS",
    "Client Work",
    "AI & Automation",
  ];

  const allProjects = [
    // B2B SaaS & Digital Solutions
    { 
      category: "B2B SaaS",
      title: "Reddit Flow", 
      url: "https://redditflow.vercel.app/",
      desc: "Social media management platform with AI-powered insights",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      tag: "Web App"
    },
    { 
      category: "B2B SaaS",
      title: "Pixel Brain IQ", 
      url: "https://iq-quiz-kappa.vercel.app/",
      desc: "Interactive quiz platform with gamification",
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
      tag: "SaaS"
    },
    { 
      category: "B2B SaaS",
      title: "Voice Filter App", 
      url: "https://www.speakclearly.xyz/",
      desc: "Real-time voice enhancement technology",
      img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80",
      tag: "AI Tool"
    },
    { 
      category: "B2B SaaS",
      title: "TaskFlow", 
      url: "https://task-flow-x-seven.vercel.app/",
      desc: "Project management with smart automation",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      tag: "Productivity"
    },
    
    // UI/UX Design for Businesses
    { 
      category: "UI/UX Design",
      title: "UI-Hackathon", 
      url: "https://ui-hackathon-jam.vercel.app/",
      desc: "Modern event platform with immersive design",
      img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      tag: "Landing Page"
    },
    { 
      category: "UI/UX Design",
      title: "InstaChip", 
      url: "https://residency-client.vercel.app/",
      desc: "Food delivery app with seamless UX",
      img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80",
      tag: "Mobile First"
    },
    { 
      category: "UI/UX Design",
      title: "Perfect Scaled", 
      url: "https://perfect-scaled.vercel.app/",
      desc: "Agency website with bold typography",
      img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
      tag: "Agency"
    },
    { 
      category: "UI/UX Design",
      title: "Focusfeed", 
      url: "https://focusfeed-daily-glance.vercel.app/",
      desc: "News aggregator with clean interface",
      img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
      tag: "Blog"
    },
    { 
      category: "UI/UX Design",
      title: "Elegance", 
      url: "https://elegance-orpin.vercel.app/",
      desc: "Luxury cosmetics e-commerce showcase",
      img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
      tag: "E-commerce"
    },
    { 
      category: "UI/UX Design",
      title: "Panekka", 
      url: "https://pankekka-website.vercel.app/",
      desc: "Recipe platform with beautiful food photography",
      img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      tag: "Food & Recipe"
    },
    { 
      category: "UI/UX Design",
      title: "FunkyTweets", 
      url: "https://funky-tweet-vibes.vercel.app/",
      desc: "Gen Z social platform with vibrant design",
      img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
      tag: "Social"
    },
    { 
      category: "UI/UX Design",
      title: "Portfolio", 
      url: "https://harish-ten.vercel.app/",
      desc: "Founder's personal brand showcase",
      img: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=800&q=80",
      tag: "Portfolio"
    },
    
    // Freelance & Client Partnerships
    { 
      category: "Client Work",
      title: "Fast & Fab", 
      url: "https://fastandfab.in/",
      desc: "Fashion e-commerce with trendy aesthetics",
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      tag: "E-commerce"
    },
    { 
      category: "Client Work",
      title: "Beyond Dream", 
      url: "https://www.beyonddream.in/",
      desc: "Real estate platform with virtual tours",
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      tag: "Real Estate"
    },
    { 
      category: "Client Work",
      title: "Let's Grow Esports", 
      url: "http://letsgrowesports.com/",
      desc: "Gaming community platform with live stats",
      img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
      tag: "Gaming"
    },
    { 
      category: "Client Work",
      title: "E-Legalify", 
      url: "https://elegalify.com/",
      desc: "Legal services marketplace with AI matching",
      img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
      tag: "LegalTech"
    },
    
    // AI, Automation & Smart Tools
    { 
      category: "AI & Automation",
      title: "Random Meme Generator", 
      url: "https://mohammadharish52.github.io/randommemegenrator/",
      desc: "AI-powered meme creation tool",
      img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
      tag: "Fun Tool"
    },
    { 
      category: "AI & Automation",
      title: "Image Processor", 
      url: "https://imageprocessor-psi.vercel.app/",
      desc: "Batch image optimization and editing",
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
      tag: "Automation"
    },
    { 
      category: "AI & Automation",
      title: "Speak Clearly", 
      url: "https://www.speakclearly.xyz/",
      desc: "Speech enhancement with AI filtering",
      img: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=800&q=80",
      tag: "Voice AI"
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All Projects");

  const displayedProjects = activeCategory === "All Projects" 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 bg-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600/10 border border-green-600/30 backdrop-blur-sm mb-6">
            <span className="text-green-400 text-sm font-medium">Our Portfolio</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
              Real Projects.
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">
              Real Results.
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            From startups to established brands—we've helped businesses <span className="text-green-500 font-semibold">grow, convert, and stand out</span>. Every project starts with strategy, not just aesthetics.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center flex-wrap gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-green-600 text-white shadow-lg shadow-green-600/30 scale-105"
                  : "bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white border border-gray-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, idx) => (
            <a
              key={idx}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 hover:border-green-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-600/20 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-gray-900">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Tag */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-green-600/20 backdrop-blur-md border border-green-600/30">
                  <span className="text-green-400 text-xs font-medium">{project.tag}</span>
                </div>

                {/* View Project Button - Appears on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-center gap-2 px-6 py-3 bg-green-600 rounded-full text-white font-semibold shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <span>View Project</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.desc}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-green-500 to-green-600 group-hover:w-full transition-all duration-500" />
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 text-lg mb-6">
            Want to see your project here? Let's make it happen.
          </p>
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-500 text-white rounded-full font-semibold text-lg transition-all hover:shadow-2xl hover:shadow-green-600/50 transform hover:scale-105 group">
            <span>Start Your Project</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
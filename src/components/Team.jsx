import React from "react";

const teamMembers = [
  {
    name: "Pratik Chaudhari",
    role: "Founder & CEO",
    location: "Based in India",
    twitter: "https://x.com/PratikCDev",
    description: "Bridging design, development, and business goals",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200",
  },
  
  {
    name: "Shruti Dakhore",
    role: "Lead Designer",
    location: "Based in India",
    twitter: "https://x.com/Shraaa03",
    description: "Designing user-first experiences",
    img: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=200",
  },

];

export default function Team() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          OUR TEAM
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="relative group rounded-xl p-1 bg-gradient-to-r from-green-400 via-black to-green-400 hover:via-green-400 transition-all duration-500 shadow-lg overflow-hidden"
            >
              <div className="bg-black rounded-lg p-6 flex flex-col items-center text-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 rounded-full shadow-md mb-4"
                />
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-green-400 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-400 mb-2">{member.description}</p>
                <p className="text-sm text-gray-500 mb-4">{member.location}</p>
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-green-400 transition-colors text-xl"
                  aria-label={`${member.name} Twitter`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 4.01c-.77.34-1.59.57-2.46.67a4.3 4.3 0 0 0 1.88-2.38 8.59 8.59 0 0 1-2.71 1.04 4.27 4.27 0 0 0-7.29 3.9A12.14 12.14 0 0 1 3.1 3.7a4.27 4.27 0 0 0 1.32 5.7 4.2 4.2 0 0 1-1.93-.53v.05a4.27 4.27 0 0 0 3.42 4.18 4.3 4.3 0 0 1-1.92.07 4.27 4.27 0 0 0 3.99 2.97A8.58 8.58 0 0 1 2 19.54a12.1 12.1 0 0 0 6.56 1.92c7.88 0 12.2-6.54 12.2-12.2 0-.19-.01-.38-.02-.57a8.7 8.7 0 0 0 2.14-2.22z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

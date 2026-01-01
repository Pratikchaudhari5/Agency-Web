import React from "react";
import pratikImg from "../assets/pratik.png";
import shrutiImg from "../assets/shruti.png";

export default function Team() {
  const teamMembers = [
    {
      name: "Pratik Chaudhari",
      role: "Founder & CEO",
      location: "Based in India",
      twitter: "https://x.com/PratikCDev",
      description: "Bridging design, development, and business goals",
      expertise: ["Strategy", "Development", "Product"],
    img: pratikImg,
    },
    {
      name: "Shruti Dakhore",
      role: "Lead Designer",
      location: "Based in India",
      twitter: "https://x.com/Shraaa03",
      description: "Designing user-first experiences",
      expertise: ["UI/UX", "Branding", "Research"],
    img: shrutiImg,
    },
  ];

  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-green-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600/10 border border-green-600/30 mb-6">
            <span className="text-green-400 text-sm font-medium">
              Meet the Team
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
              The Minds Behind
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">
              Your Success
            </span>
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            A small but mighty team obsessed with{" "}
            <span className="text-green-500 font-semibold">
              quality over quantity
            </span>
            .
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="group relative">
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 p-8 transition-all duration-500 hover:border-green-600/50 hover:shadow-2xl hover:shadow-green-600/20 hover:-translate-y-2 overflow-hidden">
                
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Image */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 rounded-full bg-green-500 blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                    <div className="relative w-32 h-32 rounded-full border-4 border-gray-800 group-hover:border-green-600 transition-all overflow-hidden">
                      <img
                        src={member.img}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900 animate-pulse" />
                  </div>

                  {/* Info */}
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-green-400 transition-colors">
                    {member.name}
                  </h3>

                  <p className="text-green-500 font-semibold mb-3">
                    {member.role}
                  </p>

                  <p className="text-gray-400 text-sm mb-4">
                    {member.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {member.expertise.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-green-600/10 border border-green-600/30 text-green-400 text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                    <span>{member.location}</span>
                  </div>

                  {/* Social */}
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-800 hover:bg-green-600 transition-all hover:scale-105"
                  >
                    <span className="text-sm font-medium">Connect on X</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 flex justify-center px-4">
          <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-gradient-to-r from-gray-900 to-black border border-green-600/30">
            <div>
              <h3 className="text-2xl font-bold mb-1">
                Want to work with us?
              </h3>
              <p className="text-gray-400">
                We’re always excited to collaborate with passionate people.
              </p>
            </div>

            <button className="px-8 py-4 bg-green-600 hover:bg-green-500 rounded-full font-semibold transition-all hover:scale-105">
              Let’s Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

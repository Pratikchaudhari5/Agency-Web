import React, { useState } from "react";

export default function Pricing() {
  const [activeCategory, setActiveCategory] = useState("Development Only");

  const categories = ["Development Only", "Design + Development"];

  const pricingData = {
    "Development Only": [
      {
        label: "Basic Package",
        title: "Starter",
        price: "$500",
        subPrice: "/one-time",
        description:
          "Perfect for small businesses looking to establish their digital presence",
        features: [
          "Frontend Development",
          "Mobile Responsive",
          "Basic SEO Setup",
          "Contact Forms",
          "3 Revisions",
          "30 Days Support",
        ],
      },
      {
        label: "Most Popular",
        title: "Professional",
        price: "$1,000",
        subPrice: "/one-time",
        description:
          "Ideal for growing businesses that need advanced functionality",
        popular: true,
        features: [
          "Everything in Starter",
          "Advanced Animations",
          "Unlimited Revisions",
          "90 Days Support",
          "Performance Optimization",
        ],
      },
      {
        label: "Enterprise",
        title: "Enterprise",
        price: "Custom",
        subPrice: "",
        description:
          "For large-scale projects requiring custom solutions and ongoing support",
        features: [
          "Everything in Professional",
          "Custom Backend Development",
          "Third-party Integrations",
          "Advanced Security",
          "Multi-language Support",
          "Dedicated Project Manager",
          "Priority Support",
          "6 Months Maintenance",
        ],
      },
    ],
    "Design + Development": [
      {
        label: "Basic Package",
        title: "Starter",
        price: "$700",
        subPrice: "/one-time",
        description:
          "Perfect for small businesses looking to establish their digital presence",
        features: [
          "Custom Website Design",
          "Frontend Development",
          "Mobile Responsive",
          "Basic SEO Setup",
          "Contact Forms",
          "3 Revisions",
          "30 Days Support",
        ],
      },
      {
        label: "Most Popular",
        title: "Professional",
        price: "$1,200",
        subPrice: "/one-time",
        description:
          "Ideal for growing businesses that need advanced functionality",
        popular: true,
        features: [
          "Everything in Starter",
          "Advanced Animations",
          "Custom UI/UX Design",
          "Unlimited Revisions",
          "90 Days Support",
          "Performance Optimization",
        ],
      },
      {
        label: "Enterprise",
        title: "Enterprise",
        price: "Custom",
        subPrice: "",
        description:
          "For large-scale projects requiring custom solutions and ongoing support",
        features: [
          "Everything in Professional",
          "Custom Backend Development",
          "Advanced Design System",
          "Third-party Integrations",
          "Advanced Security",
          "Multi-language Support",
          "Dedicated Project Manager",
          "Priority Support",
          "6 Months Maintenance",
        ],
      },
    ],
  };

  return (
    <section id="pricing" className="py-25
     px-4" style={{ backgroundColor: "#000000" }}>
      {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600/10 border border-green-600/30 backdrop-blur-sm mb-6">
            <span className="text-green-400 text-sm font-medium">Transparent Pricing</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
              Simple Pricing,
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">
              Powerful Results
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            No hidden fees. No surprises. Just <span className="text-green-500 font-semibold">clear pricing</span> for the quality you deserve. Choose what fits your goals.
          </p>
        </div>

      {/* Sliding toggle for categories */}
      <div className="flex justify-center mb-12">
        <div className="relative inline-flex bg-gray-800 rounded-full p-1 cursor-pointer">
          <div
            className={`absolute top-0 left-0 h-full w-1/2 bg-green-600 rounded-full transition-all duration-300 ${
              activeCategory === "Design + Development" ? "translate-x-full" : ""
            }`}
          ></div>

          {categories.map((cat, idx) => (
            <div
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`relative z-10 px-6 py-2 text-sm font-semibold text-center transition-colors duration-300 cursor-pointer select-none ${
                activeCategory === cat ? "text-white" : "text-gray-300"
              }`}
            >
              {cat}
            </div>
          ))}
        </div>
      </div>

      {/* Pricing cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {pricingData[activeCategory].map((plan, idx) => (
          <div
            key={idx}
            className={`rounded-2xl border p-6 shadow-lg relative transition-transform transform hover:scale-105 ${
              plan.popular
                ? "border-green-600 bg-gradient-to-br from-gray-800 to-gray-900"
                : "border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800"
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 left-0 w-full h-1 bg-green-500 rounded-t-xl"></div>
            )}

            <div className="flex flex-col items-center border-b border-gray-700 pb-6 mb-6 mt-2">
              {plan.label && <span className="text-xs text-green-400 font-medium mb-1">{plan.label}</span>}
              <span className="text-lg md:text-xl font-semibold text-white">{plan.title}</span>
              <div className="flex flex-col items-center mt-2 w-full">
                <span className="text-2xl md:text-3xl font-bold text-white">
                  {plan.price}{" "}
                  {plan.subPrice && <span className="text-sm text-gray-300">{plan.subPrice}</span>}
                </span>
              </div>
              <p className="text-gray-400 text-center mt-1 text-sm">{plan.description}</p>
            </div>

            <div className="space-y-3">
              {plan.features.map((feature, fIdx) => (
                <div key={fIdx} className="flex items-center gap-3">
                  <span className="grid w-5 h-5 place-content-center rounded-full bg-green-600 text-white">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className="text-sm text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>


        ))}
        
        
      </div>
      {/* Bottom CTA Banner */}
<div className="mt-24 flex justify-center px-4">
  <div className="w-full max-w-6xl">
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-gradient-to-r from-gray-900 to-black border border-green-600/30">
      
      {/* Text */}
      <div className="text-center md:text-left">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Not Sure Which Plan Fits?
        </h3>
        <p className="text-gray-400 max-w-xl">
          Book a free 15-minute strategy call. We'll help you choose the right package and answer all your questions.
        </p>
      </div>

      {/* Button */}
      <button className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-500 text-white rounded-full font-semibold transition-all hover:shadow-2xl hover:shadow-green-600/50 transform hover:scale-105 group">
        <span>Schedule Free Consultation</span>
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

    </div>
  </div>
</div>

    </section>
  );
}

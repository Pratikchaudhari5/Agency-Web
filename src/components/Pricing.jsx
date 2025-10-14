import React, { useState } from "react";

export default function Pricing() {
  const [activeCategory, setActiveCategory] = useState("Development Only");

  const categories = ["Development Only", "Design + Development"];

  const pricingData = {
    "Development Only": [
      {
        label: "Basic Package",
        title: "Starter",
        price: "$2,499",
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
        price: "$4,999",
        subPrice: "/one-time",
        description:
          "Ideal for growing businesses that need advanced functionality",
        popular: true,
        features: [
          "Everything in Starter",
          "Advanced Animations",
          "CMS Integration",
          "E-commerce Ready",
          "Analytics Setup",
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
        price: "$2,499",
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
        price: "$4,999",
        subPrice: "/one-time",
        description:
          "Ideal for growing businesses that need advanced functionality",
        popular: true,
        features: [
          "Everything in Starter",
          "Advanced Animations",
          "Custom UI/UX Design",
          "CMS Integration",
          "E-commerce Ready",
          "Analytics Setup",
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
    <section id="pricing" className="py-25 px-4" style={{ backgroundColor: "#000000" }}>
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-white">
        Pricing Plans
      </h1>
      <p className="text-center text-gray-400 mt-2 mb-8 text-sm md:text-lg">
        Choose a plan that fits your project needs.
      </p>

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
    </section>
  );
}

import React, { useState } from "react";
import InfinityImg from "../assets/Infinity.png";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [extra, setExtra] = useState("");
  const [marketing, setMarketing] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !message) {
      alert("Please fill all required fields");
      return;
    }

    const formData = {
      firstName,
      lastName,
      email,
      company,
      service,
      message,
      extra,
      marketing,
    };

    try {
      await fetch("https://formspree.io/f/mleqrwpd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setSubmitted(true);
    } catch (err) {
      console.error("Form submission error:", err);
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-16 bg-black text-white font-manrope">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-stretch">
          {/* Image Section */}
          <div className="flex flex-col justify-center items-center text-center lg:text-left">
            <div className="relative w-full flex justify-center">
              <img
                src={InfinityImg}
                alt="Infinity contact section"
                className="w-3/4 sm:w-2/3 h-auto object-contain opacity-90 drop-shadow-[0_0_25px_rgba(0,255,0,0.2)]"
              />
              <h1 className="absolute top-6 sm:top-10 left-1/2 sm:left-10 transform -translate-x-1/2 sm:translate-x-0 text-2xl sm:text-4xl font-bold leading-tight text-white">
                Let’s work together
              </h1>
            </div>

            <div className="mt-6 sm:mt-8 w-full">
              <div className="bg-[#0F121A]/90 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-[#1E2233]">
                <p className="text-gray-300 text-sm sm:text-base mb-3">
                  Tell us about your project.
                </p>
                <p className="text-gray-400 text-xs sm:text-sm leading-6">
              Whether you’re launching something new or improving what you already have, <br />
              we’ll help you move faster and smarter. <br />

One flexible agency to design, build, and scale your digital presence, <br /> without the complexity of managing multiple vendors.
                </p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-[#0B0F19] p-6 md:p-10 lg:p-12 rounded-2xl border border-[#1E2233] shadow-lg shadow-black/40">
            {!submitted ? (
              <>
                <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center lg:text-left">
                  Contact
                </h2>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  {/* Name Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <input
                      type="text"
                      className="w-full h-10 text-gray-200 placeholder-gray-500 bg-[#10131E] text-sm rounded-full border border-[#1E2233] focus:outline-none focus:border-green-400 pl-4"
                      placeholder="First name *"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      className="w-full h-10 text-gray-200 placeholder-gray-500 bg-[#10131E] text-sm rounded-full border border-[#1E2233] focus:outline-none focus:border-green-400 pl-4"
                      placeholder="Last name *"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>

                  <input
                    type="email"
                    className="w-full h-10 text-gray-200 placeholder-gray-500 bg-[#10131E] text-sm rounded-full border border-[#1E2233] focus:outline-none focus:border-green-400 pl-4"
                    placeholder="Email *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    className="w-full h-10 text-gray-200 placeholder-gray-500 bg-[#10131E] text-sm rounded-full border border-[#1E2233] focus:outline-none focus:border-green-400 pl-4"
                    placeholder="Company name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />

                  <select
                    className="w-full h-10 text-gray-200 bg-[#10131E] text-sm rounded-full border border-[#1E2233] focus:outline-none focus:border-green-400 pl-4"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    <option value="">Services you are interested in</option>
                    {/* <option value="Mobile App Development">
                      Mobile App Development
                    </option> */}
                    <option value="Web Development">Web Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                  </select>

                  <textarea
                    rows="3"
                    className="w-full text-gray-200 placeholder-gray-500 bg-[#10131E] text-sm rounded-2xl border border-[#1E2233] focus:outline-none focus:border-green-400 pl-4 py-2"
                    placeholder="How can we help?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                  <textarea
                    rows="2"
                    className="w-full text-gray-200 placeholder-gray-500 bg-[#10131E] text-sm rounded-2xl border border-[#1E2233] focus:outline-none focus:border-green-400 pl-4 py-2"
                    placeholder="Anything else?"
                    value={extra}
                    onChange={(e) => setExtra(e.target.value)}
                  />

                  <div className="flex items-start gap-2">
                    <input
                      id="marketing"
                      type="checkbox"
                      className="w-4 h-4 mt-1 text-green-400 bg-[#0B0F19] border-gray-700 rounded focus:ring-green-500"
                      checked={marketing}
                      onChange={(e) => setMarketing(e.target.checked)}
                    />
                    <label
                      htmlFor="marketing"
                      className="text-xs md:text-sm text-gray-400 select-none"
                    >
                      I agree to marketing communications related to upcoming
                      services.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full h-10 text-white text-sm font-semibold rounded-full bg-green-600 hover:bg-green-500 transition-all duration-500 shadow-md shadow-green-500/30"
                  >
                    Submit
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-10">
                <h3 className="text-2xl font-bold mb-4">Message Sent ✅</h3>
                <p className="text-white/90">
                  Thanks <span className="font-semibold">{firstName}</span>! We’ve received your message.
                </p>
                <p className="mt-2">
                  We’ll get back to you at <span className="font-semibold">{email}</span> soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

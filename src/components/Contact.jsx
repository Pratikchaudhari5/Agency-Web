import { useState } from "react";

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
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
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

    setIsLoading(true);

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
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    { icon: "⚡", text: "Response within 24 hours" },
    { icon: "💬", text: "Free 15-min strategy call" },
    { icon: "🎯", text: "Custom proposal for your needs" },
  ];

  return (
    <section id="contact" className="relative py-24 bg-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-green-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Info */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600/10 border border-green-600/30 backdrop-blur-sm mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm font-medium">Let's Connect</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
                  Ready to Build
                </span>
                <br />
                <span className="bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">
                  Something Great?
                </span>
              </h2>
              
              <p className="text-gray-400 text-lg leading-relaxed">
                Whether you're launching something new or improving what you already have, we'll help you <span className="text-green-500 font-semibold">move faster and smarter</span>.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-900/50 to-black/50 border border-gray-800 hover:border-green-600/30 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-600/10 flex items-center justify-center text-2xl">
                    {benefit.icon}
                  </div>
                  <p className="text-gray-300">{benefit.text}</p>
                </div>
              ))}
            </div>

            {/* Info Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-3">
                What Happens Next?
              </h3>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-600/20 flex items-center justify-center text-green-500 text-xs font-bold">1</span>
                  <p>We review your project details and goals</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-600/20 flex items-center justify-center text-green-500 text-xs font-bold">2</span>
                  <p>Schedule a free strategy call (no pressure)</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-600/20 flex items-center justify-center text-green-500 text-xs font-bold">3</span>
                  <p>Get a custom proposal with timeline & pricing</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="mailto:scaleformstudio@gmail.com"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-green-500 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">scaleformstudio@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-green-600/10 to-green-500/10 rounded-3xl blur-2xl" />
            
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 p-8 md:p-10 shadow-2xl">
              {!submitted ? (
                <>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Send Us a Message
                  </h3>

                  <div className="space-y-5">
                    {/* Name Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 text-white placeholder-gray-500 bg-black/50 text-sm rounded-xl border border-gray-800 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all"
                          placeholder="John"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 text-white placeholder-gray-500 bg-black/50 text-sm rounded-xl border border-gray-800 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all"
                          placeholder="Doe"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 text-white placeholder-gray-500 bg-black/50 text-sm rounded-xl border border-gray-800 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all"
                        placeholder="john@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 text-white placeholder-gray-500 bg-black/50 text-sm rounded-xl border border-gray-800 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all"
                        placeholder="Your Company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Service Interested In
                      </label>
                      <select
                        className="w-full px-4 py-3 text-white bg-black/50 text-sm rounded-xl border border-gray-800 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                      >
                        <option value="">Select a service</option>
                        <option value="Web Development">Web Development</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Design + Development">Design + Development</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        How can we help? *
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 text-white placeholder-gray-500 bg-black/50 text-sm rounded-xl border border-gray-800 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all resize-none"
                        placeholder="Tell us about your project..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Anything else?
                      </label>
                      <textarea
                        rows={2}
                        className="w-full px-4 py-3 text-white placeholder-gray-500 bg-black/50 text-sm rounded-xl border border-gray-800 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all resize-none"
                        placeholder="Budget, timeline, special requirements..."
                        value={extra}
                        onChange={(e) => setExtra(e.target.value)}
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        id="marketing"
                        type="checkbox"
                        className="w-4 h-4 mt-1 text-green-600 bg-black border-gray-700 rounded focus:ring-green-600 focus:ring-2 cursor-pointer"
                        checked={marketing}
                        onChange={(e) => setMarketing(e.target.checked)}
                      />
                      <label
                        htmlFor="marketing"
                        className="text-sm text-gray-400 select-none cursor-pointer"
                      >
                        I agree to receive marketing communications about upcoming services and offers.
                      </label>
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={isLoading}
                      className="w-full py-4 text-white text-base font-semibold rounded-xl bg-green-600 hover:bg-green-500 transition-all duration-300 shadow-lg shadow-green-600/30 hover:shadow-xl hover:shadow-green-600/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-600/20 flex items-center justify-center">
                    <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Message Sent! 🎉
                  </h3>
                  <p className="text-gray-300 text-lg mb-2">
                    Thanks, <span className="text-green-500 font-semibold">{firstName}</span>!
                  </p>
                  <p className="text-gray-400 mb-6">
                    We've received your message and will get back to you at <span className="text-white font-medium">{email}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <span>Send Another Message</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
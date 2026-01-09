import React, { useState } from 'react'

const ScaleformBooking = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone:'',
    company: '',
    service: '',
    date: '',
    time: '',
    message: ''
  })

  const [status, setStatus] = useState(null)
const [focusedField, setFocusedField] = useState(null)
const [bookingDone, setBookingDone] = useState(false)
const [isSubmitting, setIsSubmitting] = useState(false)

const onChange = (e) =>
  setForm({ ...form, [e.target.name]: e.target.value })

const selectService = (serviceName) => {
  setForm({ ...form, service: serviceName })
}

const finalSubmit = async () => {
  setIsSubmitting(true)

  const formData = {
    firstName: form.firstName,
    lastName: form.lastName,
    email: form.email,
        phone: form.phone, // ✅ added
    company: form.company || "Not provided",
    service: form.service,
    date: form.date,
    time: form.time,
    message: form.message || "No additional message",
  }

  try {
    await fetch("https://formspree.io/f/mleqrwpd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })

    setStatus("success")
    setBookingDone(true)
  } catch (err) {
    console.error("Form submission error:", err)
    alert("There was an error submitting the form. Please try again.")
  } finally {
    setIsSubmitting(false)
  }
}

  const services = [
    { 
      title: 'Web Development', 
      icon: '💻',
      description: 'Custom websites & web apps',
      tag: 'Most Popular'
    },
    { 
      title: 'UI/UX Design', 
      icon: '🎨',
      description: 'User-first interfaces',
      tag: 'Design'
    },
    { 
      title: 'E-Commerce', 
      icon: '🛒',
      description: 'Online stores that convert',
      tag: 'Sales'
    },
  ]

  const timeSlots = Array.from({ length: 18 }, (_, i) => {
    const hour = 9 + Math.floor(i / 2)
    const minutes = i % 2 === 0 ? '00' : '30'
    const displayHour = hour > 12 ? hour - 12 : hour
    const ampm = hour >= 12 ? 'PM' : 'AM'
    return `${displayHour}:${minutes} ${ampm}`
  })

  return (
    <section className="bg-black min-h-screen relative overflow-hidden">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        * {
          font-family: 'Inter', sans-serif;
        }

        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(5deg); }
          66% { transform: translate(-30px, 30px) rotate(-5deg); }
        }

        @keyframes pulse-green {
          0%, 100% { box-shadow: 0 0 30px rgba(34, 197, 94, 0.2); }
          50% { box-shadow: 0 0 60px rgba(34, 197, 94, 0.4); }
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .float-bg {
          animation: float-slow 15s ease-in-out infinite;
        }

        .slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }

        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }

        .scrollbar-thin::-webkit-scrollbar-track {
          background: #1a1a1a;
          border-radius: 10px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #22c55e;
          border-radius: 10px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #16a34a;
        }
      `}</style>

      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-green-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 float-bg"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 float-bg" style={{animationDelay: '7s'}}></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 float-bg" style={{animationDelay: '3s'}}></div>

      {/* Hero Section */}
      <div className="relative z-10 pt-20 pb-12 px-4 text-center">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-green-600/10 border border-green-600/30">
          <span className="text-xl">🚀</span>
          <span className="text-xs font-bold text-green-400 tracking-wider">FREE STRATEGY CALL</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Book Your Free
          <br />
          <span className="text-green-400">15-Minute Call</span>
        </h1>

        <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Let's discuss your project, goals, and how we can help you grow. 
          <br className="hidden md:block" />
          No pressure. Just real talk about real results.
        </p>
      </div>

      {/* Booking Form */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 pb-20">
        <div className="bg-[#0B0F19] rounded-3xl shadow-2xl shadow-black/50 overflow-hidden border border-green-600/20">
          
          {/* Form Header */}
          <div className="bg-gradient-to-br from-green-600 to-green-500 px-8 py-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Let's Get Started</h2>
              <p className="text-sm text-white/90">Fill in your details and choose a time that works for you</p>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-6 md:p-10">
            
           

            <div className="space-y-10">

              {/* Service Selection */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-600/20 rounded-xl flex items-center justify-center border border-green-600/30">
                    <span className="text-lg">1️⃣</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">What brings you here?</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {services.map((service, idx) => {
                    const isSelected = form.service === service.title
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => selectService(service.title)}
                        className={`group relative p-6 rounded-2xl border-2 text-left transition-all duration-300 ${
                          isSelected 
                            ? 'bg-green-600 border-green-600 text-white shadow-lg shadow-green-600/20 scale-[1.02]' 
                            : 'bg-[#10131E] border-green-600/20 hover:border-green-600/50 hover:bg-[#10131E]/80'
                        }`}
                      >
                        {service.tag && (
                          <div className={`absolute top-3 right-3 text-[10px] font-bold px-2 py-1 rounded-full ${
                            isSelected ? 'bg-white/20 text-white' : 'bg-green-600/20 text-green-400'
                          }`}>
                            {service.tag}
                          </div>
                        )}
                        
                        <div className="flex items-start justify-between mb-3">
                          <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl transition-transform duration-300 ${
                            isSelected ? 'bg-white/20' : 'bg-green-600/10'
                          } group-hover:scale-110`}>
                            {service.icon}
                          </div>
                        </div>
                        
                        <h4 className={`text-lg font-bold mb-2 ${isSelected ? 'text-white' : 'text-white'}`}>
                          {service.title}
                        </h4>
                        <p className={`text-sm ${isSelected ? 'text-white/90' : 'text-slate-400'}`}>
                          {service.description}
                        </p>
                        
                        <div className={`mt-4 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                          isSelected ? 'bg-white border-white' : 'border-green-600/40'
                        }`}>
                          {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div>}
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Date & Time Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Date Selection */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-green-600/20 rounded-xl flex items-center justify-center border border-green-600/30">
                      <span className="text-lg">2️⃣</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Pick Your Date</h3>
                  </div>
                  
                  <input
                    required
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={onChange}
                    onFocus={() => setFocusedField('date')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full border-2 rounded-xl px-5 py-4 bg-[#10131E] text-white transition-all duration-300 focus:outline-none ${
                      focusedField === 'date'
                        ? 'border-green-600 ring-4 ring-green-600/20'
                        : 'border-green-600/20 hover:border-green-600/50'
                    }`}
                  />
                </div>

                {/* Time Selection */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-green-600/20 rounded-xl flex items-center justify-center border border-green-600/30">
                      <span className="text-lg">3️⃣</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Select Time</h3>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 max-h-[240px] overflow-y-auto pr-2 scrollbar-thin">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setForm({ ...form, time })}
                        className={`py-3 px-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                          form.time === time
                            ? 'bg-green-600 text-white shadow-lg shadow-green-600/30 scale-105'
                            : 'bg-[#10131E] text-slate-300 border border-green-600/20 hover:bg-green-600/10 hover:border-green-600/50'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Personal Info */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-600/20 rounded-xl flex items-center justify-center border border-green-600/30">
                    <span className="text-lg">4️⃣</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Your Information</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* First Name */}
                  <div className="relative">
                    <label className="block text-sm font-semibold text-slate-300 mb-2">First Name *</label>
                    <input
                      required
                      name="firstName"
                      value={form.firstName}
                      onChange={onChange}
                      onFocus={() => setFocusedField('firstName')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="John"
                      className={`w-full border-2 rounded-xl px-5 py-4 bg-[#10131E] text-white transition-all duration-300 focus:outline-none placeholder-slate-600 ${
                        focusedField === 'firstName'
                          ? 'border-green-600 ring-4 ring-green-600/20'
                          : 'border-green-600/20 hover:border-green-600/50'
                      }`}
                    />
                  </div>

                  {/* Last Name */}
                  <div className="relative">
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Last Name *</label>
                    <input
                      required
                      name="lastName"
                      value={form.lastName}
                      onChange={onChange}
                      onFocus={() => setFocusedField('lastName')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Doe"
                      className={`w-full border-2 rounded-xl px-5 py-4 bg-[#10131E] text-white transition-all duration-300 focus:outline-none placeholder-slate-600 ${
                        focusedField === 'lastName'
                          ? 'border-green-600 ring-4 ring-green-600/20'
                          : 'border-green-600/20 hover:border-green-600/50'
                      }`}
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Email *</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="john@company.com"
                      className={`w-full border-2 rounded-xl px-5 py-4 bg-[#10131E] text-white transition-all duration-300 focus:outline-none placeholder-slate-600 ${
                        focusedField === 'email'
                          ? 'border-green-600 ring-4 ring-green-600/20'
                          : 'border-green-600/20 hover:border-green-600/50'
                      }`}
                    />
                  </div>
  {/* Phone */}
                  <div className="relative">
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Phone Number *</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={onChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="+91 9876543210"
                      className={`w-full border-2 rounded-xl px-5 py-4 bg-[#10131E] text-white transition-all duration-300 focus:outline-none placeholder-slate-600 ${
                        focusedField === 'phone'
                          ? 'border-green-600 ring-4 ring-green-600/20'
                          : 'border-green-600/20 hover:border-green-600/50'
                      }`}
                    />
                  </div>
                  {/* Company */}
                  <div className="relative">
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Company (Optional)</label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={onChange}
                      onFocus={() => setFocusedField('company')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Your Company"
                      className={`w-full border-2 rounded-xl px-5 py-4 bg-[#10131E] text-white transition-all duration-300 focus:outline-none placeholder-slate-600 ${
                        focusedField === 'company'
                          ? 'border-green-600 ring-4 ring-green-600/20'
                          : 'border-green-600/20 hover:border-green-600/50'
                      }`}
                    />
                  </div>

                  {/* Message - Full Width */}
                  <div className="relative md:col-span-2">
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Anything else? (Optional)</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={onChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Tell us about your project, goals, timeline..."
                      rows="4"
                      className={`w-full border-2 rounded-xl px-5 py-4 bg-[#10131E] text-white transition-all duration-300 focus:outline-none placeholder-slate-600 resize-none ${
                        focusedField === 'message'
                          ? 'border-green-600 ring-4 ring-green-600/20'
                          : 'border-green-600/20 hover:border-green-600/50'
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Info Notice */}
              {/* {!whatsappSent && (
                <div className="p-5 rounded-xl bg-green-600/5 border border-green-600/20 text-center">
                  <p className="text-sm text-slate-300 leading-relaxed">
                    <span className="text-green-400 font-semibold">⚠️ Quick heads up:</span> You'll be redirected to WhatsApp to confirm your booking.
                    <br />
                    After sending the message, <span className="font-semibold text-white">come back here</span> and tap "I've Sent the Message ✅"
                  </p>
                </div>
              )} */}

              {/* Submit Buttons */}
              {/* {!whatsappSent && (
                <button
                  type="button"
                  onClick={submit}
                  className="group relative w-full inline-flex items-center justify-center px-8 py-5 text-lg font-bold text-white bg-green-600 rounded-xl overflow-hidden shadow-lg shadow-green-600/30 hover:shadow-xl hover:shadow-green-600/40 transition-all duration-300 hover:scale-[1.02]"
                >
                  <span className="relative z-10">Confirm via WhatsApp</span>

                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                  <svg
                    className="relative z-10 ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              )} */}
 {/* Success Message */}
            {status && (
              <div className="mb-8 p-6 rounded-2xl border-2 bg-green-600/10 border-green-600/30 text-green-400 flex items-center gap-4 slide-up">
                <div className="text-3xl">✓</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Booking Confirmed!</h4>
                  <p className="text-sm text-green-300">
                    We'll send you a confirmation email shortly. Talk soon!
                  </p>
                </div>
              </div>
            )}
            {/* Submit Button */}
<button
  type="button"
  onClick={finalSubmit}
  disabled={isSubmitting || bookingDone}
  className={`group relative w-full inline-flex items-center justify-center px-8 py-5 text-lg font-bold text-white bg-green-600 rounded-xl overflow-hidden shadow-lg shadow-green-600/30 hover:shadow-xl hover:shadow-green-600/40 transition-all duration-300 hover:scale-[1.02] ${
    isSubmitting || bookingDone ? "opacity-70 cursor-not-allowed" : ""
  }`}
>
  <span className="relative z-10">
    {bookingDone
      ? "Booking Complete ✅"
      : isSubmitting
        ? "Saving Your Booking..."
        : "Confirm Booking ✅"}
  </span>

  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

  {!isSubmitting && !bookingDone && (
    <svg
      className="relative z-10 ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 7l5 5m0 0l-5 5m5-5H6"
      />
    </svg>
  )}
</button>


            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-2xl bg-[#0B0F19] border border-green-600/10">
            <div className="text-3xl mb-3">⚡</div>
            <h4 className="text-white font-bold mb-1">24hr Response</h4>
            <p className="text-sm text-slate-400">We'll get back to you within one business day</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#0B0F19] border border-green-600/10">
            <div className="text-3xl mb-3">💬</div>
            <h4 className="text-white font-bold mb-1">No Pressure</h4>
            <p className="text-sm text-slate-400">Just a friendly chat about your goals</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#0B0F19] border border-green-600/10">
            <div className="text-3xl mb-3">🎯</div>
            <h4 className="text-white font-bold mb-1">Custom Proposal</h4>
            <p className="text-sm text-slate-400">Tailored timeline and pricing for your project</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScaleformBooking
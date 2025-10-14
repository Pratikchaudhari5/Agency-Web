import { useState } from "react";

export default function Book() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Generate time slots dynamically with AM/PM
  const generateTimeSlots = () => {
    const slots = [];
    for (let h = 9; h <= 17; h++) {
      const hour = h <= 12 ? h : h - 12;
      const period = h < 12 ? "AM" : "PM";
      slots.push(`${hour}:00 ${period}`);
      slots.push(`${hour}:30 ${period}`);
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedDate || !selectedTime || !name || !email) {
      alert("Please fill all required fields");
      return;
    }

    const formData = {
      name,
      email,
      date: selectedDate,
      time: selectedTime,
      message,
    };

    try {
      // Submit form data to Formspree
      await fetch("https://formspree.io/f/mleqrwpd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setSubmitted(true);
    } catch (err) {
      console.error("Form submission error:", err);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <section id="book" className="py-16 bg-black text-white font-body">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Book a Demo
        </h2>
        <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto px-2">
          Choose your preferred date and time for a demo. Fill out your details and we will get back to you!
        </p>

        {!submitted ? (
          <form
            className="bg-[#0B0F19] p-8 rounded-2xl border border-green-600 shadow-2xl shadow-black/50"
            onSubmit={handleSubmit}
          >
            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Your Name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-full bg-[#10131E] border border-green-600 text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
                required
              />
              <input
                type="email"
                placeholder="Your Email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-full bg-[#10131E] border border-green-600 text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
                required
              />
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full p-3 rounded-full bg-[#10131E] border border-green-600 text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
                required
              />
              <div className="w-full relative">
                <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-green-600 scrollbar-track-gray-800">
                  <div className="flex gap-3 py-2">
                    {timeSlots.map((slot, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`px-4 py-2 rounded-full border border-green-600 text-sm whitespace-nowrap transition-colors duration-200 ${
                          selectedTime === slot
                            ? "bg-green-600 text-black"
                            : "text-white hover:bg-green-700"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Optional Message */}
            <textarea
              placeholder="Message (optional)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 rounded-2xl bg-[#10131E] border border-green-600 text-white placeholder-gray-400 focus:outline-none focus:border-green-400 mb-6"
            />

            <button
              type="submit"
              className="w-full py-3 bg-green-600 hover:bg-green-500 rounded-full text-white font-semibold transition-all duration-300"
            >
              Book Demo
            </button>
          </form>
        ) : (
          <div className="bg-green-600/20 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">Thank you!</h3>
            <p className="text-white/90">
              Your demo has been booked for{" "}
              <span className="font-semibold">{selectedDate}</span> at{" "}
              <span className="font-semibold">{selectedTime}</span>.
            </p>
            <p className="mt-2">
              We will contact you at <span className="font-semibold">{email}</span>.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

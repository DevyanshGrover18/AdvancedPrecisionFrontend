import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import TopBanner from "../components/TopBanner";

const contactCards = [
  {
    icon: MapPin,
    title: "Address",
    lines: ["123 Industrial Hub, Tech City", "Pin - 400001, India"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@advancedprecision.com"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+91 73039 37438", "+91 88828 50571", "+91 70044 14127"],
  },
];

const ContactUs = () => {
  const [contactNumber, setContactNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-[#ecf9f8]">
      <TopBanner title="Contact Us" imageName='contactBanner.jpeg' />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px] lg:items-start">

          {/* FORM */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-3xl font-bold text-slate-800 text-center mb-2">
              Get in Touch
            </h2>
            <p className="text-slate-500 text-sm text-center mb-8">
              Tell us about your requirements and our team will get back to you
              with the best solutions.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                required
                placeholder="Name *"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#50b8af] focus:border-transparent transition"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#50b8af] focus:border-transparent transition"
              />
              <input
                type="email"
                required
                placeholder="Email *"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#50b8af] focus:border-transparent transition"
              />
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={contactNumber}
                onChange={(e) =>
                  setContactNumber(e.target.value.replace(/\D/g, ""))
                }
                placeholder="Contact Number *"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#50b8af] focus:border-transparent transition"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#50b8af] focus:border-transparent transition"
              />
              <textarea
                rows={4}
                placeholder="Your Enquiry"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#50b8af] focus:border-transparent transition resize-none"
              />
              <button
                type="submit"
                className="w-full bg-[#50b8af] hover:bg-[#3fa79f] text-white py-3 rounded-lg font-semibold text-sm uppercase tracking-widest transition"
              >
                Submit Enquiry
              </button>
            </form>
          </div>

          {/* CONTACT CARDS */}
          <div className="flex flex-col">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.title}
                  className="flex flex-col items-center gap-4 border-b border-x border-slate-200 bg-white p-6 "
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#50b8af] text-[#50b8af]">
                    <Icon size={22} />
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <h3 className="font-semibold text-slate-800 text-base">
                      {card.title}
                    </h3>
                    <div className="mt-1 space-y-0.5 text-sm text-slate-500">
                      {card.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </section>
    </main>
  );
};

export default ContactUs;

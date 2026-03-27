import React, { useState } from "react";

const CtaSection = () => {
  const [contactNumber, setContactNumber] = useState("");

  return (
    <section
      className="pb-10 pt-6 px-6 md:px-10 max-w-[1400px] mx-auto"
      id="contact"
    >
      <div>
        <h2 className="text-3xl text-secondary text-center md:text-4xl font-bold mb-2">
          Get in Touch
        </h2>

        <p className="text-primary text-center mb-8">
          Tell us about your requirements and our team will get back to you with
          the best solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT: FORM */}
        <div>
          <form className="space-y-5">
            <input
              type="text"
              required
              placeholder="Name *"
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#6b8e23]"
            />
            <input
              type="text"
              required
              placeholder="Company Name"
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#6b8e23]"
            />

            <input
              type="email"
              required
              placeholder="Email *"
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#6b8e23]"
            />

            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value.replace(/\D/g, ""))}
              placeholder="Contact Number *"
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#6b8e23]"
            />

            <input
              type="text"
              required
              placeholder="Address"
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#6b8e23]"
            />

            <textarea
              rows="4"
              placeholder="Your Enquiry"
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#6b8e23]"
            ></textarea>

            <button
              type="submit"
              className="w-full cursor-pointer bg-[#6b8e23] text-white py-3 rounded-md font-bold text-sm uppercase tracking-widest hover:opacity-90 transition"
            >
              Submit Enquiry
            </button>
          </form>
        </div>

        {/* RIGHT: IMAGE GRID */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/hero1.jpg"
            alt=""
            className="w-full h-[180px] object-cover rounded-lg"
          />
          <img
            src="/hero2.jpg"
            alt=""
            className="w-full h-[180px] object-cover rounded-lg"
          />
          <img
            src="/hero3.jpg"
            alt=""
            className="w-full h-[180px] object-cover rounded-lg"
          />
          <img
            src="/industry1.jpg"
            alt=""
            className="w-full h-[180px] object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

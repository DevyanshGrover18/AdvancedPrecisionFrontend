import React from "react";

const CtaSection = () => {
  return (
    <section className="py-24 bg-primary" id="contact">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        <h2 className="text-slate-900 text-4xl md:text-6xl font-black">
          Ready to elevate your production?
        </h2>
        <p className="text-slate-800 text-lg md:text-xl font-medium">
          Partner with ACME DRINKTEC for world-class molding solutions that
          drive efficiency and profitability.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-slate-900 text-white px-10 py-5 rounded-xl text-lg font-bold shadow-lg hover:bg-slate-800 transition-all">
            Request a Consultation
          </button>
          <button className="bg-white text-slate-900 px-10 py-5 rounded-xl text-lg font-bold shadow-lg hover:bg-slate-50 transition-all">
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
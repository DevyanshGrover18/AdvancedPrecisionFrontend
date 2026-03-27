const AboutCta = () => (
  <section className="mt-32 rounded-3xl bg-slate-900 text-white p-12 md:p-20 relative overflow-hidden">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-8 max-w-xl">
      Ready to optimize your production infrastructure?
    </h2>

    <div className="flex gap-4 flex-wrap">
      <button className="bg-[#416900] px-8 py-4 rounded-xl font-bold">
        Speak with an Engineer →
      </button>

      <button className="border border-white/20 px-8 py-4 rounded-xl">
        Download Tech Specs
      </button>
    </div>
  </section>
);

export default AboutCta;
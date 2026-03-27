const AboutHero = () => (
  <header className="mb-16 md:mb-24 pt-10">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
      
      {/* LEFT */}
      <div className="lg:col-span-7">
        <span className="text-[#a4d145] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
          Legacy of Precision
        </span>

        <h1 className="text-5xl md:text-5xl font-bold tracking-tight leading-none mb-6">
          Architecting the Future of{" "}
          <span className="text-[#a4d145]">
            Industrial Molding.
          </span>
        </h1>

        <p className="text-md text-gray-600 max-w-xl">
          At Advanced Precision, we don't just manufacture molds; we engineer the high-precision backbone of the global beverage infrastructure.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="lg:col-span-5 relative">
        <div className=" h-64 w-full unded-2xl overflow-hidden shadow-2xl">
          <img
            src="/industry1.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute text-white -bottom-6 -left-6 bg-[#a4d145] p-6 rounded-xl shadow-xl hidden md:block">
          <div className="font-black text-4xl">25+</div>
          <div className="text-xs font-bold uppercase tracking-widest">
            Years of Mastery
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default AboutHero;

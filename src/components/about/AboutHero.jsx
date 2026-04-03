const AboutHero = () => (
  <header id="about-hero" className="mb-16 md:mb-24 pt-10">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
      
      {/* LEFT */}
      <div className="lg:col-span-7">
        <span className="text-[#a4d145] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
          Who We Are
        </span>

        <h1 className="text-5xl md:text-5xl font-bold tracking-tight leading-none mb-6">
          Architecting the Future of{" "}
          <span className="text-[#a4d145]">
            Industrial Molding.
          </span>
        </h1>

        <p className="text-md text-gray-600 max-w-xl">
          We are a dedicated manufacturing company specializing in precision mold design and tooling solutions for modern industrial applications. With a strong foundation in engineering excellence, we focus on delivering high-quality molds that ensure consistent performance, durability, and efficiency. <br/>
          Our expertise lies in combining advanced technology with practical industry experience to create solutions that meet the evolving needs of our clients.
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

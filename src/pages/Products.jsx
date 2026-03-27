import React from "react";


const Hero = () => (
  <header className="px-8 max-w-screen-2xl mx-auto mt-4">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
      <div className="md:col-span-8">
        <span className="uppercase tracking-[0.2em] text-[#416900] font-bold mb-4 block">
          Engineered Excellence
        </span>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6">
          PRECISION <br /> INFRASTRUCTURE
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
          Redefining the standards of beverage packaging through advanced mold
          engineering and robotic manufacturing.
        </p>
      </div>

      <div className="md:col-span-4 hidden md:block text-right">
        <div className="inline-block p-6 bg-gray-100 rounded-xl border-l-4 border-[#416900]">
          <p className="text-4xl font-black">99.8%</p>
          <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">
            Calibration Accuracy
          </p>
        </div>
      </div>
    </div>
  </header>
);



const MainSection = () => {
  return (
    <section className="px-6 md:px-10 max-w-[1400px] mx-auto pt-10 pb-16">

      {/* CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-10">
        {/* BIG CARD */}
        <div className="md:col-span-8 relative rounded-xl overflow-hidden h-[320px] md:h-[380px] group">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBISOqKwm_nEVV2Kgmf2BdNifFKcWMz0u011ytBxCanGGVz9gf3aD-Rl2SqnPfytBADEUhQ7JiNp66iu-SDDGGpTubKPQjlwjGOwpUIlrAdKYA1AS7D_0D5-CtUXN16GaM4DA8ilH8ti84kH3nzi5-IJeHkfMdJzY--LE5c2w15xQIvoDvoDsIHOYPrFHSsgUURMdUyv_40Hrp00tXYoeEyP-tqtBKtYvQQCl3LMLJTwMSwOX1Y4aFIMXbKvOVSM2rI4BfI3SK86nQ"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
            alt=""
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

          <div className="absolute bottom-0 p-6 text-white">
            <h3 className="text-lg md:text-xl font-bold mb-1">
              Single Stage ISBM Molds
            </h3>
            <p className="text-xs text-white/80 max-w-sm mb-3">
              High-precision production molds with zero defect tolerance.
            </p>

            <button className="bg-white text-black px-4 py-2 text-[10px] font-bold rounded-md">
              EXPLORE SOLUTIONS
            </button>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="md:col-span-4 relative rounded-xl overflow-hidden h-[320px] md:h-[380px] group">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcxIPZVMRTL3cbh11HGjwRYHsl2FysYZaFNc-hj_LkHPVfefMolGqXELkJQLNJedfEDzF4MfNq8JiP00P3u9OXqh4WLy7KYDyJs11fFr1AYLkBDzthVNJCqI8B1QHa9owGpROEII1qVp13bOixTKZZn5grxsjDhlhjPCnUBDhEOskb_zvNZWYY5O0pM52ctfnvz-AOuP9c3XxdM07cPvbIPHjnBzDbbsnrQ_Kvel1d9IKsna8ON9QuPJqHQxtreVXntqDcgkz6bRY"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition"
            alt=""
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute bottom-0 p-5 text-white">
            <h3 className="text-sm md:text-base font-bold mb-1">
              PET Preform Molds
            </h3>
            <p className="text-[11px] text-white/70">
              High-efficiency multi-cavity systems.
            </p>
          </div>
        </div>

        {/* BOTTOM CARDS */}
        <div className="md:col-span-4 bg-gray-100 rounded-xl p-5 px-10 h-72 flex flex-col">
          <div>
            <svg
              fill="#6b8e23"
              className="h-10 w-auto mb-3"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <title>robot-arm</title>{" "}
              <path d="M30.663 14.423l-3.593-0.663c-0.221-0.426-0.597-0.774-1.084-0.95-0.061-0.022-0.123-0.041-0.185-0.057l-4.024-7.963c0.382-0.767 0.431-1.684 0.053-2.516-0.672-1.482-2.441-2.128-3.951-1.443l-15.015 6.125c-1.829 0.83-2.652 2.958-1.838 4.753 0.347 0.765 0.935 1.345 1.638 1.696l5.468 13.482 0.232 0.589c-1.059 0.98-1.722 2.382-1.722 3.939h10.734c0-2.964-2.403-5.367-5.367-5.367-0.010 0-0.019 0-0.029 0l-0.383-1.051 0.060 0.015-0.105-0.138-4.383-12.042-0.004-0.051 12.066-6.041 4.238 7.212c-0.006 0.016-0.013 0.031-0.018 0.047-0.033 0.092-0.059 0.185-0.078 0.279l-3.378 2.057 1.136 1.035 1.646 3.513 1.68 0.313-0.683-4.858 0.258-0.155c0.175 0.149 0.38 0.27 0.609 0.353 0.87 0.315 1.817-0.018 2.313-0.751l1.231 4.724 1.468-0.874 0.294-3.442 0.139 0.025 0.579-1.792zM3.867 7.875c1.294-0.214 2.516 0.661 2.73 1.955s-0.661 2.516-1.955 2.73-2.516-0.661-2.73-1.955c-0.214-1.294 0.661-2.516 1.955-2.73zM17.367 3.785c-0.16-0.967 0.494-1.88 1.461-2.040 0.78-0.129 1.524 0.271 1.867 0.938 0.020 0.039 0.038 0.078 0.055 0.118 0.002 0.004 0.003 0.008 0.005 0.011 0.016 0.039 0.031 0.078 0.045 0.119 0 0.001 0.001 0.002 0.001 0.003 0.013 0.039 0.025 0.080 0.035 0.12 0.002 0.009 0.004 0.018 0.006 0.026 0.010 0.041 0.019 0.082 0.025 0.124 0 0 0 0 0 0 0.030 0.181 0.031 0.361 0.007 0.534-0.104 0.749-0.683 1.377-1.468 1.507-0.029 0.005-0.057 0.009-0.085 0.012-0.009 0.001-0.018 0.002-0.027 0.003-0.019 0.002-0.039 0.004-0.058 0.005-0.011 0.001-0.022 0.001-0.032 0.002-0.018 0.001-0.035 0.002-0.052 0.002-0.011 0-0.022 0-0.034 0-0.017 0-0.034-0-0.051-0.001-0.011-0-0.022-0.001-0.033-0.001-0.017-0.001-0.034-0.002-0.051-0.003-0.011-0.001-0.021-0.002-0.032-0.003-0.019-0.002-0.037-0.004-0.055-0.006-0.009-0.001-0.018-0.002-0.027-0.003-0.027-0.004-0.053-0.008-0.080-0.013-0.001-0-0.001-0-0.002-0-0.026-0.005-0.053-0.011-0.079-0.017-0.009-0.002-0.018-0.005-0.027-0.007-0.017-0.004-0.035-0.009-0.052-0.014-0.010-0.003-0.021-0.006-0.031-0.009-0.016-0.005-0.031-0.010-0.047-0.015-0.011-0.004-0.021-0.007-0.032-0.011-0.015-0.005-0.030-0.011-0.045-0.017-0.010-0.004-0.021-0.008-0.031-0.012-0.015-0.006-0.030-0.013-0.045-0.019-0.010-0.004-0.020-0.009-0.029-0.013-0.016-0.007-0.032-0.015-0.048-0.023-0.008-0.004-0.016-0.008-0.024-0.012-0.023-0.012-0.047-0.025-0.069-0.038-0-0-0.001-0-0.001-0.001v0c-0.442-0.257-0.77-0.702-0.86-1.245z"></path>{" "}
            </svg>
          </div>
          <h3 className="font-extrabold mb-2 text-2xl">Injection Molds</h3>
          <p className="text-md text-gray-500 mb-auto">
            Custom-tooled injection molding solutions featuring integerated ho
            runner systems for minimized waster and maximised throughput
          </p>
          <div className="text-[10px] mt-4 border-t pt-4 border-gray-300">
            <div className="flex justify-between mb-1">
              <span className="text-[12px] font-bold">Durability</span>
              <span>1M+ Cycles</span>
            </div>
            <div className="flex justify-between mb-1">
              <span className="text-[12px] font-bold">Lead Time</span>
              <span className="">6–8 Weeks</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 bg-gray-100 rounded-xl p-5 flex flex-col">
          <h3 className="font-bold mb-2 text-sm">R&D Design</h3>
          <p className="text-xs text-gray-500 mb-4">
            Prototyping to production-ready tooling.
          </p>
          <button className="mt-auto bg-[#6b8e23] text-white text-[10px] py-2 rounded-md font-bold">
            CONNECT WITH ENGINEER
          </button>
        </div>

        <div className="md:col-span-4 bg-[#0f172a] rounded-xl p-5 flex flex-col text-center text-white justify-center">
          <h3 className="font-bold mb-2 text-sm">Mold Maintenance</h3>
          <p className="text-xs text-gray-400">
            Global support & optimization.
          </p>
        </div>
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="my-10 px-8 max-w-screen-2xl mx-auto">
    <div className="rounded-3xl bg-slate-900 py-24 px-12 text-center text-white">
      <h2 className="text-5xl font-black mb-8">
        READY FOR THE NEXT <br />
        <span className="text-[#8cc63f]">PRODUCTION PHASE?</span>
      </h2>

      <p className="mb-10 text-gray-300">
        Scale your beverage infrastructure with our precision engineering.
      </p>

      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <button className="bg-gradient-to-br from-[#416900] to-[#8cc63f] px-10 py-5 rounded-xl font-bold">
          Request Quote
        </button>
        <button className="border border-white/20 px-10 py-5 rounded-xl">
          Download Catalog
        </button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="mt-20 bg-slate-900 text-white px-8 py-16">
    <p className="text-center text-sm text-gray-400">
      © 2024 Acme Drinktec. All rights reserved.
    </p>
  </footer>
);

const ProductsPage = () => {
  return (
    <div className="font-sans">
      <Hero />
      <MainSection />
      <CTA />
    </div>
  );
};

export default ProductsPage;

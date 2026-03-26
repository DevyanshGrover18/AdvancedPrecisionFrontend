import React from "react";
import { ArrowRight, Play } from "lucide-react";

const HERO_BG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBT3o3F3T7YSP9Wwquwtpflj8vRnABbry2Dj-ooKFeW72cu32Ic11_78gzcLJH0vQv3vUvMDGSlDW_l6ACVdWlW7eJ2ZrIFyd3t1wEDt1Zr_SmNt7B9-pJcX5iWU03Haj3pUHiP8tDy3AYO_f4JyAK03a-3AULTvZVmoc4FJmPhnKR1nSRtI0Ge9--ibPle6f9_GtKuT8vBxtBFI_IGFC4sndc_PidI5oIK3UE-rRXHmMKPl0Hpvv0mBxwBpsJvnQ2Q-g4C7scoH77M";

const HeroSection = () => {
  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2)), url('${HERO_BG}')`,
        }}
      />
      <div className="relative h-full max-w-7xl mx-auto px-6 md:px-20 flex flex-col justify-center items-start gap-6">
        <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md border border-[#a4d145] px-3 py-1 rounded-full">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-secondary text-xs font-bold uppercase tracking-widest">
            Industry Leader
          </span>
        </div>

        <h1 className="text-white text-5xl md:text-7xl font-black leading-none max-w-3xl">
          CREATING MOLDS <br />
          <span className="text-secondary">With a Difference</span>
        </h1>

        <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed">
          Pioneering precision engineering for high-performance single-stage
          molding solutions. We deliver excellence in every cavity for the
          global packaging industry.
        </p>

        <div className="flex gap-4 pt-4 flex-wrap">
          <button className="bg-primary group cursor-pointer hover:bg-primary/90 text-slate-900 px-8 py-4 rounded-xl text-base font-bold transition-all flex items-center gap-2">
            Explore Our Solutions <ArrowRight size={18} />
          </button>
          <button className="bg-white/10 cursor-pointer hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl text-base font-bold transition-all flex items-center gap-2">
          Watch Process
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import React, { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"];

const HeroSection = () => {
  const autoplayRef = useRef(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const startAutoplay = () => {
    if (!emblaApi) return;

    autoplayRef.current = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  useEffect(() => {
    if (!emblaApi) return;

    startAutoplay();

    return () => stopAutoplay();
  }, [emblaApi]);

  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      {/* 🔹 Carousel */}
      <div className="absolute inset-0 overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((img, index) => (
            <div key={index} className="min-w-full h-full relative">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2)), url('${img}')`,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 LEFT ARROW */}
      <button
        onClick={() => {
          if (!emblaApi) return;
          stopAutoplay();
          emblaApi.scrollPrev();
          startAutoplay();
        }}
        className="absolute cursor-pointer left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 p-3 rounded-full text-white transition"
      >
        <ChevronLeft size={24} />
      </button>

      {/* 🔹 RIGHT ARROW */}
      <button
        onClick={() => {
          if (!emblaApi) return;
          stopAutoplay();
          emblaApi.scrollNext();
          startAutoplay();
        }}
        className="absolute cursor-pointer right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 p-3 rounded-full text-white transition"
      >
        <ChevronRight size={24} />
      </button>

      {/* 🔹 CONTENT */}
      <div className="relative h-full max-w-7xl mx-auto px-6 md:px-20 flex flex-col justify-center items-start gap-6">
        <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md border border-[#a4d145] px-3 py-1 rounded-full">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-secondary text-xs font-bold uppercase tracking-widest">
            Industry Leader
          </span>
        </div>

        <h1 className="text-white text-5xl md:text-7xl font-bold leading-none max-w-3xl">
          CREATING MOLDS <br />
          <span className="text-secondary">With a Difference</span>
        </h1>

        <p className="text-slate-300 text-lg md:text-lg max-w-2xl leading-relaxed">
          Pioneering precision engineering for high-performance single-stage
          molding solutions. We deliver excellence in every cavity for the
          global packaging industry.
        </p>

        <div className="flex gap-4 pt-4 flex-wrap">
          <button className="bg-primary hover:bg-primary/90 text-slate-900 px-8 py-4 rounded-xl text-base font-medium flex items-center gap-2">
            Explore Our Products <ArrowRight size={18} />
          </button>

         
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

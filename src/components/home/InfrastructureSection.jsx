import React, { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"];

const InfrastructureSection = () => {
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
    <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
      {/* Carousel */}
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

      {/* Content Box */}
      <div className="absolute inset-x-4 bottom-4 z-20 md:inset-x-auto md:bottom-auto md:left-[16.666%] md:top-1/4 bg-primary/50 backdrop-blur-md text-white px-6 py-8 md:px-10 md:py-12 w-auto md:w-[480px]">
        <div className="relative">
          <h2 className="text-2xl md:text-3xl mb-4 md:mb-6 font-bold uppercase tracking-wider">
            Infrastructure
          </h2>
          <div className="text-sm md:text-[15px] tracking-wide leading-relaxed">
            Our facility is equipped with cutting-edge machinery and technology
            to deliver precision-driven results:
            <ul className="list-disc pl-4 mt-2 space-y-1">
              <li>CNC Machines</li>
              <li>EDM Machines</li>
              <li>VMC Units</li>
              <li>Inspection & Quality Control Systems</li>
            </ul>
            <p className="mt-3">
              We maintain strict quality standards at every stage of production
              to ensure reliability and consistency.
            </p>
          </div>

          {/* Nav Buttons */}
          <div className="flex gap-3 mt-6 md:mt-8 justify-end">
            <button
              onClick={() => {
                if (!emblaApi) return;
                stopAutoplay();
                emblaApi.scrollPrev();
                startAutoplay();
              }}
              className="cursor-pointer z-10 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 p-2 md:p-3 rounded-full text-white transition"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => {
                if (!emblaApi) return;
                stopAutoplay();
                emblaApi.scrollNext();
                startAutoplay();
              }}
              className="cursor-pointer z-10 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 p-2 md:p-3 rounded-full text-white transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
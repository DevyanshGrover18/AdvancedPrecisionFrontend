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
    <section className="relative h-[600px] w-full overflow-hidden">
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

      <div className="absolute left-6 top-6 z-20 bg-primary/50 px-10 py-12 text-sm text-white backdrop-blur-md md:left-1/6 md:top-1/4 h-100 w-120">
        <div className="h-full w-full relative">
            <h2 className="text-3xl mb-6 font-bold uppercase tracking-wider">
              Infrastructure
            </h2>
            <h3 className="text-lg mb-6">
              We have built our reputation in the industry on the strength of our
              excellent products.
            </h3>
            <p className="text-md tracking-wide">
              Our manufacturing plant for high-quality ADS molds is equipped with
              a modern tool room that houses the latest and most sophisticated
            machinery and processes to ensure the high levels of quality that we
            look for in our products.
            </p>
          <div className="bottom-0 right-0 absolute flex gap-4">
            <button
              onClick={() => {
                if (!emblaApi) return;
                stopAutoplay();
                emblaApi.scrollPrev();
                startAutoplay();
              }}
              className="cursor-pointer z-10 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 p-3 rounded-full text-white transition"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={() => {
                if (!emblaApi) return;
                stopAutoplay();
                emblaApi.scrollNext();
                startAutoplay();
              }}
              className="cursor-pointer z-10 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 p-3 rounded-full text-white transition"
            >
              <ChevronRight size={24} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;

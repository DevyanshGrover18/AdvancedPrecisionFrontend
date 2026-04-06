// AboutCta.jsx
import { useEffect, useRef, useState } from "react";

const useInView = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setInView(true); observer.disconnect(); }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
};

const Reveal = ({ children, delay = 0, className = "" }) => {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

const AboutCta = () => (
  <section className="mt-32 rounded-3xl bg-slate-900 text-white p-12 md:p-20 relative overflow-hidden group">
    {/* Animated background accent */}
    <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#50b8af]/10 transition-all duration-700 group-hover:scale-125 group-hover:bg-[#50b8af]/15" />
    <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-[#50b8af]/5 transition-all duration-700 group-hover:scale-125" />

    <div className="relative">
      <Reveal delay={0}>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 max-w-xl">
          Ready to optimize your production infrastructure?
        </h2>
      </Reveal>

      <Reveal delay={0.12}>
        <div className="flex gap-4 flex-wrap">
          <button className="bg-[#50b8af] hover:bg-[#3fa79f] px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:text-slate-900 hover:scale-105">
            Speak with an Engineer →
          </button>
          <button className="border border-white/20 px-8 py-4 rounded-xl hover:border-white/60 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            Download Tech Specs
          </button>
        </div>
      </Reveal>
    </div>
  </section>
);

export default AboutCta;

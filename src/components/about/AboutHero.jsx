// AboutHero.jsx
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
        transition: `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

const AboutHero = () => (
  <header id="about-hero" className="mb-16 md:mb-24 pt-10">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">

      {/* LEFT */}
      <div className="lg:col-span-7 space-y-6">
        <Reveal delay={0}>
          <span className="text-[#50b8af] font-bold tracking-[0.2em] uppercase text-xs block">
            Who We Are
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="text-5xl font-bold tracking-tight leading-none">
            Architecting the Future of{" "}
            <span className="text-[#50b8af]">Industrial Molding.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-md text-gray-600 max-w-xl">
            We are a dedicated manufacturing company specializing in precision
            mold design and tooling solutions for modern industrial applications.
            With a strong foundation in engineering excellence, we focus on
            delivering high-quality molds that ensure consistent performance,
            durability, and efficiency.
            <br />
            Our expertise lies in combining advanced technology with practical
            industry experience to create solutions that meet the evolving needs
            of our clients.
          </p>
        </Reveal>
      </div>

      {/* RIGHT IMAGE */}
      <Reveal delay={0.15} className="lg:col-span-5 relative">
        <div className="h-64 w-full rounded-2xl overflow-hidden shadow-2xl group">
          <img
            src="/industry1.jpg"
            alt=""
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div
          className="absolute text-white -bottom-6 -left-6 bg-[#50b8af] p-6 rounded-xl shadow-xl hidden md:block"
          style={{
            animation: "badgePop 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.5s both",
          }}
        >
          <div className="font-black text-4xl">25+</div>
          <div className="text-xs font-bold uppercase tracking-widest">
            Years of Mastery
          </div>
        </div>
      </Reveal>
    </div>

    <style>{`
      @keyframes badgePop {
        from { opacity: 0; transform: scale(0.7) translateY(10px); }
        to   { opacity: 1; transform: scale(1) translateY(0); }
      }
    `}</style>
  </header>
);

export default AboutHero;

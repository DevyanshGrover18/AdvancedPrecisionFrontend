// AboutContent.jsx
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

const AboutContent = ({ content }) => (
  <div className="lg:col-span-9 py-12 lg:pl-16">
    <Reveal delay={0}>
      <div className="space-y-4">
        <h2 className="text-3xl text-primary font-bold mb-2">{content.title}</h2>
        <p className="text-xs uppercase tracking-[0.25em] text-secondary font-bold">
          {content.label}
        </p>
      </div>
    </Reveal>

    <Reveal delay={0.1}>
      <div className="relative overflow-hidden group flex justify-center my-10 rounded-2xl">
        <img
          src={content.image}
          className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          alt={content.label}
        />
      </div>
    </Reveal>

    <div className="space-y-4">
      {content.body.map((para, i) => (
        <Reveal key={para} delay={0.15 + i * 0.08}>
          <p className="text-gray-600 text-md leading-relaxed">{para}</p>
        </Reveal>
      ))}
    </div>

    <div className="mt-10 grid gap-4 sm:grid-cols-3">
      {content.stats.map((stat, i) => (
        <Reveal key={stat.label} delay={0.2 + i * 0.08}>
          <div className="rounded-xl border border-gray-200 p-4 hover:border-[#a4d145] hover:shadow-md transition-all duration-300 group">
            <div className="text-2xl font-black text-primary group-hover:text-[#a4d145] transition-colors duration-300">
              {stat.value}
            </div>
            <div className="mt-1 text-xs uppercase tracking-[0.2em] text-gray-500">
              {stat.label}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
);

export default AboutContent;
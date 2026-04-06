import { useState, useEffect, useRef } from "react";
import {
  FlaskConical,
  Gauge,
  Scale,
  ShieldCheck,
  Thermometer,
  UserCheck,
} from "lucide-react";
import TopBanner from "../components/TopBanner";

const testingPoints = [
  {
    icon: FlaskConical,
    title: "Dimensional Inspection: ",
    text: "Ensuring tight tolerances and accurate measurements using precision instruments. Ultra-modern laboratory for advanced inspection and testing.",
  },
  {
    icon: Gauge,
    title: "Material Testing: ",
    text: "Evaluating strength, hardness, and durability to ensure long-term performance.",
  },
  {
    icon: Scale,
    title: "Functional Testing: ",
    text: "Validating mold operation, alignment, and component performance under real conditions.",
  },
  {
    icon: Thermometer,
    title: "Surface & Finish Inspection: ",
    text: "Checking for defects such as cracks, warpage, or surface inconsistencies.",
  },
  {
    icon: UserCheck,
    title: "Performance Testing: ",
    text: "Trial runs to ensure consistent output, smooth operation, and optimal cycle efficiency.",
  },
];

/* Hook: triggers once when element enters viewport */
const useInView = (options = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.15, ...options });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
};

/* Wrapper that fades+slides up when scrolled into view */
const Reveal = ({ children, delay = 0, className = "" }) => {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default function QualityTestingPage() {
  return (
    <div className="font-sans bg-white">
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <TopBanner title="Quality & Testing" />

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 space-y-20">

        {/* ── QUALITY SECTION ── */}
        <section className="space-y-10">
          <Reveal delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#a4d145]/30 bg-[#a4d145]/10 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-[#a4d145]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#0f172a]">
                Quality
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="text-4xl md:text-3xl font-medium uppercase leading-none text-slate-900 max-w-2xl">
              Commitment to Quality Excellence.
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="text-[16px] w-full leading-relaxed text-slate-600">
              Quality is at the core of everything we do. Our comprehensive
              quality control system ensures that every mold meets the highest
              standards of precision, durability, and performance. From raw
              material inspection to final delivery, each stage of our process
              is carefully monitored and validated to deliver consistent and
              reliable results.
            </div>
          </Reveal>

          {/* Full-width lab image */}
          <Reveal delay={0.22}>
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-[0_20px_60px_rgba(15,23,42,0.10)] group">
              <img
                src="/quality-lab.jpg"
                alt="Quality lab"
                className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0f172a]/30 via-transparent to-[#a4d145]/10" />
              <div className="absolute bottom-6 left-6 bg-[#0f172a]/80 backdrop-blur-sm rounded-2xl px-5 py-3">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4d145]">
                  In-House Quality Lab
                </span>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── DIVIDER ── */}
        <Reveal delay={0}>
          <div className="w-full h-px bg-slate-200" />
        </Reveal>

        {/* ── TESTING SECTION ── */}
        <section className="space-y-10">
          <Reveal delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#a4d145]/30 bg-[#a4d145]/10 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-[#a4d145]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#0f172a]">
                Testing
              </span>
            </div>
          </Reveal>

          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] items-stretch">
            {/* Left */}
            <div className="space-y-6">
              <Reveal delay={0.06}>
                <h2 className="text-xl md:text-3xl font-medium uppercase leading-none text-slate-900">
                  Engineered Testing. Proven Performance.
                </h2>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="text-[16px] leading-relaxed text-slate-600">
                  Every mold that leaves our facility has passed through a
                  rigorous series of tests carried out by our experienced
                  quality team using state-of-the-art equipment.
                </p>
              </Reveal>

              <Reveal delay={0.16}>
                <h3 className="text-[16px] leading-relaxed text-slate-600">
                  Our testing processes are designed to verify every critical
                  aspect of mold performance:
                </h3>
              </Reveal>

              <ul className="space-y-4 pt-2">
                {testingPoints.map((point, i) => {
                  const Icon = point.icon;
                  return (
                    <Reveal key={i} delay={0.18 + i * 0.08}>
                      <li className="flex items-start gap-4 group">
                        <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0f172a] text-[#a4d145] group-hover:bg-[#a4d145] group-hover:text-[#0f172a] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                          <Icon size={18} />
                        </div>
                        <p className="text-sm leading-relaxed text-slate-600 pt-2">
                          <strong>{point.title}</strong>
                          {point.text}
                        </p>
                      </li>
                    </Reveal>
                  );
                })}
              </ul>
            </div>

            {/* Right image */}
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-[0_20px_60px_rgba(15,23,42,0.10)] group h-full">
                <img
                  src="/quality-testing.jpg"
                  alt="Testing process"
                  className="w-full h-full object-cover min-h-[400px] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-[#0f172a]/30 via-transparent to-[#a4d145]/10" />
                <div className="absolute top-6 right-6 bg-[#a4d145] rounded-2xl px-4 py-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={18} className="text-[#0f172a]" />
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-[#0f172a]">
                      Quality Assured
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
}
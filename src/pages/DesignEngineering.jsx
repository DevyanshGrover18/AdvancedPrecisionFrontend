import { useState } from "react";
import {
  RefreshCw,
  FlaskConical,
  Cpu,
  Gauge,
  Rocket,
  PenTool,
  Ruler,
  Layers3,
  ScanSearch,
} from "lucide-react";
import TopBanner from "../components/TopBanner";

const designCards = [
  {
    icon: PenTool,
    desc: "Facility for Product Design and feasibility study",
  },
  {
    icon: Ruler,
    desc: "Innovation-driven mold designing and molding process simulations for enhanced cavitation",
  },
  {
    icon: Layers3,
    desc: "Unmatched expertise in designing to ensure optimal thickness, thread fitment, stretch ability and low weight",
  },
  {
    icon: ScanSearch,
    desc: "Ability to achieve optimum mold manufacturing processes, shorter mold delivery periods and fewer mold testing requirements.",
  },
];

const keyCapabilities = [
  {
    icon: RefreshCw,
    title: "Continuous Process Innovation",
    desc: "We regularly refine and upgrade our processes to improve efficiency, reduce lead times, and enhance product quality.",
  },
  {
    icon: FlaskConical,
    title: "Advanced Material Research & Application",
    desc: "Our team evaluates and implements suitable materials to improve durability, strength, and performance under demanding conditions.",
  },
  {
    icon: Cpu,
    title: "Technology Integration & Upgradation",
    desc: "We adopt modern tools, automation, and advanced engineering systems to enhance precision and productivity.",
  },
  {
    icon: Gauge,
    title: "Performance Enhancement Strategies",
    desc: "We focus on optimizing mold performance by improving cooling systems, reducing cycle times, and ensuring consistent output.",
  },
  {
    icon: Rocket,
    title: "Future-Ready Engineering Approach",
    desc: "Our R&D efforts are aligned with evolving industry trends, enabling us to deliver innovative and scalable solutions.",
  },
];

const tabs = [
  { id: "design", label: "Design Capabilities" },
  { id: "rd", label: "Research and Development" },
];

/* Tiny utility — re-mounts children when `key` changes, triggering CSS animations */
const AnimatedSection = ({ id, children }) => (
  <div
    key={id}
    className="animate-fadeSlideUp"
    style={{ animation: "fadeSlideUp 0.4s ease both" }}
  >
    {children}
  </div>
);

export default function DesignEngineeringPage() {
  const [activeTab, setActiveTab] = useState("design");

  return (
    <div className="font-sans bg-white">
      {/* Keyframe injected once */}
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>

      <TopBanner title="Design & Engineering" imageName='designBanner.jpeg' />

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        {/* TABS */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          {tabs.map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`cursor-pointer px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] transition-all duration-300 relative ${
                  active
                    ? "border-[#50b8af] border-x border-b-3 text-slate-900 shadow-lg shadow-[#50b8af]/20"
                    : "text-slate-500 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                {tab.label}
                {/* animated underline */}
                <span
                  className="absolute bottom-0 left-0 h-0.5 bg-[#50b8af] transition-all duration-300"
                  style={{ width: active ? "100%" : "0%" }}
                />
              </button>
            );
          })}
        </div>

        {/* TAB CONTENT — key change re-triggers animation */}
        <AnimatedSection id={activeTab}>
          {activeTab === "design" ? (
            <section className="space-y-12">
              {/* Row 1 */}
              <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-center">
                <div
                  className="space-y-6"
                  style={{ animation: "fadeSlideUp 0.5s ease 0.05s both" }}
                >
                  <h2 className="text-xl md:text-3xl font-black uppercase leading-none text-slate-900">
                    Advanced Design Capabilities
                  </h2>
                  <p className="max-w-2xl text-[15px] leading-relaxed text-slate-600">
                    We utilize modern design tools and technologies to create
                    high-precision mold structures:
                    <ul className="list-disc pl-4">
                      <li>CAD/CAM-based mold design</li>
                      <li>2D & 3D modeling and detailing</li>
                      <li>Product design support and optimization</li>
                      <li>Mold flow analysis (if applicable)</li>
                      <li>Design validation and feasibility checks</li>
                    </ul>
                    This ensures every design is accurate, efficient, and
                    production-ready
                  </p>
                </div>

                <div
                  className="relative"
                  style={{ animation: "fadeSlideUp 0.5s ease 0.15s both" }}
                >
                  <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-[#50b8af]/20 blur-2xl" />
                  <div className="relative overflow-hidden rounded-4xl border border-slate-200 shadow-[0_20px_70px_rgba(15,23,42,0.12)] group">
                    <img
                      src="/industry1.jpg"
                      alt="Design capabilities"
                      className="h-105 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-tr from-[#0f172a]/30 via-transparent to-[#50b8af]/20" />
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex gap-4 items-stretch">
                <div
                  className="w-2/3 min-h-0 overflow-hidden rounded-2xl group"
                  style={{ animation: "fadeSlideUp 0.5s ease 0.2s both" }}
                >
                  <img
                    src="/industry2.jpg"
                    alt="Image"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-1 xl:grid-cols-2">
                  {designCards.map((card, index) => {
                    const Icon = card.icon;
                    return (
                      <div
                        key={index}
                        className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#50b8af]/40"
                        style={{
                          animation: `fadeSlideUp 0.5s ease ${0.25 + index * 0.08}s both`,
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0f172a] text-[#50b8af] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <Icon size={22} />
                          </div>
                          <div className="text-5xl font-black text-slate-100 transition-colors duration-300 group-hover:text-[#50b8af]/20">
                            0{index + 1}
                          </div>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-slate-600">
                          {card.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          ) : (
            <section className="space-y-0">
              {/* Section 1 */}
              <div
                className="rounded-2xl bg-slate-50 border border-slate-100 px-8 py-12 md:px-12"
                style={{ animation: "fadeSlideUp 0.5s ease 0.05s both" }}
              >
                <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#50b8af]/30 bg-[#50b8af]/10 px-3 py-1">
                      <span className="h-2 w-2 rounded-full bg-[#50b8af]" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#0f172a]">
                        Research and Development
                      </span>
                    </div>
                    <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
                      Our research and development initiatives are focused on
                      enhancing design efficiency, improving product performance,
                      and integrating modern technologies into our processes. We
                      continuously explore new methodologies to stay ahead of
                      industry demands and deliver innovative solutions.
                      <br />
                      <br />
                      Through a combination of experimentation, analysis, and
                      technological adoption, we ensure our solutions remain
                      future-ready and highly competitive.
                    </p>
                  </div>

                  <div className="relative">
                    <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#50b8af]/20 blur-2xl" />
                    <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 shadow-[0_20px_70px_rgba(15,23,42,0.12)] group">
                      <img
                        src="/industry2.jpg"
                        alt="Research and development"
                        className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#0f172a]/35 via-transparent to-[#50b8af]/15" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div
                className="bg-white pt-14 pb-4"
                style={{ animation: "fadeSlideUp 0.5s ease 0.15s both" }}
              >
                <div className="mb-10 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#50b8af] mb-2">
                      What We Focus On
                    </p>
                    <h3 className="text-2xl md:text-3xl font-black uppercase text-slate-900 leading-tight">
                      Key Capabilities
                    </h3>
                  </div>
                  <div className="hidden md:block flex-1 max-w-xs h-px bg-gradient-to-r from-slate-200 to-transparent mb-2" />
                </div>

                <div className="grid gap-px border border-slate-100 rounded-2xl overflow-hidden md:grid-cols-2 lg:grid-cols-2">
                  {keyCapabilities.map((cap, index) => {
                    const Icon = cap.icon;
                    return (
                      <div
                        key={index}
                        className={`group bg-white p-7 flex flex-col gap-4 transition-all duration-300 hover:bg-slate-50 hover:-translate-y-0.5 hover:shadow-md ${
                          index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                        }`}
                        style={{
                          animation: `fadeSlideUp 0.5s ease ${0.2 + index * 0.08}s both`,
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0f172a] text-[#50b8af] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <Icon size={18} />
                          </div>
                          <span className="text-3xl font-black text-slate-100 group-hover:text-[#50b8af]/20 transition-colors duration-300">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <div>
                          <div className="w-6 h-0.5 bg-[#50b8af] mb-3 transition-all duration-300 group-hover:w-10" />
                          <h4 className="text-sm font-bold uppercase tracking-wide text-slate-900 mb-2 leading-snug">
                            {cap.title}
                          </h4>
                          <p className="text-sm leading-relaxed text-slate-500">
                            {cap.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          )}
        </AnimatedSection>
      </main>
    </div>
  );
}

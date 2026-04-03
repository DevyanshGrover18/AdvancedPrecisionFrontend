import { useState } from "react";
import {
  BarChart3,
  BrainCircuit,
  Cog,
  Layers3,
  Microscope,
  PenTool,
  Ruler,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  RefreshCw,
  FlaskConical,
  Cpu,
  Gauge,
  Rocket,
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

export default function DesignEngineeringPage() {
  const [activeTab, setActiveTab] = useState("design");

  return (
    <div className="font-sans bg-white">
      <TopBanner title="Design & Engineering" />

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="flex flex-wrap items-center gap-3 mb-10">
          {tabs.map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`cursor-pointer px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] transition ${
                  active
                    ? "border-[#a4d145] border-x border-b-3 text-slate-900 shadow-lg shadow-[#a4d145]/20"
                    : "text-slate-500 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {activeTab === "design" ? (
          <section className="space-y-12">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-center">
              <div className="space-y-6">
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
              <div className="relative">
                <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-[#a4d145]/20 blur-2xl" />
                <div className="relative overflow-hidden rounded-4xl border border-slate-200 shadow-[0_20px_70px_rgba(15,23,42,0.12)]">
                  <img
                    src="/industry1.jpg"
                    alt="Design capabilities"
                    className="h-105 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-tr from-[#0f172a]/30 via-transparent to-[#a4d145]/20" />
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-stretch">
              <div className="w-2/3 min-h-0">
                <img
                  src="/industry2.jpg"
                  alt="Image"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="grid gap-5 md:grid-cols-1 xl:grid-cols-2">
                {designCards.map((card, index) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={index}
                      className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0f172a] text-[#a4d145]">
                          <Icon size={22} />
                        </div>
                        <div className="text-5xl font-black text-slate-100">
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

            {/* ── Section 1: light bg ── */}
            <div className="rounded-2xl bg-slate-50 border border-slate-100 px-8 py-12 md:px-12">
              <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#a4d145]/30 bg-[#a4d145]/10 px-3 py-1">
                    <span className="h-2 w-2 rounded-full bg-[#a4d145]" />
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
                  <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#a4d145]/20 blur-2xl" />
                  <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 shadow-[0_20px_70px_rgba(15,23,42,0.12)]">
                    <img
                      src="/industry2.jpg"
                      alt="Research and development"
                      className="h-[420px] w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#0f172a]/35 via-transparent to-[#a4d145]/15" />
                  </div>
                </div>
              </div>
            </div>

            {/* ── Section 2: white bg — Key Capabilities ── */}
            <div className="bg-white pt-14 pb-4">
              {/* Header */}
              <div className="mb-10 flex items-end justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#a4d145] mb-2">
                    What We Focus On
                  </p>
                  <h3 className="text-2xl md:text-3xl font-black uppercase text-slate-900 leading-tight">
                    Key Capabilities
                  </h3>
                </div>
                {/* Decorative accent line */}
                <div className="hidden md:block flex-1 max-w-xs h-px bg-gradient-to-r from-slate-200 to-transparent mb-2" />
              </div>

              {/* Cards */}
              <div className="grid gap-px border border-slate-100 rounded-2xl overflow-hidden md:grid-cols-2 lg:grid-cols-2">
                {keyCapabilities.map((cap, index) => {
                  const Icon = cap.icon;
                  return (
                    <div
                      key={index}
                      className={`group bg-white p-7 flex flex-col gap-4 transition-all duration-200 hover:bg-slate-50 ${
                        /* Span last item full width if it's the 5th (odd one out) */
                        index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                      }`}
                    >
                      {/* Icon + index row */}
                      <div className="flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0f172a] text-[#a4d145] transition-transform duration-200 group-hover:scale-110">
                          <Icon size={18} />
                        </div>
                        <span className="text-3xl font-black text-slate-100 group-hover:text-slate-200 transition-colors">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Text */}
                      <div>
                        {/* Accent bar */}
                        <div className="w-6 h-0.5 bg-[#a4d145] mb-3 transition-all duration-300 group-hover:w-10" />
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
      </main>
    </div>
  );
}
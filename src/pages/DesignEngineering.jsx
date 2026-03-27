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
    desc: "Ability to achieve optimum mold manufacturing processes, shorte mold delivery periods and fewer mold testing requirements.",
  },
];

const rdCards = [
  {
    icon: BrainCircuit,
    title: "Material Research",
    desc: "Exploring polymers, alloys, and coatings for performance gains.",
  },
  {
    icon: Microscope,
    title: "Testing Lab",
    desc: "Evaluation workflows for fit, finish, durability, and cycle behavior.",
  },
  {
    icon: Sparkles,
    title: "Process Innovation",
    desc: "Iterative improvements to tooling methods and production outcomes.",
  },
  {
    icon: BarChart3,
    title: "Performance Review",
    desc: "Tracking results to guide future development priorities.",
  },
];

const designStats = [
  { label: "Concepts/Month", value: "18+" },
  { label: "Iterations", value: "120+" },
  { label: "Review Pass Rate", value: "96%" },
];

const rdStats = [
  { label: "Test Cycles", value: "300+" },
  { label: "Lab Samples", value: "85+" },
  { label: "New Methods", value: "14" },
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
                <div className="inline-flex items-center gap-2 rounded-full border border-[#a4d145]/30 bg-[#a4d145]/10 px-3 py-1">
                  <span className="h-2 w-2 rounded-full bg-[#a4d145]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#0f172a]">
                    Design Capabilities
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black uppercase leading-none text-slate-900">
                  Built for precise, production-ready engineering.
                </h2>

                <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
                  Use this tab for dummy copy that explains how the design team
                  moves from concept to tooling. Focus on speed, precision, and
                  manufacturability so the page feels grounded in real work.
                </p>

                <div className="grid gap-4 sm:grid-cols-3">
                  {designStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="text-3xl font-black text-slate-900">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-slate-500">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
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
                <img src="/industry2.jpg" alt="Image" className="h-full w-full object-cover" />
              </div>
              <div className="grid gap-5 md:grid-cols-1 xl:grid-cols-2">
                {designCards.map((card, index) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.title}
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
          <section className="space-y-12">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#a4d145]/30 bg-[#a4d145]/10 px-3 py-1">
                  <span className="h-2 w-2 rounded-full bg-[#a4d145]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#0f172a]">
                    Research and Development
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black uppercase leading-none text-slate-900">
                  Testing new ideas before they reach production.
                </h2>

                <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
                  Dummy content for the R&D tab. This area can later hold lab
                  notes, test summaries, materials research, and innovation
                  milestones.
                </p>

                <div className="grid gap-4 sm:grid-cols-3">
                  {rdStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="text-3xl font-black text-slate-900">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-slate-500">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
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

            <div className="flex gap-8 items-stretch">
              <div className="w-1/2 min-h-0">
                <img src="/industry3.jpg" alt="Research and development" className="h-full w-full object-cover rounded-3xl" />
              </div>
              <div className="w-1/2 flex flex-col justify-center space-y-5">
                <h3 className="text-2xl font-black uppercase text-slate-900">
                  Pushing boundaries through rigorous research.
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  Our R&D division operates at the intersection of material science and manufacturing precision. From early-stage polymer research to full-cycle testing protocols, every innovation is validated before it reaches production.
                </p>
                <p className="text-sm leading-relaxed text-slate-600">
                  We run systematic evaluation workflows covering fit, finish, durability, and thermal behavior — ensuring that every new process or material delivers measurable improvements in performance and consistency.
                </p>
                <p className="text-sm leading-relaxed text-slate-600">
                  Insights from our testing labs directly inform tooling decisions and production planning, creating a feedback loop that shortens development cycles and reduces waste across the manufacturing floor.
                </p>
                <div className="pt-2">
                  <button className="inline-flex items-center gap-2 border px-6 py-3 cursor-pointer text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#a4d145] text-[#0f172a] transition">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
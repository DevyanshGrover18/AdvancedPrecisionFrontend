import { useState } from "react";
import {
  FlaskConical,
  Gauge,
  Microscope,
  Scale,
  ShieldCheck,
  Thermometer,
  UserCheck,
  Wrench,
} from "lucide-react";
import TopBanner from "../components/TopBanner";

const qualityPoints = [
  "Starting right from the finest quality raw material to the end product, the whole process focuses on the best product with no title of compromise.",
  "To achieve the maximum level of quality in our product range, we make use of ultra sophisticated tools and machines to carry out the processes.",
];

const testingPoints = [
  {
    icon: FlaskConical,
    text: "Ultra-modern laboratory for advanced inspection and testing.",
  },
  {
    icon: Gauge,
    text: "Advanced testing machinery and instruments to facilitate speedy testing processes.",
  },
  {
    icon: Scale,
    text: "Flawless porting rules and consistent weight.",
  },
  {
    icon: Thermometer,
    text: "Testing of each mold under stringent production conditions.",
  },
  {
    icon: UserCheck,
    text: "Experienced quality auditors keep close watch on individual testing process.",
  },
];

const stats = [
  { value: "100%", label: "Inspection Rate" },
  { value: "Zero", label: "Compromise Policy" },
  { value: "ISO", label: "Certified Processes" },
];

export default function QualityTestingPage() {
  return (
    <div className="font-sans bg-white">
      <TopBanner title="Quality & Testing" />

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 space-y-20">

        {/* ── QUALITY SECTION ── */}
        <section className="space-y-10">
          {/* Section label */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#a4d145]/30 bg-[#a4d145]/10 px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-[#a4d145]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#0f172a]">
              Quality
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black uppercase leading-none text-slate-900 max-w-2xl">
            Quality is not a routine activity — it's a mission.
          </h2>

          <p className="text-lg leading-relaxed text-slate-600 max-w-3xl">
            At ADS, we believe that each and every variable or component involved in the formation of a mold system is of extreme importance for its final success. Therefore, we test and assess every minute detail to ensure that the final product is an epitome of flawlessness and perfection.
          </p>

          {/* Full-width lab image */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-[0_20px_60px_rgba(15,23,42,0.10)]">
            <img
              src="/quality-lab.jpg"
              alt="Quality lab"
              className="w-full h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0f172a]/30 via-transparent to-[#a4d145]/10" />
            <div className="absolute bottom-6 left-6 bg-[#0f172a]/80 backdrop-blur-sm rounded-2xl px-5 py-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#a4d145]">
                In-House Quality Lab
              </span>
            </div>
          </div>

          {/* Two-column: text left, image + highlight right */}
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] items-stretch">
            <div className="space-y-6 flex flex-col justify-center">
              {qualityPoints.map((point, i) => (
                <p key={i} className="text-base leading-relaxed text-slate-600">
                  {point}
                </p>
              ))}

              {/* Pull quote */}
              <blockquote className="border-l-4 border-[#a4d145] pl-5 py-1">
                <p className="text-xl font-black uppercase leading-snug text-[#0f172a]">
                  Our best-in-class manufacturing process renders lowest possible cavity-to-cavity weight and dimensional variation.
                </p>
              </blockquote>

              <p className="text-base leading-relaxed text-slate-600">
                We choose supreme quality materials for both mold parts and base for unmatched resistance for wear and corrosion.
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 pt-2">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <div className="text-2xl font-black text-slate-900">{stat.value}</div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-slate-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-[0_20px_60px_rgba(15,23,42,0.10)]">
              <img
                src="/quality-machine.jpg"
                alt="Manufacturing process"
                className="w-full h-full object-cover min-h-[360px]"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/20 via-transparent to-[#a4d145]/15" />
            </div>
          </div>
        </section>

        {/* ── DIVIDER ── */}
        <div className="w-full h-px bg-slate-200" />

        {/* ── TESTING SECTION ── */}
        <section className="space-y-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#a4d145]/30 bg-[#a4d145]/10 px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-[#a4d145]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#0f172a]">
              Testing
            </span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] items-stretch">
            {/* Testing bullets left */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-black uppercase leading-none text-slate-900">
                Tested under the most stringent conditions.
              </h2>
              <p className="text-lg leading-relaxed text-slate-600">
                Every mold that leaves our facility has passed through a rigorous series of tests carried out by our experienced quality team using state-of-the-art equipment.
              </p>

              <ul className="space-y-4 pt-2">
                {testingPoints.map((point, i) => {
                  const Icon = point.icon;
                  return (
                    <li
                      key={i}
                      className="flex items-start gap-4 group"
                    >
                      <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0f172a] text-[#a4d145] group-hover:bg-[#a4d145] group-hover:text-[#0f172a] transition">
                        <Icon size={18} />
                      </div>
                      <p className="text-sm leading-relaxed text-slate-600 pt-2">
                        {point.text}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Testing image right */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-[0_20px_60px_rgba(15,23,42,0.10)]">
              <img
                src="/quality-testing.jpg"
                alt="Testing process"
                className="w-full h-full object-cover min-h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-[#0f172a]/30 via-transparent to-[#a4d145]/10" />
              {/* Floating badge */}
              <div className="absolute top-6 right-6 bg-[#a4d145] rounded-2xl px-4 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-[#0f172a]" />
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-[#0f172a]">
                    Quality Assured
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
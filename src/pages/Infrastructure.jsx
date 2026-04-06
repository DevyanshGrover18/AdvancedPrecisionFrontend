import TopBanner from "../components/TopBanner";

const sections = [
  {
    title: "MANUFACTURING & TOOL ROOM",
    image: "/industry2.jpg",
    body: [
      "Our infrastructure is built on a strong foundation of advanced manufacturing systems and a fully equipped tool room. We utilize modern CNC machines, EDM technology, and precision machining equipment to deliver high-accuracy mold components.",
      "The integrated workflow from design to final assembly ensures consistency, efficiency, and reduced production time. Our organized facility layout and skilled workforce enable us to handle complex mold requirements with precision and reliability.",
    ],
    highlights: [
      "Advanced CNC & EDM machinery",
      "Precision mold manufacturing capabilities",
      "Structured and efficient workflow",
      "Skilled engineering and technical team",
    ],
  },
  {
    title: "Quality Standards & Production Capacity",
    image: "/industry3.jpg",
    body: [
      "Quality is an integral part of our infrastructure. We employ advanced inspection tools and measurement systems to ensure every mold meets strict dimensional and performance standards.",
      "Our facility is designed to support both small and large-scale production with consistent output quality. With optimized processes and continuous monitoring, we ensure timely delivery without compromising precision.",
    ],
    highlights: [
      "Precision inspection and testing systems",
      "Strict quality control processes",
      "Capability for small to high-volume production",
      "Consistent and reliable output",
    ],
  },
];

const Infrastructure = () => {
  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-[#ecf9f8]">
      <TopBanner title="Infrastructure" imageName="infraBanner.jpeg" />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-14">
          {sections.map((section, index) => {
            const isReversed = index === 1;

            return (
              <div key={section.title} className="space-y-14">
                <div
                  className={`grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center ${
                    isReversed ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={isReversed ? "lg:col-start-2" : ""}>
                    <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#50b8af]">
                      Infrastructure
                    </p>
                    <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                      {section.title}
                    </h2>

                    <div className="mt-5 space-y-4 text-base leading-7 text-slate-600">
                      {section.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>

                    <div className="mt-8">
                      <h3 className="text-xs font-bold uppercase tracking-[0.35em] text-[#50b8af]">
                        Key Highlights
                      </h3>
                      <ul className="mt-4 space-y-3 text-base leading-7 text-slate-700">
                        {section.highlights.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#50b8af]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={isReversed ? "lg:col-start-1" : ""}>
                    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-lg shadow-slate-200/60">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="h-[320px] w-full object-cover sm:h-[380px] lg:h-[460px]"
                      />
                    </div>
                  </div>
                </div>

                {index < sections.length - 1 ? (
                  <div className="relative">
                    <div className="border-t border-slate-300" />
                    <div className="h-6 w-6 rounded-full bg-primary absolute left-1/2 right-1/2 -top-3" />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Infrastructure;

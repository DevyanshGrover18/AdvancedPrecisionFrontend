import { Brain, FlaskConical, ClipboardCheck } from "lucide-react";

const cards = [
  {
    icon: Brain,
    title: "Design Capabilities",
    desc: "Integrated CAD/CAM workflows with advanced simulation for thermal analysis and material flow optimization.",
    img: "/industry1.jpg",
  },
  {
    icon: FlaskConical,
    title: "Research & Development",
    desc: "Continuous exploration of new alloys, coatings, and cooling technologies.",
    img: "/industry2.jpg",
  },
  {
    icon: ClipboardCheck,
    title: "Quality & Testing",
    desc: "Rigorous inspections and in-house trials ensure international standards.",
    img: "/industry3.jpg",
  },
];

const QualitySection = () => {
  return (
    <section className="py-10 w-full overflow-hidden">
      <div className="mb-10 max-w-7xl mx-auto px-6 md:px-20">
        <h3 className="text-secondary text-center text-xl mb-3 md:text-3xl font-bold uppercase">
          Quality & Innovation
        </h3>
        <p className="text-primary text-center text-sm">
          We offer a variety of high-quality ACME molds for Single Stage ISBM
          for the manufacturing of PET, PP, PC and TRITAN bottles. We provide
          better mold matrix optimization which results in increased volume
          production of containers.
        </p>
      </div>

      <div className="h-[80vh] w-full flex">
        {cards.map(({ icon: Icon, title, desc, img }, index) => (
          <div
            key={title}
            className="group relative flex-1 overflow-hidden cursor-pointer transition-all duration-500 hover:flex-[1.5]"
          >
            {/* Background */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${img})` }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition" />

            {/* Content */}
            <div className="relative h-full flex flex-col justify-end p-8 text-white">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
                <Icon size={22} className="text-secondary" />
              </div>

              {/* Number */}
              <span className="text-4xl font-black opacity-70 mb-2">
                0{index + 1}.
              </span>

              {/* Title */}
              <h3 className="text-2xl font-bold">{title}</h3>

              {/* Hidden Content */}
              <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                <p className="mt-4 text-sm text-gray-300">{desc}</p>
                <button className="mt-4 text-secondary font-semibold">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QualitySection;

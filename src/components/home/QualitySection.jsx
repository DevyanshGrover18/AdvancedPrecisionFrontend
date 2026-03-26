import { Brain, FlaskConical, ClipboardCheck } from "lucide-react";

const cards = [
  {
    icon: Brain,
    title: "Design Capabilities",
    desc: "Integrated CAD/CAM workflows with advanced simulation for thermal analysis and material flow optimization.",
    img: "/public/industry1.jpg",
  },
  {
    icon: FlaskConical,
    title: "Research & Development",
    desc: "Continuous exploration of new alloys, coatings, and cooling technologies.",
    img: "/public/industry2.jpg",
  },
  {
    icon: ClipboardCheck,
    title: "Quality & Testing",
    desc: "Rigorous inspections and in-house trials ensure international standards.",
    img: "/public/industry3.jpg",
  },
];

const QualitySection = () => {
  return (
    <section className="h-[80vh] w-full flex" id="quality">

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

            {/* Number */}
            <span className="text-4xl font-black opacity-70 mb-2">
              0{index + 1}.
            </span>

            {/* Title */}
            <h3 className="text-2xl font-bold">{title}</h3>

            {/* Hidden Content */}
            <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
              <p className="mt-4 text-sm text-gray-300">{desc}</p>
              <button className="mt-4 text-primary font-semibold">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default QualitySection;
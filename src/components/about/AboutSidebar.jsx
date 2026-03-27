import { ChevronRight, Dot } from "lucide-react";

const AboutSidebar = ({ items, activeIndex, onSelect }) => (
  <div className="lg:col-span-3 py-12 pr-0 lg:pr-12 border-r">
    <nav className="sticky top-32 flex flex-col gap-2">
      {items.map((item, i) => (
        <button
          key={item.label}
          onClick={() => onSelect(i)}
          className={`flex justify-between px-6 py-4 rounded-xl text-left uppercase text-sm font-bold transition ${
            i === activeIndex
              ? "bg-[#a4d145] text-white"
              : "text-gray-500 hover:bg-gray-100"
          }`}
        >
          {item.label}
          <span>{i === activeIndex ? "" : <ChevronRight/>}</span>
        </button>
      ))}
    </nav>
  </div>
);

export default AboutSidebar;

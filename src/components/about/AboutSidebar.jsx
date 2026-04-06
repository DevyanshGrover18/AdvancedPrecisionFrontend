// AboutSidebar.jsx
import { ChevronRight } from "lucide-react";

const AboutSidebar = ({ items, activeIndex, onSelect }) => (
  <div className="lg:col-span-3 py-12 pr-0 lg:pr-12 border-r">
    <nav className="sticky top-32 flex flex-col gap-2">
      {items.map((item, i) => (
        <button
          key={item.label}
          onClick={() => onSelect(i)}
          className={`flex justify-between items-center px-6 py-4 rounded-xl text-left uppercase text-sm font-bold transition-all duration-300 ${
            i === activeIndex
              ? "bg-[#50b8af] text-white scale-[1.02] shadow-md shadow-[#50b8af]/30"
              : "text-gray-500 hover:bg-gray-100 hover:text-gray-800 hover:translate-x-1"
          }`}
        >
          {item.label}
          <ChevronRight
            size={16}
            className={`transition-all duration-300 ${
              i === activeIndex
                ? "opacity-0 -translate-x-2"
                : "opacity-100 translate-x-0"
            }`}
          />
        </button>
      ))}
    </nav>
  </div>
);

export default AboutSidebar;

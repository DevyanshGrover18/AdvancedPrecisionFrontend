import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SHRINK_AT = 80; // px — shrink when scrolled past this
const EXPAND_AT = 20; // px — expand when scrolled back under this

const aboutDropdownItems = [
  { label: "Our Mission", slug: "our-mission" },
  { label: "Management", slug: "management" },
  { label: "Human Resource", slug: "human-resource" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y > SHRINK_AT) setScrolled(true);
      if (y < EXPAND_AT) setScrolled(false);
      // in between → do nothing, hold current state
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (location) => {
    const slug = location
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    navigate(`/${slug}`);
  };

  const handleAboutTabNavigate = (tabSlug) => {
    navigate(`/about-us?tab=${tabSlug}`);
    setAboutOpen(false);
    setMenuOpen(false);
  };

  const mainLinks = [
    "HOME",
    "ABOUT US",
    "INFRASTRUCTURE",
    "DESIGN & ENGINEERING",
    "QUALITY & TESTING",
    "PRODUCTS",
  ];

  const topLinks = ["HOME", "GALLERY", "CAREERS", "CONTACT US"];

  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b">
      {/* TOP STRIP */}
      <div
        className={`hidden md:flex justify-end px-4 lg:px-20 text-xs text-gray-600 gap-3 lg:gap-4 overflow-hidden transition-all duration-300 ease-in-out ${
          scrolled
            ? "max-h-0 py-0 opacity-0 pointer-events-none"
            : "max-h-10 py-2 opacity-100"
        }`}
      >
        {/* {topLinks.map((item, i) => (
          <span key={item} className="flex items-center gap-3">
            <button
              onClick={() => handleNavigate(item)}
              className="hover:text-black cursor-pointer font-medium whitespace-nowrap"
            >
              {item}
            </button>
            {i !== topLinks.length - 1 && <span>|</span>}
          </span>
        ))} */}
      </div>

      {/* MAIN NAV */}
      <div
        className={`flex items-center justify-between px-4 sm:px-6 lg:px-10 transition-all duration-300 ease-in-out ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        {/* LOGO */}
        <button
          onClick={() => handleNavigate("home")}
          className="flex items-center gap-2 font-bold italic"
        >
          <img
            src="/logo.png"
            alt="Advanced Precision Logo"
            className="w-auto transition-all duration-300 ease-in-out"
            style={{ height: scrolled ? "48px" : "60px" }}
          />

          {/* <span
            className="text-[#0f172a] transition-all duration-300 ease-in-out whitespace-nowrap"
            style={{ fontSize: scrolled ? "1rem" : "1.25rem" }}
          >
            {scrolled ? "AP" : "AdvancedPrecision"}
          </span> */}
        </button>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {mainLinks.map((item) =>
            item === "ABOUT US" ? (
              // ── ABOUT US with dropdown ──
              <div key={item} className="relative group">
                <button
                  onClick={() => handleNavigate(item)}
                  className="flex items-center gap-1 text-xs xl:text-sm font-medium text-gray-800 hover:text-[#50b8af] transition whitespace-nowrap"
                >
                  {item}
                  <ChevronDown
                    size={14}
                    className="transition-transform duration-200 group-hover:rotate-180"
                  />
                </button>

                <div
                  className="absolute top-full left-0 mt-2 w-44 bg-white border border-gray-100 rounded-md shadow-lg py-1 z-50 
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                  transition-all duration-200"
                >
                  {aboutDropdownItems.map((tab) => (
                    <button
                      key={tab.slug}
                      onClick={() => handleAboutTabNavigate(tab.slug)}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-[#50b8af]/10 hover:text-[#50b8af] transition"
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <button
                key={item}
                onClick={() => handleNavigate(item)}
                className="text-xs cursor-pointer xl:text-sm font-medium text-gray-800 hover:text-[#50b8af] transition whitespace-nowrap"
              >
                {item}
              </button>
            ),
          )}
          <button
            onClick={() => handleNavigate("/contact-us")}
            className="bg-[#50b8af] hover:bg-[#3fa79f] text-white px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium rounded-md transition whitespace-nowrap"
          >
            CONTACT US
          </button>
        </nav>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="lg:hidden p-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t px-4 py-5 flex flex-col gap-6 shadow-md">
          {/* <div className="flex flex-col gap-4 border-b pb-4">
            {topLinks.map((item) => (
              <button
                key={item}
                onClick={() => {
                  handleNavigate(item);
                  setMenuOpen(false);
                }}
                className="text-sm font-medium text-gray-700 text-left"
              >
                {item}
              </button>
            ))}
          </div> */}
          <div className="flex flex-col gap-4">
            {mainLinks.map((item) => (
              <button
                key={item}
                onClick={() => {
                  handleNavigate(item);
                  setMenuOpen(false);
                }}
                className="text-sm font-semibold text-gray-900 text-left"
              >
                {item}
              </button>
            ))}
          </div>
          <button
            onClick={() => handleNavigate("/contact-us")}
            className="mt-2 bg-[#50b8af] text-white py-3 rounded-md  text-sm"
          >
            CONTACT US
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;

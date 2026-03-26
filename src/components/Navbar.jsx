import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // scroll down → shrink
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setScrolled(true);
      }
      // scroll up → expand
      else if (currentScrollY < lastScrollY) {
        setScrolled(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (location) => {
    navigate(`/${location.toLowerCase()}`);
  };

  const mainLinks = [
    "ABOUT US",
    "INFRASTRUCTURE",
    "DESIGN & ENGINEERING",
    "QUALITY & TESTING",
    "PRODUCTS",
    "CLIENTS",
  ];

  const topLinks = ["HOME", "MEDIA", "VIDEO", "CAREERS", "CONTACT US"];

  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b transition-all duration-300">

      {/* 🔹 TOP STRIP */}
      {!scrolled && (
        <div className="hidden md:flex justify-end px-4 lg:px-20 py-2 text-xs text-gray-600 gap-3 lg:gap-4">
          {topLinks.map((item, i) => (
            <span key={item} className="flex items-center gap-3">
              <button
                onClick={() => handleNavigate(item)}
                className="hover:text-black font-medium whitespace-nowrap"
              >
                {item}
              </button>
              {i !== topLinks.length - 1 && <span>|</span>}
            </span>
          ))}
        </div>
      )}

      {/* 🔹 MAIN NAV */}
      <div
        className={`flex items-center justify-between px-4 sm:px-6 lg:px-10 transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >

        {/* LOGO */}
        <button
          onClick={() => handleNavigate("home")}
          className="flex items-center gap-2 font-bold italic"
        >
          <div
            className={`bg-[#a4d145] rounded-lg flex items-center justify-center transition-all duration-300 ${
              scrolled ? "p-1" : "p-2"
            }`}
          >
            <svg
              fill="#0f172a"
              height={scrolled ? "24px" : "30px"}
              width={scrolled ? "24px" : "30px"}
              viewBox="0 0 512 512"
            >
              <path d="M437.02,74.98C388.667,26.628,324.381,0,256,0C187.62,0,123.333,26.628,74.981,74.98C26.628,123.333,0,187.619,0,256c0,68.38,26.628,132.667,74.981,181.02C123.334,485.373,187.62,512,256,512s132.667-26.628,181.02-74.981C485.372,388.667,512,324.38,512,256C512,187.619,485.372,123.333,437.02,74.98z" />
            </svg>
          </div>

          <span className="text-[#0f172a] text-lg sm:text-xl transition-all duration-300">
            {scrolled ? "AP" : "AdvancedPrecision"}
          </span>
        </button>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {mainLinks.map((item) => (
            <button
              key={item}
              onClick={() => handleNavigate(item)}
              className="text-xs xl:text-sm font-semibold text-gray-800 hover:text-blue-600 transition whitespace-nowrap"
            >
              {item}
            </button>
          ))}

          <button className="bg-[#a4d145] hover:bg-[#80a334] text-white px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold rounded-md transition whitespace-nowrap">
            BROCHURE
          </button>
        </nav>

        {/* MOBILE MENU */}
        <button
          className="lg:hidden p-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 🔹 MOBILE DROPDOWN */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t px-4 py-5 flex flex-col gap-6 shadow-md">
          <div className="flex flex-col gap-4 border-b pb-4">
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
          </div>

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

          <button className="mt-2 bg-[#a4d145] text-white py-3 rounded-md font-semibold text-sm">
            BROCHURE
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
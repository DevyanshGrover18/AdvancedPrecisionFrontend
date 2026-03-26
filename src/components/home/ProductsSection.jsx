import { useState } from "react";
import { ArrowRight } from "lucide-react";

const products = [
  {
    title: "Injection Molds",
    desc: "High-precision multi-cavity systems designed for efficiency and consistency in large-scale production environments.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8wJMMegAVQbXSJa5TBfFFWrN5rvkqLQaHYUlN7_Ho3Ydz7oVkBEZ0hJ04OebisNwtuFkqJSRCThiEKzAZjnmlqZhyMBWLhLfyYOKhz_K_p3pLWdr4K3MMpcjUgv2WAfFEizRVb1YuR3ci1vli01gCT8CxK8dC5u6Nd7j8tIu1IlL_yAo4jqUXjNIqvJx8m5n6J1inN_Wr_1cOhtsx7XqNE3xFMqsUzSfKtT2CDKHiXauOW2G8rGWEI8qEYk5Gfdl_5MsUn84r3va0",
  },
  {
    title: "Blow Molds",
    desc: "Advanced multi-layer blow molding solutions for manufacturing durable and lightweight containers.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpIRX1CZ6uxZhF7qkeyDdWAca2YDSQGQptbuCdBOXJIU3Rn8krScolkkRPxlw06KE2S6L-y1TqyD1sJJGmF-X3LmkPufm2Tvk6QkbLHEPgT2T5TTVtLNAGlPzNuldkT3dhAlm4yuDfGzdhNR4eaFI7MqaBszIBPX4cOkmpMuggW0cE5MQRjxBdczd7m3rB1My_D9uUFKvSAq8Fx7zCyF1-YTORk2-ugumARAYRmojqjPrgpe80PJqqQYwlDdxm-H1LR0Stbg0N4x3W",
  },
  {
    title: "Preform Molds",
    desc: "Optimized for fast cycle times and high-volume production with unmatched precision.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjEMbPiCEd5YjJmnygkLPtBt3D7OW0M2QsO2skU2ztd2fnsgq2ZykXsI2sNFyWCpWZRBsK-EUsuo3MRiIspo5FGZPGMHmyOrpH9Otq3ibPpUDVZS876769RxatW0iiV5gNKVuyrkeLEv4Q6iFLOS2CaR-UfjRFTAmb1tEGiseJOHEJ1NAVyunA1BsJNEy29dpnPG_poqqQXi4ioio7f7mgWOnFfbaMbA_44fjZH_whUE7X5DrZ9l1tU1TuL83Zj3aIcLNLh6B7ooAI",
  },
  {
    title: "Cap & Closure",
    desc: "Custom and standard neck finishes engineered for reliability and compatibility.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDC2vzEHFBjsYlz8J_oesg4Hub7PFv7M06FoXCXrsM4GC1MDHyTftH-3xJgpJZFaH-DMa1jrKZ213sAcqir2P9Hl95bfQ26pf6A5Lh0ZBqzX5kCdsG_bizj82g5xrUU23ZergDLJiCV6CRQ-FQl3EaRbtgJHdRFJxB3kFG-FFyIjqyeVElDOOZMFD7Re5POjN-hGpWuMaXmhsD-PMGuKW1srYvejutVpZ18-bL7nhpnO_1gRnAvp6msW5BiICQnEEMgkR02D_qM6IA",
  },
];

const ProductsSection = () => {
  const [active, setActive] = useState(0);
  const product = products[active];

  return (
    <section className="py-24 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-6 md:px-20">

        {/* HEADER */}
        <div className="mb-12">
          <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em]">
            Product Catalog
          </h2>
          <h3 className="text-4xl font-black text-primary mt-3">
            PRECISION MOLD TYPES
          </h3>
        </div>

        {/* TABS */}
        <div className="flex flex-wrap gap-4 mb-12">
          {products.map((p, i) => (
            <button
              key={p.title}
              onClick={() => setActive(i)}
              className={`pb-3 cursor-pointer text-sm font-bold transition relative ${
                active === i
                  ? "text-primary"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {p.title}
              {active === i && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary" />
              )}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center transition-all duration-500"
              style={{ backgroundImage: `url('${product.img}')` }}
            />
          </div>

          {/* TEXT */}
          <div className="space-y-6">
            <h4 className="text-3xl md:text-4xl font-black text-primary">
              {product.title}
            </h4>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              {product.desc}
            </p>

            <button className="inline-flex cursor-pointer items-center gap-2 bg-primary text-primary px-6 py-3 rounded-md font-bold hover:bg-[#587025] transition">
              Explore More <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
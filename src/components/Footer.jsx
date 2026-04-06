import React from "react";
import { Cpu, Globe, Mail, Share2, MapPin, Phone, Map } from "lucide-react";

const quickLinks = [
  { title: "Our Mission", slug: "our-mission" },
  { title: "Management", slug: "management" },
  { title: "Human Resource", slug: "human-resource" },
  {title: "Media", slug: "gallery"},
];
const productLinks = [
  "PET Molds",
  "PP Containers",
  "Cap & Closures",
  "Custom Molds",
];

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-slate-800 pt-10 pb-4 px-6 md:px-20 border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1 space-y-6">
          <div className="flex justify-center gap-3">
            <img src="/logo.png" alt="" className="h-16 w-auto"/>
            
          </div>
          <p className="text-sm leading-relaxed">
            Global leaders in high-precision mold manufacturing for the beverage
            and packaging industries. Delivering excellence since 1998.
          </p>
          {/* <div className="flex gap-4">
            {[Globe, Mail, Share2].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div> */}
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="text-primary font-bold text-lg uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="space-y-4 text-sm">
            {quickLinks.map((l) => (
              <li key={l.slug}>
                <a
                  href={`about-us/?tab=${l.slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {l.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div className="space-y-6">
          <h4 className="text-primary font-bold text-lg uppercase tracking-wider">
            Products
          </h4>
          <ul className="space-y-4 text-sm">
            {productLinks.map((l) => (
              <li key={l}>
                <a href="#" className="hover:text-primary transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Office */}
        <div className="col-span-2 md:col-span-1 space-y-6">
          <h4 className="text-primary font-bold text-lg uppercase tracking-wider">
            Office
          </h4>
          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-secondary shrink-0 mt-0.5" />
              <p>
                123 Industrial Hub, Tech City,
                <br />
                Pin - 400001, India
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <Phone size={20} className="text-secondary shrink-0" />
              <div className="flex flex-col">
                <p>+91 73039 37438</p>
                <p>+91 88828 50571</p>
                <p>+91 70044 14127</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-4 mt-4 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-bold uppercase tracking-widest">
        <p>© 2026 ADVANCED PRECISION. ALL RIGHTS RESERVED.</p>
        <div className="">
          Design and Developed by{" "}
          <a href="https://codenap.in/" className="text-primary underline">
            Codenap
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

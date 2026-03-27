import React from "react";
import { Cpu, Globe, Mail, Share2, MapPin, Phone, Map } from "lucide-react";

const quickLinks = ["Our History", "Career Opportunities", "Technical Support", "Sustainability"];
const productLinks = ["PET Molds", "PP Containers", "Cap & Closures", "Custom Molds"];

const Footer = ()=> {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-10 pb-4 px-6 md:px-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-slate-900">
              <Cpu size={18} strokeWidth={2.5} />
            </div>
            <h2 className="text-white text-xl font-black tracking-tight">
              AdvancedPrecicsion
            </h2>
          </div>
          <p className="text-sm leading-relaxed">
            Global leaders in high-precision mold manufacturing for the beverage
            and packaging industries. Delivering excellence since 1998.
          </p>
          <div className="flex gap-4">
            {[Globe, Mail, Share2].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="text-white font-bold text-lg uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="space-y-4 text-sm">
            {quickLinks.map((l) => (
              <li key={l}>
                <a href="#" className="hover:text-primary transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div className="space-y-6">
          <h4 className="text-white font-bold text-lg uppercase tracking-wider">
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
        <div className="space-y-6">
          <h4 className="text-white font-bold text-lg uppercase tracking-wider">
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
            <div className="flex items-start gap-3">
              <Phone size={20} className="text-secondary shrink-0" />
              <p>+91 (022) 2345 6789</p>
            </div>
            <div className="flex items-start gap-3">
              <Map size={20} className="text-secondary shrink-0" />
              <p>View on Map</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-4 mt-4 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-bold uppercase tracking-widest">
        <p>© 2024 ACME DRINKTEC SOLUTIONS. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          {["Privacy Policy", "Terms of Service", "Cookies Settings"].map((l) => (
            <a key={l} href="#" className="hover:text-primary transition-colors">
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
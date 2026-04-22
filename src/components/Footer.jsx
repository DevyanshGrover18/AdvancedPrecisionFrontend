import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, ReceiptIndianRupee } from "lucide-react";
import { api } from "../services/api";

const quickLinks = [
  { title: "Our Mission", slug: "our-mission" },
  { title: "Management", slug: "management" },
  { title: "Human Resource", slug: "human-resource" },
];

const fallbackProductLinks = [
  "IBM MOLD",
  "PET PREFORM MOLD",
  "ASB SERIES SINGLE STAGE MOLD"
];

const normalizeProducts = (payload) => {
  if (Array.isArray(payload)) {
    return payload;
  }

  if (Array.isArray(payload?.products)) {
    return payload.products;
  }

  if (Array.isArray(payload?.data)) {
    return payload.data;
  }

  if (Array.isArray(payload?.data?.products)) {
    return payload.data.products;
  }

  return [];
};

const resolveTitle = (product, index) =>
  product?.name ??
  product?.title ??
  product?.productName ??
  `Product ${index + 1}`;

const Footer = () => {
  const [productLinks, setProductLinks] = useState(fallbackProductLinks);

  useEffect(() => {
    let isMounted = true;

    const loadProducts = async () => {
      try {
        const response = await api.get("/api/products");
        const nextLinks = normalizeProducts(response)
          .filter((product) => product.isActive !== false)
          .slice(0, 4)
          .map((product, index) => resolveTitle(product, index));

        if (isMounted && nextLinks.length > 0) {
          setProductLinks(nextLinks);
        }
      } catch {
        if (isMounted) {
          setProductLinks(fallbackProductLinks);
        }
      }
    };

    loadProducts();

    return () => {
      isMounted = false;
    };
  }, []);

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
                <Link
                  to={`/about-us?tab=${l.slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {l.title}
                </Link>
              </li>
            ))}
            <li><Link to='/gallery' >Media</Link></li>
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
                <Link to="/products" className="hover:text-primary transition-colors">
                  {l}
                </Link>
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
                P-37 Sector-3 Bawana Industrial Area, New Delhi, India
                <br />
                Pin - 110034
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
            <div className="flex gap-3 items-center">
              <ReceiptIndianRupee size={20} className="text-secondary shrink-0" />
              <div className="flex gap-2">
                <strong>GST</strong> - 07CGAPK8374H1Z6
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

import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/home/HeroSection";
import SolutionsSection from "../components/home/SolutionsSection";
import ProductsSection from "../components/home/ProductsSection";
import InfrastructureSection from "../components/home/InfrastructureSection";
import QualitySection from "../components/home/QualitySection";
import CtaSection from "../components/home/CtaSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <SolutionsSection />
        <InfrastructureSection />
        <ProductsSection />
        <QualitySection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

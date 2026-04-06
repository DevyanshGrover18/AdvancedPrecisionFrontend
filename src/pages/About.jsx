import React, { useEffect, useState } from "react";
import AboutHero from "../components/about/AboutHero";
import AboutSidebar from "../components/about/AboutSidebar";
import AboutContent from "../components/about/AboutContent";
import TopBanner from "../components/TopBanner";
import {useSearchParams} from "react-router-dom";

const aboutSections = [
  {
    label: "Our Mission",
    slug: "our-mission",
    title: "Engineered to solve real manufacturing problems.",
    image: "/about1.jpg",
    body: [
      "Our mission is to provide reliable, high-performance mold solutions that enhance production efficiency and product quality for our clients.",
      "We aim to build long-term partnerships by delivering precision, consistency, and value in every project we undertake.",
    ],
    stats: [
      { label: "Years in market", value: "25+" },
      { label: "Projects delivered", value: "1,200+" },
      { label: "Clients Served", value: "50+" },
    ],
  },
  {
    label: "Management",
    slug: "management",
    title: "A leadership team focused on precision and delivery.",
    image: "/industry2.jpg",
    body: [
      "Our management team brings extensive industry experience and technical expertise, guiding the company with a clear vision for growth and excellence.",
      "With a focus on quality, efficiency, and innovation, our leadership ensures that every project is executed with precision and professionalism.",
    ],
    stats: [
      { label: "Leadership teams", value: "3" },
      { label: "Cross-functional squads", value: "8" },
      { label: "On-time delivery", value: "96%" },
    ],
  },
  {
    label: "Human Resource",
    slug: "human-resource",
    title: "Skilled people behind every mold and every process.",
    image: "/industry3.jpg",
    body: [
      "We foster a work environment that encourages collaboration, accountability, and continuous improvement. Our team works closely across departments to ensure seamless execution, timely delivery, and consistent quality in every project.",
      "Safety, discipline, and attention to detail are at the core of our daily operations.",
    ],
    stats: [
      { label: "Skilled specialists", value: "80+" },
      { label: "Training hours / year", value: "2,500+" },
      { label: "Retention rate", value: "91%" },
    ],
  },
];

const AboutPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // useEffect(() => {
  //   const element = document.getElementById("about-hero");
  //   setTimeout(() => {
  //     element.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }, 200);
  // }, [searchParams])
  

  const tabParam = searchParams.get("tab");
  const activeIndex = Math.max(
    0,
    aboutSections.findIndex((s) => s.slug === tabParam), // -1 → 0 via max
  );

  const handleSelect = (index) => {
    setSearchParams({ tab: aboutSections[index].slug });
  };

  const activeSection = aboutSections[activeIndex];

  return (
    <div className="font-sans">
      <TopBanner title={"About Us"} imageName={'aboutBanner.jpeg'} />
      <main className="max-w-350 mx-auto px-6 md:px-12">
        <AboutHero />
        <section className="grid grid-cols-1 lg:grid-cols-12">
          <AboutSidebar
            items={aboutSections}
            activeIndex={activeIndex}
            onSelect={handleSelect}
          />
          <AboutContent content={activeSection} />
        </section>
      </main>
    </div>
  );
};

export default AboutPage;

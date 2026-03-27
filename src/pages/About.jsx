import React, { useState } from "react";
import AboutHero from "../components/about/AboutHero";
import AboutSidebar from "../components/about/AboutSidebar";
import AboutContent from "../components/about/AboutContent";
import TopBanner from "../components/TopBanner";

const aboutSections = [
  {
    label: "Our Mission",
    title: "Engineered to solve real manufacturing problems.",
    image: "/about1.jpg",
    body: [
      "We design tooling concepts that reduce friction in production, improve repeatability, and give teams a clearer path from prototype to scale.",
      "This is dummy copy for now. Replace it later with the final company story, proof points, and specific positioning you want on the page.",
    ],
    stats: [
      { label: "Years in market", value: "25+" },
      { label: "Projects delivered", value: "1,200+" },
      { label: "Lead time reduction", value: "18%" },
    ],
  },
  {
    label: "Management",
    title: "A leadership team focused on precision and delivery.",
    image: "/industry2.jpg",
    body: [
      "Our management team keeps engineering, operations, and customer support aligned so projects move forward without unnecessary handoffs.",
      "Use this placeholder section to introduce leadership experience, operating philosophy, and how the team supports customer success.",
    ],
    stats: [
      { label: "Leadership teams", value: "3" },
      { label: "Cross-functional squads", value: "8" },
      { label: "On-time delivery", value: "96%" },
    ],
  },
  {
    label: "Human Resource",
    title: "Skilled people behind every mold and every process.",
    image: "/industry3.jpg",
    body: [
      "Our people are trained to work with discipline, consistency, and ownership. That is what keeps quality high across design, machining, and inspection.",
      "This dummy section can later become employee culture, hiring focus, training programs, or team values.",
    ],
    stats: [
      { label: "Skilled specialists", value: "80+" },
      { label: "Training hours / year", value: "2,500+" },
      { label: "Retention rate", value: "91%" },
    ],
  },
];

const AboutPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSection = aboutSections[activeIndex];

  return (
    <div className="font-sans">
      <TopBanner title={"About Us"} />
      <main className="max-w-350 mx-auto px-6 md:px-12">
        <AboutHero />
        <section className="grid grid-cols-1 lg:grid-cols-12">
          <AboutSidebar
            items={aboutSections}
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
          />
          <AboutContent content={activeSection} />
        </section>
      </main>
    </div>
  );
};

export default AboutPage;

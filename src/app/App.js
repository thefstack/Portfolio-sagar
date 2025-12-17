"use client";
import AboutMe from "@/components/AboutMe";
import Carousel from "@/components/Carousel";
import ClientReviews from "@/components/ClientReview";
import FAQSection from "@/components/FAQ";
import FooterCTA from "@/components/FooterCta";
import GlobalLightRays from "@/components/GlobalLightRays";
import Hero from "@/components/Hero";
import LogoLoop from "@/components/LogoLoop";
import Meet from "@/components/Meet";
import Navbar from "@/components/Navbar";
import ProcessSection from "@/components/Process";
import Projects from "@/components/Projects";
import ScrollDown from "@/components/ScrollDown";
import Services from "@/components/Services";

import React from "react";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';


 const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

// Alternative with image sources
const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];


const App = () => {
  return (
    <>
      {/* <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={5}
        blurStrength={10}
      > */}
         {/* GLOBAL BACKGROUND LIGHT */}
      <GlobalLightRays zIndex={5} />

        <div className="relative isolatey z-10">
          <Navbar />
          <Hero />
          <div className="bg-[#060010] w-full relative flex flex-col justify-center items-center"><div className=" w-full pt-0 mt-[-12px]"><ScrollDown/></div>

<div className="w-[80%] overflow-hidden">
        <div style={{ height: '100px', position: 'relative', overflow: 'hidden'}} className="w-full mt-18">
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={techLogos}
        speed={70}
        direction="left"
        logoHeight={48}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#060010"
        ariaLabel="Technology partners"
      />
      
    </div>
    </div></div>
          <AboutMe/>
          <Projects/>
          <Meet/>
          <Carousel/>
          <ProcessSection/>
          <Services/>
          <ClientReviews/>
          <FAQSection/>
          <FooterCTA/>
        </div>
        {/* <div
        className="
    fixed bottom-0 w-full h-[80px]
    backdrop-blur-xl
    bg-white/10
    [mask-image:linear-gradient(to_bottom,transparent,black)]
    [-webkit-mask-image:linear-gradient(to_bottom,transparent,black)]
  "
      /> */}
      {/* </ScrollReveal> */}
    </>
  );
};

export default App;

"use client";

import React, { useEffect, useRef } from "react";
import ImageGallery from "./ImageGallery";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import ShinyButton from "./ShinyButton";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const mainRef = useRef(null);

  const galleryItems = [
    { image: "/cat.jpg", caption: "Keyboard Setup", link: "#casestudy1" },
    { image: "/man.webp", caption: "About Me", link: null },
    { image: "/lemon.jpg", caption: "Beauty Product", link: "#casestudy2" },
    { image: "/cat.jpg", caption: "Natural Beauty", link: "#casestudy3" },
    { image: "/lemon.jpg", caption: "Fresh Citrus", link: "#casestudy4" },
    { image: "/cat.jpg", caption: "Spa Collection", link: "#casestudy5" },
    { image: "/lemon.jpg", caption: "Luxury Bottle", link: null },
    { image: "/cat.jpg", caption: "Spray Product", link: "#casestudy6" },
    { image: "/lemon.jpg", caption: "Natural Product", link: null },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        mainRef.current,
        {
          scale: 0.85,
          opacity: 0.6,
        },
        {
          scale: 1,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mainRef.current,
            start: "top bottom",     // when main enters viewport
            end: "top 20%",           // when top reaches 20% of screen
            scrub: true,              // smooth progressive scaling
          },
        }
      );
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      className="bg-[#080114] py-12 origin-center"
    >
    <h1 className="text-white text-center text-4xl">Projects</h1>
      <div ref={mainRef} className="container mx-auto mt-32">
        <ImageGallery items={galleryItems} />
      </div>
      <div className="flex justify-center items-center gap-10 mt-11">
  <Link
    href=""
    className="inline-flex items-center text-gray-100/80 underline leading-none"
  >
    All Projects
  </Link>

  <ShinyButton>
    Book a Free Call
  </ShinyButton>
</div>
    </main>
  );
};

export default Projects;

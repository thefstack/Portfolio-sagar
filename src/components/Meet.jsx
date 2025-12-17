"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Meet = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
  const ctx = gsap.context(() => {
    ScrollTrigger.matchMedia({
      // Desktop & tablet only
      "(min-width: 768px)": () => {
        gsap.fromTo(
          imageRef.current,
          { scale: 0.75 },
          {
            scale: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "top 1%",
              scrub: true,
            },
          }
        );
      },
    });
  }, sectionRef);

  return () => ctx.revert();
}, []);


  return (
    <div
      ref={sectionRef}
      className=" bg-[#060010] text-white p-6 md:p-12 lg:p-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Left Column - Content */}
          <div className="flex flex-col justify-center">
            {/* Header */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8">
              Meet Meily
            </h1>

            {/* Bio */}
            <p className="text-gray-300 text-base md:text-lg leading-relaxed ">
              I'm Meily, a passionate Brand Identity & Package Designer based in tokyo.
              I specialize in crafting bold visual identities and packaging that
              captivate and inspire, blending creativity with strategy to elevate brands.
            </p>
            
            <div className=" w-full h-[1px] my-10 bg-gray-100/20"/>

            {/* Skills */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-zinc-800 rounded-md text-sm">Product Design</span>
              <span className="px-4 py-2 bg-zinc-800 rounded-md text-sm">Brand Identity Design</span>
              <span className="px-4 py-2 bg-zinc-800 rounded-md text-sm">UX Design</span>
              <span className="px-4 py-2 bg-zinc-800 rounded-md text-sm">Branding</span>
              <span className="px-4 py-2 bg-zinc-800 rounded-md text-sm">Packaging Design</span>
              <span className="px-4 py-2 bg-zinc-800 rounded-md text-sm">Figma</span>
              <span className="px-4 py-2 bg-zinc-800 rounded-md text-sm">Photoshop</span>
            </div>

            <div className=" w-full h-[1px] my-10 bg-gray-100/20"/>

            {/* Experience */}
            <div className="space-y-6 mb-10 md:mb-12">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
                  <span className="text-gray-400 text-sm">Freelance</span>
                  <span className="text-white">GreenLeaf Co</span>
                </div>
                <span className="text-gray-400 text-sm">Currently</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
                  <span className="text-gray-400 text-sm">Brand Designer</span>
                  <span className="text-white">UrbanFit Studio</span>
                </div>
                <span className="text-gray-400 text-sm">2023-24</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
                  <span className="text-gray-400 text-sm">Package Designer</span>
                  <span className="text-white">GreenK Studio</span>
                </div>
                <span className="text-gray-400 text-sm">2020-22</span>
              </div>
            </div>

            {/* Recent Works */}
            <div className="flex items-center gap-2">
              <h2 className="text-xl text-gray-400">Recent Works</h2>
              <div className="w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center">
                <span className="text-gray-400 text-xs">i</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex items-center justify-center lg:justify-end order-first lg:order-last">
            <div className="w-full max-w-md lg:max-w-none">
              <img
                ref={imageRef}
                src="/woman.avif"
                alt="Portrait of Meily"
                className="w-full h-auto rounded-lg grayscale hover:grayscale-0
                           transition-[filter] duration-500 ease-in-out
                           will-change-transform"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Meet;

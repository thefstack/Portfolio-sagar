"use client";
import React from "react";
import Silk from "./Silk";
import ShinyText from "./ShinyText";
import ScrollDown from "./ScrollDown";
import LogoLoop from "./LogoLoop";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';


const Hero = () => {
 

  return (
    <div className="relative min-h-screen w-full bg-[#060010] overflow-hidden flex flex-col items-center justify-center gap-4 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 min-w-full h-full">
        <Silk speed={3} scale={1} color="#585858" noiseIntensity={0} rotation={2.88} />
      </div>

      {/* Background gradient blur effect */}
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-96 sm:h-96 lg:w-[600px] lg:h-[600px] bg-gradient-to-bl from-gray-600/30 via-gray-800/20 to-transparent blur-[100px] sm:blur-[150px] rounded-full" />

      <div className="relative z-10 w-full max-w-4xl mx-auto min-h-[100dvh] text-center flex flex-col justify-center items-center">
        {/* Badge */}
        <div className=" flex justify-center absolute left-[50%] translate-x-[-50%] top-[15%]"><ShinyText text={"Crafting Unique Brand Identities"}/></div>

        {/* Main Heading */}
        <h1 className="text-white font-light mb-4 sm:mb-6 lg:mb-8 mt-48">
          <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">Branding that you</span>
          <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">need Indeed</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 lg:mb-10 px-2 leading-relaxed">
          Elevate your brand with custom identity and package design. Showcase your story through bold visuals and
          strategic design solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <button className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 bg-white text-black text-sm sm:text-base font-medium rounded-full hover:bg-gray-200 transition-colors duration-200">
            Get Started Now
          </button>
          <button className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 bg-transparent text-white text-sm sm:text-base font-medium border border-white/20 rounded-full hover:bg-white/5 transition-colors duration-200">
            See Projects
          </button>
        </div>
      </div>
      
    </div>
  )
}

export default Hero

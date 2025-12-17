"use client";

import Link from "next/link";
import ShinyButton from "./ShinyButton";
import ShinyText from "./ShinyText";
// import LightRays from "./LightRays";

export default function FooterCTA() {
  return (
    <section className="relative min-h-[100vh] w-full relative z-10 bg-transparent">

      {/* FOOTER CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 pb-32 min-h-[100dvh]">
        <div className="max-w-3xl text-center">

          {/* Badge */}
            <div className=" flex justify-center mb-6 ">
              <ShinyText text={"Crafting Unique Brand Identities"} />
            </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-10 text-white">
            Curious about what we can create together?
            <br />
            Let’s bring something extraordinary to life!
          </h2>

          {/* Button */}
          <div className="flex justify-center mb-10">
            <ShinyButton>Book a Free Call</ShinyButton>
          </div>

          {/* Icons */}
          <div className="flex justify-center gap-6 text-white/60 text-sm">
            <span>Be</span>
            <span>✕</span>
            <span>🌐</span>
          </div>

        </div>

        <div className="flex flex-wrap justify-between items-center w-full absolute bottom-6 px-6">
            <p className="text-gray-400 max-w-md mb-6 text-sm">helllo@gmail.com</p>
            <p className="text-gray-400 max-w-md mb-6 text-sm">Designed by <Link href="https://thefstack.com" className="cursor-pointer text-amber-700">thefstack</Link></p>
            <p className="text-gray-400 max-w-md mb-6 text-sm">All rights reserved</p>
        </div>
      </div>
    </section>
  );
}

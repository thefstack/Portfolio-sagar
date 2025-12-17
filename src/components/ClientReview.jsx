"use client";

import Image from "next/image";
import ShinyButton from "./ShinyButton";
import {LogoLoop} from "./LogoLoop";
import ReviewCard from "./ReviewCard";



const reviews = [
  {
    name: "Richards Johnson",
    role: "Creative Director & Lead Designer",
    avatar: "/avatars/richards.jpg",
    text:
      "Working with Meily was a seamless experience. Her ability to merge creativity with functionality resulted in designs that not only looked stunning but also drove meaningful engagement.",
    rating: 5,
  },
  {
    name: "June Lee",
    role: "CEO of GreenRoots",
    avatar: "/avatars/june.jpg",
    text:
      "Meily’s strategic approach to design brought our brand vision to life. The packaging and brand elements she developed elevated our aesthetic and aligned perfectly with our sustainability values.",
    rating: 5,
  },
  {
    name: "Jona Carter",
    role: "Founder of EcoLux",
    avatar: "/avatars/jona.jpg",
    text:
      "Every project Meily touches reflects thoughtful design and purpose. Her work helped our products stand out in a competitive market.",
    rating: 5,
  },
];

export default function ClientReviews() {
  return (
    <section className="relative w-full bg-[#060010] text-white overflow-hidden rounded-t-[90px] border-t-8 border-gray-800">
      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          
          {/* LEFT IMAGE */}
          <div className="relative w-full h-[420px] lg:h-[480px] rounded-xl overflow-hidden">
            <Image
              src="/tablewithman.avif" // replace with your image
              alt="Client working at desk"
              fill
              className="object-cover grayscale"
              priority
            />
            {/* subtle edge fade */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col max-w-xl">
            
            {/* Badge */}
            <div className="flex items-center gap-2 mb-6 border-2  px-7 py-4 w-fit rounded-full">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-sm text-gray-400">Design services</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl font-light leading-tight">
              Client Reviews
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              Real feedback from clients who trusted my design expertise
              to elevate their brands successfully.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <ShinyButton>
                Book a Free Call
              </ShinyButton>

              <ShinyButton>
                See Services
              </ShinyButton>
            </div>
          </div>

        </div>

        <section className=" pt-20 overflow-hidden">
      <LogoLoop
        logos={reviews.map(r => ({
          node: <ReviewCard review={r} />
        }))}
        speed={40}
        gap={24}
        pauseOnHover
        fadeOut
        fadeOutColor="#060010"
        className="py-6"
        ariaLabel="Client reviews"
      />
    </section>

    <section className=" bg-gray-100/5 padding rounded-2xl flex mt-10">
        <div className="w-full flex justify-center my-8">
        <div className="w-full max-w-3xl px-4 text-center">
            <h3>180+</h3>
            <p className=" text-gray-400 text-sm ">design projects completed.</p>
        </div>
        <div className="w-1 bg-gray-100/40"></div>
        <div className="w-full max-w-3xl px-4 text-center">
            <h3>96%</h3>
            <p className=" text-gray-400 text-sm ">Client satisfaction rate.</p>
        </div>

        <div className="w-1 bg-gray-100/40"></div>

        <div className="w-full max-w-3xl px-4 text-center">
            <h3>15+</h3>
            <p  className=" text-gray-400 text-sm ">Year of experience</p>
        </div>

        </div>
    </section>
      </div>
    </section>
  );
}

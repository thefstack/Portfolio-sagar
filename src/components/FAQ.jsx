"use client";

import Image from "next/image";
import { useState } from "react";
import { Plus, X } from "lucide-react";
import ShinyButton from "./ShinyButton";

const faqs = [
  {
    q: "What services do you provide?",
    a: "I specialize in brand identity and package design, with experience in web design, UI/UX, and crafting brand experiences."
  },
  {
    q: "How do I start working with you?",
    a: "You can book a free discovery call to discuss your goals and project requirements."
  },
  {
    q: "What design tools do you use?",
    a: "I use Figma, Adobe Creative Suite, and modern prototyping tools."
  },
  {
    q: "How long does a project take?",
    a: "Timelines vary depending on scope, but most projects take 2–6 weeks."
  },
  {
    q: "Do you provide revisions?",
    a: "Yes, revisions are included to ensure the final result meets expectations."
  },
  {
    q: "How do I start working with you?",
    a: "You can book a free discovery call to discuss your goals and project requirements."
  },
  {
    q: "What design tools do you use?",
    a: "I use Figma, Adobe Creative Suite, and modern prototyping tools."
  },
  {
    q: "How long does a project take?",
    a: "Timelines vary depending on scope, but most projects take 2–6 weeks."
  },
  {
    q: "Do you provide revisions?",
    a: "Yes, revisions are included to ensure the final result meets expectations."
  }
];

export default function FAQSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#060010] text-white py-16  rounded-t-[90px] border-t-8 border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* LEFT CONTENT */}
        <div className="flex flex-col">


             {/* Badge */}
          <span className="items-center gap-2 text-xs px-4 py-2 rounded-full bg-white/10 w-fit h-fit mb-6">
            FAQs
          </span>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-light mb-4">
            Answers
          </h2>


          {/* Description */}
          <p className="text-gray-400 max-w-md mb-6">
            Find answers to common questions about my design process,
            services, and collaboration.
          </p>

          {/* Image */}
          <div className="relative w-full h-[280px] rounded-2xl overflow-hidden mb-6">
            <Image
              src="/lemon.jpg"
              alt="Design process"
              fill
              className="object-cover grayscale"
              priority
            />
          </div>

          {/* Image Tags */}
          <div className="flex flex-wrap gap-2">
            {["Product Design", "Brand Identity Design", "Branding"].map(tag => (
              <span
                key={tag}
                className="px-4 py-2 bg-zinc-800 rounded-md text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

<div className=" w-full h-[1px] my-10 bg-gray-100/20" />
            <div>
                <ShinyButton>Book a Free Call</ShinyButton>
            </div>
        </div>
        

        {/* RIGHT FAQ */}
        <div className="flex flex-col gap-3">

          {faqs.map((item, index) => {
            const isOpen = active === index;

            return (
              <div
                key={index}
                className="rounded-xl bg-[#0e0e0e] border border-white/5 overflow-hidden transition-all"
              >
                {/* Question */}
                <button
                  onClick={() => setActive(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-sm sm:text-base font-medium">
                    {item.q}
                  </span>
                  {isOpen ? (
                    <X size={18} />
                  ) : (
                    <Plus size={18} />
                  )}
                </button>

                {/* Answer */}
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

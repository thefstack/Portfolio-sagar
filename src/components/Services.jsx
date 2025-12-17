import React from "react";
import ShinyButton from "./ShinyButton";
import LogoLoop from "./LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];
const textItems = [
  {
    text: "Brand Identity",
    icon: "✨",
  },
  {
    text: "Packaging Design",
    icon: "📦",
  },
  {
    text: "UX Strategy",
    icon: "🧠",
  },
  {
    text: "Product Design",
    icon: "🎯",
  },
  {
    text: "Visual Systems",
    icon: "🎨",
  },
];


const Services = () => {
  const services = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
      ),
      title: "Brand Identity",
      description:
        "Crafting unique, memorable brand identities that resonate with your audience — from logos to visual systems — ensuring every touchpoint reflects your brand's essence.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z"
          />
        </svg>
      ),
      title: "Brand Design",
      description:
        "Designing sleek, impactful packaging that not only looks stunning but also connects with your ideal customers — turning first impressions into lasting brand loyalty.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
      title: "Package Design",
      description:
        "Bringing your brand to life through high-fidelity product mockups, giving you a clear, realistic preview of how your packaging and visuals will stand out in the real world.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      title: "Mockup Design",
      description:
        "Tailored design mockups that align perfectly with your brand's aesthetic — because every detail matters when showcasing your product's true potential.",
    },
  ];

  const serviceTags = [
    "Product Design",
    "Brand Identity Design",
    "Branding",
    "Packaging Design",
    "Mockup Design",
  ];

  return (
    <section className="w-full bg-[#060010] text-white py-12 md:py-20 px-4 md:px-8 lg:px-12 rounded-t-[90px] border-t-8 border-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-16">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-6 border-2  px-7 py-4 w-fit rounded-full">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-sm text-gray-400">Design services</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Services
            </h1>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Helping businesses standout with brand identity packaging that
              captivates and converts effectively.
            </p>

            {/* Service Tags */}
            <div className="flex flex-wrap gap-3">
              {serviceTags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-zinc-800 rounded-md text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className=" w-full h-[1px] my-10 bg-gray-100/20" />

            {/* CTA Buttons */}
            <div className="flex items-center gap-10 text-center">
              <ShinyButton onClick={() => alert("Button clicked!")}>
                Book a Free Call
              </ShinyButton>
              <ShinyButton onClick={() => alert("Button clicked!")}>
                See Projects
              </ShinyButton>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative rounded-3xl overflow-hidden bg-gray-800 aspect-square lg:aspect-auto lg:h-full md:h-[300px] sm:h-[200px] mx-auto">
            <img
              src="/bottle.avif"
              alt="Product packaging design"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="flex gap-3.5">
                <div className="text-white group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <div className=" w-full h-[1px] my-3 bg-gray-100/20" />
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="w-full">
          <div className=" overflow-hidden mx-auto">
            <div
              style={{
                height: "100px",
                position: "relative",
                overflow: "hidden",
              }}
              className="w-full mt-24"
            >
              {/* Basic horizontal loop */}
              <LogoLoop
                logos={textItems}
                speed={70}
                direction="left"
                logoHeight={48}
                gap={40}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#060010"
                ariaLabel="Technology partners"
                className="py-6"
                renderItem={(item) => (
                  <div
                    className="
      flex items-center gap-2
      px-4 py-2
      bg-gray-800/70 text-gray-100
      rounded-full
      text-sm font-medium
      whitespace-nowrap
    "
                  >
                    <span className="text-base">{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                )}
              />
            </div>
          </div>

          <div className=" overflow-hidden mx-auto">
            <div
              style={{
                height: "100px",
                position: "relative",
                overflow: "hidden",
              }}
              className="w-full mt-0"
            >
              {/* Basic horizontal loop */}
              <LogoLoop
                logos={textItems}
                speed={70}
                direction="right"
                logoHeight={48}
                gap={40}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#060010"
                ariaLabel="Technology partners"
                className="py-6"
                renderItem={(item) => (
                  <div
                    className="
      flex items-center gap-2
      px-4 py-2
      bg-gray-800/70 text-gray-100
      rounded-full
      text-sm font-medium
      whitespace-nowrap
    "
                  >
                    <span className="text-base">{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

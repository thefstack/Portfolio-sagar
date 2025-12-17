import Link from "next/link";
import ShinyButton from "./ShinyButton";
import ShinyText from "./ShinyText";

export default function ProcessSection() {
  const steps = [
    {
      number: "1",
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
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Define Your Vision",
      description:
        "Find the perfect plan tailored to your needs, offering the right balance of features, flexibility, and value to help you achieve your goals effortlessly.",
    },
    {
      number: "2",
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
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      ),
      title: "Submit Your Request",
      description:
        "Easily submit your design requirements through our private design portal, ensuring a seamless process where your vision is understood, refined, and brought to life with precision and creativity.",
    },
    {
      number: "3",
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
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: "Project Delivered",
      description:
        "Your completed project is delivered with attention to every detail, ensuring quality and satisfaction at every stage.",
    },
  ];

  return (
    <section className="bg-[#080114] text-white py-16">
      <div className="grid lg:grid-cols-2 min-h-screen max-w-7xl mx-auto">
        {/* Left side - Image */}
        <div className="relative h-64 lg:h-auto">
          <img
            src="/bg2.avif"
            alt="Design process workspace"
            className="w-full h-full object-cover grayscale rounded-2xl"
          />
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col px-6  lg:px-16 ">
          {/* Header */}
          <div className="mt-12">
            {/* Badge */}
            <div className=" flex ">
              <ShinyText text={"Crafting Unique Brand Identities"} />
            </div>

            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-0 leading-tight">
              Process
            </h2>

            <p className="text-gray-400 text-lg mb-8 max-w-xl">
              crafting bold visuals that inspire and elevate brands with thought
              process.
            </p>

            {/* CTA Buttons */}
        <div className="flex items-center gap-10 mt-11 text-center">
        <ShinyButton onClick={() => alert("Button clicked!")}>Book a Free Call</ShinyButton>
        <ShinyButton onClick={() => alert("Button clicked!")}>See Projects</ShinyButton>
      </div>
          </div>
          <div className=" w-full h-[0.3px] my-5 bg-gray-100/20"/>

          {/* Process Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative border border-white/10 rounded-2xl p-6 lg:p-8 bg-white/5 hover:bg-white/10 transition-colors group"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-4 text-white/80 group-hover:text-white transition-colors">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>

                <div className=" w-full h-[0.3px] my-5 bg-gray-100/20"/>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import MagicBento from "./MagicBento";

const AboutMe = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-20 px-4 relative bg-[#060010]">
      <div>
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
        />
      </div>
    </div>
  );
};

export default AboutMe;

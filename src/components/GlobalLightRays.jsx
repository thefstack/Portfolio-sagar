"use client";
import LightRays from "./LightRays";

export default function GlobalLightRays({ zIndex = 0, opacity = 0.7 }) {
  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex }}
    >
      <LightRays
        raysOrigin="top-center"
        raysColor="#fff"
        raysSpeed={0.8}
        lightSpread={0.6}
        rayLength={5}
        followMouse
        fadeDistance={1}
        mouseInfluence={0.4}
        noiseAmount={0.1}
        distortion={0.05}
        className={`opacity-[${opacity}]`}
      />
    </div>
  );
}

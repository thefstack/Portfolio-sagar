"use client";

export default function ShinyButton({ children, onClick, className = "" }) {
  return (
    <button
  onClick={onClick}
  className={`
    relative px-8 py-3 bg-black text-white font-medium rounded-[11px]
    border border-white/40
    transition-all duration-300 hover:shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]
    shadow-[-2px_2px_6px_rgba(255,255,255,0.45)]
    flex justify-center
    leading-none
    text-center cursor-pointer
    ${className}
  `}
>

      {children}
    </button>
  );
}

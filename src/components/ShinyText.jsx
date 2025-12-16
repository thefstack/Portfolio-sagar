const ShinyText = ({ text, disabled = false, speed = 5, className = "" }) => {
  const animationDuration = `${speed}s`

  return (
    <div className={`relative flex items-center gap-3 ${className} w-fit`}>
      {/* Blinking dot with glow effect */}
      <div className="relative flex items-center justify-center w-fit">
        

      {/* Container with fading border */}
      <div className="relative px-3 py-3 rounded-full">
      <div
          className="w-2 h-2 bg-white rounded-full animate-pulse"
          style={{
            boxShadow:
              "0 0 10px 2px rgba(255, 255, 255, 0.8), 0 0 20px 4px rgba(255, 255, 255, 0.4), 0 0 30px 6px rgba(255, 255, 255, 0.2)",
          }}
        />
      </div>
        {/* Border with gradient fade (visible on left, transparent on right) */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "linear-gradient(to right, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.2) 30%, rgba(255, 255, 255, 0) 70%)",
            padding: "1px",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />

        {/* Text with shine effect */}
        <div
          className={`text-[#e8e8e8d6] bg-clip-text inline-block ${disabled ? "" : "animate-shine"}`}
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)",
            backgroundSize: "200% 100%",
            WebkitBackgroundClip: "text",
            animationDuration: animationDuration,
          }}
        >
          {text}
        </div>
      </div>
    </div>
  )
}

export default ShinyText

export const AnimatedBorderButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative px-8 py-4 rounded-xl font-bold bg-glass text-text-primary border border-white/5 transition-smooth hover:scale-105 active:scale-95 group overflow-hidden"
    >
      {/* Animated SVG Border */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <rect
          x="0"
          y="0"
          width="100"
          height="100"
          fill="none"
          stroke="var(--google-blue)"
          strokeWidth="4"
          className="animate-border-draw"
          style={{
            strokeDasharray: "400",
            strokeDashoffset: "400",
            animation: "draw 2s linear infinite"
          }}
        />
      </svg>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

// Add this to index.css if not present:
// @keyframes draw {
//   to { stroke-dashoffset: 0; }
// }


type Props = {
  /** Unique per instance: namespaces the SVG pattern id. */
  id: string;
  /** Overlay the animated customer-flow path and hotspots. */
  showFlow?: boolean;
  className?: string;
};

const GONDOLAS = [
  [180, 140], [180, 220], [180, 300],
  [360, 140], [360, 220], [360, 300],
];
const WALL_BAYS = [100, 200, 300];
const FITTING_ROOMS = [60, 140, 220];
const HOTSPOTS = [
  [150, 320], [330, 110], [540, 250], [640, 350],
];

/** Illustrative store layout drawn in currentColor. Not a real client drawing. */
export function FloorPlan({ id, showFlow = false, className }: Props) {
  const grid = `${id}-grid`;
  return (
    <svg
      viewBox="0 0 800 520"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      fill="none"
      stroke="currentColor"
      role="img"
      aria-label="Illustrative retail floor plan with fixtures, fitting rooms and dimensions"
    >
      <defs>
        <pattern id={grid} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" strokeWidth="0.5" opacity="0.14" />
        </pattern>
      </defs>
      <rect width="800" height="520" fill={`url(#${grid})`} stroke="none" />

      {/* Shell, entrance and back-of-house */}
      <path d="M340 460H60V60H740V460H460" strokeWidth="3" pathLength={1} className="draw" />
      <path d="M340 460A60 60 0 0 1 400 400M460 460A60 60 0 0 0 400 400" strokeDasharray="3 4" opacity="0.6" />
      <path d="M600 60V300H740" strokeWidth="1.5" pathLength={1} className="draw" />
      {FITTING_ROOMS.map((y) => (
        <path key={y} d={`M600 ${y + 80}H740M600 ${y + 20}A26 26 0 0 0 626 ${y + 46}`} opacity="0.7" />
      ))}

      {/* Fixtures */}
      <g strokeWidth="1.25">
        {WALL_BAYS.map((y) => (
          <rect key={y} x="72" y={y} width="24" height="80" />
        ))}
        {GONDOLAS.map(([x, y]) => (
          <g key={`${x}-${y}`}>
            <rect x={x} y={y} width="120" height="36" />
            <path d={`M${x} ${y + 18}H${x + 120}`} opacity="0.4" />
          </g>
        ))}
        <circle cx="500" cy="390" r="22" />
        <circle cx="260" cy="400" r="22" />
        <rect x="620" y="360" width="84" height="48" />
      </g>

      {/* Dimensions */}
      <g opacity="0.65" strokeWidth="0.75">
        <path d="M60 34H740M60 28V40M740 28V40M34 60V460M28 60H40M28 460H40" />
      </g>
      <g fill="currentColor" stroke="none" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="1.5" opacity="0.75">
        <text x="400" y="24" textAnchor="middle">22 400</text>
        <text x="24" y="264" textAnchor="middle" transform="rotate(-90 24 264)">13 200</text>
        <text x="400" y="486" textAnchor="middle">ENTRANCE</text>
        <text x="662" y="388" textAnchor="middle">CASH</text>
        <text x="670" y="104" textAnchor="middle">FIT 01</text>
        <text x="670" y="184" textAnchor="middle">FIT 02</text>
        <text x="670" y="264" textAnchor="middle">FIT 03</text>
        <text x="108" y="94">BAY A</text>
      </g>

      {showFlow && (
        <g stroke="var(--color-accent)">
          <path
            d="M400 480C400 400 150 420 150 320S150 110 330 110S560 120 540 250S600 340 640 350"
            strokeWidth="2"
            strokeLinecap="round"
            className="flow-path"
          />
          {HOTSPOTS.map(([cx, cy], i) => (
            <g key={`${cx}-${cy}`} fill="var(--color-accent)" stroke="none">
              <circle cx={cx} cy={cy} r="14" opacity="0.18" className="pulse" style={{ animationDelay: `${i * 0.5}s` }} />
              <circle cx={cx} cy={cy} r="4" />
            </g>
          ))}
        </g>
      )}
    </svg>
  );
}

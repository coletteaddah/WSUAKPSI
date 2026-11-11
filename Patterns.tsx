// Faint background shapes used behind sections.

export function Waves({ double = false }: { double?: boolean }) {
  return (
    <div className="bg-pattern" aria-hidden="true">
      <svg viewBox="0 0 1200 400" preserveAspectRatio="none">
        <path d="M0,160 C400,100 800,220 1200,160 L1200,400 L0,400 Z" fill="currentColor" />
        {double && (
          <path d="M0,200 C300,140 600,260 1200,180 L1200,400 L0,400 Z" fill="currentColor" opacity="0.6" />
        )}
      </svg>
    </div>
  );
}

export function GridLines() {
  return (
    <div className="bg-pattern" aria-hidden="true">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <defs>
          <pattern id="grid-lines" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-lines)" />
      </svg>
    </div>
  );
}

export function Peak() {
  return (
    <div className="bg-peak" aria-hidden="true">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M -10 100 L 20 10 Q 21 9 22 10 L 100 70 L 100 100 Z" fill="currentColor" />
      </svg>
    </div>
  );
}

// Corner dot grids that fade in strength across the square.
function Dots({ flip = false }: { flip?: boolean }) {
  const dots = [];
  for (let row = 0; row < 12; row++) {
    for (let col = 0; col < 12; col++) {
      const t = flip ? (22 - row - col) / 22 : (row + col) / 22;
      dots.push(<circle key={`${row}-${col}`} cx={8 + col * 16} cy={8 + row * 16} r="1.5" fill="currentColor" opacity={0.2 + t * 0.8} />);
    }
  }
  return (
    <svg viewBox="0 0 200 200" width="100%" height="100%">
      {dots}
    </svg>
  );
}

export function CornerDots() {
  return (
    <>
      <div className="corner-dots corner-dots--tr" aria-hidden="true">
        <Dots />
      </div>
      <div className="corner-dots corner-dots--bl" aria-hidden="true">
        <Dots flip />
      </div>
    </>
  );
}

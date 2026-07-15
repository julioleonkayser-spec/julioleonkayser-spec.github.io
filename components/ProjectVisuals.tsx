/**
 * Visuales nativos (SVG inline) para project cards sin fotografía.
 * Mismo tratamiento que el resto de visuales del carrusel: aspect-video full-width,
 * y el gradiente radial del hero (#fed96f → #fabd69 → #f98e4a, DESIGN_SYSTEM.md)
 * como tinte superpuesto. Solo tokens de la paleta extraída — sin texto de marca.
 */

const PALETTE = {
  yellow: '#fed96f',
  amber: '#fabd69',
  orange: '#f98e4a',
  blue: '#317bd0',
  pink: '#c81e60',
  gray500: '#6b7280',
  gray600: '#4b5563',
} as const;

interface CodeToken {
  width: number;
  color: string;
}

interface CodeLine {
  indent: number;
  tokens: CodeToken[];
}

/** Líneas abstractas que simulan bloques de código con syntax-highlighting. */
const CODE_LINES: CodeLine[] = [
  { indent: 0, tokens: [{ width: 120, color: PALETTE.gray600 }] },
  { indent: 0, tokens: [{ width: 90, color: PALETTE.pink }, { width: 150, color: PALETTE.blue }, { width: 60, color: PALETTE.gray500 }] },
  { indent: 1, tokens: [{ width: 70, color: PALETTE.pink }, { width: 110, color: PALETTE.amber }, { width: 40, color: PALETTE.gray500 }, { width: 170, color: PALETTE.yellow }] },
  { indent: 1, tokens: [{ width: 130, color: PALETTE.amber }, { width: 50, color: PALETTE.gray500 }, { width: 200, color: PALETTE.yellow }] },
  { indent: 1, tokens: [{ width: 100, color: PALETTE.blue }, { width: 80, color: PALETTE.orange }, { width: 60, color: PALETTE.gray500 }] },
  { indent: 2, tokens: [{ width: 160, color: PALETTE.yellow }, { width: 90, color: PALETTE.gray500 }] },
  { indent: 2, tokens: [{ width: 60, color: PALETTE.pink }, { width: 140, color: PALETTE.blue }, { width: 110, color: PALETTE.amber }] },
  { indent: 1, tokens: [{ width: 50, color: PALETTE.gray500 }] },
  { indent: 0, tokens: [{ width: 40, color: PALETTE.gray500 }] },
  { indent: 0, tokens: [{ width: 140, color: PALETTE.gray600 }] },
  { indent: 0, tokens: [{ width: 80, color: PALETTE.pink }, { width: 180, color: PALETTE.blue }, { width: 70, color: PALETTE.gray500 }] },
  { indent: 1, tokens: [{ width: 120, color: PALETTE.orange }, { width: 60, color: PALETTE.gray500 }, { width: 150, color: PALETTE.yellow }] },
  { indent: 1, tokens: [{ width: 90, color: PALETTE.amber }, { width: 130, color: PALETTE.blue }] },
  { indent: 0, tokens: [{ width: 40, color: PALETTE.gray500 }] },
];

const LINE_HEIGHT = 38;
const BAR_HEIGHT = 14;
const INDENT_STEP = 56;
const TOKEN_GAP = 18;
const CODE_START_X = 120;
const CODE_START_Y = 116;

export function CodeLinesVisual({ label }: { label: string }) {
  return (
    <svg
      viewBox="0 0 1280 720"
      preserveAspectRatio="xMidYMid slice"
      className="w-full aspect-video"
      role="img"
      aria-label={label}
    >
      <defs>
        {/* Tinte del hero: radial-gradient(ellipse at 100% 0, #fed96f, #fabd69, #f98e4a) */}
        <radialGradient id="hero-tint" cx="100%" cy="0%" r="140%">
          <stop offset="0%" stopColor={PALETTE.yellow} stopOpacity="0.22" />
          <stop offset="50%" stopColor={PALETTE.amber} stopOpacity="0.12" />
          <stop offset="100%" stopColor={PALETTE.orange} stopOpacity="0.05" />
        </radialGradient>
      </defs>
      <rect width="1280" height="720" fill="#222" />
      {/* Barra de ventana del editor */}
      <rect width="1280" height="64" fill="#000" />
      <circle cx="40" cy="32" r="10" fill={PALETTE.pink} />
      <circle cx="76" cy="32" r="10" fill={PALETTE.yellow} />
      <circle cx="112" cy="32" r="10" fill={PALETTE.orange} />
      {/* Gutter de números de línea (abstracto) */}
      {CODE_LINES.map((_, i) => (
        <rect
          key={`ln-${i}`}
          x={48}
          y={CODE_START_Y + i * LINE_HEIGHT}
          width={28}
          height={BAR_HEIGHT}
          rx={BAR_HEIGHT / 2}
          fill={PALETTE.gray600}
          opacity={0.55}
        />
      ))}
      {/* Tokens de código */}
      {CODE_LINES.map((line, i) => {
        let x = CODE_START_X + line.indent * INDENT_STEP;
        return line.tokens.map((token, j) => {
          const rect = (
            <rect
              key={`t-${i}-${j}`}
              x={x}
              y={CODE_START_Y + i * LINE_HEIGHT}
              width={token.width}
              height={BAR_HEIGHT}
              rx={BAR_HEIGHT / 2}
              fill={token.color}
            />
          );
          x += token.width + TOKEN_GAP;
          return rect;
        });
      })}
      {/* Cursor del editor */}
      <rect
        x={CODE_START_X + CODE_LINES[CODE_LINES.length - 1].tokens[0].width + TOKEN_GAP}
        y={CODE_START_Y + (CODE_LINES.length - 1) * LINE_HEIGHT - 4}
        width={4}
        height={BAR_HEIGHT + 8}
        fill={PALETTE.yellow}
      />
      <rect width="1280" height="720" fill="url(#hero-tint)" />
    </svg>
  );
}

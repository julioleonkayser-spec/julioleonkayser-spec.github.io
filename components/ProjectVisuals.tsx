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

const SWATCHES = [
  { hex: '#fed96f', label: '#fed96f' },
  { hex: '#fabd69', label: '#fabd69' },
  { hex: '#f98e4a', label: '#f98e4a' },
  { hex: '#317bd0', label: '#317bd0' },
  { hex: '#c81e60', label: '#c81e60' },
];

/** Guías de spacing con los valores reales del sistema (escaladas ×3 para legibilidad). */
const SPACING_GUIDES = [
  { label: '24px', px: 24 },
  { label: '32px', px: 32 },
  { label: '64px', px: 64 },
];

const GRID_COLS = 12;
const GRID_MARGIN = 64;
const GRID_GUTTER = 24;

export function StyleGuideVisual({ label }: { label: string }) {
  const colWidth = (1280 - GRID_MARGIN * 2 - GRID_GUTTER * (GRID_COLS - 1)) / GRID_COLS;
  return (
    <svg
      viewBox="0 0 1280 720"
      preserveAspectRatio="xMidYMid slice"
      className="w-full aspect-video"
      role="img"
      aria-label={label}
    >
      <rect width="1280" height="720" fill="#fff" />
      {/* Grid de columnas del layout (container + gutters) */}
      {Array.from({ length: GRID_COLS }, (_, i) => (
        <rect
          key={`col-${i}`}
          x={GRID_MARGIN + i * (colWidth + GRID_GUTTER)}
          y={0}
          width={colWidth}
          height={720}
          fill="#fed96f"
          opacity={0.14}
        />
      ))}
      {/* Muestra tipográfica: el pairing real del sitio */}
      <text x={88} y={172} fontSize={132} fill="#222" style={{ fontFamily: 'var(--font-marker)' }}>
        Aa
      </text>
      <text
        x={88}
        y={214}
        fontSize={20}
        fill="#6b7280"
        style={{ fontFamily: 'var(--font-work-sans)' }}
      >
        Permanent Marker
      </text>
      <text
        x={340}
        y={172}
        fontSize={132}
        fontWeight={700}
        fill="#222"
        style={{ fontFamily: 'var(--font-work-sans)' }}
      >
        Aa
      </text>
      <text
        x={340}
        y={214}
        fontSize={20}
        fill="#6b7280"
        style={{ fontFamily: 'var(--font-work-sans)' }}
      >
        Work Sans 400 / 700
      </text>
      {/* Swatches de la paleta extraída */}
      {SWATCHES.map((swatch, i) => (
        <g key={swatch.hex}>
          <rect x={88 + i * 152} y={280} width={120} height={120} fill={swatch.hex} />
          <text
            x={88 + i * 152}
            y={432}
            fontSize={19}
            fill="#6b7280"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            {swatch.label}
          </text>
        </g>
      ))}
      {/* Guías de spacing: cotas con los valores documentados */}
      {SPACING_GUIDES.map((guide, i) => {
        const x = 88 + i * 300;
        const width = guide.px * 3;
        return (
          <g key={guide.label} stroke="#d1d5db" strokeWidth={2}>
            <line x1={x} y1={512} x2={x} y2={552} />
            <line x1={x + width} y1={512} x2={x + width} y2={552} />
            <line x1={x} y1={532} x2={x + width} y2={532} />
            <text
              x={x + width + 16}
              y={539}
              fontSize={19}
              fill="#6b7280"
              stroke="none"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              {guide.label}
            </text>
          </g>
        );
      })}
      {/* Cota del container real (920px máx) */}
      <g stroke="#d1d5db" strokeWidth={2}>
        <line x1={88} y1={608} x2={88} y2={648} />
        <line x1={1008} y1={608} x2={1008} y2={648} />
        <line x1={88} y1={628} x2={1008} y2={628} />
        <text
          x={1028}
          y={635}
          fontSize={19}
          fill="#6b7280"
          stroke="none"
          style={{ fontFamily: 'var(--font-work-sans)' }}
        >
          920px container
        </text>
      </g>
    </svg>
  );
}

/**
 * Canvas de decisiones: nodos conectados por aristas tipadas según la respuesta.
 * Mismo tratamiento que StyleGuideVisual (canvas claro, aspect-video full-width) y
 * solo tokens de la paleta extraída: blue = YES, pink = NO (el verde no existe en
 * el sistema, así que la rama afirmativa se pinta con el azul de enlaces).
 */
interface FlowNode {
  id: string;
  x: number;
  y: number;
}

const NODE_WIDTH = 216;
const NODE_HEIGHT = 96;

const FLOW_NODES: FlowNode[] = [
  { id: 'root', x: 88, y: 312 },
  { id: 'yes-1', x: 420, y: 152 },
  { id: 'no-1', x: 420, y: 472 },
  { id: 'yes-2', x: 752, y: 72 },
  { id: 'no-2', x: 752, y: 272 },
  { id: 'end', x: 752, y: 512 },
];

/** from → to, y por qué handle sale la arista. */
const FLOW_EDGES: { from: string; to: string; answer: 'yes' | 'no' }[] = [
  { from: 'root', to: 'yes-1', answer: 'yes' },
  { from: 'root', to: 'no-1', answer: 'no' },
  { from: 'yes-1', to: 'yes-2', answer: 'yes' },
  { from: 'yes-1', to: 'no-2', answer: 'no' },
  { from: 'no-1', to: 'end', answer: 'yes' },
];

/** Barras abstractas del prompt dentro de cada nodo. */
const NODE_PROMPT_BARS: Record<string, number[]> = {
  root: [150, 96],
  'yes-1': [132, 78],
  'no-1': [144, 64],
  'yes-2': [120, 86],
  'no-2': [156, 72],
  end: [108, 90],
};

function nodeById(id: string): FlowNode {
  const node = FLOW_NODES.find((candidate) => candidate.id === id);
  if (!node) {
    throw new Error(`Unknown flow node: ${id}`);
  }
  return node;
}

export function DecisionFlowVisual({ label }: { label: string }) {
  return (
    <svg
      viewBox="0 0 1280 720"
      preserveAspectRatio="xMidYMid slice"
      className="w-full aspect-video"
      role="img"
      aria-label={label}
    >
      <defs>
        <radialGradient id="flow-tint" cx="100%" cy="0%" r="140%">
          <stop offset="0%" stopColor={PALETTE.yellow} stopOpacity="0.22" />
          <stop offset="50%" stopColor={PALETTE.amber} stopOpacity="0.12" />
          <stop offset="100%" stopColor={PALETTE.orange} stopOpacity="0.05" />
        </radialGradient>
        <pattern id="flow-dots" width="32" height="32" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="2" fill="#d1d5db" />
        </pattern>
      </defs>
      <rect width="1280" height="720" fill="#fff" />
      <rect width="1280" height="720" fill="url(#flow-dots)" />

      {/* Aristas: curva Bézier horizontal, como las de un canvas de nodos. */}
      {FLOW_EDGES.map((edge) => {
        const from = nodeById(edge.from);
        const to = nodeById(edge.to);
        const x1 = from.x + NODE_WIDTH;
        const y1 = from.y + NODE_HEIGHT / 2;
        const x2 = to.x;
        const y2 = to.y + NODE_HEIGHT / 2;
        const midX = (x1 + x2) / 2;
        const color = edge.answer === 'yes' ? PALETTE.blue : PALETTE.pink;
        return (
          <g key={`${edge.from}-${edge.to}`}>
            <path
              d={`M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`}
              stroke={color}
              strokeWidth={4}
              fill="none"
            />
            <circle cx={x2} cy={y2} r={7} fill={color} />
            <text
              x={midX}
              y={(y1 + y2) / 2 - 12}
              fontSize={20}
              fontWeight={700}
              fill={color}
              textAnchor="middle"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              {edge.answer === 'yes' ? 'YES' : 'NO'}
            </text>
          </g>
        );
      })}

      {/* Nodos: card blanca con borde, título abstracto y dos handles. */}
      {FLOW_NODES.map((node) => (
        <g key={node.id}>
          <rect
            x={node.x}
            y={node.y}
            width={NODE_WIDTH}
            height={NODE_HEIGHT}
            rx={10}
            fill="#fff"
            stroke={PALETTE.gray500}
            strokeWidth={3}
          />
          <rect x={node.x} y={node.y} width={NODE_WIDTH} height={10} rx={5} fill={PALETTE.yellow} />
          {NODE_PROMPT_BARS[node.id].map((width, i) => (
            <rect
              key={`${node.id}-bar-${i}`}
              x={node.x + 20}
              y={node.y + 34 + i * 22}
              width={width}
              height={12}
              rx={6}
              fill={i === 0 ? PALETTE.gray600 : PALETTE.gray500}
              opacity={i === 0 ? 0.85 : 0.45}
            />
          ))}
          {/* Handles yes/no en el borde derecho */}
          <circle cx={node.x + NODE_WIDTH} cy={node.y + NODE_HEIGHT / 2} r={7} fill={PALETTE.blue} />
        </g>
      ))}

      <rect width="1280" height="720" fill="url(#flow-tint)" />
    </svg>
  );
}

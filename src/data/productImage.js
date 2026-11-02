// Product pictures.
// 1) If a product has an `image` field in products.js (a URL or "/images/x.jpg"), that photo is used.
// 2) Otherwise a drawing that matches the product's category is generated automatically.

// Simple shapes for each category (drawn on a 300x220 canvas). "c" is the product's colour.
const SHAPES = {
  "gaming-pc": (c) => `<rect x="105" y="25" width="90" height="170" rx="8" fill="#1b2230" stroke="${c}" stroke-width="3"/>
    <rect x="115" y="38" width="70" height="95" rx="4" fill="#0d1117"/><circle cx="150" cy="85" r="26" fill="none" stroke="${c}" stroke-width="4"/><circle cx="150" cy="85" r="6" fill="${c}"/>
    <rect x="118" y="150" width="64" height="6" rx="3" fill="${c}"/><circle cx="150" cy="175" r="5" fill="${c}"/>`,
  workstation: (c) => `<rect x="60" y="30" width="180" height="120" rx="8" fill="#0d1117" stroke="${c}" stroke-width="4"/>
    <rect x="72" y="42" width="156" height="96" fill="#1b2230"/><path d="M85 120l30-35 25 20 30-45 40 50" fill="none" stroke="${c}" stroke-width="4"/>
    <rect x="135" y="150" width="30" height="25" fill="${c}"/><rect x="105" y="175" width="90" height="10" rx="4" fill="${c}"/>`,
  cpu: (c) => `<rect x="90" y="40" width="120" height="120" rx="10" fill="#1b2230" stroke="${c}" stroke-width="4"/>
    <rect x="120" y="70" width="60" height="60" rx="6" fill="${c}"/>
    ${[100, 120, 140, 160, 180].map((p) => `<rect x="${p}" y="25" width="6" height="15" fill="${c}"/><rect x="${p}" y="160" width="6" height="15" fill="${c}"/><rect x="75" y="${p - 40 + 40}" width="15" height="6" fill="${c}"/><rect x="210" y="${p - 40 + 40}" width="15" height="6" fill="${c}"/>`).join("")}`,
  gpu: (c) => `<rect x="30" y="60" width="240" height="90" rx="10" fill="#1b2230" stroke="${c}" stroke-width="4"/>
    <circle cx="100" cy="105" r="34" fill="#0d1117" stroke="${c}" stroke-width="3"/><circle cx="200" cy="105" r="34" fill="#0d1117" stroke="${c}" stroke-width="3"/>
    <circle cx="100" cy="105" r="8" fill="${c}"/><circle cx="200" cy="105" r="8" fill="${c}"/><rect x="45" y="150" width="130" height="14" fill="#c9a227"/>`,
  motherboard: (c) => `<rect x="60" y="30" width="180" height="160" rx="8" fill="#1b2230" stroke="${c}" stroke-width="4"/>
    <rect x="85" y="50" width="55" height="55" rx="4" fill="${c}"/><rect x="170" y="45" width="8" height="70" fill="${c}"/><rect x="185" y="45" width="8" height="70" fill="${c}"/>
    <rect x="85" y="130" width="130" height="10" fill="${c}"/><rect x="85" y="152" width="130" height="10" fill="${c}"/>`,
  ram: (c) => `<rect x="30" y="80" width="240" height="60" rx="6" fill="#1b2230" stroke="${c}" stroke-width="4"/>
    ${[50, 95, 140, 185, 225].map((x) => `<rect x="${x}" y="92" width="32" height="30" rx="3" fill="${c}"/>`).join("")}
    <rect x="30" y="140" width="240" height="10" fill="#c9a227"/>`,
  storage: (c) => `<rect x="70" y="40" width="160" height="140" rx="10" fill="#1b2230" stroke="${c}" stroke-width="4"/>
    <rect x="90" y="65" width="120" height="50" rx="4" fill="#0d1117"/><rect x="90" y="130" width="60" height="12" rx="3" fill="${c}"/><circle cx="195" cy="136" r="7" fill="${c}"/>`,
  psu: (c) => `<rect x="60" y="55" width="180" height="110" rx="8" fill="#1b2230" stroke="${c}" stroke-width="4"/>
    <circle cx="125" cy="110" r="38" fill="#0d1117" stroke="${c}" stroke-width="3"/><circle cx="125" cy="110" r="7" fill="${c}"/>
    <path d="M190 85l-14 28h14l-8 26 22-34h-14l10-20z" fill="${c}"/>`,
  case: (c) => `<rect x="95" y="20" width="110" height="180" rx="8" fill="#1b2230" stroke="${c}" stroke-width="4"/>
    <rect x="108" y="35" width="84" height="110" rx="4" fill="#0d1117"/><path d="M108 35l84 110" stroke="${c}" stroke-width="2"/>
    <rect x="115" y="160" width="70" height="8" rx="4" fill="${c}"/><rect x="115" y="176" width="40" height="8" rx="4" fill="${c}"/>`,
  cooling: (c) => `<rect x="70" y="30" width="160" height="160" rx="14" fill="#1b2230" stroke="${c}" stroke-width="4"/>
    <circle cx="150" cy="110" r="62" fill="#0d1117"/><circle cx="150" cy="110" r="10" fill="${c}"/>
    ${[0, 72, 144, 216, 288].map((a) => `<ellipse cx="150" cy="75" rx="13" ry="30" fill="${c}" transform="rotate(${a} 150 110)"/>`).join("")}`,
  monitor: (c) => `<rect x="40" y="30" width="220" height="130" rx="8" fill="#0d1117" stroke="${c}" stroke-width="5"/>
    <rect x="52" y="42" width="196" height="106" fill="#1b2230"/><path d="M52 148l60-55 40 35 35-30 61 50z" fill="${c}" opacity=".7"/>
    <rect x="138" y="160" width="24" height="20" fill="${c}"/><rect x="105" y="180" width="90" height="10" rx="4" fill="${c}"/>`,
  peripheral: (c) => `<rect x="25" y="70" width="250" height="90" rx="10" fill="#1b2230" stroke="${c}" stroke-width="4"/>
    ${[0, 1, 2].map((r) => Array.from({ length: 10 }, (_, k) => `<rect x="${38 + k * 23}" y="${82 + r * 22}" width="17" height="15" rx="3" fill="${c}"/>`).join("")).join("")}`,
  network: (c) => `<rect x="50" y="110" width="200" height="50" rx="10" fill="#1b2230" stroke="${c}" stroke-width="4"/>
    <path d="M80 110L65 50M220 110l15-60" stroke="${c}" stroke-width="6" stroke-linecap="round"/>
    <path d="M115 85a50 50 0 0 1 70 0M130 98a30 30 0 0 1 40 0" fill="none" stroke="${c}" stroke-width="5" stroke-linecap="round"/>
    ${[80, 110, 140].map((x) => `<circle cx="${x}" cy="135" r="6" fill="${c}"/>`).join("")}`,
  accessory: (c) => `<path d="M40 150c40-100 80 60 130-20s70-40 90-40" fill="none" stroke="${c}" stroke-width="10" stroke-linecap="round"/>
    <rect x="25" y="138" width="30" height="24" rx="4" fill="#1b2230" stroke="${c}" stroke-width="3"/><rect x="245" y="78" width="30" height="24" rx="4" fill="#1b2230" stroke="${c}" stroke-width="3"/>`,
};

// Returns an image address (URL or inline SVG) for a product.
export function getProductImage(product) {
  if (product.image) return product.image;

  const hue = (product.id * 47) % 360; // each product gets its own colour
  const colour = `hsl(${hue},80%,62%)`;
  const draw = SHAPES[product.category] || SHAPES.accessory;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 220">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="hsl(${hue},40%,16%)"/><stop offset="1" stop-color="#0d1117"/></linearGradient></defs>
    <rect width="300" height="220" fill="url(#g)"/>${draw(colour)}</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

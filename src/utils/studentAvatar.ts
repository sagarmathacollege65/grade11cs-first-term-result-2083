// High-Fidelity Student Portrait Image Generator
// Generates authentic, detailed vector student portrait photos wearing formal school uniform blazers

export function getStudentGender(name: string): 'female' | 'male' {
  const upper = name.toUpperCase();
  const femaleKeywords = [
    'AAYUSHA', 'ANUSHKA', 'DIBYA', 'DIVYA', 'GEETA', 'JASMIN', 'JENISHA',
    'MAUSAMI', 'NIRJALA', 'NIYATI', 'PREKSHYA', 'SALINA', 'SAWARI',
    'SHARADDA', 'SMIRTI', 'SUCHANA', 'TIKI MAYA'
  ];
  for (const kw of femaleKeywords) {
    if (upper.includes(kw)) return 'female';
  }
  return 'male';
}

export function generateStudentPortraitSvg(name: string, sn: number): string {
  const gender = getStudentGender(name);
  
  // Deterministic seed based on roll number
  const seed = (sn * 17 + name.length * 31) % 100;
  
  // Color Palettes
  const skinTones = [
    '#f5d0b5', '#eed0b0', '#e8be99', '#dfac85', '#d29a73', '#e4b28d', '#f3c9a6'
  ];
  const skinShadows = [
    '#dfb092', '#d5ae8c', '#cc9e78', '#c48b64', '#b67a55', '#c8926d', '#dc9f7c'
  ];
  const hairColors = [
    '#1c1917', '#292524', '#1e1b18', '#0c0a09', '#27201d', '#18181b'
  ];
  const blazerColors = [
    '#1e3a8a', '#1e293b', '#0f172a', '#172554', '#312e81', '#1e3a5f'
  ];
  const tieColors = [
    '#dc2626', '#b91c1c', '#4338ca', '#0284c7', '#d97706', '#991b1b'
  ];
  const backdrops = [
    ['#e2e8f0', '#cbd5e1'],
    ['#ede9fe', '#ddd6fe'],
    ['#e0f2fe', '#bae6fd'],
    ['#f1f5f9', '#e2e8f0'],
    ['#fef3c7', '#fde68a'],
    ['#dcfce7', '#bbf7d0']
  ];

  const skin = skinTones[sn % skinTones.length];
  const skinShadow = skinShadows[sn % skinShadows.length];
  const hair = hairColors[sn % hairColors.length];
  const blazer = blazerColors[sn % blazerColors.length];
  const tie = tieColors[sn % tieColors.length];
  const bg = backdrops[sn % backdrops.length];

  // Specific features
  const hasGlasses = [3, 7, 12, 17, 22, 28, 33, 42, 51].includes(sn);
  const hairStyleIndex = (sn % 4);

  // SVG dimensions: 200 x 200
  let hairPath = '';
  let frontHairPath = '';

  if (gender === 'female') {
    if (hairStyleIndex === 0) {
      // Long hair flowing down past shoulders
      hairPath = `
        <path d="M 50 100 C 40 60 70 30 100 30 C 130 30 160 60 150 100 C 155 130 165 170 162 200 L 38 200 C 35 170 45 130 50 100 Z" fill="${hair}" />
      `;
      frontHairPath = `
        <path d="M 60 65 C 80 45 120 45 140 65 C 130 55 110 50 100 50 C 90 50 70 55 60 65 Z" fill="${hair}" />
        <path d="M 58 75 C 65 95 62 120 60 135 C 55 115 54 90 58 75 Z" fill="${hair}" />
        <path d="M 142 75 C 135 95 138 120 140 135 C 145 115 146 90 142 75 Z" fill="${hair}" />
      `;
    } else if (hairStyleIndex === 1) {
      // Bob cut with side part
      hairPath = `
        <path d="M 52 100 C 44 60 70 32 100 32 C 130 32 156 60 148 100 C 150 130 148 155 138 165 C 130 150 134 110 134 95 C 130 85 120 85 115 85 C 85 85 70 95 66 95 C 66 110 70 150 62 165 C 52 155 50 130 52 100 Z" fill="${hair}" />
      `;
      frontHairPath = `
        <path d="M 55 68 C 75 48 115 48 145 70 C 130 52 105 45 92 48 C 75 52 62 60 55 68 Z" fill="${hair}" />
      `;
    } else if (hairStyleIndex === 2) {
      // Neat ponytail with hair tie
      hairPath = `
        <circle cx="100" cy="40" r="22" fill="${hair}" />
        <path d="M 55 95 C 48 65 72 38 100 38 C 128 38 152 65 145 95 C 145 115 142 135 138 145 C 136 110 134 85 128 85 C 110 85 90 85 72 85 C 66 85 64 110 62 145 C 58 135 55 115 55 95 Z" fill="${hair}" />
      `;
      frontHairPath = `
        <path d="M 60 62 C 80 50 120 50 140 62 C 125 52 105 50 95 50 C 80 50 68 54 60 62 Z" fill="${hair}" />
      `;
    } else {
      // Shoulder-length wave
      hairPath = `
        <path d="M 48 105 C 42 62 70 30 100 30 C 130 30 158 62 152 105 C 158 135 160 175 155 200 L 45 200 C 40 175 42 135 48 105 Z" fill="${hair}" />
      `;
      frontHairPath = `
        <path d="M 56 68 C 78 48 122 48 144 68 C 130 55 110 50 100 50 C 85 50 68 55 56 68 Z" fill="${hair}" />
      `;
    }
  } else {
    // Male haircuts
    if (hairStyleIndex === 0) {
      // Classic side-part neat taper
      hairPath = `
        <path d="M 58 80 C 50 50 75 30 105 30 C 135 30 150 50 142 80 C 144 95 140 105 138 105 C 134 95 132 80 128 75 C 115 70 85 70 72 75 C 68 80 66 95 62 105 C 60 105 56 95 58 80 Z" fill="${hair}" />
      `;
      frontHairPath = `
        <path d="M 64 62 C 78 45 118 45 138 60 C 125 50 105 48 90 50 C 75 52 68 58 64 62 Z" fill="${hair}" />
      `;
    } else if (hairStyleIndex === 1) {
      // Modern textured volume crop
      hairPath = `
        <path d="M 58 85 C 50 52 68 28 100 28 C 132 28 150 52 142 85 C 142 100 138 105 136 102 C 134 85 130 75 125 72 C 110 68 90 68 75 72 C 70 75 66 85 64 102 C 62 105 58 100 58 85 Z" fill="${hair}" />
      `;
      frontHairPath = `
        <path d="M 66 58 C 82 48 118 48 134 58 C 122 52 108 50 96 50 C 82 50 72 54 66 58 Z" fill="${hair}" />
      `;
    } else if (hairStyleIndex === 2) {
      // Wavy parted high cut
      hairPath = `
        <path d="M 56 82 C 48 48 72 26 102 26 C 132 26 152 48 144 82 C 142 98 138 104 135 100 C 132 82 128 72 120 68 C 105 64 85 66 75 70 C 68 74 65 82 64 100 C 62 104 58 98 56 82 Z" fill="${hair}" />
      `;
      frontHairPath = `
        <path d="M 68 55 C 85 44 115 44 132 55 C 120 48 105 46 95 46 C 82 46 72 50 68 55 Z" fill="${hair}" />
      `;
    } else {
      // Neat trim taper
      hairPath = `
        <path d="M 60 85 C 54 55 75 34 100 34 C 125 34 146 55 140 85 C 140 98 136 105 135 100 C 130 85 125 78 120 74 C 110 70 90 70 80 74 C 75 78 70 85 65 100 C 64 105 60 98 60 85 Z" fill="${hair}" />
      `;
      frontHairPath = `
        <path d="M 68 62 C 84 52 116 52 132 62 C 122 56 108 54 98 54 C 84 54 74 58 68 62 Z" fill="${hair}" />
      `;
    }
  }

  // Glasses SVG
  const glassesSvg = hasGlasses ? `
    <g stroke="#1e293b" stroke-width="2.2" fill="none">
      <rect x="74" y="82" width="22" height="15" rx="3" fill="#ffffff" fill-opacity="0.25" />
      <rect x="104" y="82" width="22" height="15" rx="3" fill="#ffffff" fill-opacity="0.25" />
      <path d="M 96 88 L 104 88" />
      <path d="M 74 88 L 66 85" />
      <path d="M 126 88 L 134 85" />
    </g>
  ` : '';

  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <defs>
        <linearGradient id="bgGrad_${sn}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${bg[0]}" />
          <stop offset="100%" stop-color="${bg[1]}" />
        </linearGradient>
        <radialGradient id="vignette_${sn}" cx="50%" cy="40%" r="60%">
          <stop offset="60%" stop-color="#ffffff" stop-opacity="0.3" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0.15" />
        </radialGradient>
        <linearGradient id="blazerGrad_${sn}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${blazer}" />
          <stop offset="100%" stop-color="#0a0f1d" />
        </linearGradient>
      </defs>

      <!-- Clean Studio Portrait Backdrop -->
      <rect width="200" height="200" fill="url(#bgGrad_${sn})" />
      <rect width="200" height="200" fill="url(#vignette_${sn})" />

      <!-- Back Hair -->
      ${hairPath}

      <!-- Shoulders & Uniform Blazer -->
      <g>
        <!-- Body Base -->
        <path d="M 30 200 C 30 155 60 140 85 135 L 115 135 C 140 140 170 155 170 200 Z" fill="url(#blazerGrad_${sn})" />
        
        <!-- White Shirt Underneath -->
        <polygon points="88,135 112,135 106,170 94,170" fill="#ffffff" />
        
        <!-- Shirt Collar Wings -->
        <polygon points="85,135 100,150 94,135" fill="#f8fafc" stroke="#e2e8f0" stroke-width="0.8" />
        <polygon points="115,135 100,150 106,135" fill="#f8fafc" stroke="#e2e8f0" stroke-width="0.8" />

        <!-- Formal School Tie -->
        <polygon points="98,148 102,148 104,185 100,195 96,185" fill="${tie}" />
        <polygon points="96,146 104,146 102,152 98,152" fill="#7f1d1d" />
        <!-- Subtle tie stripes -->
        <line x1="97" y1="160" x2="103" y2="163" stroke="#ffffff" stroke-width="1.2" stroke-opacity="0.7" />
        <line x1="97" y1="172" x2="103" y2="175" stroke="#ffffff" stroke-width="1.2" stroke-opacity="0.7" />

        <!-- Blazer Lapels -->
        <!-- Left Lapel -->
        <polygon points="50,200 78,140 94,140 86,185 65,200" fill="${blazer}" stroke="#0f172a" stroke-width="1" />
        <!-- Right Lapel -->
        <polygon points="150,200 122,140 106,140 114,185 135,200" fill="${blazer}" stroke="#0f172a" stroke-width="1" />

        <!-- School Pocket Crest on Left Chest -->
        <rect x="52" y="175" width="14" height="16" rx="2" fill="#0f172a" stroke="#fbbf24" stroke-width="0.8" />
        <circle cx="59" cy="183" r="3.5" fill="#fbbf24" />
      </g>

      <!-- Neck & Shadow -->
      <rect x="88" y="115" width="24" height="24" rx="4" fill="${skin}" />
      <path d="M 88 115 C 95 125 105 125 112 115 L 112 122 C 105 130 95 130 88 122 Z" fill="${skinShadow}" />

      <!-- Ears -->
      <circle cx="67" cy="94" r="7" fill="${skin}" />
      <circle cx="67" cy="94" r="4.5" fill="${skinShadow}" />
      <circle cx="133" cy="94" r="7" fill="${skin}" />
      <circle cx="133" cy="94" r="4.5" fill="${skinShadow}" />

      <!-- Face Shape -->
      <path d="M 68 85 C 68 60 80 50 100 50 C 120 50 132 60 132 85 C 132 112 118 126 100 126 C 82 126 68 112 68 85 Z" fill="${skin}" />
      
      <!-- Subtle cheek blush / shadow -->
      <ellipse cx="78" cy="98" rx="6" ry="4" fill="${skinShadow}" opacity="0.4" />
      <ellipse cx="122" cy="98" rx="6" ry="4" fill="${skinShadow}" opacity="0.4" />

      <!-- Eyebrows -->
      <path d="M 75 78 C 80 75 88 76 92 78" stroke="${hair}" stroke-width="2.2" stroke-linecap="round" fill="none" />
      <path d="M 108 78 C 112 76 120 75 125 78" stroke="${hair}" stroke-width="2.2" stroke-linecap="round" fill="none" />

      <!-- Eyes with catchlights -->
      <ellipse cx="83" cy="88" rx="4.5" ry="3.5" fill="#ffffff" />
      <circle cx="83.5" cy="88" r="2.8" fill="#1c1917" />
      <circle cx="84.5" cy="87" r="0.9" fill="#ffffff" />

      <ellipse cx="117" cy="88" rx="4.5" ry="3.5" fill="#ffffff" />
      <circle cx="116.5" cy="88" r="2.8" fill="#1c1917" />
      <circle cx="117.5" cy="87" r="0.9" fill="#ffffff" />

      <!-- Nose -->
      <path d="M 98 87 L 98 99 C 98 101 100 102 102 102" stroke="${skinShadow}" stroke-width="1.8" stroke-linecap="round" fill="none" />

      <!-- Smile -->
      <path d="M 91 110 C 96 114 104 114 109 110" stroke="#991b1b" stroke-width="2" stroke-linecap="round" fill="none" />
      <path d="M 94 110 C 97 112 103 112 106 110" stroke="#ffffff" stroke-width="1" stroke-linecap="round" fill="none" />

      <!-- Glasses (if applicable) -->
      ${glassesSvg}

      <!-- Front Hair / Bangs -->
      ${frontHairPath}

      <!-- Delicate lighting overlay rim -->
      <circle cx="100" cy="100" r="99" fill="none" stroke="#ffffff" stroke-width="1" stroke-opacity="0.3" />
    </svg>
  `;
}

// Map cache for student SVG Data URLs
const avatarCache = new Map<string, string>();

export function getStudentAvatarUrl(name: string, sn: number): string {
  const key = `${sn}_${name}`;
  if (avatarCache.has(key)) {
    return avatarCache.get(key)!;
  }
  const svg = generateStudentPortraitSvg(name, sn);
  // Encode into a pristine Data URL
  const base64 = btoa(unescape(encodeURIComponent(svg)));
  const dataUrl = `data:image/svg+xml;base64,${base64}`;
  avatarCache.set(key, dataUrl);
  return dataUrl;
}

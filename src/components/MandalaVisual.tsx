import React from 'react';

export const MandalaVisual = () => (
  <svg viewBox="0 0 400 400" style={{ width: '100%', height: '100%', opacity: 0.5 }} aria-hidden="true">
    <defs>
      <radialGradient id="mg1" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
      </radialGradient>
    </defs>
    <g transform="translate(200,200)">
      {Array.from({ length: 12 }).map((_, i) => (
        <g key={i} transform={`rotate(${i * 30})`}>
          <ellipse cx="0" cy="-80" rx="6" ry="30" fill="none" stroke="#C9A84C" strokeWidth="0.5" opacity="0.4" />
          <circle cx="0" cy="-110" r="3" fill="#C9A84C" opacity="0.3" />
          <line x1="0" y1="-50" x2="0" y2="-130" stroke="#C9A84C" strokeWidth="0.3" opacity="0.25" />
        </g>
      ))}
      {[30, 60, 90, 120, 150].map(r => (
        <circle key={r} r={r} fill="none" stroke="#C9A84C" strokeWidth="0.5" opacity={0.15 - r * 0.0008} />
      ))}
      <circle r="20" fill="url(#mg1)" />
      <circle r="10" fill="none" stroke="#C9A84C" strokeWidth="1" opacity="0.5" />
      <circle r="4" fill="#C9A84C" opacity="0.6" />
    </g>
  </svg>
);

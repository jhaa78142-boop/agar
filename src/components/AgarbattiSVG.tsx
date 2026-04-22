import React from 'react';

interface Props {
  color?: string;
  animated?: boolean;
}

export const AgarbattiSVG = ({ color = '#C9A84C', animated = true }: Props) => (
  <svg viewBox="0 0 60 300" style={{ width: 30, height: 150 }} aria-hidden="true">
    {animated && (
      <g>
        {[0, 1, 2].map(i => (
          <ellipse key={i}
            cx={30 + (i % 2 === 0 ? 5 : -5)}
            cy={40 - i * 10}
            rx={6 + i * 3}
            ry={12 + i * 6}
            fill={color}
            opacity={0}
            style={{
              animation: `incense-smoke ${2 + i * 0.5}s ease-out ${i * 0.7}s infinite`,
            }}
          />
        ))}
      </g>
    )}
    <line x1="30" y1="60" x2="30" y2="290" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <ellipse cx="30" cy="280" rx="12" ry="6" fill={color} opacity="0.3" />
    <circle cx="30" cy="60" r="4" fill={color} />
    <ellipse cx="30" cy="50" rx="3" ry="8" fill={color} opacity="0.6" />
  </svg>
);

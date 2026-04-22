import React from 'react';

interface MarqueeProps {
  items: string[];
}

export const Marquee = ({ items }: MarqueeProps) => {
  const doubled = [...items, ...items];
  return (
    <div style={{ overflow: 'hidden', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '14px 0', background: 'var(--bg2)' }}>
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 24, marginRight: 24 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 11, letterSpacing: '0.15em', color: 'var(--muted)', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{item}</span>
            <span style={{ color: 'var(--gold)', fontSize: 8 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

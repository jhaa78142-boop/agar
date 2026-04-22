import React, { useState, useEffect } from 'react';

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      style={{
        position: 'fixed',
        bottom: 90, // above the FloatingUI WhatsApp button
        right: 28,
        zIndex: 199,
        width: 48,
        height: 48,
        borderRadius: '50%',
        border: '1px solid rgba(201,168,76,0.5)',
        background: 'rgba(10,5,0,0.85)',
        backdropFilter: 'blur(8px)',
        color: 'var(--gold)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        transition: 'transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s, opacity 0.4s',
        opacity: visible ? 1 : 0,
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(201,168,76,0.3)';
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.transform = 'none';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.5)';
      }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
};

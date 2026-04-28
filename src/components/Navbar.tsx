import React, { useState, useEffect } from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { useIsMobile } from '../hooks/use-mobile';

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Navbar = ({ theme, onToggleTheme }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');
  const progress = useScrollProgress();
  const isMobile = useIsMobile();

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '/' },
    { label: 'PRODUCTS', href: '/products' },
    { label: 'WHOLESALE', href: '/wholesale' },
    { label: 'ABOUT', href: '/about' },
    { label: 'BLOG', href: '/blog' },
  ];

  const isDark = theme === 'dark';

  const navBg = scrolled
    ? isDark ? 'rgba(5,3,8,0.98)' : 'rgba(255,255,255,0.98)'
    : 'transparent';

  const navBorder = scrolled
    ? isDark ? '1px solid rgba(201,168,76,0.15)' : '1px solid rgba(200,153,42,0.2)'
    : 'none';

  const navShadow = scrolled
    ? isDark ? '0 2px 20px rgba(0,0,0,0.5)' : '0 2px 20px rgba(107,58,42,0.06)'
    : 'none';

  const navLinkColor = isDark ? 'var(--muted)' : '#3D2B1F';

  const WA_MESSAGE = encodeURIComponent('Hi, I found White Stone Agarbatti online. I would like to know more about your products and pricing.');

  return (
    <>
      {/* Scroll progress bar */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed', top: 0, left: 0, height: 2,
          width: `${progress}%`,
          background: 'linear-gradient(to right, var(--gold2), var(--gold), var(--gold3))',
          zIndex: 1000, transition: 'width 0.1s',
        }}
      />

      <nav
        role="navigation"
        aria-label="Main navigation"
        style={{
          position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 500,
          transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)',
          backgroundColor: navBg,
          borderBottom: navBorder,
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          boxShadow: navShadow,
          padding: scrolled ? '12px 24px' : '22px 24px',
        }}
      >
        <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* LOGO */}
          <a
            href="/"
            aria-label="White Stone Agarbatti — Home"
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 14, flexShrink: 0 }}
          >
            <div style={{
              width: scrolled ? 44 : 54,
              height: scrolled ? 44 : 54,
              borderRadius: '50%',
              overflow: 'hidden',
              flexShrink: 0,
              transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)',
              border: `2px solid ${isDark ? 'var(--gold)' : 'var(--gold2)'}`,
              boxShadow: isDark
                ? '0 0 20px rgba(201,168,76,0.3)'
                : '0 4px 15px rgba(107,58,42,0.1)',
              background: '#fff',
              padding: 2
            }}>
              <img
                src="/ws-emblem.webp"
                alt="White Stone WS Emblem"
                style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              <span className="gold-shimmer" style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: scrolled ? 16 : 20, letterSpacing: '0.15em',
                textTransform: 'uppercase', lineHeight: 1.1,
                transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)',
                textShadow: isDark ? '0 0 10px rgba(201,168,76,0.3)' : 'none',
              }}>WHITE STONE</span>
              <span style={{
                fontFamily: 'var(--font-hindi)', fontSize: scrolled ? 12 : 14,
                fontWeight: 500,
                color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(61,43,31,0.7)', 
                lineHeight: 1, transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)',
                letterSpacing: '0.05em'
              }}>व्हाइट स्टोन</span>
            </div>
          </a>

          {/* Desktop Nav */}
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
              {navLinks.map(item => (
                <a key={item.label} href={item.href} className="nav-link" style={{ color: navLinkColor }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--gold)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = navLinkColor}
                >{item.label}</a>
              ))}
            </div>
          )}

          {/* Right Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button onClick={onToggleTheme} aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
              style={{
                border: `1px solid var(--border)`, color: isDark ? 'var(--cream)' : '#3D2B1F',
                background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(200,153,42,0.06)',
                fontFamily: 'var(--font-sans)', fontSize: 13, letterSpacing: '0.04em',
                padding: '8px 16px', cursor: 'pointer', borderRadius: 4,
                transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: 6,
              }}
            >{isDark ? '☀ Light' : '☾ Dark'}</button>

            {!isMobile && (
              <a href={`https://wa.me/919226915311?text=${WA_MESSAGE}`}
                target="_blank" rel="noopener noreferrer" className="btn-primary"
                style={{ padding: '10px 24px', fontSize: 12 }} aria-label="Order now on WhatsApp"
              >ORDER NOW</a>
            )}

            {isMobile && (
              <button onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                style={{ display: 'flex', flexDirection: 'column', gap: 5, background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
              >
                {[0, 1, 2].map(i => (
                  <div key={i} style={{
                    width: 22, height: 1.5, background: isDark ? 'var(--cream)' : '#3D2B1F', transition: 'all 0.3s',
                    transform: menuOpen
                      ? i === 0 ? 'rotate(45deg) translate(5px, 5px)' : i === 1 ? 'scaleX(0)' : 'rotate(-45deg) translate(5px, -5px)'
                      : 'none',
                  }} />
                ))}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobile && menuOpen && (
          <div style={{
            position: 'absolute', top: '100%', left: 0, width: '100%',
            background: isDark ? 'rgba(5,3,8,0.99)' : 'rgba(255,255,255,0.99)',
            borderBottom: `1px solid var(--border)`, padding: '24px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          }}>
            {navLinks.map(item => (
              <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block', padding: '14px 0', fontFamily: 'var(--font-display)',
                  fontSize: 14, letterSpacing: '0.1em', color: isDark ? 'var(--cream)' : '#2C1A0E',
                  textDecoration: 'none', textTransform: 'uppercase',
                  borderBottom: '1px solid var(--border)', transition: 'color 0.2s',
                }}
              >{item.label}</a>
            ))}
            <a href={`https://wa.me/919226915311?text=${WA_MESSAGE}`}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'block', marginTop: 20, padding: '14px 24px', textAlign: 'center',
                background: 'var(--gold)', color: '#1A0E00', fontFamily: 'var(--font-display)',
                fontSize: 13, letterSpacing: '0.1em', textDecoration: 'none',
                textTransform: 'uppercase', fontWeight: 700,
              }}
            >ORDER NOW</a>
          </div>
        )}
      </nav>
    </>
  );
};

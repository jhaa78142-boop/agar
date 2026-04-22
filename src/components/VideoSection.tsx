import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const VideoSection = () => {
  const { ref: videoRef, isIntersecting: videoVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section
      ref={videoRef}
      style={{
        position: 'relative', background: '#0A0500', overflow: 'hidden',
        opacity: videoVisible ? 1 : 0,
        transition: 'opacity 1.2s cubic-bezier(0.22,1,0.36,1)',
      }}
    >
      {/* Video wrapper with play overlay */}
      <div style={{ position: 'relative', width: '100%' }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/agarbatti-hero.webp"
          aria-label="White Stone Incense Ritual — agarbatti craftsmanship video"
          id="ritual-video"
          style={{
            width: '100%',
            maxHeight: '90vh',
            minHeight: 340,
            display: 'block',
            objectFit: 'cover',
            opacity: 0.82,
            transform: videoVisible ? 'scale(1)' : 'scale(1.06)',
            transition: 'transform 1.6s cubic-bezier(0.22,1,0.36,1)',
          }}
          onPlay={() => {
            const overlay = document.getElementById('video-play-overlay');
            if (overlay) overlay.style.opacity = '0';
          }}
          onPause={() => {
            const overlay = document.getElementById('video-play-overlay');
            if (overlay) overlay.style.opacity = '1';
          }}
        >
          <source src="/White_Stone_Incense_Ritual.mp4" type="video/mp4" />
          <track kind="captions" src="/White_Stone_Incense_Ritual.vtt" srcLang="en" label="English" default />
        </video>
        {/* Gold play button overlay — shows when paused or autoplay fails */}
        <div
          id="video-play-overlay"
          style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            opacity: 0,
            transition: 'opacity 0.4s ease',
            pointerEvents: 'none',
          }}
        >
          <div style={{
            width: 72, height: 72, borderRadius: '50%',
            background: 'rgba(201,168,76,0.9)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 40px rgba(201,168,76,0.5)',
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#1A0E00" aria-hidden="true">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </div>
        </div>
      </div>

      {/* Gradient overlays for depth */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,5,0,0.45) 0%, transparent 30%, transparent 60%, rgba(10,5,0,0.75) 100%)', pointerEvents: 'none' }} />
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,5,0,0.5) 0%, transparent 50%, rgba(10,5,0,0.3) 100%)', pointerEvents: 'none' }} />

      {/* Top label */}
      <div style={{ position: 'absolute', top: 32, left: 0, right: 0, display: 'flex', justifyContent: 'center', zIndex: 2 }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 14, padding: '8px 20px',
          background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.3)', backdropFilter: 'blur(6px)',
          opacity: videoVisible ? 1 : 0,
          transform: videoVisible ? 'translateY(0)' : 'translateY(-16px)',
          transition: 'opacity 0.9s cubic-bezier(0.22,1,0.36,1) 0.3s, transform 0.9s cubic-bezier(0.22,1,0.36,1) 0.3s',
        }}>
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--gold)', boxShadow: '0 0 8px rgba(201,168,76,0.8)' }} />
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 11, letterSpacing: '0.2em', color: '#E8C96A', textTransform: 'uppercase' }}>THE RITUAL</span>
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--gold)', boxShadow: '0 0 8px rgba(201,168,76,0.8)' }} />
        </div>
      </div>

      {/* Centered overlay text */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'flex-end',
        padding: '40px 24px 56px', textAlign: 'center',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 700,
          fontSize: 'clamp(28px,5vw,64px)', color: '#FFFBF0',
          lineHeight: 1.2, marginBottom: 16,
          textShadow: '0 2px 24px rgba(0,0,0,0.6)',
          opacity: videoVisible ? 1 : 0,
          transform: videoVisible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 1s cubic-bezier(0.22,1,0.36,1) 0.5s, transform 1s cubic-bezier(0.22,1,0.36,1) 0.5s',
        }}>
          The Sacred Art of Agarbatti
        </h2>
        <p style={{
          fontFamily: 'var(--font-serif)', fontStyle: 'italic',
          fontSize: 'clamp(14px,2vw,20px)', color: 'rgba(253,246,227,0.82)',
          maxWidth: 560, lineHeight: 1.7, marginBottom: 32,
          textShadow: '0 1px 12px rgba(0,0,0,0.5)',
          opacity: videoVisible ? 1 : 0,
          transform: videoVisible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 1s cubic-bezier(0.22,1,0.36,1) 0.7s, transform 1s cubic-bezier(0.22,1,0.36,1) 0.7s',
        }}>
          "Lighting an agarbatti is not merely about fragrance.<br />
          It is the beginning of a conversation with the divine."
        </p>
        <div style={{
          display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center',
          opacity: videoVisible ? 1 : 0,
          transform: videoVisible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 1s cubic-bezier(0.22,1,0.36,1) 0.9s, transform 1s cubic-bezier(0.22,1,0.36,1) 0.9s',
        }}>
          <a href="/products" style={{
            display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: 12,
            fontWeight: 700, letterSpacing: '0.12em', padding: '13px 32px',
            background: 'var(--gold)', color: '#1A0E00', border: 'none',
            cursor: 'pointer', textTransform: 'uppercase', textDecoration: 'none',
            transition: 'opacity 0.3s',
          }}>EXPLORE COLLECTION</a>
          <a href="https://wa.me/919226915311?text=Hi%2C%20I%20found%20White%20Stone%20Agarbatti%20online.%20I%20would%20like%20to%20know%20more%20about%20your%20products%20and%20pricing."
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: 12,
              fontWeight: 700, letterSpacing: '0.12em', padding: '13px 32px',
              background: 'transparent', color: '#FFFBF0',
              border: '1px solid rgba(253,246,227,0.5)',
              cursor: 'pointer', textTransform: 'uppercase', textDecoration: 'none',
              backdropFilter: 'blur(4px)',
            }}>ORDER ON WHATSAPP</a>
        </div>
      </div>
    </section>
  );
};

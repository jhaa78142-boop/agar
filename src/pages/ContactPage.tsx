import React from 'react';
import { useSEO } from '../hooks/useSEO';

export const ContactPage = () => {
  useSEO({
    title: 'Contact Us | White Stone Agarbatti — Chiplun, Maharashtra',
    description: 'Get in touch with White Stone Agarbatti. Call +91 92269 15311, email shreeganesha645@gmail.com, or visit us in Chiplun, Ratnagiri, Maharashtra.',
    canonical: 'https://whitestoneagarbatti.com/contact',
  });

  const contactItems = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.61 4.93 2 2 0 0 1 3.6 2.72h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.09a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      label: 'PHONE',
      value: '+91 92269 15311',
      href: 'tel:+919226915311',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      label: 'EMAIL',
      value: 'shreeganesha645@gmail.com',
      href: 'mailto:shreeganesha645@gmail.com',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.096.54 4.063 1.489 5.778L0 24l6.389-1.673A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.914 0-3.713-.496-5.279-1.364l-.379-.224-3.932 1.028 1.045-3.818-.247-.395A9.942 9.942 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
      ),
      label: 'WHATSAPP',
      value: 'Message us on WhatsApp',
      href: 'https://wa.me/919226915311?text=Hello%2C%20I%20am%20interested%20in%20White%20Stone%20Agarbatti',
      external: true,
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: 'ADDRESS',
      value: 'Chiplun, Ratnagiri, Maharashtra, India',
      href: undefined,
    },
  ];

  return (
    <main className="page-enter" style={{ paddingTop: 112, paddingBottom: 80, background: 'var(--bg)' }}>
      {/* Hero */}
      <section style={{
        position: 'relative', padding: '60px 24px 100px', overflow: 'hidden',
        background: '#0A0500',
      }}>
        {/* Background texture */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: 'linear-gradient(rgba(201,168,76,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.4) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />
        {/* Gradient overlay */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 80% at 50% 40%, rgba(201,168,76,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>GET IN TOUCH</div>
          <h1 style={{
            fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 700,
            fontSize: 'clamp(40px,6vw,80px)', color: '#FFFBF0',
            lineHeight: 1.1, marginBottom: 24,
            textShadow: '0 2px 20px rgba(0,0,0,0.5)',
          }}>
            Contact Us
          </h1>
          <p style={{
            fontFamily: 'var(--font-serif)', fontSize: 18, fontStyle: 'italic',
            color: 'rgba(253,246,227,0.75)', maxWidth: 560, margin: '0 auto', lineHeight: 1.7,
          }}>
            We'd love to hear from you. Reach out via phone, email, or WhatsApp — we typically respond within 2 hours.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section style={{ padding: '80px 24px', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 24,
          }}>
            {contactItems.map((item) => {
              const content = (
                <div style={{
                  padding: '36px 28px', background: 'var(--bg2)',
                  border: '1px solid var(--border)', borderTop: '3px solid var(--gold)',
                  textAlign: 'center',
                  transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s cubic-bezier(0.22,1,0.36,1)',
                }}>
                  <div style={{ color: 'var(--gold)', marginBottom: 16, display: 'flex', justifyContent: 'center' }}>
                    {item.icon}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontSize: 10, letterSpacing: '0.2em',
                    color: 'var(--gold2)', marginBottom: 12,
                  }}>{item.label}</div>
                  <div style={{
                    fontFamily: 'var(--font-serif)', fontSize: 16, fontStyle: 'italic',
                    color: 'var(--text-dark)', lineHeight: 1.5,
                  }}>{item.value}</div>
                </div>
              );

              if (item.href) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    style={{ textDecoration: 'none', display: 'block' }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 40px rgba(107,58,42,0.12)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.transform = 'none';
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}
                  >
                    {content}
                  </a>
                );
              }
              return <div key={item.label}>{content}</div>;
            })}
          </div>

          {/* Map / Additional Info */}
          <div style={{
            marginTop: 64, padding: '48px 36px', background: 'var(--bg2)',
            border: '1px solid var(--border)', textAlign: 'center',
          }}>
            <div className="section-label" style={{ marginBottom: 20 }}>BUSINESS HOURS</div>
            <p style={{
              fontFamily: 'var(--font-serif)', fontSize: 18, fontStyle: 'italic',
              color: 'var(--text-dark)', lineHeight: 1.8, marginBottom: 16,
            }}>
              Monday – Saturday: 9:00 AM – 7:00 PM IST<br />
              Sunday: Closed
            </p>
            <p style={{
              fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.6,
            }}>
              For wholesale enquiries, visit our <a href="/wholesale" style={{ color: 'var(--gold)', textDecoration: 'none' }}>wholesale page</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

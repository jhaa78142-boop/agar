import React from 'react';

export const HowToOrder = () => {
  return (
    <section style={{ padding: '100px 24px', background: 'var(--bg)', borderTop: '1px solid var(--border)', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
        <div className="section-label" style={{ marginBottom: 20 }}>SIMPLE PROCESS</div>
        <h2 style={{
          fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px,4vw,52px)',
          fontStyle: 'italic', fontWeight: 700, color: 'var(--text-dark)',
          lineHeight: 1.2, marginBottom: 64,
        }}>How to Order</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 40,
        }}>
          {[
            {
              step: '01',
              heading: 'Browse & Choose',
              desc: 'Browse our collection and pick your favourite fragrance from our range of premium agarbatti.',
            },
            {
              step: '02',
              heading: 'Message on WhatsApp',
              desc: 'Message us on WhatsApp with your order — our team responds within minutes.',
            },
            {
              step: '03',
              heading: 'Doorstep Delivery',
              desc: 'Receive your delivery at your door in 3–5 days, anywhere across India.',
            },
          ].map((item) => (
            <div key={item.step} style={{ textAlign: 'center', padding: '0 16px' }}>
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: 52, fontWeight: 900,
                color: 'var(--gold)', lineHeight: 1, marginBottom: 20,
                letterSpacing: '0.04em', opacity: 0.9,
              }}>{item.step}</div>
              <div style={{
                width: 40, height: 2,
                background: 'linear-gradient(to right, var(--gold), transparent)',
                margin: '0 auto 20px',
              }} />
              <h3 style={{
                fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 700,
                fontSize: 22, color: 'var(--text-dark)', marginBottom: 12, lineHeight: 1.3,
              }}>{item.heading}</h3>
              <p style={{
                fontFamily: 'var(--font-sans)', fontSize: 14,
                color: 'var(--text-muted)', lineHeight: 1.7,
              }}>{item.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 56 }}>
          <a
            href={`https://wa.me/919226915311?text=${encodeURIComponent('Hi, I found White Stone Agarbatti online. I would like to know more about your products and pricing.')}`}
            target="_blank" rel="noopener noreferrer"
            className="btn-whatsapp"
            style={{ display: 'inline-flex' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: 8 }} aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.096.54 4.063 1.489 5.778L0 24l6.389-1.673A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.914 0-3.713-.496-5.279-1.364l-.379-.224-3.932 1.028 1.045-3.818-.247-.395A9.942 9.942 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            START YOUR ORDER
          </a>
        </div>
      </div>
    </section>
  );
};

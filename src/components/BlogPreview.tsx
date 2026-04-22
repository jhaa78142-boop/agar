import React from 'react';
import { BLOGS } from '../constants';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const BlogPreview = () => {
  const { ref: blogRef, isIntersecting: blogVisible } = useIntersectionObserver();

  return (
    <section style={{ padding: '100px 24px', background: 'var(--bg2)', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div
          ref={blogRef}
          style={{
            marginBottom: 48, display: 'flex', alignItems: 'flex-end',
            justifyContent: 'space-between', flexWrap: 'wrap', gap: 24,
            opacity: blogVisible ? 1 : 0,
            transform: blogVisible ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          <div>
            <div className="section-label" style={{ marginBottom: 12 }}>EDITORIAL</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px,4vw,52px)', fontStyle: 'italic', fontWeight: 700, color: 'var(--text-dark)', lineHeight: 1.1 }}>
              Sacred Wisdom
            </h2>
          </div>
          <a href="/blog" className="btn-outline" style={{ fontSize: 12 }}>ALL ARTICLES →</a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 32 }}>
          {BLOGS.slice(0, 3).map((b, i) => (
            <a
              key={b.id}
              href={`/blog/${b.id}`}
              style={{
                textDecoration: 'none', display: 'block',
                borderTop: '1px solid var(--border)', paddingTop: 24,
                opacity: blogVisible ? 1 : 0,
                transform: blogVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${i * 0.15 + 0.2}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${i * 0.15 + 0.2}s`,
              }}
            >
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 11, color: 'var(--gold2)', letterSpacing: '0.1em', marginBottom: 12 }}>{b.category} · {b.readTime}</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 600, color: 'var(--text-dark)', fontStyle: 'italic', lineHeight: 1.4, marginBottom: 12 }}>{b.title}</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.6 }}>{b.excerpt}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

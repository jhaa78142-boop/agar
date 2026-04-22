import React, { useState } from 'react';
import { BLOGS, KEYWORDS } from '../constants';
import { useSEO } from '../hooks/useSEO';

export const BlogPage = () => {
  const canonical = `https://whitestoneagarbatti.com/blog?keywords=${encodeURIComponent(KEYWORDS.join(', '))}`;

  useSEO({
    title: 'Agarbatti Blog | White Stone Premium Incense Guide',
    description: 'Read expert articles on agarbatti, meditation, fragrances, and wellness. Learn about premium incense sticks and their benefits.',
    keywords: KEYWORDS.join(', '),
    canonical,
  });

  const [activeTab, setActiveTab] = useState('ALL');
  const tabs = ['ALL', 'WELLNESS', 'CULTURE', 'GUIDE'];
  const filtered = activeTab === 'ALL' ? BLOGS : BLOGS.filter(b => b.category === activeTab);

  return (
    <main className="page-enter" style={{ paddingTop: 112, paddingBottom: 80, background: 'var(--bg)' }}>
      {/* Hero */}
      <section style={{ padding: '40px 24px 64px', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: 12 }}>EDITORIAL</div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 700, fontSize: 'clamp(44px,7vw,88px)', color: 'var(--text-dark)', lineHeight: 1.1 }}>Sacred Insights</h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--text-muted)', marginTop: 16, maxWidth: 480, lineHeight: 1.7 }}>Discover insights into the world of premium agarbatti, wellness, and Indian sacred traditions.</p>
        </div>
      </section>

      {/* Filter */}
      <section style={{ padding: '0 24px 48px', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                fontFamily: 'var(--font-display)', textTransform: 'uppercase',
                padding: '10px 24px', border: '1px solid var(--gold)',
                fontSize: 11, letterSpacing: '0.1em', cursor: 'pointer',
                background: tab === activeTab ? 'var(--gold)' : 'transparent',
                color: tab === activeTab ? '#1A0E00' : 'var(--gold)',
                transition: 'all 0.3s',
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Post */}
      {filtered[0] && (
        <section style={{ padding: '0 24px 48px', background: 'var(--bg)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <a
              href={`/blog/${filtered[0].id}`}
              style={{
                display: 'block', padding: '48px 40px', background: 'var(--bg2)',
                border: '1px solid var(--border)', borderTop: '3px solid var(--gold)',
                textDecoration: 'none', transition: 'box-shadow 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(107,58,42,0.08)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = 'none'}
            >
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 9, letterSpacing: '0.2em', color: 'var(--copper)', textTransform: 'uppercase' }}>FEATURED</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 700, fontSize: 'clamp(28px,4vw,48px)', color: 'var(--text-dark)', marginTop: 16, marginBottom: 16, lineHeight: 1.2 }}>{filtered[0].title}</h2>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--text-muted)', maxWidth: 560, lineHeight: 1.7, marginBottom: 24 }}>{filtered[0].excerpt}</p>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 11, letterSpacing: '0.15em', color: 'var(--gold)', textTransform: 'uppercase' }}>READ MORE →</span>
            </a>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section style={{ padding: '0 24px', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
            {filtered.slice(1).map(blog => (
              <a
                key={blog.id}
                href={`/blog/${blog.id}`}
                style={{
                  display: 'block', padding: '32px 28px', textDecoration: 'none',
                  background: 'var(--bg2)', border: '1px solid var(--border)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 40px rgba(107,58,42,0.1)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'none';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 9, letterSpacing: '0.15em', color: 'var(--gold2)', textTransform: 'uppercase', marginBottom: 16, display: 'block' }}>{blog.category}</span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 600, fontSize: 17, color: 'var(--text-dark)', marginBottom: 12, lineHeight: 1.4 }}>{blog.title}</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-muted)', marginBottom: 24, lineHeight: 1.6 }}>{blog.excerpt}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 11, color: '#aaa' }}>{blog.date}</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 11, color: 'var(--gold)', letterSpacing: '0.1em' }}>READ →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div aria-hidden="true" style={{ fontSize: 1, color: 'var(--bg)', userSelect: 'none', overflow: 'hidden', height: 0 }}>{KEYWORDS.join(' ')}</div>
    </main>
  );
};

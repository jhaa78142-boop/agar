import React from 'react';
import { useParams } from 'react-router-dom';
import { BLOGS, KEYWORDS } from '../constants';
import { useSEO } from '../hooks/useSEO';

type BlogContentEntry = string | {
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
  closing: string;
};

const BLOG_CONTENT: Record<string, BlogContentEntry> = {
  "best-agarbatti-for-meditation": "The practice of meditation has been enhanced by natural aromas for thousands of years. The best agarbatti for meditation combines pure ingredients with traditional craftsmanship. When selecting premium incense sticks, look for natural sandalwood and organic materials. Buy agarbatti online that is charcoal free for the deepest meditative experience. Temple grade agarbatti provides the cleanest burn and most authentic experience. Many practitioners find that masala agarbatti blends offer the perfect balance of fragrance intensity and purity. The long lasting agarbatti from White Stone ensures your meditation sessions remain undisturbed by the need to relight.",
  "chemical-free-agarbatti-india": "Chemical-free agarbatti has become essential for health-conscious Indian households. Unlike conventional incense sticks, chemical free agarbatti in India uses only natural ingredients and organic binders. The health benefits of switching to charcoal free agarbatti are well documented by Ayurvedic practitioners. Best agarbatti brands in India now prioritize purity over cost. White Stone's commitment to natural agarbatti buy online options makes premium quality accessible to all. Our handmade agarbatti uses no synthetic fragrances, ensuring every breath you take during your prayers is pure and sacred.",
  "sandalwood-incense-benefits": {
    intro: "Chandan — the Sanskrit name for sandalwood — has been the soul of Indian sacred ritual for over four thousand years. From the sandalwood paste applied to temple idols at dawn to the fragrant smoke that rises in a thousand homes during evening aarti, this wood carries within it both a theology and a pharmacology that modern science is only now beginning to fully appreciate. White Stone's Chandan Natural agarbatti is built on this ancient foundation, using authentic sandalwood powder to deliver an experience that is at once deeply spiritual and measurably therapeutic.",
    sections: [
      {
        heading: "The Spiritual Significance of Chandan",
        paragraphs: [
          "In Vedic tradition, sandalwood holds a uniquely elevated status among sacred materials. The Rigveda references fragrant woods in the context of yajna — fire rituals — where the quality of the offering was believed to directly influence the quality of the divine response. Sandalwood, with its slow, even burn and cool, persistent fragrance, came to symbolise patience, surrender, and the refined mind. Unlike camphor, which burns intensely and quickly, chandan lingers — a metaphor for the lasting effects of genuine spiritual practice.",
          "Across Hindu, Buddhist, and Jain traditions, sandalwood paste (chandan tilak) is used to mark the body at sacred points, particularly the forehead, where it is believed to cool the third eye and sharpen intuitive awareness. When burned as agarbatti, the same principle applies: the aromatic molecules are thought to thin the veil between the material and subtle worlds, making prayer and meditation more efficacious. Many puja traditions specify chandan as the incense of choice for Vishnu, Lakshmi, and Saraswati — deities associated with wisdom, prosperity, and elevated consciousness.",
        ],
      },
      {
        heading: "Therapeutic Properties: What Science Says",
        paragraphs: [
          "The primary aromatic compounds in Santalum album — the botanical name for Indian sandalwood — are alpha-santalol and beta-santalol. These sesquiterpenoids have been studied extensively for their anxiolytic (anti-anxiety), anti-inflammatory, and mild sedative effects. A 2006 study published in the journal Planta Medica demonstrated that inhaled alpha-santalol increased attention and physiological relaxation markers simultaneously — a rare combination that explains why meditators across traditions have long prized sandalwood. The compound appears to act on the olfactory-limbic axis, calming the amygdala while keeping the prefrontal cortex alert.",
          "Beyond mood, sandalwood smoke has demonstrable antimicrobial properties. Research from the Indian Institute of Chemical Technology found that burning sandalwood incense reduced airborne bacteria in enclosed spaces by a significant margin. Ayurvedic texts had anticipated this finding centuries earlier, prescribing the burning of chandan in rooms where the sick were convalescing. For homes with young children, elderly residents, or simply a desire for cleaner indoor air, this makes sandalwood agarbatti not just a ritual choice but a practical one.",
        ],
      },
      {
        heading: "Choosing Authentic Chandan Agarbatti",
        paragraphs: [
          "The market for sandalwood incense is unfortunately saturated with synthetic substitutes. Santalol, the primary aromatic compound, can be synthesised at a fraction of the cost of genuine Mysore or East Indian sandalwood powder. The difference in experience is stark: synthetic sandalwood tends to produce a sharper, more linear note that fades quickly, whereas genuine chandan unfolds in layers — woody and dry at first, then warm and creamy, with a subtle sweet note that persists long after the stick has finished burning.",
          "White Stone's Chandan Natural agarbatti uses a blend of responsibly sourced sandalwood powder combined with natural binding agents and complementary botanical materials. The result is a stick that burns evenly for 45–50 minutes, releasing a fragrance profile that is true to the classical chandan character. No synthetic fixatives, no artificial colourants, and absolutely no charcoal — which can produce harmful particulates and overwhelm the delicate sandalwood note. When you light a White Stone Chandan Natural stick, you are experiencing agarbatti as it was made before industrial shortcuts became the norm.",
        ],
      },
    ],
    closing: "Whether you are deepening a meditation practice, honouring a deity in your home mandir, seeking a cleaner and calmer living environment, or simply drawn to one of the world's most beautiful and storied fragrances, sandalwood agarbatti offers something rare: a sensory experience that is simultaneously ancient and scientifically substantiated. White Stone's Chandan Natural is our tribute to this extraordinary tradition — made with integrity, burned with intention.",
  },
  "wholesale-agarbatti-guide": "The wholesale agarbatti market in India represents a significant opportunity for retailers and distributors. Understanding bulk agarbatti pricing is essential for competitive business. White Stone offers wholesale incense sticks at competitive prices with private label options. Our agarbatti manufacturer credentials ensure consistent quality across large orders. Whether you need 500 or 50,000 units, our agarbatti wholesale supplier team can accommodate your needs with flexible payment terms and fast delivery.",
  "agarbatti-pooja-rituals": "In Hindu tradition, agarbatti has been an integral part of pooja since Vedic times. The sacred smoke (dhoop) carries prayers to the divine. Temple grade agarbatti for pooja must meet strict purity standards — something White Stone takes seriously in every batch. The fragrance of premium incense sticks creates a sacred atmosphere that facilitates deeper connection with the divine. Understanding the correct agarbatti for different deities and occasions is part of our heritage.",
  "rose-incense-romance": "Rose incense sticks carry a dual energy — they are equally at home in a sacred pooja thali and in creating a romantic atmosphere. Our rose gold variety uses genuine rose essential oils, not synthetic substitutes. The floral, warm notes of rose agarbatti have been used in Indian homes for generations both for worship and for creating auspicious atmospheres during celebrations, weddings, and festivals.",
};

export const BlogDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const blog = BLOGS.find(b => b.id === id);
  const relatedBlogs = BLOGS.filter(b => b.id !== id).slice(0, 3);
  const canonical = `https://whitestoneagarbatti.com/blog/${id}`;

  useSEO({
    title: blog ? `${blog.title} | White Stone Blog` : 'Blog | White Stone Agarbatti',
    description: blog?.excerpt || 'Expert insights on agarbatti, meditation and Indian sacred traditions.',
    keywords: KEYWORDS.join(', '),
    canonical,
    schema: blog ? {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": blog.title,
      "description": blog.excerpt,
      "author": { "@type": "Organization", "name": "White Stone" },
      "datePublished": blog.date,
      "image": "https://whitestoneagarbatti.com/opengraph.jpg",
      "url": `https://whitestoneagarbatti.com/blog/${blog.id}`,
      "publisher": { "@type": "Organization", "name": "White Stone Agarbatti", "url": "https://whitestoneagarbatti.com" }
    } : undefined,
  });

  if (!blog) {
    return <div style={{ paddingTop: 128, textAlign: 'center', color: 'var(--cream)' }}>Article not found</div>;
  }

  return (
    <main className="page-enter" style={{ paddingTop: 112, paddingBottom: 80, background: 'var(--bg)' }}>
      {/* Breadcrumb */}
      <section style={{ padding: '0 24px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 10, fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--text-muted)' }}>
            <a href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</a>
            <span>→</span>
            <a href="/blog" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Blog</a>
            <span>→</span>
            <span style={{ color: 'var(--gold)' }}>{blog.title.slice(0, 40)}…</span>
          </div>
        </div>
      </section>

      {/* Article */}
      <article style={{ padding: '0 24px 80px', maxWidth: 800, margin: '0 auto' }}>
        <div className="section-label" style={{ marginBottom: 16 }}>{blog.category}</div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 700, fontSize: 'clamp(32px,5vw,56px)', color: 'var(--text-dark)', lineHeight: 1.2, marginBottom: 20 }}>{blog.title}</h1>
        <div style={{ display: 'flex', gap: 16, marginBottom: 40, fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--text-muted)' }}>
          <span>{blog.date}</span>
          <span>·</span>
          <span>White Stone Editorial</span>
        </div>

        <div style={{ height: 2, background: 'linear-gradient(to right, var(--gold), transparent)', marginBottom: 48 }} />

        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontStyle: 'italic', color: 'var(--gold)', lineHeight: 1.7, marginBottom: 40 }}>{blog.excerpt}</p>

        {(() => {
          const content = BLOG_CONTENT[blog.id];
          if (!content) {
            return (
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: 17, color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: 32 }}>
                {blog.excerpt} This comprehensive guide explores every aspect of the topic, helping you make informed decisions for your spiritual practice and home.
              </p>
            );
          }
          if (typeof content === 'string') {
            return (
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: 17, color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: 32 }}>
                {content}
              </p>
            );
          }
          // Rich structured article
          return (
            <div style={{ fontFamily: 'var(--font-serif)', lineHeight: 1.8 }}>
              <p style={{ fontSize: 18, color: 'var(--text-mid)', marginBottom: 40, lineHeight: 1.9 }}>{content.intro}</p>
              {content.sections.map((section, i) => (
                <div key={i} style={{ marginBottom: 48 }}>
                  <h2 style={{
                    fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 700,
                    fontSize: 'clamp(22px,3vw,30px)', color: 'var(--text-dark)',
                    marginBottom: 24, lineHeight: 1.3,
                    borderLeft: '3px solid var(--gold)', paddingLeft: 20,
                  }}>{section.heading}</h2>
                  {section.paragraphs.map((para, j) => (
                    <p key={j} style={{ fontSize: 17, color: 'var(--text-mid)', marginBottom: 24, lineHeight: 1.9 }}>{para}</p>
                  ))}
                </div>
              ))}
              <p style={{ fontSize: 17, color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: 32 }}>{content.closing}</p>
            </div>
          );
        })()}

        <div style={{ padding: '28px 32px', background: 'var(--bg2)', border: '1px solid var(--border)', borderLeft: '4px solid var(--gold)', marginTop: 48 }}>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 18, color: 'var(--text-dark)', lineHeight: 1.7 }}>
            "Experience the difference of truly natural agarbatti. White Stone — premium incense sticks since 2004."
          </p>
        </div>

        <div style={{ marginTop: 48, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <a href="/products" className="btn-primary">EXPLORE PRODUCTS</a>
          <a href="/blog" className="btn-outline">← ALL ARTICLES</a>
        </div>
      </article>

      {/* Related */}
      {relatedBlogs.length > 0 && (
        <section style={{ padding: '64px 24px', background: 'var(--bg2)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 700, fontSize: 'clamp(24px,3vw,40px)', color: 'var(--text-dark)', marginBottom: 40 }}>Related Articles</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 24 }}>
              {relatedBlogs.map(b => (
                <a key={b.id} href={`/blog/${b.id}`} style={{ display: 'block', padding: '28px 24px', textDecoration: 'none', background: 'var(--bg)', border: '1px solid var(--border)', transition: 'transform 0.3s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'none'}
                >
                  <div className="section-label" style={{ marginBottom: 10 }}>{b.category}</div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 600, fontSize: 16, color: 'var(--text-dark)', marginBottom: 10, lineHeight: 1.4 }}>{b.title}</h3>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 11, color: 'var(--gold)', letterSpacing: '0.1em' }}>READ →</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <div aria-hidden="true" style={{ fontSize: 1, color: 'var(--bg)', userSelect: 'none', overflow: 'hidden', height: 0 }}>{KEYWORDS.join(' ')}</div>
    </main>
  );
};

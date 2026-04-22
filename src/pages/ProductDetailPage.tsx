import React from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTS, KEYWORDS } from '../constants';
import { useSEO } from '../hooks/useSEO';
import { getProductImage } from '../productImages';

export const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);
  const otherProducts = PRODUCTS.filter(p => p.id !== id).slice(0, 3);
  const canonical = `https://whitestoneagarbatti.com/product/${id}`;

  useSEO({
    title: `${product?.name} | Premium Agarbatti | White Stone`,
    description: product?.description || 'Premium agarbatti from White Stone',
    keywords: KEYWORDS.join(', '),
    canonical,
    ogImage: product ? getProductImage(product.id) : undefined,
    schema: product ? {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": product.name,
      "description": product.description,
      "image": `https://whitestoneagarbatti.com${getProductImage(product.id)}`,
      "brand": { "@type": "Brand", "name": "White Stone" },
      "url": `https://whitestoneagarbatti.com/product/${product.id}`,
      "offers": {
        "@type": "Offer",
        "price": product.price,
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "url": `https://whitestoneagarbatti.com/product/${product.id}`
      }
    } : undefined,
  });

  if (!product) {
    return <div style={{ paddingTop: 128, textAlign: 'center', color: 'var(--cream)' }}>Product not found</div>;
  }

  return (
    <main className="page-enter" style={{ paddingTop: 112, paddingBottom: 80, background: 'var(--bg)' }}>
      {/* Breadcrumb */}
      <section style={{ padding: '0 24px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--text-muted)' }}>
            <a href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }} onMouseEnter={e => ((e.target as HTMLElement).style.color = 'var(--gold)')} onMouseLeave={e => ((e.target as HTMLElement).style.color = 'var(--text-muted)')}>Home</a>
            <span style={{ color: 'var(--border)' }}>→</span>
            <a href="/products" style={{ color: 'var(--text-muted)', textDecoration: 'none' }} onMouseEnter={e => ((e.target as HTMLElement).style.color = 'var(--gold)')} onMouseLeave={e => ((e.target as HTMLElement).style.color = 'var(--text-muted)')}>Products</a>
            <span style={{ color: 'var(--border)' }}>→</span>
            <span style={{ color: 'var(--gold)' }}>{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section style={{ padding: '0 24px 80px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'start' }}>
            {/* Image */}
            <div>
              <div style={{ background: '#FDF6E3', borderRadius: 16, padding: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 400 }}>
                <img
                  src={getProductImage(product.id)}
                  alt={`${product.name} — premium handcrafted agarbatti from White Stone`}
                  width={360}
                  height={360}
                  loading="lazy"
                  style={{ maxWidth: '100%', maxHeight: 360, objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(107,58,42,0.15))' }}
                />
              </div>
            </div>

            {/* Details */}
            <div>
              <div className="section-label" style={{ marginBottom: 12 }}>{product.fragrance}</div>
              <h1 style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 700, fontSize: 'clamp(32px,4vw,52px)', color: 'var(--text-dark)', marginBottom: 20, lineHeight: 1.1 }}>{product.name}</h1>

              <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 28 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 700, color: 'var(--gold)' }}>₹{product.price}</span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-muted)' }}>Per box · {product.sticks}</span>
              </div>

              <p style={{ fontFamily: 'var(--font-serif)', fontSize: 17, color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: 32 }}>{product.description}</p>

              {/* Specs */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 36 }}>
                {[
                  { label: 'BURN TIME', value: product.burnTime },
                  { label: 'QUANTITY', value: product.sticks },
                  { label: 'FRAGRANCE', value: product.fragrance },
                  { label: 'QUALITY', value: 'Temple Grade' },
                ].map(spec => (
                  <div key={spec.label} style={{ padding: '16px', background: 'var(--bg2)', border: '1px solid var(--border)' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 9, letterSpacing: '0.15em', color: 'var(--gold2)', textTransform: 'uppercase', marginBottom: 6 }}>{spec.label}</div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-dark)', fontWeight: 500 }}>{spec.value}</div>
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: 16, fontFamily: 'var(--font-display)', fontSize: 10, letterSpacing: '0.12em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Ingredients: <span style={{ fontWeight: 400, fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-muted)', letterSpacing: 0 }}>{product.ingredients}</span>
              </div>

              {/* Prominent WhatsApp CTA below specs */}
              <div style={{
                marginTop: 32, padding: '24px', background: 'var(--bg2)',
                border: '1px solid var(--border)', borderLeft: '4px solid #25D366',
                borderRadius: 4,
              }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 10, letterSpacing: '0.12em', color: 'var(--gold2)', marginBottom: 12, textTransform: 'uppercase' }}>
                  READY TO ORDER?
                </div>
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
                  <a
                    href={`https://wa.me/919226915311?text=Hi%2C%20I%20would%20like%20to%20order%20${encodeURIComponent(product.name)}%20(₹${product.price})%20from%20White%20Stone%20Agarbatti.%20Please%20confirm%20availability%20and%20delivery%20details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                    style={{ flex: '1 1 auto', justifyContent: 'center', minWidth: 200 }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: 8, flexShrink: 0 }} aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.096.54 4.063 1.489 5.778L0 24l6.389-1.673A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.914 0-3.713-.496-5.279-1.364l-.379-.224-3.932 1.028 1.045-3.818-.247-.395A9.942 9.942 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                    </svg>
                    ORDER VIA WHATSAPP
                  </a>
                  <a
                    href="tel:+919226915311"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      fontFamily: 'var(--font-display)', fontSize: 11, letterSpacing: '0.1em',
                      color: 'var(--gold)', border: '1px solid var(--border)',
                      padding: '12px 20px', textDecoration: 'none', borderRadius: 4,
                      transition: 'border-color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'}
                  >
                    📞 CALL US
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 20 }}>
                <a href="/products" className="btn-outline">← ALL PRODUCTS</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {otherProducts.length > 0 && (
        <section style={{ padding: '0 24px 80px', background: 'var(--bg2)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', paddingTop: 60 }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px,3vw,44px)', fontStyle: 'italic', fontWeight: 700, color: 'var(--text-dark)', marginBottom: 40 }}>You May Also Like</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 24 }}>
              {otherProducts.map(op => (
                <a key={op.id} href={`/product/${op.id}`} className="product-card" style={{ display: 'block', padding: '28px 24px', textDecoration: 'none', borderTop: '2px solid var(--gold)' }}>
                  <div style={{ height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FDF6E3', borderRadius: 8, marginBottom: 20 }}>
                    <img src={getProductImage(op.id)} alt={op.name} loading="lazy" width={140} height={140} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontWeight: 600, fontStyle: 'italic', color: 'var(--text-dark)', marginBottom: 8 }}>{op.name}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--gold)', fontWeight: 700 }}>₹{op.price}</div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

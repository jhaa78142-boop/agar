import { useEffect } from 'react';
import { KEYWORDS } from '../constants';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  schema?: Record<string, unknown>;
  canonical?: string;
  ogImage?: string;
}

export const useSEO = ({ title, description, keywords, schema, canonical, ogImage }: SEOProps) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('keywords', keywords || KEYWORDS.join(', '));

    // OpenGraph meta tags
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:image', ogImage || 'https://whitestoneagarbatti.com/opengraph.jpg', 'property');
    if (canonical) {
      setMeta('og:url', canonical, 'property');
    }

    // Twitter card
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);

    // Canonical link
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link') as HTMLLinkElement;
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    // JSON-LD schema
    const localBizSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "White Stone Agarbatti",
      "description": "Premium handcrafted agarbatti since 2004 in Chiplun, Ratnagiri, Maharashtra",
      "telephone": "+91-92269-15311",
      "email": "shreeganesha645@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Chiplun",
        "addressLocality": "Ratnagiri",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      },
      "url": "https://whitestoneagarbatti.com"
    };

    const finalSchema = schema || localBizSchema;

    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(finalSchema);

    return () => {};
  }, [title, description, keywords, schema, canonical, ogImage]);
};

import React from 'react';
import { useSEO } from '../hooks/useSEO';

export const TermsPage = () => {
  useSEO({
    title: 'Terms of Use | White Stone Agarbatti',
    description: 'Terms of Use for White Stone Agarbatti website. Read our terms and conditions for using our website and purchasing our products.',
    canonical: 'https://whitestoneagarbatti.com/terms',
  });

  const sectionStyle: React.CSSProperties = {
    fontFamily: 'var(--font-serif)', fontSize: 16, color: 'var(--text-mid)',
    lineHeight: 1.9, marginBottom: 32,
  };

  const headingStyle: React.CSSProperties = {
    fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 700,
    fontSize: 24, color: 'var(--text-dark)', marginBottom: 16, marginTop: 48,
  };

  return (
    <main className="page-enter" style={{ paddingTop: 112, paddingBottom: 80, background: 'var(--bg)' }}>
      <section style={{ padding: '40px 24px 80px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: 16 }}>LEGAL</div>
          <h1 style={{
            fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 700,
            fontSize: 'clamp(36px,5vw,64px)', color: 'var(--text-dark)',
            lineHeight: 1.1, marginBottom: 16,
          }}>Terms of Use</h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-muted)', marginBottom: 48 }}>
            Last updated: April 2025
          </p>

          <div style={{ height: 2, background: 'linear-gradient(to right, var(--gold), transparent)', marginBottom: 48 }} />

          <p style={sectionStyle}>
            Welcome to White Stone Agarbatti. By accessing and using our website (whitestoneagarbatti.com), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the website.
          </p>

          <h2 style={headingStyle}>Products & Orders</h2>
          <p style={sectionStyle}>
            All orders are placed via WhatsApp or phone. Prices listed on the website are in Indian Rupees (INR) and are inclusive of applicable taxes. Prices are subject to change without prior notice. Availability of products is not guaranteed and is subject to stock levels at the time of order confirmation.
          </p>

          <h2 style={headingStyle}>Delivery & Returns</h2>
          <p style={sectionStyle}>
            We deliver across India within 5–7 business days. Delivery timelines may vary depending on the destination. In case of damaged or defective products, please contact us within 48 hours of delivery for a replacement. We do not accept returns for change of mind after the product has been delivered.
          </p>

          <h2 style={headingStyle}>Intellectual Property</h2>
          <p style={sectionStyle}>
            All content on this website, including text, images, logos, and design elements, is the intellectual property of White Stone Agarbatti. Unauthorized use, reproduction, or distribution of any content from this website is strictly prohibited without written consent.
          </p>

          <h2 style={headingStyle}>Limitation of Liability</h2>
          <p style={sectionStyle}>
            White Stone Agarbatti shall not be liable for any indirect, incidental, or consequential damages arising out of the use of our products or this website. Our total liability shall not exceed the amount paid by you for the specific product in question.
          </p>

          <h2 style={headingStyle}>Governing Law</h2>
          <p style={sectionStyle}>
            These Terms of Use shall be governed by and construed in accordance with the laws of India. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts in Ratnagiri, Maharashtra.
          </p>

          <h2 style={headingStyle}>Contact</h2>
          <p style={sectionStyle}>
            For questions regarding these terms, contact us at:<br />
            Email: <a href="mailto:shreeganesha645@gmail.com" style={{ color: 'var(--gold)', textDecoration: 'none' }}>shreeganesha645@gmail.com</a><br />
            Phone: <a href="tel:+919226915311" style={{ color: 'var(--gold)', textDecoration: 'none' }}>+91 92269 15311</a>
          </p>
        </div>
      </section>
    </main>
  );
};

import React from 'react';
import { useSEO } from '../hooks/useSEO';

export const PrivacyPage = () => {
  useSEO({
    title: 'Privacy Policy | White Stone Agarbatti',
    description: 'Privacy Policy for White Stone Agarbatti. Learn how we collect, use, and protect your personal information.',
    canonical: 'https://whitestoneagarbatti.com/privacy',
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
          }}>Privacy Policy</h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-muted)', marginBottom: 48 }}>
            Last updated: April 2025
          </p>

          <div style={{ height: 2, background: 'linear-gradient(to right, var(--gold), transparent)', marginBottom: 48 }} />

          <p style={sectionStyle}>
            White Stone Agarbatti ("we", "us", or "our") is committed to protecting the privacy of our customers and website visitors. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website at whitestoneagarbatti.com.
          </p>

          <h2 style={headingStyle}>Information We Collect</h2>
          <p style={sectionStyle}>
            We may collect information that you voluntarily provide when you contact us via WhatsApp, phone, or email, including your name, phone number, email address, delivery address, and order preferences. We also collect standard web analytics data such as browser type, device information, and pages visited to improve our website experience.
          </p>

          <h2 style={headingStyle}>How We Use Your Information</h2>
          <p style={sectionStyle}>
            Your information is used solely for processing orders, responding to enquiries, improving our services, and sending order updates. We do not sell, trade, or otherwise transfer your personal information to third parties. Your data may be shared only with delivery partners as necessary to fulfill your orders.
          </p>

          <h2 style={headingStyle}>Data Security</h2>
          <p style={sectionStyle}>
            We implement reasonable security measures to protect your personal information against unauthorized access, alteration, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 style={headingStyle}>Cookies</h2>
          <p style={sectionStyle}>
            Our website may use cookies and local storage to remember your theme preferences and improve your browsing experience. You can choose to disable cookies through your browser settings, though this may affect some site functionality.
          </p>

          <h2 style={headingStyle}>Contact Us</h2>
          <p style={sectionStyle}>
            If you have any questions about this Privacy Policy, please contact us at:<br />
            Email: <a href="mailto:shreeganesha645@gmail.com" style={{ color: 'var(--gold)', textDecoration: 'none' }}>shreeganesha645@gmail.com</a><br />
            Phone: <a href="tel:+919226915311" style={{ color: 'var(--gold)', textDecoration: 'none' }}>+91 92269 15311</a><br />
            Address: Chiplun, Ratnagiri, Maharashtra, India
          </p>
        </div>
      </section>
    </main>
  );
};

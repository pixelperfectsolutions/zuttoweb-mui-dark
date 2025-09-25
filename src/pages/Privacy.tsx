import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../index.css';
import SEO from '../components/SEO';

const Privacy: React.FC = () => {
  const privacyStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "ZUTTO Privacy Policy",
    "description": "ZUTTO's privacy policy outlining how we collect, use, and protect your personal information while providing airport lounge access services.",
    "mainEntity": {
      "@type": "PrivacyPolicy",
      "name": "ZUTTO Privacy Policy",
      "dateModified": "2025-08-01"
    }
  };

  return (
    <>
      <SEO
        title="ZUTTO Privacy Policy - Data Protection & Security"
        description="Read ZUTTO's privacy policy to understand how we protect your data and ensure secure airport lounge access services across India."
        keywords="ZUTTO privacy policy, data protection, security, privacy India, airport lounge privacy, personal data protection"
        url="https://zutto.in/privacy"
        structuredData={privacyStructuredData}
      />
      <div style={{ background: 'var(--apple-bg)', minHeight: '100vh', paddingTop: '8rem' }}>
      <Container style={{ maxWidth: '1200px', padding: '3rem 2rem' }}>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card 
              className="border-0 shadow-sm"
              style={{ 
                borderRadius: '1rem',
                padding: '2rem',
                background: '#fff'
              }}
            >
              <h1 
                style={{ 
                  fontFamily: 'var(--primary-font)',
                  fontWeight: '700',
                  fontSize: '2.5rem',
                  color: 'var(--apple-heading)',
                  marginBottom: '2rem',
                  textAlign: 'center'
                }}
              >
                Privacy Policy
              </h1>
              
              <div style={{ fontFamily: 'var(--primary-font)', color: 'var(--apple-text)', lineHeight: '1.6' }}>
                {/* Company Information Box */}
                <div style={{ 
                  background: '#f8f9fa', 
                  padding: '1.5rem', 
                  borderRadius: '8px', 
                  marginBottom: '2rem',
                  border: '1px solid #dee2e6' 
                }}>
                  <p style={{ fontSize: '0.95rem', marginBottom: '0.5rem', textAlign: 'center' }}>
                    This Privacy Policy is published by <strong>VKN NEXTGEN PVT LTD</strong>, 
                    the company that owns and operates ZUTTO.
                  </p>
                  <p style={{ fontSize: '0.85rem', marginBottom: '0', textAlign: 'center', color: '#666' }}>
                    <strong>CIN:</strong> U62099TN2025PTC183122 | <strong>Registration No:</strong> 183122<br />
                    <strong>Registered Office:</strong> 6/277 South Kattu Kottai, Iyyappan K, Nagiampatti, Salem, Gangavalli, Tamil Nadu, India, 636113
                  </p>
                </div>

                <p style={{ fontSize: '1.125rem', marginBottom: '2rem', textAlign: 'center', color: '#666' }}>
                  <strong>Developer:</strong> Ramachandran Arumugma Velmurugan<br />
                  <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
                </p>

                <section style={{ marginBottom: '2.5rem' }}>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--apple-heading)' }}>
                    1. Information We Collect
                  </h2>
                  <p style={{ marginBottom: '1rem' }}>
                    ZUTTO collects minimal information necessary to provide our credit card lounge access verification service:
                  </p>
                  <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                    <li>Credit card information (for benefit verification only)</li>
                    <li>Location data (to show nearby airport lounges)</li>
                    <li>Usage analytics (anonymous, for app improvement)</li>
                    <li>Device information (for technical support)</li>
                  </ul>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--apple-heading)' }}>
                    2. How We Use Your Information
                  </h2>
                  <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                    <li>Verify your credit card's lounge access benefits</li>
                    <li>Provide personalized travel recommendations</li>
                    <li>Improve our service and user experience</li>
                    <li>Send important updates about your benefits</li>
                  </ul>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--apple-heading)' }}>
                    3. Data Protection & Security
                  </h2>
                  <p style={{ marginBottom: '1rem' }}>
                    We implement industry-standard security measures to protect your personal information:
                  </p>
                  <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                    <li>End-to-end encryption for sensitive data</li>
                    <li>Secure servers with regular security audits</li>
                    <li>No storage of complete credit card numbers</li>
                    <li>Limited access to personal information by staff</li>
                  </ul>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--apple-heading)' }}>
                    4. Information Sharing
                  </h2>
                  <p style={{ marginBottom: '1rem' }}>
                    ZUTTO does not sell, trade, or otherwise transfer your personal information to third parties except:
                  </p>
                  <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                    <li>With your explicit consent</li>
                    <li>To comply with legal requirements</li>
                    <li>To protect our rights and safety</li>
                    <li>With trusted service providers under strict confidentiality agreements</li>
                  </ul>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--apple-heading)' }}>
                    5. Your Rights
                  </h2>
                  <p style={{ marginBottom: '1rem' }}>You have the right to:</p>
                  <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                    <li>Access your personal data</li>
                    <li>Correct inaccurate information</li>
                    <li>Delete your account and data</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Export your data in a portable format</li>
                  </ul>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--apple-heading)' }}>
                    6. Children's Privacy
                  </h2>
                  <p style={{ marginBottom: '1rem' }}>
                    ZUTTO is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
                  </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--apple-heading)' }}>
                    7. App Permissions & Data Access
                  </h2>
                  <p style={{ marginBottom: '1rem' }}>
                    ZUTTO requests the following permissions to provide our services:
                  </p>
                  <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                    <li><strong>Location Services:</strong> To find nearby airport lounges and verify access eligibility</li>
                    <li><strong>Camera (Optional):</strong> To scan credit card information for quick setup</li>
                    <li><strong>Internet Access:</strong> To verify card benefits and sync data</li>
                    <li><strong>Storage:</strong> To cache lounge information for offline access</li>
                    <li><strong>Notifications:</strong> To alert you about lounge access changes or travel updates</li>
                  </ul>
                  <p style={{ marginBottom: '1rem', fontSize: '0.95rem', color: '#666' }}>
                    <em>All permissions are optional and can be managed through your device settings. The app will function with limited features if certain permissions are denied.</em>
                  </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--apple-heading)' }}>
                    8. iOS App Store Compliance
                  </h2>
                  <p style={{ marginBottom: '1rem' }}>
                    For iOS users, ZUTTO complies with Apple's App Store Review Guidelines and privacy requirements:
                  </p>
                  <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                    <li><strong>App Tracking Transparency:</strong> We request permission before tracking your activity across other apps</li>
                    <li><strong>Data Types Collected:</strong> Financial info (credit card benefits), location data, usage data, identifiers</li>
                    <li><strong>Data Linked to You:</strong> Financial info, location data, contact info, user content</li>
                    <li><strong>Data Not Linked to You:</strong> Usage data, diagnostics, crash data</li>
                    <li><strong>Sign in with Apple:</strong> Supported as an authentication option</li>
                    <li><strong>Privacy Labels:</strong> Clearly disclosed in App Store listing</li>
                  </ul>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--apple-heading)' }}>
                    9. Google Play Store Compliance
                  </h2>
                  <p style={{ marginBottom: '1rem' }}>
                    For Android users, ZUTTO complies with Google Play's Developer Policy and data safety requirements:
                  </p>
                  <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                    <li><strong>Data Safety Section:</strong> Complete disclosure of data collection and sharing practices</li>
                    <li><strong>Restricted Permissions:</strong> Proper justification for sensitive permissions like location and camera</li>
                    <li><strong>Target API Compliance:</strong> Updated to latest Android API requirements</li>
                    <li><strong>Families Policy:</strong> Not directed at children under 13</li>
                    <li><strong>Financial Services:</strong> Complies with additional requirements for financial information handling</li>
                    <li><strong>User Data Policy:</strong> Transparent about data use, sharing, and retention</li>
                  </ul>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--apple-heading)' }}>
                    10. Cross-Platform Data Practices
                  </h2>
                  <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #e9ecef' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--apple-heading)' }}>
                      Data Collection Summary
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                      <div>
                        <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem', color: '#495057' }}>Financial Information</h4>
                        <ul style={{ fontSize: '0.9rem', margin: '0', paddingLeft: '1rem' }}>
                          <li>Credit card type and issuer</li>
                          <li>Card benefit eligibility</li>
                          <li>Lounge access history</li>
                        </ul>
                      </div>
                      <div>
                        <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem', color: '#495057' }}>Location Data</h4>
                        <ul style={{ fontSize: '0.9rem', margin: '0', paddingLeft: '1rem' }}>
                          <li>Current location (for nearby lounges)</li>
                          <li>Travel destinations</li>
                          <li>Airport visit history</li>
                        </ul>
                      </div>
                      <div>
                        <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem', color: '#495057' }}>Usage Analytics</h4>
                        <ul style={{ fontSize: '0.9rem', margin: '0', paddingLeft: '1rem' }}>
                          <li>App interaction patterns</li>
                          <li>Feature usage statistics</li>
                          <li>Performance metrics</li>
                        </ul>
                      </div>
                      <div>
                        <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem', color: '#495057' }}>Device Information</h4>
                        <ul style={{ fontSize: '0.9rem', margin: '0', paddingLeft: '1rem' }}>
                          <li>Device model and OS version</li>
                          <li>App version and settings</li>
                          <li>Network connection type</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--apple-heading)' }}>
                    11. Third-Party Services & Integrations
                  </h2>
                  <p style={{ marginBottom: '1rem' }}>
                    ZUTTO may integrate with the following third-party services to enhance functionality:
                  </p>
                  <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                    <li><strong>Analytics Services:</strong> For app performance and usage insights (anonymized data only)</li>
                    <li><strong>Crash Reporting:</strong> To identify and fix technical issues</li>
                    <li><strong>Map Services:</strong> To display airport and lounge locations</li>
                    <li><strong>Payment Processing:</strong> For premium features (if applicable)</li>
                    <li><strong>Cloud Storage:</strong> For secure data backup and synchronization</li>
                  </ul>
                  <p style={{ marginBottom: '1rem', fontSize: '0.95rem', color: '#666' }}>
                    Each third-party service operates under its own privacy policy. We recommend reviewing their policies for complete transparency.
                  </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--apple-heading)' }}>
                    12. Contact Information
                  </h2>
                  <p style={{ marginBottom: '1rem' }}>
                    For privacy-related questions or concerns, please contact us:
                  </p>
                  <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', listStyle: 'none' }}>
                    <li><strong>Email:</strong> support@zutto.in</li>
                    <li><strong>Support:</strong> support@zutto.in</li>
                    <li><strong>Developer:</strong> Ramachandran Arumugma Velmurugan</li>
                    <li><strong>Address:</strong> Coimbatore, India</li>
                  </ul>
                </section>

                <section>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--apple-heading)' }}>
                    13. Policy Updates
                  </h2>
                  <p style={{ marginBottom: '1rem' }}>
                    We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date. Continued use of the app after changes constitutes acceptance of the updated policy.
                  </p>
                </section>
              </div>
            </Card>
          </Col>
        </Row>
        </Container>
      </div>
    </>
  );
};

export default Privacy;

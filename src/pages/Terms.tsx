import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../index.css';
import SEO from '../components/SEO';

const Terms: React.FC = () => {
  const termsStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "ZUTTO Terms of Service",
    "description": "Terms and conditions for using ZUTTO airport lounge access services.",
    "mainEntity": {
      "@type": "TermsOfService",
      "name": "ZUTTO Terms of Service",
      "dateModified": "2025-08-01"
    }
  };

  return (
    <>
      <SEO
        title="ZUTTO Terms of Service - Terms and Conditions"
        description="Read ZUTTO's terms of service to understand the conditions for using our airport lounge access verification services."
        keywords="ZUTTO terms, terms of service, conditions, legal terms, user agreement"
        url="https://zutto.in/terms"
        structuredData={termsStructuredData}
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
                  Terms of Service
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
                      These Terms of Service are issued by <strong>VKN NEXTGEN PVT LTD</strong>, 
                      the company that owns and operates ZUTTO.
                    </p>
                    <p style={{ fontSize: '0.85rem', marginBottom: '0', textAlign: 'center', color: '#666' }}>
                      <strong>CIN:</strong> U62099TN2025PTC183122 | <strong>Registration No:</strong> 183122<br />
                      <strong>Registered Office:</strong> 6/277 South Kattu Kottai, Iyyappan K, Nagiampatti, Salem, Gangavalli, Tamil Nadu, India, 636113
                    </p>
                  </div>

                  <p style={{ fontSize: '1.125rem', marginBottom: '2rem', textAlign: 'center', color: '#666' }}>
                    <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
                  </p>

                  <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--apple-heading)' }}>
                      1. Acceptance of Terms
                    </h2>
                    <p style={{ marginBottom: '1rem' }}>
                      By accessing or using the ZUTTO application, you agree to be bound by these Terms of Service 
                      and all applicable laws and regulations. If you do not agree with any of these terms, 
                      you are prohibited from using or accessing this application.
                    </p>
                  </section>

                  <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--apple-heading)' }}>
                      2. Use of Service
                    </h2>
                    <p style={{ marginBottom: '1rem' }}>
                      ZUTTO provides airport lounge access verification and information services. You agree to:
                    </p>
                    <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                      <li>Provide accurate and complete information</li>
                      <li>Use the service for lawful purposes only</li>
                      <li>Not misuse or attempt to gain unauthorized access to our systems</li>
                      <li>Not use the service to violate any applicable laws or regulations</li>
                    </ul>
                  </section>

                  <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--apple-heading)' }}>
                      3. Eligibility
                    </h2>
                    <p style={{ marginBottom: '1rem' }}>
                      You must be at least 13 years old to use ZUTTO. By using our service, you represent and warrant 
                      that you meet this age requirement and have the legal capacity to enter into these Terms of Service.
                    </p>
                  </section>

                  <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--apple-heading)' }}>
                      4. Service Description
                    </h2>
                    <p style={{ marginBottom: '1rem' }}>
                      ZUTTO provides information about credit card lounge benefits and airport lounge access. 
                      While we strive for accuracy, we do not guarantee that all information is complete, 
                      current, or error-free. Lounge access policies may change without notice.
                    </p>
                  </section>

                  <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--apple-heading)' }}>
                      5. Limitation of Liability
                    </h2>
                    <p style={{ marginBottom: '1rem' }}>
                      VKN NEXTGEN PVT LTD and ZUTTO shall not be liable for any indirect, incidental, special, 
                      consequential, or punitive damages resulting from your use or inability to use the service, 
                      including but not limited to denied lounge access or incorrect information.
                    </p>
                  </section>

                  <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--apple-heading)' }}>
                      6. Intellectual Property
                    </h2>
                    <p style={{ marginBottom: '1rem' }}>
                      All content, features, and functionality of ZUTTO are owned by VKN NEXTGEN PVT LTD 
                      and are protected by international copyright, trademark, and other intellectual property laws.
                    </p>
                  </section>

                  <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--apple-heading)' }}>
                      7. Termination
                    </h2>
                    <p style={{ marginBottom: '1rem' }}>
                      We may terminate or suspend your access to ZUTTO immediately, without prior notice or liability, 
                      for any reason whatsoever, including without limitation if you breach the Terms of Service.
                    </p>
                  </section>

                  <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--apple-heading)' }}>
                      8. Governing Law
                    </h2>
                    <p style={{ marginBottom: '1rem' }}>
                      These Terms shall be governed and construed in accordance with the laws of India, 
                      without regard to its conflict of law provisions. Any disputes shall be subject to 
                      the exclusive jurisdiction of the courts in Tamil Nadu, India.
                    </p>
                  </section>

                  <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--apple-heading)' }}>
                      9. Contact Information
                    </h2>
                    <p style={{ marginBottom: '1rem' }}>
                      For any questions about these Terms of Service, please contact us at:
                    </p>
                    <address style={{ fontStyle: 'normal', paddingLeft: '1.5rem' }}>
                      <strong>VKN NEXTGEN PVT LTD</strong><br />
                      Email: support@zutto.in<br />
                      Registered Office: 6/277 South Kattu Kottai, Iyyappan K,<br />
                      Nagiampatti, Salem, Gangavalli, Tamil Nadu, India, 636113
                    </address>
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

export default Terms;

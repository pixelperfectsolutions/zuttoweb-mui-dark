import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// Data for offer cards
const offers = [
  {
    title: 'Check Lounge Access',
    text: 'Instantly verify if your card grants lounge entry.',
    emoji: '✅',
  },
  {
    title: 'Know Your Benefits',
    text: 'Unlock your card’s full travel perks.',
    emoji: '🎁',
  },
  {
    title: 'Hassle-Free Experience',
    text: 'Travel with clarity, convenience, and confidence.',
    emoji: '✨',
  },
];

const Home: React.FC = () => {
  const ScreenshotSection: React.FC = () => (
    <section style={{ padding: '0px 0', background: 'var(--apple-bg)' }} className="pt-24">
        {/* <Container style={{ maxWidth: '1100px' }}>
          <h2 className="section-heading text-center mb-5">Our App</h2>
          <Row className="justify-content-center">
            {[ '/login_page.png', '/my_cards.png', '/profile.png' ].map((src, index) => (
              <Col key={index} md={4} className="d-flex justify-content-center mb-4">
                <div style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.12)', borderRadius: 20, overflow: 'hidden', background: '#fff', padding: 16 }}>
                  <img src={src} alt="App screenshot" style={{ width: '100%', height: 360, objectFit: 'cover', borderRadius: 12 }} />
                </div>
              </Col>
            ))}
          </Row>
        </Container> */}
    </section>
  );
  return (
    <>
      {/* Hero */}
      <section style={{ minHeight: '700px', background: 'var(--apple-bg)', paddingTop: '6rem' }} className="position-relative overflow-hidden d-flex align-items-center justify-content-center pt-24">
        <Container className="position-relative text-center">
          <h1 className="section-heading mb-2">ZUTTO</h1>
          <h2 className="h5 mb-4" style={{ color: 'var(--apple-text)', opacity: 0.8 }}>Maximize Your Lounge Access – Instantly</h2>
          <p className="lead mx-auto" style={{ maxWidth: 700 }}>
            Your trusted companion for seamless airport lounge access across India.
          </p>
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-3">
            <Button
              href="#"
              size="lg"
              style={{ backgroundColor: '#fff', color: '#181511', border: '2px solid #181511', fontWeight: 600, borderRadius: 32 }}
              className="cta-btn-1"
              onMouseOver={e => { e.currentTarget.style.backgroundColor = '#2563eb'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.border = '2px solid #2563eb'; }}
              onMouseOut={e => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.color = '#181511'; e.currentTarget.style.border = '2px solid #181511'; }}
            >
              Download on App Store
            </Button>
            <Button
              href="#"
              size="lg"
              style={{ backgroundColor: '#2563eb', color: '#fff', border: '2px solid #2563eb', fontWeight: 600, borderRadius: 32 }}
              className="cta-btn-2"
              onMouseOver={e => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.color = '#2563eb'; e.currentTarget.style.border = '2px solid #2563eb'; }}
              onMouseOut={e => { e.currentTarget.style.backgroundColor = '#2563eb'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.border = '2px solid #2563eb'; }}
            >
              Download on Google Play
            </Button>
          </div>
          <img src="/splash.png" alt="App screens t" style={{ width: '100%', maxWidth: 380, margin: '40px auto 0', borderRadius: 20, boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }} />
        </Container>
      </section>

      {/* App Screenshots Section - overlays hero by 50px */}
      <section
        style={{
          marginTop: '-50px',
          padding: '80px 0',
          zIndex: 2,
          position: 'relative',
          background: 'var(--apple-bg)',
          display: 'none',
        }}
      >
        <Container style={{ maxWidth: '1100px' }}>
          <Row className="g-4 justify-content-center">
            {[1, 2, 3].map((n) => (
              <Col key={n} md={4} className="d-flex justify-content-center">
                <div style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.12)', borderRadius: 20, overflow: 'hidden', background: '#fff', padding: 16 }}>
                  <img
                    src={n === 1 ? "/login_page.png" : n === 2 ? "/my_cards.png" : "/profile.png"}
                    alt={n === 1 ? "Login Page Screenshot" : n === 2 ? "My Cards Screenshot" : "Profile Screenshot"}
                    style={{ width: '100%', height: 360, objectFit: 'cover', borderRadius: 12 }}
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Row className="justify-content-center my-5">
        <Col lg={11}>
          <Card className="shadow-lg border-0 bg-white text-dark text-center" style={{ borderRadius: 16, marginBottom: '8.5rem', marginTop: '8.5rem', padding: '5.5rem 1.5rem', backgroundColor: '#f7f7f7' }}>
            <Card.Body>
              <h1 className="fw-bold mb-4">About ZUTTO</h1>
              <h2 className="mb-3 text-dark" style={{ fontSize: 20, color: '#333' }}>
                In today’s fast-paced world of air travel, every moment counts. <strong>At ZUTTO</strong>, we believe your
                journey should begin with comfort, convenience, and premium experiences.
              </h2>
              <p className="mb-0 text-dark" style={{ color: '#666' }}>
                ZUTTO eliminates confusion by letting you instantly check lounge eligibility across domestic and
                international airports in India. It’s more than an app—it’s your gateway to stress-free travel.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <ScreenshotSection />
      {/* Main Content */}
      <Container className="py-5 text-dark">
        {/* What We Offer */}
        <h2 className="section-heading text-center mb-5">What We Offer</h2>
        <Row className="g-4 justify-content-center mb-5">
          {offers.map((o) => (
            <Col key={o.title} xs={12} md={4} className="d-flex justify-content-center">
              <div style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.08)', borderRadius: 20, overflow: 'hidden', background: '#fff', padding: 40, minWidth: 0, width: '100%', maxWidth: 380 }} className="text-center">
                <div style={{ width: 64, height: 64, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px auto', fontSize: 60, boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
                  {o.emoji}
                </div>
                <div className="fw-bold mb-2" style={{ fontSize: 20, color: '#333' }}>{o.title}</div>
                <div className="mb-0" style={{ color: '#666', fontSize: 16 }}>{o.text}</div>
              </div>
            </Col>
          ))}
        </Row>

        {/* About */}
       
      </Container>
    </>
  );
};

export default Home;

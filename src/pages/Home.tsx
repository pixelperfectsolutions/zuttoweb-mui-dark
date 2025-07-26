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
  return (
    <>
      {/* Hero */}
      <section style={{ minHeight: '800px' }} className="bg-dark text-white position-relative overflow-hidden d-flex align-items-center justify-content-center">
        <Container className="position-relative text-center">
          <h1 className="fw-bold display-4 mb-2">ZUTTO – REWARDS UN.LTD</h1>
          <h2 className="h5 mb-3">Maximize Your Lounge Access – Instantly</h2>
          <p className="lead mx-auto" style={{ maxWidth: 700 }}>
            Your trusted companion for seamless airport lounge access across India.
          </p>
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-4">
            <Button href="#" variant="light" size="lg">
              Download on App Store
            </Button>
            <Button href="#" variant="success" size="lg">
              Download on Google Play
            </Button>
          </div>
        </Container>
      </section>

      {/* App Screenshots Section - overlays hero by 50px */}
      <section
        style={{
          marginTop: '-250px',
          paddingBottom: '20px',
          zIndex: 2,
          position: 'relative',
        }}
      >
        <Container style={{ maxWidth: '1100px' }}>
          <Row className="g-4 justify-content-center">
            {[1, 2, 3].map((n) => (
              <Col key={n} md={4} className="d-flex justify-content-center">
                <div style={{ boxShadow: '0 4px 24px rgba(0, 0, 0, 0.86)', borderRadius: 16, overflow: 'hidden', background: '#222', padding: 16 }}>
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
            <Card className="shadow-lg border-0 bg-dark text-white text-center" style={{ borderRadius: 16, marginBottom: '8.5rem', marginTop: '8.5rem', padding: '5.5rem 1.5rem' }}>
              <Card.Body>
                <h1 className="fw-bold mb-4">About ZUTTO</h1>
                <h2 className="mb-3 text-light" style={{  fontSize: 20 }}>
                  In today’s fast-paced world of air travel, every moment counts. <strong>At ZUTTO</strong>, we believe your
                  journey should begin with comfort, convenience, and premium experiences.
                </h2>
                <p className="mb-0 text-light" >
                  ZUTTO eliminates confusion by letting you instantly check lounge eligibility across domestic and
                  international airports in India. It’s more than an app—it’s your gateway to stress-free travel.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      {/* Main Content */}
      <Container className="py-5 text-dark">
        {/* What We Offer */}
        <h2 className="fw-bold mb-4 text-center">What We Offer</h2>
        <Row className="g-4 justify-content-center mb-5">
          {offers.map((o) => (
            <Col key={o.title} xs={12} md={4} className="d-flex justify-content-center">
              <div style={{ boxShadow: '0 4px 24px rgb(39, 15, 15)', marginBottom: 90, borderRadius: 16, overflow: 'hidden', background: '#212529', padding: 24, minWidth: 0, width: '100%', maxWidth: 350 }} className="text-center">
                <div style={{ width: 64, height: 64, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px auto', fontSize: 60, boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
                  {o.emoji}
                </div>
                <div className="fw-bold mb-2" style={{ fontSize: 20, color: '#fff' }}>{o.title}</div>
                <div className="mb-0" style={{ color: '#ccc', fontSize: 16 }}>{o.text}</div>
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

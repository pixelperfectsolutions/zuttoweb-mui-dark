import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

/**
 * About page component.
 *
 * This component renders the about page.
 * It explains the story behind ZUTTO, the vision and mission, and the products and services offered.
 * It also provides a section for the app screenshots.
 *
 * @return {ReactElement} The about page component.
 */
const About: React.FC = () => (
  <>
    <Container className="pt-24 pb-5 px-3" style={{ paddingTop: '6rem', paddingBottom: '5rem', maxWidth: '1200px' }}>
      {/* The Story Behind ZUTTO */}
      <Card className="mb-5 p-4 shadow-lg border-0" style={{ marginTop: '10rem' }}>
        <Card.Body>
          <h1 className="fw-bold display-5 mb-4 text-center ">The Story Behind ZUTTO: Why ZUTTO?</h1>
          <p className="lead mb-0 text-center">
            The idea for ZUTTO was born from a frustrating travel experience faced by our founder’s father, who was denied lounge entry due to unclear card eligibility.<br/>
            Sharing this experience with his son, they recognized a common challenge many travelers face, and together, they created ZUTTO to solve it.<br/>
            With a vision to simplify lounge access and offer clarity, ZUTTO was built to transform airport experiences across India.
          </p>
        </Card.Body>
      </Card>

      {/* Founder's Message */}
      <Card className="mb-5 p-4 shadow-lg border-0 bg-dark text-white">
        <Card.Body>
          <h2 className="fw-bold h4 mb-3 text-warning">Founder’s Message</h2>
          <blockquote className="fst-italic mb-4 border-start border-4 border-warning ps-4">
            “ZUTTO was born from a moment of frustration, when my father was denied lounge access due to unclear card eligibility. What seemed like a minor inconvenience revealed a major gap in the travel experience. That moment sparked a vision to build something meaningful.<br/><br/>
            Together, we created ZUTTO—a platform built on the pillars of clarity, convenience, and premium travel. This is just the beginning of a smarter way to travel.”
          </blockquote>
          <div className="fw-bold text-warning mb-2">— Varshan Kannan, Founder & CEO</div>
          <div>
            Every journey tells a story—and for ZUTTO, it began with one that hit close to home...
          </div>
        </Card.Body>
      </Card>

      {/* Carrying Forward His Legacy Section */}
      <Card className="mb-5 p-4 shadow-lg border-0 bg-[#f5efe6] text-[#181511]">
        <Card.Body className="flex flex-col items-center justify-center text-center">
          <img src="/profile.png" alt="Kannan Natesan" className="mb-4 rounded-lg shadow-md" style={{ width: '220px', height: 'auto', objectFit: 'cover' }} />
          <h2 className="fw-bold h4 mb-2">Carrying Forward His Legacy</h2>
          <h3 className="fw-bold h5 mb-1">Kannan Natesan</h3>
          <div className="text-lg">1973 - 2025</div>
        </Card.Body>
      </Card>

      {/* Vision & Mission Cards */}
      <Row className="mb-5 g-4">
        <Col md={6}>
          <Card className="h-100 p-4 shadow-lg border-0">
            <Card.Body>
              <h2 className="fw-bold h5 mb-2 text-warning">Vision</h2>
              <p className="mb-0">
                To transform air travel by making airport lounges accessible, comfortable, and clear for every traveler. At ZUTTO, we aim to ensure every journey begins with peace of mind and every traveler enjoys the luxury they deserve.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100 p-4 shadow-lg border-0">
            <Card.Body>
              <h2 className="fw-bold h5 mb-2 text-warning">Mission</h2>
              <p className="mb-0">
                Our mission is to remove confusion around lounge access, offering a seamless and stress-free experience. ZUTTO empowers travelers with clarity and convenience, ensuring they can confidently enjoy their journey with premium access.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Our Journey Section */}
      <Card className="mb-5 p-4 shadow-lg border-0">
        <Card.Body>
          <h2 className="fw-bold h4 mb-4 text-warning">Our Journey</h2>
          <ul className="mb-0 ps-4">
            <li className="mb-1">🔍 <b>2023-24</b> – Identified the problem, mapped the travel pain points.</li>
            <li className="mb-1">💡 <b>Late 2024</b> – Conceptualized ZUTTO, built the founding team.</li>
            <li className="mb-1">🔧 <b>Jan – July 2025</b> – Research, testing & refinement.</li>
            <li>🚀 <b>Aug / September 2025</b> – Official launch, transforming lounge access in India.</li>
          </ul>
        </Card.Body>
      </Card>

      {/* Products & Services 4-card layout */}
      <h2 className="fw-bold h4 mb-4 text-warning text-center">Products & Services</h2>
      <Row className="mb-5 g-4">
        <Col md={3}>
          <Card className="h-100 p-4 shadow-lg border-0">
            <Card.Body>
              <h3 className="fw-bold h6 mb-2 text-warning">Lounge Eligibility Checker</h3>
              <p className="mb-0">
                Instantly check if your card is eligible for airport lounge access.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="h-100 p-4 shadow-lg border-0">
            <Card.Body>
              <h3 className="fw-bold h6 mb-2 text-warning">Lounge Finder</h3>
              <p className="mb-0">
                Find lounges at airports across India with details and access info.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="h-100 p-4 shadow-lg border-0">
            <Card.Body>
              <h3 className="fw-bold h6 mb-2 text-warning">Travel Insights</h3>
              <p className="mb-0">
                Get travel tips, news, and updates for a seamless journey.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="h-100 p-4 shadow-lg border-0">
            <Card.Body>
              <h3 className="fw-bold h6 mb-2 text-warning">Rewards & Offers</h3>
              <p className="mb-0">
                Discover exclusive rewards and offers for ZUTTO users.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* More Products & Services */}
      <h2 className="fw-bold h4 mb-4 text-warning text-center">More Products & Services</h2>
      <Row className="mb-5 g-4">
        <Col md={3}>
          <Card className="h-100 p-4 shadow-lg border-0">
            <Card.Body>
              <h3 className="fw-bold h6 mb-2 text-warning">Lounge Access Checker</h3>
              <p className="mb-0">
                Instantly find eligible lounges.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="h-100 p-4 shadow-lg border-0">
            <Card.Body>
              <h3 className="fw-bold h6 mb-2 text-warning">Card Benefits & Eligibility</h3>
              <p className="mb-0">
                Understand terms, limits, and offers.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="h-100 p-4 shadow-lg border-0">
            <Card.Body>
              <h3 className="fw-bold h6 mb-2 text-warning">Seamless Travel Experience</h3>
              <p className="mb-0">
                Plan ahead and avoid surprises.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="h-100 p-4 shadow-lg border-0">
            <Card.Body>
              <h3 className="fw-bold h6 mb-2 text-warning">Coming Soon</h3>
              <p className="mb-0">
                More features, wider coverage & brand partnerships.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    {/* App Screenshots Section - overlays hero by 50px */}
    <section
      style={{
        marginTop: '-50px',
        padding: '50px 0',
        zIndex: 2,
        position: 'relative',
      }}
    >
      <Container style={{ maxWidth: '1100px' }}>
        <Row className="g-4 justify-content-center">
          {[1, 2, 3].map((n) => (
            <Col key={n} md={4} className="d-flex justify-content-center">
              {/* <div style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.5)', borderRadius: 16, overflow: 'hidden', background: '#000', padding: 16 }}>
                <img
                  src={n === 1 ? "/login_page.png" : n === 2 ? "/my_cards.png" : "/profile.png"}
                  alt={n === 1 ? "Login Page Screenshot" : n === 2 ? "My Cards Screenshot" : "Profile Screenshot"}
                  style={{ width: '100%', height: 360, objectFit: 'cover', borderRadius: 12 }}
                />
              </div> */}
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  </>
);

export default About;
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaRocket, FaCalendarAlt, FaUsers, FaBullseye } from "react-icons/fa";
import "../index.css";
import SEO from "../components/SEO";

const Launch: React.FC = () => {
  const [isLaunching, setIsLaunching] = useState(false);
  
  const createCelebration = () => {
    const overlay = document.createElement('div');
    overlay.className = 'celebration-overlay';
    
    // Create main celebration text
    const celebrateText = document.createElement('div');
    celebrateText.className = 'celebrate-text';
    celebrateText.innerHTML = '🎉 ZUTTO IS LAUNCHED! 🎉';
    
    // Create subtitle
    const subText = document.createElement('div');
    subText.className = 'celebrate-subtext';
    subText.innerHTML = 'Welcome to the future of premium airport experiences!';
    
    // Create party poppers
    const partyPositions = [
      { left: '20%', top: '20%' },
      { left: '80%', top: '20%' },
      { left: '20%', top: '80%' },
      { left: '80%', top: '80%' },
      { left: '50%', top: '10%' },
    ];
    
    partyPositions.forEach((pos, index) => {
      setTimeout(() => {
        const popper = document.createElement('div');
        popper.className = 'party-popper';
        popper.innerHTML = '🎉';
        popper.style.left = pos.left;
        popper.style.top = pos.top;
        overlay.appendChild(popper);
      }, index * 200);
    });
    
    // Create confetti
    const colors = ['#dbc8ad', '#333', '#007aff', '#ff6b6b', '#4ecdc4', '#45b7d1'];
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = Math.random() * 20 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        overlay.appendChild(confetti);
      }, i * 20);
    }
    
    overlay.appendChild(celebrateText);
    overlay.appendChild(subText);
    document.body.appendChild(overlay);
    
    // Remove overlay after animation
    setTimeout(() => {
      document.body.removeChild(overlay);
    }, 4000);
  };

  const launchStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "ZUTTO App Launch",
    "description": "ZUTTO's premium airport lounge access solution is now live in India",
    "manufacturer": {
      "@type": "Organization",
      "name": "ZUTTO"
    },
    "category": "Travel Application"
  };

  return (
    <>
      <SEO
        title="ZUTTO Launch - Premium Airport Experience Now Live | Airport Lounge Access India"
        description="ZUTTO is now launched! Experience our comprehensive airport lounge access solution. Download now and enjoy premium travel in India."
        keywords="ZUTTO launch, airport lounge app launched, travel app India, lounge access available, download now"
        structuredData={launchStructuredData}
      />
      
      {/* Hero Section */}
      <section
        style={{
          minHeight: "600px",
          background: "var(--apple-bg)",
          paddingTop: "6rem",
        }}
        className="position-relative overflow-hidden d-flex align-items-center justify-content-center pt-24"
      >
        <Container style={{ maxWidth: "1000px" }} className="px-4">
          <Row className="align-items-center text-center">
            <Col>
              <div
                className="launch-rocket"
                style={{
                  width: "120px",
                  height: "120px",
                  backgroundColor: "#333",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 2rem auto",
                }}
              >
                <FaRocket style={{ fontSize: "3rem", color: "#fff" }} />
              </div>
              
              <h1
                className="fw-bold mb-4 fade-in-up delay-200"
                style={{
                  fontSize: "3.5rem",
                  fontFamily: "var(--primary-font)",
                  fontWeight: "700",
                  lineHeight: "1.2",
                  letterSpacing: "-0.02em",
                }}
              >
                ZUTTO IS{" "}
                <span style={{ color: "#dbc8ad" }}>NOW</span> LAUNCHED
              </h1>
              
              <p
                className="lead mb-4 fade-in-up delay-400"
                style={{
                  maxWidth: 600,
                  fontFamily: "var(--primary-font)",
                  fontWeight: "400",
                  fontSize: "1.25rem",
                  lineHeight: "1.6",
                  margin: "0 auto 2rem auto",
                }}
              >
                Get ready to transform your airport experience. ZUTTO will revolutionize how you access and enjoy premium airport lounges across India.
              </p>

              <div className="d-flex flex-column flex-sm-row gap-4 justify-content-center align-items-center mt-5">
                <Button
                  size="lg"
                  className="launch-btn pulse-animation"
                  style={{
                    backgroundColor: "#dbc8ad",
                    borderColor: "#dbc8ad",
                    color: "#333",
                    fontFamily: "var(--primary-font)",
                    fontWeight: "700",
                    padding: "1.25rem 3rem",
                    fontSize: "1.2rem",
                    borderRadius: "0.75rem",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    boxShadow: "0 8px 25px rgba(219, 200, 173, 0.4)",
                    border: "2px solid #dbc8ad",
                  }}
                  onMouseOver={(e) => {
                    if (!e.currentTarget.classList.contains('launching')) {
                      e.currentTarget.style.transform = "scale(1.05)";
                      e.currentTarget.style.backgroundColor = "#333";
                      e.currentTarget.style.color = "#fff";
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!e.currentTarget.classList.contains('launching')) {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.backgroundColor = "#dbc8ad";
                      e.currentTarget.style.color = "#333";
                    }
                  }}
                  onClick={(e) => {
                    // Add launch animation effect
                    const btn = e.currentTarget;
                    if (!btn.classList.contains('launching') && !isLaunching) {
                      setIsLaunching(true);
                      btn.classList.add('launching');
                      btn.innerHTML = "🚀 Launching...";
                      
                      // Start celebration after 1 second
                      setTimeout(() => {
                        createCelebration();
                      }, 1000);
                      
                      // Navigate to home page after celebration
                      setTimeout(() => {
                        window.location.href = '/';
                      }, 4500);
                    }
                  }}
                >
                  🚀 Launch ZUTTO
                </Button>
                <Button
                  size="lg"
                  variant="outline-secondary"
                  style={{
                    borderColor: "#333",
                    color: "#333",
                    fontFamily: "var(--primary-font)",
                    fontWeight: "600",
                    padding: "1.25rem 2.5rem",
                    fontSize: "1.1rem",
                    borderRadius: "0.75rem",
                    backgroundColor: "transparent",
                    border: "2px solid #333",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#333";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#333";
                  }}
                >
                  Learn More
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Launch Timeline Section */}
      <section
        style={{
          padding: "5rem 0",
          background: "#f8f9fa",
        }}
      >
        <Container style={{ maxWidth: "1200px" }} className="px-4">
          <div className="text-center mb-5">
            <h2
              className="fade-in-up"
              style={{
                fontFamily: "var(--primary-font)",
                fontWeight: "700",
                fontSize: "2.5rem",
                color: "#333",
                marginBottom: "1rem",
              }}
            >
              Launch Timeline
            </h2>
            <p
              className="fade-in-up delay-200"
              style={{
                fontFamily: "var(--primary-font)",
                fontWeight: "400",
                fontSize: "1.125rem",
                lineHeight: "1.6",
                color: "#666",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Here's what to expect as we prepare to launch ZUTTO
            </p>
          </div>

          <Row className="g-4 justify-content-center">
            {/* Phase 1 */}
            <Col lg={4} md={6} className="d-flex justify-content-center">
              <div
                className="slide-in-left delay-400"
                style={{
                  background: "#fff",
                  borderRadius: "1rem",
                  padding: "2.5rem 2rem",
                  textAlign: "center",
                  height: "100%",
                  minHeight: "280px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  maxWidth: "350px",
                  width: "100%",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#dbc8ad",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem auto",
                  }}
                >
                  <FaBullseye style={{ fontSize: "1.5rem", color: "#333" }} />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--primary-font)",
                    fontWeight: "600",
                    fontSize: "1.25rem",
                    color: "#333",
                    marginBottom: "1rem",
                  }}
                >
                  Phase 1: Beta Testing
                </h3>
                <p
                  style={{
                    fontFamily: "var(--primary-font)",
                    fontWeight: "400",
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                    color: "#666",
                  }}
                >
                  Limited beta release with select users to test core functionality and gather feedback.
                </p>
              </div>
            </Col>

            {/* Phase 2 */}
            <Col lg={4} md={6} className="d-flex justify-content-center">
              <div
                className="fade-in-up delay-600"
                style={{
                  background: "#fff",
                  borderRadius: "1rem",
                  padding: "2.5rem 2rem",
                  textAlign: "center",
                  height: "100%",
                  minHeight: "280px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  maxWidth: "350px",
                  width: "100%",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#333",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem auto",
                  }}
                >
                  <FaCalendarAlt style={{ fontSize: "1.5rem", color: "#fff" }} />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--primary-font)",
                    fontWeight: "600",
                    fontSize: "1.25rem",
                    color: "#333",
                    marginBottom: "1rem",
                  }}
                >
                  Phase 2: Soft Launch
                </h3>
                <p
                  style={{
                    fontFamily: "var(--primary-font)",
                    fontWeight: "400",
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                    color: "#666",
                  }}
                >
                  Initial public release with core lounge access features across major Indian airports.
                </p>
              </div>
            </Col>

            {/* Phase 3 */}
            <Col lg={4} md={6} className="d-flex justify-content-center">
              <div
                className="slide-in-right delay-800"
                style={{
                  background: "#fff",
                  borderRadius: "1rem",
                  padding: "2.5rem 2rem",
                  textAlign: "center",
                  height: "100%",
                  minHeight: "280px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  maxWidth: "350px",
                  width: "100%",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#dbc8ad",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem auto",
                  }}
                >
                  <FaUsers style={{ fontSize: "1.5rem", color: "#333" }} />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--primary-font)",
                    fontWeight: "600",
                    fontSize: "1.25rem",
                    color: "#333",
                    marginBottom: "1rem",
                  }}
                >
                  Phase 3: Full Launch
                </h3>
                <p
                  style={{
                    fontFamily: "var(--primary-font)",
                    fontWeight: "400",
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                    color: "#666",
                  }}
                >
                  Complete platform with all features, nationwide coverage, and premium services.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* What's Coming Section */}
      <section
        style={{
          padding: "5rem 0",
          background: "var(--apple-bg)",
        }}
      >
        <Container style={{ maxWidth: "1200px" }} className="px-4">
          <div className="text-center mb-5">
            <h2
              className="fade-in-up"
              style={{
                fontFamily: "var(--primary-font)",
                fontWeight: "700",
                fontSize: "2.5rem",
                color: "#333",
                marginBottom: "1rem",
              }}
            >
              What's Coming
            </h2>
            <p
              className="fade-in-up delay-200"
              style={{
                fontFamily: "var(--primary-font)",
                fontWeight: "400",
                fontSize: "1.125rem",
                lineHeight: "1.6",
                color: "#666",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Get excited about the features that will make your airport experience extraordinary
            </p>
          </div>

          <Row className="g-4">
            <Col md={6}>
              <div
                className="bounce-in delay-400"
                style={{
                  background: "#fff",
                  borderRadius: "1rem",
                  padding: "2rem",
                  height: "100%",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                }}
              >
                <h4
                  style={{
                    fontFamily: "var(--primary-font)",
                    fontWeight: "600",
                    fontSize: "1.25rem",
                    color: "#333",
                    marginBottom: "1rem",
                  }}
                >
                  ✈️ Instant Lounge Access Verification
                </h4>
                <p
                  style={{
                    fontFamily: "var(--primary-font)",
                    fontWeight: "400",
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                    color: "#666",
                    margin: "0",
                  }}
                >
                  Know immediately if your cards qualify for lounge access at any airport in India.
                </p>
              </div>
            </Col>
            
            <Col md={6}>
              <div
                className="bounce-in delay-500"
                style={{
                  background: "#fff",
                  borderRadius: "1rem",
                  padding: "2rem",
                  height: "100%",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                }}
              >
                <h4
                  style={{
                    fontFamily: "var(--primary-font)",
                    fontWeight: "600",
                    fontSize: "1.25rem",
                    color: "#333",
                    marginBottom: "1rem",
                  }}
                >
                  💳 Smart Card Integration
                </h4>
                <p
                  style={{
                    fontFamily: "var(--primary-font)",
                    fontWeight: "400",
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                    color: "#666",
                    margin: "0",
                  }}
                >
                  Seamlessly connect your bank cards and unlock all your travel benefits.
                </p>
              </div>
            </Col>
            
            <Col md={6}>
              <div
                className="bounce-in delay-600"
                style={{
                  background: "#fff",
                  borderRadius: "1rem",
                  padding: "2rem",
                  height: "100%",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                }}
              >
                <h4
                  style={{
                    fontFamily: "var(--primary-font)",
                    fontWeight: "600",
                    fontSize: "1.25rem",
                    color: "#333",
                    marginBottom: "1rem",
                  }}
                >
                  🗺️ Comprehensive Airport Coverage
                </h4>
                <p
                  style={{
                    fontFamily: "var(--primary-font)",
                    fontWeight: "400",
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                    color: "#666",
                    margin: "0",
                  }}
                >
                  Complete database of lounges across all major domestic and international airports in India.
                </p>
              </div>
            </Col>
            
            <Col md={6}>
              <div
                className="bounce-in delay-700"
                style={{
                  background: "#fff",
                  borderRadius: "1rem",
                  padding: "2rem",
                  height: "100%",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                }}
              >
                <h4
                  style={{
                    fontFamily: "var(--primary-font)",
                    fontWeight: "600",
                    fontSize: "1.25rem",
                    color: "#333",
                    marginBottom: "1rem",
                  }}
                >
                  📱 Premium Mobile Experience
                </h4>
                <p
                  style={{
                    fontFamily: "var(--primary-font)",
                    fontWeight: "400",
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                    color: "#666",
                    margin: "0",
                  }}
                >
                  Beautiful, intuitive app design that makes accessing lounge information effortless.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </>
  );
};

export default Launch;
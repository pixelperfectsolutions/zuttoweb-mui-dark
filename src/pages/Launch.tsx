import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaRocket, FaCalendarAlt, FaUsers, FaBullseye } from "react-icons/fa";
import "../index.css";
import SEO from "../components/SEO";

const Launch: React.FC = () => {
  const launchStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "ZUTTO App Launch",
    "description": "Coming soon - ZUTTO's premium airport lounge access solution launches in India",
    "manufacturer": {
      "@type": "Organization",
      "name": "ZUTTO"
    },
    "category": "Travel Application"
  };

  return (
    <>
      <SEO
        title="ZUTTO Launch - Premium Airport Experience Coming Soon | Airport Lounge Access India"
        description="ZUTTO is launching soon! Be the first to experience our comprehensive airport lounge access solution. Get notified when we go live in India."
        keywords="ZUTTO launch, airport lounge app launch, coming soon, travel app India, lounge access notification"
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
                className="fw-bold mb-4"
                style={{
                  fontSize: "3.5rem",
                  fontFamily: "var(--primary-font)",
                  fontWeight: "700",
                  lineHeight: "1.2",
                  letterSpacing: "-0.02em",
                }}
              >
                ZUTTO IS{" "}
                <span style={{ color: "#dbc8ad" }}>LAUNCHING</span> SOON
              </h1>
              
              <p
                className="lead mb-4"
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

              <Button
                size="lg"
                style={{
                  backgroundColor: "#333",
                  borderColor: "#333",
                  fontFamily: "var(--primary-font)",
                  fontWeight: "600",
                  padding: "1rem 2.5rem",
                  fontSize: "1.1rem",
                  borderRadius: "0.5rem",
                }}
              >
                Notify Me When Available
              </Button>
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

      {/* Stay Updated Section */}
      <section
        style={{
          padding: "5rem 0",
          background: "#f8f9fa",
        }}
      >
        <Container style={{ maxWidth: "800px" }} className="px-4 text-center">
          <h2
            style={{
              fontFamily: "var(--primary-font)",
              fontWeight: "700",
              fontSize: "2.5rem",
              color: "#333",
              marginBottom: "1rem",
            }}
          >
            Stay Updated
          </h2>
          <p
            style={{
              fontFamily: "var(--primary-font)",
              fontWeight: "400",
              fontSize: "1.125rem",
              lineHeight: "1.6",
              color: "#666",
              marginBottom: "2rem",
            }}
          >
            Be the first to know when ZUTTO launches. Join our exclusive list and get early access to premium airport lounge experiences.
          </p>
          
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center">
            <div className="flex-grow-1" style={{ maxWidth: "400px" }}>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email address"
                style={{
                  padding: "0.75rem 1rem",
                  fontSize: "1rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #ddd",
                }}
              />
            </div>
            <Button
              size="lg"
              style={{
                backgroundColor: "#333",
                borderColor: "#333",
                fontFamily: "var(--primary-font)",
                fontWeight: "600",
                padding: "0.75rem 2rem",
                fontSize: "1rem",
                borderRadius: "0.5rem",
                whiteSpace: "nowrap",
              }}
            >
              Get Early Access
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Launch;
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaNewspaper, FaLightbulb, FaBookOpen, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../index.css";
import SEO from "../components/SEO";

const TravelHub: React.FC = () => {
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const travelHubStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "ZUTTO Travel Hub",
    "description": "Your comprehensive travel resource hub featuring airport guides, lounge information, and premium travel tips across India.",
    "mainEntity": {
      "@type": "TravelGuide",
      "name": "ZUTTO Travel Hub",
      "description": "Premium travel resources and airport guides for Indian travelers"
    }
  };

  return (
    <>
      <SEO
        title="ZUTTO Travel Hub - Airport Guides & Travel Resources India"
        description="Access comprehensive travel guides, airport information, and premium travel resources. Your hub for enhanced airport experiences across India."
        keywords="travel hub India, airport guides, travel resources, premium travel tips, airport information India, ZUTTO travel guides"
        url="https://zutto.in/travel-hub"
        structuredData={travelHubStructuredData}
      />
      {/* Hero Section */}
      <section
        style={{
          minHeight: "250px",
          background: "var(--apple-bg)",
          paddingTop: "8rem",
          paddingBottom: "clamp(1rem, 4vw, 2rem)",
        }}
        className="position-relative overflow-hidden d-flex align-items-center justify-content-center"
      >
        <Container style={{ maxWidth: "1200px" }} className="px-3">
          <Row className="text-center">
            <Col lg={12}>
              <h1
                className="section-heading"
                style={{
                  fontFamily: "var(--primary-font)",
                  fontWeight: "700",
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  lineHeight: "1.2",
                  marginBottom: "1rem",
                  color: "var(--apple-heading)",
                }}
              >
                Travel Hub
              </h1>
              <p
                className="lead"
                style={{
                  fontFamily: "var(--primary-font)",
                  fontWeight: "400",
                  fontSize: "clamp(1rem, 3vw, 1.25rem)",
                  lineHeight: "1.6",
                  color: "var(--apple-text)",
                  maxWidth: "600px",
                  margin: "0 auto 1rem",
                  padding: "0 1rem",
                }}
              >
                Your comprehensive resource for travel news, expert tips, and inspiring stories.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Main Content Section */}
      <section style={{ background: "#f8f9fa", padding: "clamp(1rem, 4vw, 2rem) 0" }}>
        <Container style={{ maxWidth: "1200px" }} className="px-3">

          <Row className="g-4">
            {/* Travel News Card */}
            <Col lg={4} md={6} className="mb-4 mb-lg-0">
              <div
                className="h-100"
                style={{
                  background: "#ffffff",
                  borderRadius: "20px",
                  padding: "clamp(1rem, 3vw, 1.5rem)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  border: "1px solid rgba(0,0,0,0.06)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
                }}
              >
                <div className="text-center mb-3">
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "#333",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto",
                    }}
                  >
                    <FaNewspaper style={{ fontSize: "1.5rem", color: "#fff" }} />
                  </div>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--primary-font)",
                    fontWeight: "600",
                    fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
                    marginBottom: "1rem",
                    color: "#333",
                    textAlign: "center",
                  }}
                >
                  Travel News & Updates
                </h3>
                <p
                  style={{
                    fontFamily: "var(--primary-font)",
                    fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
                    lineHeight: "1.6",
                    color: "#666",
                    marginBottom: "1rem",
                    textAlign: "center",
                  }}
                >
                  Stay informed about the latest lounge openings, travel restrictions, policy changes, and aviation industry trends across India.
                </p>
              </div>
            </Col>

            {/* Pro Travel Tips Card */}
            <Col lg={4} md={6} className="mb-4 mb-lg-0">
              <div
                className="h-100"
                style={{
                  background: "#ffffff",
                  borderRadius: "20px",
                  padding: "clamp(1rem, 3vw, 1.5rem)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  border: "1px solid rgba(0,0,0,0.06)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
                }}
              >
                <div className="text-center mb-3">
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "#333",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto",
                    }}
                  >
                    <FaLightbulb style={{ fontSize: "1.5rem", color: "#fff" }} />
                  </div>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--primary-font)",
                    fontWeight: "600",
                    fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
                    marginBottom: "1rem",
                    color: "#333",
                    textAlign: "center",
                  }}
                >
                  Expert Travel Tips
                </h3>
                <div style={{ textAlign: "left", marginBottom: "1.5rem" }}>
                  <ul
                    style={{
                      fontFamily: "var(--primary-font)",
                      fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
                      lineHeight: "1.6",
                      color: "#666",
                      paddingLeft: "1.2rem",
                      marginBottom: 0,
                    }}
                  >
                    <li className="mb-2">
                      Maximize lounge visits with spa & dining access
                    </li>
                    <li className="mb-2">
                      Navigate airport terminals like a professional
                    </li>
                    <li className="mb-2">
                      Discover hidden travel gems and destinations
                    </li>
                    <li>
                      Optimize credit card benefits for travel
                    </li>
                  </ul>
                </div>
              </div>
            </Col>

            {/* Travel Stories Card */}
            <Col lg={4} md={12} className="mb-4 mb-lg-0">
              <div
                className="h-100"
                style={{
                  background: "#ffffff",
                  borderRadius: "20px",
                  padding: "clamp(1rem, 3vw, 1.5rem)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  border: "1px solid rgba(0,0,0,0.06)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
                }}
              >
                <div className="text-center mb-3">
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "#333",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto",
                    }}
                  >
                    <FaBookOpen style={{ fontSize: "1.5rem", color: "#fff" }} />
                  </div>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--primary-font)",
                    fontWeight: "600",
                    fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
                    marginBottom: "1rem",
                    color: "#333",
                    textAlign: "center",
                  }}
                >
                  Featured Travel Stories
                </h3>
                <p
                  style={{
                    fontFamily: "var(--primary-font)",
                    fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
                    lineHeight: "1.6",
                    color: "#666",
                    marginBottom: "1rem",
                    textAlign: "center",
                  }}
                >
                  Get inspired by real travelers—business professionals, adventurers, and global wanderers sharing their premium airport experiences with ZUTTO.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TravelHub;

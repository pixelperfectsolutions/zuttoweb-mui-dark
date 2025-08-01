import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../index.css";
import SEO from "../components/SEO";

const TravelHub: React.FC = () => {
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
      <Container
    className="pt-24 px-4"
    style={{ maxWidth: "1200px", paddingTop: "10rem" }}
  >
    <Row
      className="justify-content-center"
      style={{ paddingTop: "0", paddingBottom: "5rem" }}
    >
      <Col lg={12}>
        <div
          className="shadow-lg border-0 mb-5 p-4"
          style={{ background: "#ffffff" }}
        >
          <div style={{ padding: "3rem 2rem", textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h1
                className="display-5 fw-bold mb-4 text-center"
                style={{
                  fontFamily: "var(--primary-font)",
                  fontWeight: "800",
                  fontSize: "3rem",
                  lineHeight: "1.2",
                  position: "relative",
                  display: "inline-block",
                  borderBottom: "4px solid #dbc8ad",
                  paddingBottom: "0.5rem",
                  marginBottom: "2rem",
                }}
              >
                Travel Hub – News, Tips & Stories
              </h1>
            </div>
            <p
              className="lead mb-5"
              style={{
                fontFamily: "var(--primary-font)",
                fontWeight: "400",
                fontSize: "1.125rem",
                lineHeight: "1.6",
              }}
            >
              Your go-to space for updates, insider news, and travel insights.
            </p>

            {/* First Row - Two Cards */}
            <Row className="justify-content-center mb-4">
              <Col md={6}>
                <div
                  style={{
                    background: "#ffffff",
                    borderRadius: "20px",
                    padding: "2rem 1.5rem",
                    height: "100%",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    borderTop: "3px solid #dbc8ad",
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "var(--primary-font)",
                      fontWeight: "700",
                      fontSize: "1.35rem",
                      marginBottom: "1.25rem",
                      color: "#333",
                    }}
                  >
                    Travel News
                  </h2>
                  <p
                    style={{
                      fontFamily: "var(--primary-font)",
                      fontSize: "1.1rem",
                      lineHeight: "1.6",
                      color: "#666",
                      fontWeight: "400",
                    }}
                  >
                    Stay informed on lounge openings, travel restrictions, and
                    aviation trends.
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div
                  style={{
                    background: "#ffffff",
                    borderRadius: "20px",
                    padding: "2rem 1.5rem",
                    height: "100%",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    borderTop: "3px solid #dbc8ad",
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "var(--primary-font)",
                      fontWeight: "700",
                      fontSize: "1.35rem",
                      marginBottom: "1.25rem",
                      color: "#333",
                    }}
                  >
                    Pro Travel Tips
                  </h2>
                  <ul
                    style={{
                      fontFamily: "var(--primary-font)",
                      fontSize: "1.1rem",
                      lineHeight: "1.6",
                      color: "#666",
                      fontWeight: "400",
                      paddingLeft: "1.2rem",
                      marginBottom: 0,
                    }}
                  >
                    <li className="mb-2">
                      Maximize Your Lounge Visit – Enjoy all the perks, from
                      gourmet meals to spa access.
                    </li>
                    <li className="mb-2">
                      Airport Hacks – Navigate terminals like a pro.
                    </li>
                    <li>
                      Top Destinations – Curated global hotspots and hidden
                      gems.
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>

            {/* Second Row - One Card */}
            <Row className="justify-content-center">
              <Col md={8}>
                <div
                  style={{
                    background: "#ffffff",
                    borderRadius: "20px",
                    padding: "2rem 1.5rem",
                    height: "100%",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    borderTop: "3px solid #dbc8ad",
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "var(--primary-font)",
                      fontWeight: "700",
                      fontSize: "1.35rem",
                      marginBottom: "1.25rem",
                      color: "#333",
                    }}
                  >
                    Featured Travel Stories
                  </h2>
                  <p
                    style={{
                      fontFamily: "var(--primary-font)",
                      fontSize: "1.1rem",
                      lineHeight: "1.6",
                      color: "#666",
                      fontWeight: "400",
                    }}
                  >
                    Be inspired by real travelers—business flyers, adventurers,
                    and global wanderers—sharing their luxurious and stress-free
                    journeys with ZUTTO.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Col>
    </Row>
      </Container>
    </>
  );
};

export default TravelHub;

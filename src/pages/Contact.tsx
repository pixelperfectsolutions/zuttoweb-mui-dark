import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../index.css";
import SEO from "../components/SEO";

const Contact: React.FC = () => {
  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact ZUTTO",
    "description": "Get in touch with ZUTTO for queries, feedback, or partnership opportunities. Connect with India's premium travel companion.",
    "mainEntity": {
      "@type": "Organization",
      "name": "ZUTTO",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": "English"
      }
    }
  };

  return (
    <>
      <SEO
        title="Contact ZUTTO - Get in Touch | Customer Support India"
        description="Contact ZUTTO for queries, feedback, or partnership opportunities. Connect with India's leading airport lounge access service provider."
        keywords="contact ZUTTO, customer support, feedback, partnership, airport lounge support India, travel assistance"
        url="https://zutto.in/contact"
        structuredData={contactStructuredData}
      />
      <Container
    className="pt-24 px-4"
    style={{ maxWidth: "1200px", paddingTop: "10rem" }}
  >
    <div className="text-center mb-5">
      <h1
        style={{
          fontFamily: "var(--primary-font)",
          fontWeight: "800",
          fontSize: "3rem",
          lineHeight: "1.2",
          marginBottom: "1rem",
          position: "relative",
          display: "inline-block",
          borderBottom: "4px solid #dbc8ad",
          paddingBottom: "0.5rem",
        }}
      >
        Contact Us
      </h1>

      <p
        style={{
          fontFamily: "var(--primary-font)",
          fontSize: "1.25rem",
          color: "#333",
          maxWidth: "800px",
          margin: "2rem auto",
          lineHeight: "1.6",
        }}
      >
        Let's connect. Whether you have a query, feedback, or partnership
        interest, we'd love to hear from you.
      </p>

      <div
        style={{
          maxWidth: "900px",
          margin: "3rem auto",
          padding: "2rem",
          background: "#ffffff",
          borderRadius: "20px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        }}
      >
        <div style={{ marginBottom: "2.5rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              justifyContent: "center",
              marginBottom: "1rem",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--primary-font)",
                fontWeight: "700",
                fontSize: "1.5rem",
                color: "#333",
                margin: 0,
              }}
            >
              Email :
            </h2>
            <a
              href="mailto:support@zutto.in"
              style={{
                fontFamily: "var(--primary-font)",
                fontSize: "1.5rem",
                color: "#333",
                textDecoration: "none",
              }}
            >
              support@zutto.in
            </a>
          </div>

          <div
            style={{
              marginBottom: "2rem",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--primary-font)",
                fontWeight: "700",
                fontSize: "1.5rem",
                color: "#333",
                marginBottom: "1rem",
              }}
            >
              Follow us on -
              <span
                style={{
                  fontWeight: "400",
                  marginLeft: "0.5rem",
                }}
              >
                Instagram, LinkedIn, Twitter
              </span>
            </h2>
          </div>
        </div>

        <Row>
          <Col md={6} className="mb-4 mb-md-0">
            <div
              style={{
                padding: "2rem",
                background: "#f8f9fa",
                borderRadius: "15px",
                height: "100%",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--primary-font)",
                  fontWeight: "700",
                  fontSize: "1.25rem",
                  color: "#333",
                  marginBottom: "1rem",
                }}
              >
                Registered Office :
              </h3>
              <p
                style={{
                  fontFamily: "var(--primary-font)",
                  fontSize: "1.1rem",
                  color: "#666",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                6/277, Nagiyampatti Post, Thamampatti,
                <br />
                Salem Rural - 636113
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div
              style={{
                padding: "2rem",
                background: "#f8f9fa",
                borderRadius: "15px",
                height: "100%",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--primary-font)",
                  fontWeight: "700",
                  fontSize: "1.25rem",
                  color: "#333",
                  marginBottom: "1rem",
                }}
              >
                Service Office :
              </h3>
              <p
                style={{
                  fontFamily: "var(--primary-font)",
                  fontSize: "1.1rem",
                  color: "#666",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                Pixel Perfect Software Solutions 5/260 sarvothaya colony,
                <br />
                Thoppampatti, Coimbatore-641017
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
      </Container>
    </>
  );
};

export default Contact;

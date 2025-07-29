import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../index.css";

const About: React.FC = () => (
  <>
    <Container
      className="pt-24 pb-5 px-4"
      style={{ paddingTop: "10rem", paddingBottom: "5rem", maxWidth: "1200px" }}
    >
      {/* The Story Behind ZUTTO */}
      <div className="text-center mb-5">
        <h1
          className="section-heading"
          style={{
            fontFamily: "var(--primary-font)",
            fontWeight: "700",
            fontSize: "2.5rem",
            lineHeight: "1.2",
            marginBottom: "2rem",
            position: "relative",
            display: "inline-block",
          }}
        >
          The Story Behind ZUTTO
        </h1>
      </div>

      {/* Main Content Section */}
      <Row className="align-items-center">
        {/* Left Image */}
        <Col md={5} className="mb-4 mb-md-0">
          <div className="text-center">
            <img
              src="/founder-image.png"
              alt="Varshan Kannan - Founder & CEO"
              style={{
                width: "100%",
                maxWidth: "350px",
                height: "auto",
                borderRadius: "1rem",
                boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
              }}
            />
          </div>
        </Col>

        {/* Right Content */}
        <Col md={7}>
          <div
            className="founder-story"
            style={{
              borderLeft: "4px solid #dbc8ad",
              paddingLeft: "2rem",
            }}
          >
            <p
              className="mb-4"
              style={{ fontSize: "1.1rem", lineHeight: "1.8" }}
            >
              ZUTTO was inspired by a moment my father experienced at the
              airport that exposed how people are facing unclear details
              regarding lounge access systems really are.
            </p>

            <p
              className="mb-4"
              style={{ fontSize: "1.1rem", lineHeight: "1.8" }}
            >
              That moment sparked a conversation that became the foundation of
              this platform. His experience gave rise to our mission, to bring
              clarity and comfort to every traveler.
            </p>

            <p
              className="mb-4"
              style={{ fontSize: "1.1rem", lineHeight: "1.8" }}
            >
              Though he's no longer with us, his story lives in ZUTTO. Every
              feature we build carries forward his vision and this company
              stands as a tribute to the journey he began.
            </p>

            <p
              className="mb-4"
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                fontStyle: "italic",
              }}
            >
              It's more than a business...
              <br />
              It's a continuation of his story...
            </p>

            <div className="founder-signature mt-5">
              <p
                className="mb-2"
                style={{ fontSize: "1.2rem", fontWeight: "600" }}
              >
                Varshan Kannan
              </p>
              <p className="mb-4" style={{ color: "#666" }}>
                Founder & CEO
              </p>

              <div className="social-links">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-3"
                >
                  <img
                    src="/linkedin-icon.svg"
                    alt="LinkedIn"
                    style={{ width: "24px", height: "24px" }}
                  />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/instagram-icon.svg"
                    alt="Instagram"
                    style={{ width: "24px", height: "24px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      {/* The Inspiration Behind ZUTTO */}
      <div
        className="text-center mt-5 pt-5"
        style={{ maxWidth: "1400px", margin: "0 auto" }}
      >
        <h1
          className="section-heading"
          style={{
            fontFamily: "var(--primary-font)",
            fontWeight: "700",
            fontSize: "2.5rem",
            lineHeight: "1.2",
            marginBottom: "2rem",
            position: "relative",
            display: "inline-block",
          }}
        >
          The Inspiration Behind ZUTTO
        </h1>
        <h2
          style={{
            fontFamily: "var(--primary-font)",
            fontWeight: "600",
            fontSize: "1.75rem",
            marginBottom: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
          }}
        >
          <span role="img" aria-label="dove">
            🕊
          </span>{" "}
          CARRYING FORWARD HIS LEGACY
        </h2>
      </div>

      <Row className="justify-content-center mt-4">
        <Col md={6} className="text-center">
          <img
            src="/profile.png"
            alt="Kannan Natesan"
            style={{
              width: "100%",
              maxWidth: "400px",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
              marginBottom: "2rem",
            }}
          />
          <h3
            style={{
              fontFamily: "var(--primary-font)",
              fontWeight: "700",
              fontSize: "1.75rem",
              marginBottom: "0.5rem",
            }}
          >
            Kannan Natesan
          </h3>
          <p
            style={{
              fontFamily: "var(--primary-font)",
              fontSize: "1.25rem",
              color: "#666",
              marginBottom: "3rem",
            }}
          >
            1973 - 2025
          </p>
        </Col>
      </Row>

      {/* Core Values Section */}
      <div className="text-center mb-5">
        <h1
          className="section-heading"
          style={{
            fontFamily: "var(--primary-font)",
            fontWeight: "800",
            fontSize: "3rem",
            lineHeight: "1.2",
            marginBottom: "4rem",
            position: "relative",
            display: "inline-block",
            paddingBottom: "0.5rem",
          }}
        >
          Our Core Values
        </h1>

        <Row
          className="g-4 justify-content-between"
          style={{ maxWidth: "1400px", margin: "0 auto" }}
        >
          {/* Clarity Card */}
          <Col lg={2} md={4} style={{ minWidth: "240px", flex: "1" }}>
            <div
              style={{
                background: "#ffffff",
                borderRadius: "20px",
                padding: "2rem 1.5rem",
                height: "100%",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                transition: "transform 0.3s ease",
                cursor: "pointer",
                borderTop: "3px solid #dbc8ad",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--primary-font)",
                  fontWeight: "700",
                  fontSize: "1.35rem",
                  marginBottom: "1.25rem",
                  color: "#333",
                }}
              >
                Clarity
              </h3>
              <p
                style={{
                  fontFamily: "var(--primary-font)",
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  color: "#666",
                  fontWeight: "400",
                }}
              >
                We simplify complex information, giving travellers clear,
                instant insights they can trust.
              </p>
            </div>
          </Col>

          {/* Convenience Card */}
          <Col lg={2} md={4} style={{ minWidth: "240px", flex: "1" }}>
            <div
              style={{
                background: "#ffffff",
                borderRadius: "20px",
                padding: "2rem 1.5rem",
                height: "100%",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                transition: "transform 0.3s ease",
                cursor: "pointer",
                borderTop: "3px solid #dbc8ad",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--primary-font)",
                  fontWeight: "700",
                  fontSize: "1.35rem",
                  marginBottom: "1.25rem",
                  color: "#333",
                }}
              >
                Convenience
              </h3>
              <p
                style={{
                  fontFamily: "var(--primary-font)",
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  color: "#666",
                  fontWeight: "400",
                }}
              >
                From app to airport, everything we build is designed to make the
                travel experience smoother and stress-free.
              </p>
            </div>
          </Col>

          {/* Trust Card */}
          <Col lg={2} md={4} style={{ minWidth: "240px", flex: "1" }}>
            <div
              style={{
                background: "#ffffff",
                borderRadius: "20px",
                padding: "2rem 1.5rem",
                height: "100%",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                transition: "transform 0.3s ease",
                cursor: "pointer",
                borderTop: "3px solid #dbc8ad",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--primary-font)",
                  fontWeight: "700",
                  fontSize: "1.35rem",
                  marginBottom: "1.25rem",
                  color: "#333",
                }}
              >
                Trust
              </h3>
              <p
                style={{
                  fontFamily: "var(--primary-font)",
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  color: "#666",
                }}
              >
                We value transparency and accuracy, ensuring our users always
                receive reliable, up to date information.
              </p>
            </div>
          </Col>

          {/* Empowerment Card */}
          <Col lg={2} md={4} style={{ minWidth: "240px", flex: "1" }}>
            <div
              style={{
                background: "#ffffff",
                borderRadius: "20px",
                padding: "2rem 1.5rem",
                height: "100%",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                transition: "transform 0.3s ease",
                cursor: "pointer",
                borderTop: "3px solid #dbc8ad",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--primary-font)",
                  fontWeight: "700",
                  fontSize: "1.35rem",
                  marginBottom: "1.25rem",
                  color: "#333",
                }}
              >
                Empowerment
              </h3>
              <p
                style={{
                  fontFamily: "var(--primary-font)",
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  color: "#666",
                }}
              >
                We equip travellers with the tools they need to make informed
                decisions and enjoy premium benefits with confidence.
              </p>
            </div>
          </Col>

          {/* Innovation Card */}
          <Col lg={2} md={4} style={{ minWidth: "240px", flex: "1" }}>
            <div
              style={{
                background: "#ffffff",
                borderRadius: "20px",
                padding: "2rem 1.5rem",
                height: "100%",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                transition: "transform 0.3s ease",
                cursor: "pointer",
                borderTop: "3px solid #dbc8ad",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--primary-font)",
                  fontWeight: "700",
                  fontSize: "1.35rem",
                  marginBottom: "1.25rem",
                  color: "#333",
                }}
              >
                Innovation
              </h3>
              <p
                style={{
                  fontFamily: "var(--primary-font)",
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  color: "#666",
                }}
              >
                We're constantly evolving, bringing smarter features, wider
                integrations, and a better way to travel.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  </>
);

export default About;

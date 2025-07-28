import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaInfoCircle,
  FaCreditCard,
  FaSearch,
  FaLightbulb,
  FaCrown,
  FaPlus,
  FaBriefcase,
  FaUser,
  FaGlobe,
  FaQuestionCircle,
  FaUsers,
} from "react-icons/fa";
import "../index.css";

const Services: React.FC = () => (
  <>
    {/* Hero Section */}
    <section
      style={{
        minHeight: "0px",
        background: "var(--apple-bg)",
        paddingTop: "2rem",
        paddingBottom: "3rem",
      }}
      className="position-relative overflow-hidden d-flex align-items-center justify-content-center"
    >
      <Container style={{ maxWidth: "1200px" }} className="px-4">
        <Row></Row>
      </Container>
    </section>

    {/* Our Services Section */}
    <section
      style={{
        padding: "5rem 0",
        background: "#f8f9fa",
      }}
    >
      <Container style={{ maxWidth: "1200px" }} className="px-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2
            className="section-heading"
            style={{
              fontFamily: "var(--primary-font)",
              fontWeight: "700",
              fontSize: "2.5rem",
              color: "#333",
              marginBottom: "1rem",
              position: "relative",
              display: "inline-block",
            }}
          >
            Our Services
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
            ZUTTO provides comprehensive solutions to enhance your airport
            experience with premium lounge access.
          </p>
        </div>

        {/* Services Grid */}
        <Row className="g-4 justify-content-center">
          {/* Lounge Access Information */}
          <Col lg={4} md={6} className="d-flex justify-content-center">
            <div
              style={{
                background: "#fff",
                borderRadius: "1rem",
                padding: "2.5rem 2rem",
                textAlign: "left",
                height: "100%",
                minHeight: "300px",
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
                  marginBottom: "1.5rem",
                }}
              >
                <FaInfoCircle style={{ fontSize: "1.5rem", color: "#fff" }} />
              </div>
              <h3
                style={{
                  fontFamily: "var(--primary-font)",
                  fontWeight: "600",
                  fontSize: "1.25rem",
                  color: "#333",
                  marginBottom: "1rem",
                  lineHeight: "1.3",
                }}
              >
                Lounge Access Information
              </h3>
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
                Get instant, accurate information about lounge access
                eligibility based on your travel details and payment cards.
              </p>
            </div>
          </Col>

          {/* Bank Card & Access Integration */}
          <Col lg={4} md={6} className="d-flex justify-content-center">
            <div
              style={{
                background: "#fff",
                borderRadius: "1rem",
                padding: "2.5rem 2rem",
                textAlign: "left",
                height: "100%",
                minHeight: "300px",
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
                  marginBottom: "1.5rem",
                }}
              >
                <FaCreditCard style={{ fontSize: "1.5rem", color: "#fff" }} />
              </div>
              <h3
                style={{
                  fontFamily: "var(--primary-font)",
                  fontWeight: "600",
                  fontSize: "1.25rem",
                  color: "#333",
                  marginBottom: "1rem",
                  lineHeight: "1.3",
                }}
              >
                Bank Card & Access Integration
              </h3>
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
                Seamlessly integrate your bank cards to verify and access lounge
                benefits you're already entitled to.
              </p>
            </div>
          </Col>

          {/* Airport Lounge Search & Compatibility */}
          <Col lg={4} md={6} className="d-flex justify-content-center">
            <div
              style={{
                background: "#fff",
                borderRadius: "1rem",
                padding: "2.5rem 2rem",
                textAlign: "left",
                height: "100%",
                minHeight: "300px",
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
                  marginBottom: "1.5rem",
                }}
              >
                <FaSearch style={{ fontSize: "1.5rem", color: "#fff" }} />
              </div>
              <h3
                style={{
                  fontFamily: "var(--primary-font)",
                  fontWeight: "600",
                  fontSize: "1.25rem",
                  color: "#333",
                  marginBottom: "1rem",
                  lineHeight: "1.3",
                }}
              >
                Airport Lounge Search & Compatibility
              </h3>
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
                Find lounges at any airport in India and check your eligibility
                with our comprehensive database.
              </p>
            </div>
          </Col>

          {/* Travel Tips & Updates */}
          <Col lg={4} md={6} className="d-flex justify-content-center">
            <div
              style={{
                background: "#fff",
                borderRadius: "1rem",
                padding: "2.5rem 2rem",
                textAlign: "left",
                height: "100%",
                minHeight: "300px",
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
                  marginBottom: "1.5rem",
                }}
              >
                <FaLightbulb style={{ fontSize: "1.5rem", color: "#fff" }} />
              </div>
              <h3
                style={{
                  fontFamily: "var(--primary-font)",
                  fontWeight: "600",
                  fontSize: "1.25rem",
                  color: "#333",
                  marginBottom: "1rem",
                  lineHeight: "1.3",
                }}
              >
                Travel Tips & Updates
              </h3>
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
                Stay informed with the latest travel tips, airport updates, and
                lounge information for a smoother journey.
              </p>
            </div>
          </Col>

          {/* Premium Travel Offers */}
          <Col lg={4} md={6} className="d-flex justify-content-center">
            <div
              style={{
                background: "#fff",
                borderRadius: "1rem",
                padding: "2.5rem 2rem",
                textAlign: "left",
                height: "100%",
                minHeight: "300px",
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
                  marginBottom: "1.5rem",
                }}
              >
                <FaCrown style={{ fontSize: "1.5rem", color: "#fff" }} />
              </div>
              <h3
                style={{
                  fontFamily: "var(--primary-font)",
                  fontWeight: "600",
                  fontSize: "1.25rem",
                  color: "#333",
                  marginBottom: "1rem",
                  lineHeight: "1.3",
                }}
              >
                Premium Travel Offers
              </h3>
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
                Coming Soon: Exclusive deals and offers for premium travel
                experiences beyond the lounge.
              </p>
            </div>
          </Col>

          {/* Other Features Coming Soon */}
          <Col lg={4} md={6} className="d-flex justify-content-center">
            <div
              style={{
                background: "#fff",
                borderRadius: "1rem",
                padding: "2.5rem 2rem",
                textAlign: "center",
                height: "100%",
                minHeight: "300px",
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
                  marginBottom: "1.5rem",
                  margin: "0 auto 1.5rem auto",
                }}
              >
                <FaPlus style={{ fontSize: "1.5rem", color: "#fff" }} />
              </div>
              <h3
                style={{
                  fontFamily: "var(--primary-font)",
                  fontWeight: "600",
                  fontSize: "1.25rem",
                  color: "#333",
                  marginBottom: "1rem",
                  lineHeight: "1.3",
                }}
              >
                Other Features Coming Soon
              </h3>
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
                We're constantly developing new features to enhance your travel
                experience. Stay tuned!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    {/* Who We Serve Section */}
    <section
      style={{
        padding: "5rem 0",
        background: "var(--apple-bg)",
      }}
    >
      <Container style={{ maxWidth: "1200px" }} className="px-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2
            className="section-heading"
            style={{
              fontFamily: "var(--primary-font)",
              fontWeight: "700",
              fontSize: "2.5rem",
              color: "#333",
              marginBottom: "1rem",
              position: "relative",
              display: "inline-block",
            }}
          >
            Who We Serve
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
            ZUTTO is designed for all types of travelers seeking clarity and
            convenience in their airport experience.
          </p>
        </div>

        {/* Who We Serve Grid */}
        <Row className="g-4 justify-content-center">
          {/* Frequent Flyers */}
          <Col lg={4} md={6} className="d-flex justify-content-center">
            <div
              style={{
                background: "#fff",
                borderRadius: "1rem",
                padding: "2.5rem 2rem",
                textAlign: "left",
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
                  marginBottom: "1.5rem",
                }}
              >
                <FaBriefcase style={{ fontSize: "1.5rem", color: "#fff" }} />
              </div>
              <h3
                style={{
                  fontFamily: "var(--primary-font)",
                  fontWeight: "600",
                  fontSize: "1.25rem",
                  color: "#333",
                  marginBottom: "1rem",
                  lineHeight: "1.3",
                }}
              >
                Frequent Flyers
              </h3>
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
                Business travelers, professionals, and consultants who are
                always on the move and need reliable lounge access information.
              </p>
            </div>
          </Col>

          {/* Young Travellers */}
          <Col lg={4} md={6} className="d-flex justify-content-center">
            <div
              style={{
                background: "#fff",
                borderRadius: "1rem",
                padding: "2.5rem 2rem",
                textAlign: "left",
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
                  marginBottom: "1.5rem",
                }}
              >
                <FaUser style={{ fontSize: "1.5rem", color: "#fff" }} />
              </div>
              <h3
                style={{
                  fontFamily: "var(--primary-font)",
                  fontWeight: "600",
                  fontSize: "1.25rem",
                  color: "#333",
                  marginBottom: "1rem",
                  lineHeight: "1.3",
                }}
              >
                Young Travellers
              </h3>
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
                Students, solo travelers, and young professionals looking to
                maximize their travel experience with premium amenities.
              </p>
            </div>
          </Col>

          {/* Premium Cardholders */}
          <Col lg={4} md={6} className="d-flex justify-content-center">
            <div
              style={{
                background: "#fff",
                borderRadius: "1rem",
                padding: "2.5rem 2rem",
                textAlign: "left",
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
                  marginBottom: "1.5rem",
                }}
              >
                <FaCreditCard style={{ fontSize: "1.5rem", color: "#fff" }} />
              </div>
              <h3
                style={{
                  fontFamily: "var(--primary-font)",
                  fontWeight: "600",
                  fontSize: "1.25rem",
                  color: "#333",
                  marginBottom: "1rem",
                  lineHeight: "1.3",
                }}
              >
                Premium Cardholders
              </h3>
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
                Travelers with lounge-access credit/debit cards who want to
                understand and utilize their benefits fully.
              </p>
            </div>
          </Col>

          {/* Travel Enthusiasts */}
          <Col lg={4} md={6} className="d-flex justify-content-center">
            <div
              style={{
                background: "#fff",
                borderRadius: "1rem",
                padding: "2.5rem 2rem",
                textAlign: "left",
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
                  marginBottom: "1.5rem",
                }}
              >
                <FaGlobe style={{ fontSize: "1.5rem", color: "#fff" }} />
              </div>
              <h3
                style={{
                  fontFamily: "var(--primary-font)",
                  fontWeight: "600",
                  fontSize: "1.25rem",
                  color: "#333",
                  marginBottom: "1rem",
                  lineHeight: "1.3",
                }}
              >
                Travel Enthusiasts
              </h3>
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
                Digital nomads and travel lovers who prioritize comfort and
                convenience during their journeys.
              </p>
            </div>
          </Col>

          {/* First-time Flyers */}
          <Col lg={4} md={6} className="d-flex justify-content-center">
            <div
              style={{
                background: "#fff",
                borderRadius: "1rem",
                padding: "2.5rem 2rem",
                textAlign: "left",
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
                  marginBottom: "1.5rem",
                }}
              >
                <FaQuestionCircle
                  style={{ fontSize: "1.5rem", color: "#fff" }}
                />
              </div>
              <h3
                style={{
                  fontFamily: "var(--primary-font)",
                  fontWeight: "600",
                  fontSize: "1.25rem",
                  color: "#333",
                  marginBottom: "1rem",
                  lineHeight: "1.3",
                }}
              >
                First-time Flyers
              </h3>
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
                Digital nomads and travel lovers who prioritize comfort and
                convenience during their journeys.
              </p>
            </div>
          </Col>

          {/* Families */}
          <Col lg={4} md={6} className="d-flex justify-content-center">
            <div
              style={{
                background: "#fff",
                borderRadius: "1rem",
                padding: "2.5rem 2rem",
                textAlign: "left",
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
                  marginBottom: "1.5rem",
                }}
              >
                <FaUsers style={{ fontSize: "1.5rem", color: "#fff" }} />
              </div>
              <h3
                style={{
                  fontFamily: "var(--primary-font)",
                  fontWeight: "600",
                  fontSize: "1.25rem",
                  color: "#333",
                  marginBottom: "1rem",
                  lineHeight: "1.3",
                }}
              >
                Families
              </h3>
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
                Families traveling together who want to ensure a comfortable and
                relaxing airport experience for everyone.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </>
);

export default Services;

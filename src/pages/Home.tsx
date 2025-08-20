import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  FaBullseye,
  FaEye,
  FaCalendarAlt,
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
import SEO from "../components/SEO";
import WaitlistForm from "../components/WaitlistForm";

// Data for offer cards
const offers = [
  {
    title: "Check Lounge Access",
    text: "Instantly verify if your card grants lounge entry.",
    emoji: " ✈️",
  },
  {
    title: "Know Your Benefits",
    text: "Unlock your card’s full travel perks.",
    emoji: "🎁",
  },
  {
    title: "Hassle-Free Experience",
    text: "Travel with clarity, convenience, and confidence.",
    emoji: "✨",
  },
];

const Home: React.FC = () => {
  const ScreenshotSection: React.FC = () => (
    <section
      style={{ padding: "0px 0", background: "var(--apple-bg)" }}
      className="pt-24"
    >
      {/* Screenshot section is hidden for now */}
    </section>
  );

  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "ZUTTO Airport Lounge Access",
    "description": "Comprehensive solution for accessing lounge eligibility at domestic and international airports in India",
    "provider": {
      "@type": "Organization",
      "name": "ZUTTO"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "serviceType": "Airport Lounge Access Services",
    "offers": [
      {
        "@type": "Offer",
        "name": "Lounge Access Information",
        "description": "Get instant, accurate information about lounge access eligibility"
      },
      {
        "@type": "Offer", 
        "name": "Bank Card Integration",
        "description": "Seamlessly integrate your bank cards to verify lounge benefits"
      },
      {
        "@type": "Offer",
        "name": "Airport Lounge Search",
        "description": "Find lounges at any airport in India and check eligibility"
      }
    ]
  };

  return (
    <>
      <SEO
        title="ZUTTO - Your Gateway to Premium Airport Experiences | Airport Lounge Access India"
        description="ZUTTO is a comprehensive solution for accessing lounge eligibility at domestic and international airports in India. Check lounge access, verify card benefits, and enjoy hassle-free airport experiences."
        keywords="airport lounge India, lounge access, credit card benefits, premium travel India, ZUTTO app, airport lounge eligibility, travel companion India"
        structuredData={homeStructuredData}
      />
      {/* Updated Hero Section */}
      <section
        style={{
          minHeight: "700px",
          background: "var(--apple-bg)",
          paddingTop: "6rem",
        }}
        className="position-relative overflow-hidden d-flex align-items-center justify-content-center pt-24"
      >
        <Container style={{ maxWidth: "1200px" }} className="px-4">
          <Row className="align-items-center">
            {/* Left Content */}
            <Col md={6} className="text-left">
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
                YOUR GATEWAY TO{" "}
                <span style={{ color: "#dbc8ad" }}>PREMIUM</span> AIRPORT
                EXPERIENCES
              </h1>
              <p
                className="lead mb-4"
                style={{
                  maxWidth: 500,
                  fontFamily: "var(--primary-font)",
                  fontWeight: "400",
                  fontSize: "1.125rem",
                  lineHeight: "1.6",
                }}
              >
                ZUTTO is a comprehensive solution for accessing lounge
                eligibility at domestic and international airports in India,
                eliminating confusion.
              </p>

              {/* Store Buttons */}
              <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/appstore.png"
                    alt="Download on the App Store"
                    style={{ height: 50, width: "auto", borderRadius: 7 }}
                  />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/playstore.png"
                    alt="Download on Google Play"
                    style={{ height: 50, width: "auto", borderRadius: 7 }}
                  />
                </a>
              </div>

              {/* Waitlist Section */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: "1rem",
                  padding: "2rem",
                  marginTop: "3rem",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  maxWidth: "500px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--primary-font)",
                      fontWeight: "500",
                      fontSize: "0.9rem",
                      color: "#dbc8ad",
                      backgroundColor: "#f8f9fa",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "1rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Launching Soon
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--primary-font)",
                    fontWeight: "600",
                    fontSize: "1.5rem",
                    color: "#333",
                    marginBottom: "0.5rem",
                    textAlign: "center",
                  }}
                >
                  Join the Waitlist
                </h3>
                <p
                  style={{
                    fontFamily: "var(--primary-font)",
                    fontWeight: "400",
                    fontSize: "1rem",
                    lineHeight: "1.5",
                    color: "#666",
                    marginBottom: "1.5rem",
                    textAlign: "center",
                  }}
                >
                  Be the first to experience premium airport lounge access with ZUTTO.
                </p>
                
                <WaitlistForm />
              </div>
            </Col>

            {/* Right Video */}
            <Col
              md={6}
              className="d-flex justify-content-center justify-content-md-end align-items-center mt-5 mt-md-0"
            >
              <div
                style={{
                  width: "100%",
                  maxWidth: 320,
                  borderRadius: 24,
                  overflow: "hidden",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                  position: "relative",
                }}
              >
                <video
                  src="/Zutto Demo.mp4"
                  title="ZUTTO App Demo"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    width: "100%",
                    height: "auto",
                    border: "none",
                    borderRadius: 24,
                    display: "block",
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission, Vision, Established Section */}
      <section
        style={{
          padding: "5rem 0",
          background: "var(--apple-bg)",
        }}
      >
        <Container style={{ maxWidth: "1200px" }} className="px-4">
          <Row className="g-4 justify-content-center">
            {/* Our Mission */}
            <Col md={4} className="d-flex justify-content-center">
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
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 30px rgba(0,0,0,0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(0,0,0,0.08)";
                }}
              >
                <FaBullseye
                  style={{
                    fontSize: "3rem",
                    color: "#333",
                    marginBottom: "1.5rem",
                  }}
                />
                <h3
                  style={{
                    fontFamily: "var(--primary-font)",
                    fontWeight: "600",
                    fontSize: "1.5rem",
                    color: "#333",
                    marginBottom: "1rem",
                  }}
                >
                  Our Mission
                </h3>
                <p
                  style={{
                    fontFamily: "var(--primary-font)",
                    fontWeight: "400",
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    color: "#666",
                    margin: "0",
                  }}
                >
                  ZUTTO aims to simplify lounge access for travelers, offering
                  clarity and convenience for a premium experience during their
                  journeys.
                </p>
              </div>
            </Col>

            {/* Our Vision */}
            <Col md={4} className="d-flex justify-content-center">
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
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 30px rgba(0,0,0,0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(0,0,0,0.08)";
                }}
              >
                <FaEye
                  style={{
                    fontSize: "3rem",
                    color: "#333",
                    marginBottom: "1.5rem",
                  }}
                />
                <h3
                  style={{
                    fontFamily: "var(--primary-font)",
                    fontWeight: "600",
                    fontSize: "1.5rem",
                    color: "#333",
                    marginBottom: "1rem",
                  }}
                >
                  Our Vision
                </h3>
                <p
                  style={{
                    fontFamily: "var(--primary-font)",
                    fontWeight: "400",
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    color: "#666",
                    margin: "0",
                  }}
                >
                  ZUTTO aims to transform air travel by providing accessible,
                  comfortable, and clear airport lounges, ensuring every journey
                  starts with peace of mind and every traveler enjoys deserved
                  luxury.
                </p>
              </div>
            </Col>

            {/* Established */}
            <Col md={4} className="d-flex justify-content-center">
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
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 30px rgba(0,0,0,0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(0,0,0,0.08)";
                }}
              >
                <FaCalendarAlt
                  style={{
                    fontSize: "3rem",
                    color: "#333",
                    marginBottom: "1.5rem",
                  }}
                />
                <h3
                  style={{
                    fontFamily: "var(--primary-font)",
                    fontWeight: "600",
                    fontSize: "1.5rem",
                    color: "#333",
                    marginBottom: "1rem",
                  }}
                >
                  Established
                </h3>
                <p
                  style={{
                    fontFamily: "var(--primary-font)",
                    fontWeight: "400",
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    color: "#666",
                    margin: "0",
                  }}
                >
                  Founded in 2025, ZUTTO is set to become the premium travel app
                  across India soon.
                </p>
              </div>
            </Col>
          </Row>
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
                  e.currentTarget.style.boxShadow =
                    "0 8px 30px rgba(0,0,0,0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(0,0,0,0.08)";
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
                  e.currentTarget.style.boxShadow =
                    "0 8px 30px rgba(0,0,0,0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(0,0,0,0.08)";
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
                  Seamlessly integrate your bank cards to verify and access
                  lounge benefits you're already entitled to.
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
                  e.currentTarget.style.boxShadow =
                    "0 8px 30px rgba(0,0,0,0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(0,0,0,0.08)";
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
                  Find lounges at any airport in India and check your
                  eligibility with our comprehensive database.
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
                  e.currentTarget.style.boxShadow =
                    "0 8px 30px rgba(0,0,0,0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(0,0,0,0.08)";
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
                  Stay informed with the latest travel tips, airport updates,
                  and lounge information for a smoother journey.
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
                  e.currentTarget.style.boxShadow =
                    "0 8px 30px rgba(0,0,0,0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(0,0,0,0.08)";
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
                  e.currentTarget.style.boxShadow =
                    "0 8px 30px rgba(0,0,0,0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(0,0,0,0.08)";
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
                  We're constantly developing new features to enhance your
                  travel experience. Stay tuned!
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
                  e.currentTarget.style.boxShadow =
                    "0 8px 30px rgba(0,0,0,0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(0,0,0,0.08)";
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
                  always on the move and need reliable lounge access
                  information.
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
                  e.currentTarget.style.boxShadow =
                    "0 8px 30px rgba(0,0,0,0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(0,0,0,0.08)";
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
                  e.currentTarget.style.boxShadow =
                    "0 8px 30px rgba(0,0,0,0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(0,0,0,0.08)";
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
                  e.currentTarget.style.boxShadow =
                    "0 8px 30px rgba(0,0,0,0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(0,0,0,0.08)";
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
                  e.currentTarget.style.boxShadow =
                    "0 8px 30px rgba(0,0,0,0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(0,0,0,0.08)";
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
                  e.currentTarget.style.boxShadow =
                    "0 8px 30px rgba(0,0,0,0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(0,0,0,0.08)";
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
                  Families traveling together who want to ensure a comfortable
                  and relaxing airport experience for everyone.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;

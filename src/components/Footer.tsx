import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "../index.css";

export function CustomFooter() {
  return (
    <footer
      style={{
        backgroundColor: "#f5f5f7",
        padding: "0 0 30px 0",
        color: "#6e6e73",
        fontSize: "12px",
        marginTop: "50px",
      }}
    >
      <Container style={{ maxWidth: "980px" }}>
        {/* Main Footer Content */}
        <Row className="py-5">
          {/* Links Column */}
          <Col md={3}>
            <h3
              style={{
                fontSize: "12px",
                fontWeight: "600",
                marginBottom: "1.2em",
                letterSpacing: "0.5px",
              }}
            >
              Links
            </h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {["Home", "About Us", "Travel Hub", "Contact Us"].map((item) => (
                <li key={item} style={{ marginBottom: "0.8em" }}>
                  <a
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    style={{
                      color: "#424245",
                      textDecoration: "none",
                      fontSize: "12px",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.textDecoration = "underline")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.textDecoration = "none")
                    }
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* About Zutto Column */}
          <Col md={3}>
            <h3
              style={{
                fontSize: "12px",
                fontWeight: "600",
                marginBottom: "1.2em",
                letterSpacing: "0.5px",
              }}
            >
              About ZUTTO
            </h3>
            <p style={{ fontSize: "12px", lineHeight: "1.4" }}>
              Zutto is your personalized travel companion, offering curated
              experiences and hassle-free bookings to make every trip memorable.
            </p>
          </Col>

          {/* Contact Column */}
          <Col md={3}>
            <h3
              style={{
                fontSize: "12px",
                fontWeight: "600",
                marginBottom: "1.2em",
                letterSpacing: "0.5px",
              }}
            >
              Contact
            </h3>
            <p style={{ fontSize: "12px", marginBottom: "0.8em" }}>
              Coimbatore, India
            </p>
            <a
              href="mailto:support@zutto.in"
              style={{
                color: "#424245",
                textDecoration: "none",
                fontSize: "12px",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.textDecoration = "underline")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.textDecoration = "none")
              }
            >
              support@zutto.in
            </a>
          </Col>

          {/* Social Media Column */}
          <Col md={3}>
            <h3
              style={{
                fontSize: "12px",
                fontWeight: "600",
                marginBottom: "1.2em",
                letterSpacing: "0.5px",
              }}
            >
              Follow Us
            </h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[
                { icon: <FaInstagram />, name: "Instagram" },
                { icon: <FaLinkedin />, name: "LinkedIn" },
                { icon: <FaTwitter />, name: "Twitter" },
              ].map((social) => (
                <li key={social.name} style={{ marginBottom: "0.8em" }}>
                  <a
                    href="#"
                    style={{
                      color: "#424245",
                      textDecoration: "none",
                      fontSize: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.textDecoration = "underline")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.textDecoration = "none")
                    }
                  >
                    {social.icon} {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <div
          style={{
            borderTop: "1px solid #d2d2d7",
            paddingTop: "20px",
            fontSize: "12px",
          }}
        >
          <Row className="align-items-center">
            <Col md={6}>
              <p style={{ margin: 0 }}>
                Copyright © {new Date().getFullYear()} ZUTTO. All rights
                reserved.
              </p>
            </Col>
            <Col md={6}>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "flex-end",
                }}
              >
                {[
                  { name: "Privacy Policy", path: "/privacy" },
                  { name: "Terms of Service", path: "/terms" },
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.path}
                    style={{
                      color: "#424245",
                      textDecoration: "none",
                      fontSize: "12px",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.textDecoration = "underline")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.textDecoration = "none")
                    }
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="https://pixelperfect.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#424245",
                    textDecoration: "none",
                    fontSize: "12px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.textDecoration = "underline")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.textDecoration = "none")
                  }
                >
                  Designed By Pixel Perfect
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
}

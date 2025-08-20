import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../index.css";

export function CustomFooter() {
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        backgroundColor: "#f5f5f7",
        padding: "40px 0",
        color: "#6e6e73",
        fontSize: "12px",
        marginTop: "50px",
        width: "100%",
      }}
    >
      <Container style={{ maxWidth: "1200px", padding: "0 24px" }}>
        {/* Main Footer Content */}
        <Row className="py-5">
          {/* About Zutto Column */}
          <Col lg={3} md={6} sm={6} className="mb-4 mb-lg-0">
            <h3
              style={{
                fontSize: "14px",
                fontWeight: "700",
                marginBottom: "1.2em",
                letterSpacing: "0.5px",
              }}
            >
              About ZUTTO
            </h3>
            <p style={{ fontSize: "12px", lineHeight: "1.4" }}>
              Access airport lounge eligibility across India—domestic and
              international—with zero confusion. Travel smart, skip the
              guesswork, and elevate your journey with ZUTTO.
            </p>
          </Col>

          {/* Links Column */}
          <Col lg={3} md={6} sm={6} className="mb-4 mb-lg-0">
            <h3
              style={{
                fontSize: "14px",
                fontWeight: "700",
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
                    href="#"
                    onClick={() =>
                      handleNavClick(
                        `/${item.toLowerCase().replace(/\s+/g, "-")}`,
                      )
                    }
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

          {/* Contact Column */}
          <Col lg={3} md={6} sm={6} className="mb-4 mb-lg-0">
            <h3
              style={{
                fontSize: "14px",
                fontWeight: "700",
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
          <Col lg={3} md={6} sm={6} className="mb-4 mb-lg-0">
            <h3
              style={{
                fontSize: "14px",
                fontWeight: "700",
                marginBottom: "1.2em",
                letterSpacing: "0.5px",
              }}
            >
              Follow Us
            </h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[
                { icon: <FaInstagram />, name: "ZUTTO", url: "https://www.instagram.com/zutto_in" },
                { icon: <FaLinkedin />, name: "LinkedIn", url: "https://www.linkedin.com/in/varshanrk" },
                { icon: <FaInstagram />, name: "Varshan", url: "https://www.instagram.com/varshan_kannan" },
              ].map((social) => (
                <li key={social.name} style={{ marginBottom: "0.8em" }}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
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
            <Col lg={6} md={12}>
              <p style={{ margin: 0 }}>
                Copyright © {new Date().getFullYear()} ZUTTO. All rights
                reserved.
              </p>
            </Col>
            <Col lg={6} md={12} className="mb-3 mb-lg-0">
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
                    href="#"
                    onClick={() => handleNavClick(link.path)}
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

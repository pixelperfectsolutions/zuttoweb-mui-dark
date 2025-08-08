import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../index.css";
import SEO from "../components/SEO";

const AccountDelete: React.FC = () => {
  const accountDeleteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Delete Account - ZUTTO",
    "description": "Request account deletion for your ZUTTO app account. Contact support for account removal from App Store and Play Store apps.",
    "mainEntity": {
      "@type": "Organization",
      "name": "ZUTTO",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "support@zutto.in",
        "areaServed": "IN",
        "availableLanguage": "English"
      }
    }
  };

  return (
    <>
      <SEO
        title="Delete Account - ZUTTO | Remove Your Account"
        description="Request account deletion for your ZUTTO app account. Contact our support team to permanently remove your account and data."
        keywords="delete account, remove account, ZUTTO account deletion, app account removal, data deletion"
        url="https://zutto.in/account-delete"
        structuredData={accountDeleteStructuredData}
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
            Delete Account
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
            To delete your ZUTTO account and associated data, please contact our support team.
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
                  marginBottom: "2rem",
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
                  Contact Support:
                </h2>
                <a
                  href="mailto:support@zutto.in"
                  style={{
                    fontFamily: "var(--primary-font)",
                    fontSize: "1.5rem",
                    color: "#007aff",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = "#0056cc"}
                  onMouseOut={(e) => e.currentTarget.style.color = "#007aff"}
                >
                  support@zutto.in
                </a>
              </div>

              <div
                style={{
                  background: "#f8f9fa",
                  borderRadius: "15px",
                  padding: "2rem",
                  marginBottom: "2rem",
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
                  Account Deletion Process
                </h3>
                <ul
                  style={{
                    fontFamily: "var(--primary-font)",
                    fontSize: "1.1rem",
                    color: "#666",
                    lineHeight: "1.8",
                    textAlign: "left",
                    paddingLeft: "1.5rem",
                  }}
                >
                  <li>Send an email to support@zutto.in with the subject "Account Deletion Request"</li>
                  <li>Include your registered email address and phone number</li>
                  <li>Specify if you're using the iOS App Store or Google Play Store version</li>
                  <li>Our team will process your request within 7 business days</li>
                  <li>You'll receive a confirmation email once your account is deleted</li>
                </ul>
              </div>

              <Row>
                <Col md={6} className="mb-4 mb-md-0">
                  <div
                    style={{
                      padding: "2rem",
                      background: "#fff3cd",
                      borderRadius: "15px",
                      height: "100%",
                      border: "1px solid #ffeaa7",
                    }}
                  >
                    <h4
                      style={{
                        fontFamily: "var(--primary-font)",
                        fontWeight: "700",
                        fontSize: "1.1rem",
                        color: "#856404",
                        marginBottom: "1rem",
                      }}
                    >
                      ⚠️ Important Note
                    </h4>
                    <p
                      style={{
                        fontFamily: "var(--primary-font)",
                        fontSize: "1rem",
                        color: "#856404",
                        lineHeight: "1.6",
                        margin: 0,
                      }}
                    >
                      Account deletion is permanent and cannot be undone. All your data, including travel history and preferences, will be permanently removed.
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div
                    style={{
                      padding: "2rem",
                      background: "#d4edda",
                      borderRadius: "15px",
                      height: "100%",
                      border: "1px solid #c3e6cb",
                    }}
                  >
                    <h4
                      style={{
                        fontFamily: "var(--primary-font)",
                        fontWeight: "700",
                        fontSize: "1.1rem",
                        color: "#155724",
                        marginBottom: "1rem",
                      }}
                    >
                      ✅ Data Privacy
                    </h4>
                    <p
                      style={{
                        fontFamily: "var(--primary-font)",
                        fontSize: "1rem",
                        color: "#155724",
                        lineHeight: "1.6",
                        margin: 0,
                      }}
                    >
                      We respect your privacy and will completely remove all personal data associated with your account from our systems.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AccountDelete;
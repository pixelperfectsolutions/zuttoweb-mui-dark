import React from "react";
import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "../index.css";

export function CustomFooter() {
  return (
    <Footer container className="custom-footer">
      <div className="footer-wrapper" style={{ marginTop: "50px" }}>
        {/* Top: Four Columns */}
        <div className="footer-columns">
          {/* Column 1: Links */}
          <div className="footer-column">
            <p className="footer-heading">Links</p>
            <FooterLinkGroup col className="no-bullets">
              <FooterLink
                href="/"
                className="no-underline"
                style={{ fontFamily: "var(--primary-font)", fontWeight: "400" }}
              >
                Home
              </FooterLink>
              <FooterLink
                href="/about"
                className="no-underline"
                style={{ fontFamily: "var(--primary-font)", fontWeight: "400" }}
              >
                About Us
              </FooterLink>
              <FooterLink
                href="/travel-hub"
                className="no-underline"
                style={{ fontFamily: "var(--primary-font)", fontWeight: "400" }}
              >
                Travel Hub
              </FooterLink>
              <FooterLink
                href="/contact"
                className="no-underline"
                style={{ fontFamily: "var(--primary-font)", fontWeight: "400" }}
              >
                Contact Us
              </FooterLink>
            </FooterLinkGroup>
          </div>

          {/* Column 2: About Zutto */}
          <div className="footer-column">
            <p className="footer-heading">Zutto</p>
            <p
              className="footer-text"
              style={{
                fontFamily: "var(--primary-font)",
                fontWeight: "400",
                lineHeight: "1.6",
              }}
            >
              Zutto is your personalized travel companion, offering curated
              experiences and hassle-free bookings to make every trip memorable.
            </p>
          </div>

          {/* Column 3: Contact */}
          <div className="footer-column">
            <p className="footer-heading">Contact</p>
            <p
              className="footer-text"
              style={{
                fontFamily: "var(--primary-font)",
                fontWeight: "400",
              }}
            >
              Coimbatore, India
            </p>
            <FooterLink
              href="mailto:support@zutto.in"
              className="footer-email no-underline"
              style={{
                fontFamily: "var(--primary-font)",
                fontWeight: "500",
              }}
            >
              support@zutto.in
            </FooterLink>
          </div>

          {/* Column 4: Social Media */}
          <div className="footer-column">
            <p className="footer-heading">Follow Us</p>
            <div className="footer-socials">
              <a
                href="#"
                className="social-link"
                style={{
                  fontFamily: "var(--primary-font)",
                  fontWeight: "500",
                }}
              >
                <FaInstagram /> Instagram
              </a>
              <a
                href="#"
                className="social-link"
                style={{
                  fontFamily: "var(--primary-font)",
                  fontWeight: "500",
                }}
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="#"
                className="social-link"
                style={{
                  fontFamily: "var(--primary-font)",
                  fontWeight: "500",
                }}
              >
                <FaTwitter /> Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <FooterDivider className="footer-divider" />

        {/* Bottom Links */}
        <div className="footer-bottom" style={{ paddingTop: "15px" }}>
          <FooterLink
            href="/privacy"
            className="no-underline"
            style={{
              fontFamily: "var(--primary-font)",
              fontWeight: "400",
            }}
          >
            Privacy Policy
          </FooterLink>
          <FooterLink
            href="/terms"
            className="no-underline"
            style={{
              fontFamily: "var(--primary-font)",
              fontWeight: "400",
            }}
          >
            Terms of Service
          </FooterLink>
          <FooterLink
            href="https://pixelperfect.co.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
            style={{
              fontFamily: "var(--primary-font)",
              fontWeight: "400",
            }}
          >
            Designed By Pixel Perfect Software Solutions
          </FooterLink>
          <FooterCopyright
            href="#"
            by="ZUTTO"
            year={new Date().getFullYear()}
            className="footer-copyright"
            style={{
              fontFamily: "var(--primary-font)",
              fontWeight: "400",
            }}
          />
        </div>
      </div>
    </Footer>
  );
}

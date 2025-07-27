import React from "react";
import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export function CustomFooter() {
  return (
    <Footer container className="custom-footer" >
      <div className="footer-wrapper" style={{marginTop:'50px',}}>
        {/* Top: Four Columns */}
        <div className="footer-columns">
          {/* Column 1: Links */}
          <div className="footer-column">
            <p className="footer-heading">Links</p>
            <FooterLinkGroup col className="no-bullets">
              <FooterLink href="/" className="no-underline">Home</FooterLink>
              <FooterLink href="/about" className="no-underline">About Us</FooterLink>
              <FooterLink href="/travel-hub" className="no-underline">Travel Hub</FooterLink>
              <FooterLink href="/contact" className="no-underline">Contact Us</FooterLink>
            </FooterLinkGroup>
          </div>

          {/* Column 2: Contact */}
          <div className="footer-column">
            <p className="footer-heading">Zutto</p>
            <p className="footer-text">
              Zutto is your personalized travel companion, offering curated
              experiences and hassle-free bookings to make every trip memorable.
            </p>
          </div>

          {/* Column 3: Follow Us */}
          <div className="footer-column">
            <p className="footer-heading">Contact</p>
            <p className="footer-text">Coimbatore, India</p>
            <FooterLink
              href="mailto:support@zutto.in"
              className="footer-email no-underline">
              support@zutto.in
            </FooterLink>
          </div>
         

          {/* Column 4: Zutto Description */}
          <div className="footer-column">
            <p className="footer-heading">Follow Us</p>
            <div className="footer-socials">
              <a href="#" className="social-link"><FaInstagram /> Instagram</a>
              <a href="#" className="social-link"><FaLinkedin /> LinkedIn</a>
              <a href="#" className="social-link"><FaTwitter /> Twitter</a>
            </div>
          </div>
         
         
        </div>

        {/* Divider */}
        <FooterDivider className="footer-divider" />

        {/* Bottom Links */}
        <div className="footer-bottom" style={{paddingTop:'10px'}}>
          <FooterLink href="/privacy" className="no-underline">Privacy Policy</FooterLink>
          <FooterLink href="/terms" className="no-underline">Terms of Service</FooterLink>
          <FooterLink href="https://pixelperfect.co.in/" target="_blank" rel="noopener noreferrer" className="no-underline">
  Designed By Pixel Perfect Software Solutions
</FooterLink>
          <FooterCopyright
            href="#"
            by="ZUTTO"
            year={new Date().getFullYear()}
            className="footer-copyright"
          />
        </div>
      </div>
    </Footer>
  );
}

import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import "../index.css";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Travel Hub", path: "/travel-hub" },
  { name: "Contact Us", path: "/contact" },
];

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = (path: string) => {
    setExpanded(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="light"
      variant="light"
      fixed="top"
      expanded={expanded}
      className="apple-navbar py-3 shadow-sm"
    >
      <Container
        style={{ maxWidth: "1200px" }}
        className="mx-auto d-flex justify-content-between align-items-center px-4"
      >
        {/* Logo Left */}
        <LinkContainer to="/">
          <Navbar.Brand
            className="fw-bold logo"
            style={{
              fontSize: "3.2rem !important",
              letterSpacing: "0.5px",
              fontFamily: "Tesla, var(--primary-font)",
              fontWeight: "800 !important",
            }}
          >
            ZUTTO
          </Navbar.Brand>
        </LinkContainer>

        {/* Hamburger Menu */}
        <Navbar.Toggle
          aria-controls="main-nav"
          onClick={() => setExpanded(!expanded)}
        />

        {/* Nav Content */}
        <Navbar.Collapse id="main-nav">
          {/* Close button (mobile only) */}
          <div className="d-md-none w-100 text-end mb-3">
            <Button
              variant="outline-dark"
              size="sm"
              onClick={() => setExpanded(false)}
              style={{
                border: "none",
                fontSize: "1.5rem",
                lineHeight: "0.55",
                fontFamily: "var(--primary-font)",
                padding: "0.5rem",
              }}
            >
              ×
            </Button>
          </div>

          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center w-100">
            {/* Navigation Items */}
            <Nav className="text-start text-md-center flex-grow-1 justify-content-center py-2 py-md-0">
              {navItems.map((item) => (
                <LinkContainer
                  key={item.path}
                  to={item.path}
                  onClick={() => handleNavClick(item.path)}
                >
                  <Nav.Link
                    active={location.pathname === item.path}
                    style={{
                      fontFamily: "var(--primary-font)",
                      fontWeight: "500",
                      padding: "0.75rem 1rem",
                      margin: "0 0.25rem",
                      borderRadius: "0.5rem",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {item.name}
                  </Nav.Link>
                </LinkContainer>
              ))}
            </Nav>

            {/* Get Started Button */}
            <div className="d-none d-md-block mt-2 mt-md-0">
              <LinkContainer
                to="/contact"
                onClick={() => handleNavClick("/contact")}
              >
                <Button
                  className="get-started-btn fw-bold"
                  style={{
                    backgroundColor: "#181511",
                    color: "#fff",
                    border: "none",
                    fontFamily: "var(--primary-font)",
                    fontWeight: "600",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "0.5rem",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#fff";
                    e.currentTarget.style.color = "#181511";
                    e.currentTarget.style.border = "2px solid #181511";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "#181511";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.border = "none";
                  }}
                >
                  Get Started
                </Button>
              </LinkContainer>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from 'react-router-dom';
import '../index.css'; // Importing your custom styles

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Travel Hub', path: '/travel-hub' },
  { name: 'Contact Us', path: '/contact' },
];

const Header: React.FC = () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="light"
      variant="light"
      fixed="top"
      expanded={expanded}
      className="apple-navbar"
    >
      <Container style={{ maxWidth: '1200px' }} className="mx-auto">
        {/* Logo */}
        <LinkContainer to="/">
          <Navbar.Brand className="fw-bold logo">ZUTTO</Navbar.Brand>
        </LinkContainer>

        {/* Hamburger */}
        <Navbar.Toggle
          aria-controls="main-nav"
          onClick={() => setExpanded(!expanded)}
        />

        {/* Collapsible Navigation */}
        <Navbar.Collapse id="main-nav">
          {/* Mobile close button */}
          <div className="d-md-none w-100 text-end mb-2">
            <Button
              variant="outline-dark"
              size="sm"
              onClick={() => setExpanded(false)}
              style={{ border: 'none', fontSize: '1.5rem', lineHeight: '1' }}
            >
              ×
            </Button>
          </div>

          <div className="d-flex w-100 align-items-center flex-column flex-md-row">
            {/* Nav: center on desktop, left on mobile */}
            <Nav className="w-100 justify-content-md-center text-start text-md-center ps-3 ps-md-0">
              {navItems.map((item) => (
                <LinkContainer
                  key={item.path}
                  to={item.path}
                  onClick={() => setExpanded(false)}
                >
                  <Nav.Link
                    active={location.pathname === item.path}
                  >
                    {item.name}
                  </Nav.Link>
                </LinkContainer>
              ))}
            </Nav>

            {/* Get Started button (desktop only) */}
            <div className="ms-md-auto d-none d-md-block">
              <LinkContainer to="/contact">
                <Button
                  className="get-started-btn border-0 fw-bold transition-colors"
                  style={{
                    backgroundColor: '#181511',
                    color: '#fff',
                    border: 'none',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#fff';
                    e.currentTarget.style.color = '#181511';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#181511';
                    e.currentTarget.style.color = '#fff';
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

import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from 'react-router-dom';

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
        <LinkContainer to="/">
          <Navbar.Brand className="fw-bold logo">ZUTTO</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle
          aria-controls="main-nav"
          onClick={() => setExpanded(!expanded)}
        />

        <Navbar.Collapse id="main-nav">
          {/* Close button for mobile menu */}
          <div className="d-md-none w-100 text-end mb-2">
            <Button
              variant="outline-dark"
              size="sm"
              onClick={() => setExpanded(false)}
              style={{ border: 'none', fontSize: '1.2rem' }}
            >
              ×
            </Button>
          </div>

          <div className="d-flex w-100 align-items-center">
            <Nav className="mx-auto mx-md-0 text-start">
              {navItems.map((item) => (
                <LinkContainer key={item.path} to={item.path} onClick={() => setExpanded(false)}>
                  <Nav.Link active={location.pathname === item.path}>
                    {item.name}
                  </Nav.Link>
                </LinkContainer>
              ))}
            </Nav>

            <div className="ms-auto d-none d-md-block">
              <LinkContainer to="/contact">
                <Button
                  style={{
                    backgroundColor: '#181511',
                    color: '#fff',
                    border: 'none',
                  }}
                  className="border-0 px-4 py-2 fw-bold transition-colors"
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

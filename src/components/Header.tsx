import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Travel Hub', path: '/travel-hub' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Privacy', path: '/privacy' },
  { name: 'Terms', path: '/terms' },
];

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top" className="shadow-sm">
      <Container style={{ maxWidth: '1200px' }} className="mx-auto">
        <LinkContainer to="/">
          <Navbar.Brand className="fw-bold logo">ZUTTO</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <div className="d-flex w-100 align-items-center">
            <Nav className="mx-auto">
              {navItems.map((item) => (
                <LinkContainer key={item.path} to={item.path}>
                  <Nav.Link active={location.pathname === item.path}>{item.name}</Nav.Link>
                </LinkContainer>
              ))}
            </Nav>
            <div className="ms-auto">
              <LinkContainer to="/get-started">
                <Button variant="success">Get Started</Button>
              </LinkContainer>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

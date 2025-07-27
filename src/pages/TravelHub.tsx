import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const TravelHub: React.FC = () => (
  <Container className="pt-24" style={{ maxWidth: '1200px', paddingTop: '10rem' }}>
    <Row className="justify-content-center" style={{ paddingTop: '0', paddingBottom: '5rem' }}>
      <Col lg={12}>
        <Card className="shadow-lg border-0 mb-5 p-4 bg-[#ddc8aa] text-dark">
          <Card.Body className="p-4">
            <h1 className="display-5 fw-bold mb-3 text-center">Travel Hub – News, Tips & Stories</h1>
            <p className="lead mb-4 text-center">
              Your go-to space for updates, insider news, and travel insights.
            </p>
            <Row className="g-4">
              <Col md={4} sm={12} className="mb-4 md:mb-0">
                <Card className="h-100 bg-dark text-white border-0">
                  <Card.Body className="p-4">
                    <h2 className="h5 fw-bold mb-2">Travel News</h2>
                    <p className="mb-0">
                      Stay informed on lounge openings, travel restrictions, and aviation trends.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} sm={12} className="mb-4 md:mb-0">
                <Card className="h-100 bg-dark text-white border-0">
                  <Card.Body className="p-4">
                    <h2 className="h5 fw-bold mb-2">Pro Travel Tips</h2>
                    <ul className="mb-0 ps-3">
                      <li>Maximize Your Lounge Visit – Enjoy all the perks, from gourmet meals to spa access.</li>
                      <li>Airport Hacks – Navigate terminals like a pro.</li>
                      <li>Top Destinations – Curated global hotspots and hidden gems.</li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} sm={12} className="mb-4 md:mb-0">
                <Card className="h-100 bg-dark text-white border-0">
                  <Card.Body className="p-4">
                    <h2 className="h5 fw-bold mb-2">Featured Travel Stories</h2>
                    <p className="mb-0">
                      Be inspired by real travelers—business flyers, adventurers, and global wanderers—sharing their luxurious and stress-free journeys with ZUTTO.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default TravelHub;

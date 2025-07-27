import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Contact: React.FC = () => (
  <Container className="pt-24" style={{ maxWidth: '1200px', paddingTop: '10rem' }}>
    <Row className="justify-content-center" style={{ paddingBottom: '5rem' }}>
      <Col lg={12}>
        <Card className="shadow-lg border-0 p-4 bg-[#ddc8aa] text-dark">
          <Card.Body className="p-4 text-center">
            <h1 className="display-5 fw-bold mb-3">Contact Us</h1>
            <p className="lead mb-4">
              Let’s connect. Whether you have a query, feedback, or partnership interest, we’d love to hear from you.
            </p>

            <Row className="justify-content-center">
              <Col md={8}>
                <div className="d-flex flex-column align-items-center gap-4">
                  
                  <div className="text-center">
                    <strong className="d-block text-[#181511]">Email:</strong>
                    <a href="mailto:support@zutto.in" className="text-[#1a237e] hover:underline font-medium">support@zutto.in</a>
                  </div>

                  <div className="text-center">
                    <strong className="d-block text-[#181511]">Location:</strong>
                    <span className="text-[#3a2e1a]">Coimbatore, India</span>
                  </div>

                  <div className="text-center">
                    <strong className="d-block text-[#181511]">Follow Us:</strong>
                    <div className="d-flex justify-content-center gap-3 flex-wrap">
                      <a href="#" className="text-[#1a237e] hover:underline font-medium">Instagram</a>
                      <a href="#" className="text-[#1a237e] hover:underline font-medium">LinkedIn</a>
                      <a href="#" className="text-[#1a237e] hover:underline font-medium">Twitter</a>
                    </div>
                  </div>

                </div>
              </Col>
            </Row>

          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Contact;

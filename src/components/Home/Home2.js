import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home2() {
  return (
    <section className="quote-section">
      <Container>
        <Row className="justify-content-center align-items-center text-center">
          <Col md={10} lg={8}>
            <div className="quote-card">
              <h1 className="quote-text">
                "The only way to do great work is to love what you do."
              </h1>
              <p className="quote-author">— Steve Jobs</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home2;

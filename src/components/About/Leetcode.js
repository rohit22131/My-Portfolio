import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function LeetCode() {
  return (
    <Container fluid style={{ paddingBottom: "40px" }}>

      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <a href="https://leetcode.com/rohit_swami18/" target="_blank" rel="noopener noreferrer" curser="pointer">
            <img
              src="https://leetcard.jacoblin.cool/rohit_swami18?theme=dark&ext=heatmap"
              alt="LeetCode Heatmap"
              style={{
                width: "100%",
                maxWidth: "1000px",
                borderRadius: "12px",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.5)",
                transition: "transform 0.3s ease",
              }}
            />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default LeetCode;

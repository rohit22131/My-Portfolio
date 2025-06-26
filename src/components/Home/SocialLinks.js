import React from "react";
import { Col, Row } from "react-bootstrap";
import github from "../../Assets/github.1.png";
import linkedin from "../../Assets/linkedin2.png";
import instagram from "../../Assets/instagram2.png";

function SocialLinks() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
    >
      <Col
        md={12}
        className="home-about-social"
        style={{ marginBottom: "30px" }}
      >
        <h1>Connect With Me</h1>
      </Col>
      <Col xs={4} md={2} className="social-link">
        <a
          href="https://github.com/rohit22131"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="github" style={{ width: "80px" }} />
        </a>
      </Col>
      <Col xs={4} md={2} className="social-link">
        <a
          href="https://www.linkedin.com/in/rohit-kumar-835346260/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="linkedin" style={{ width: "80px" }} />
        </a>
      </Col>
      <Col xs={4} md={2} className="social-link">
        <a
          href="https://www.instagram.com/diary_of_rohit_swami/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="instagram" style={{ width: "80px" }} />
        </a>
      </Col>
    </Row>
  );
}

export default SocialLinks;

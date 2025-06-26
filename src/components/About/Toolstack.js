import React from "react";
import { Col, Row } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import vscodeimg from "../../Assets/vs-code.png";
import gitimg from "../../Assets/git.png";
import postmanimg from "../../Assets/postman.png";

const toolStack = [
  { src: vscodeimg, alt: "VSCode" },
  { src: gitimg, alt: "Git" },
  { src: postmanimg, alt: "Postman" },
];

function Toolstack() {
  return (
    <Row className="justify-content-center pb-5">
      {toolStack.map((tech, index) => (
        <Col xs={6} sm={4} md={3} lg={2} key={index} className="mb-4">
          <Tilt>
            <div className="tech-icon-wrapper">
              <img src={tech.src} alt={tech.alt} className="tech-icon-image" />
            </div>
          </Tilt>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;

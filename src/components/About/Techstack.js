import React from "react";
import { Col, Row } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import cppimg from "../../Assets/cpp.png";
import htmlimg from "../../Assets/html5.png";
import cssimg from "../../Assets/css.png";
import jsimg from "../../Assets/js.png";
import reactimg from "../../Assets/react.png";
import nodeimg from "../../Assets/nodejs.png";
import mongoimg from "../../Assets/mongo.png";
import tailwindimg from "../../Assets/tailwind.png";
import bootstrapimg from "../../Assets/bootstrap.png";

const techStack = [
  { src: cppimg, alt: "C++" },
  { src: htmlimg, alt: "HTML" },
  { src: cssimg, alt: "CSS" },
  { src: jsimg, alt: "JavaScript" },
  { src: reactimg, alt: "React.js" },
  { src: nodeimg, alt: "Node.js" },
  { src: mongoimg, alt: "MongoDB" },
  { src: tailwindimg, alt: "Tailwind CSS" },
  { src: bootstrapimg, alt: "Bootstrap" },
];

function Techstack() {
  return (
    <Row className="justify-content-center pb-5">
      {techStack.map((tech, index) => (
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

export default Techstack;

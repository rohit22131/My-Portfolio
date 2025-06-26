import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import myImg from "../../Assets/avatar.svg";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Leetcode from "./Leetcode";
import Tilt from "react-parallax-tilt";
import { ImPointRight } from "react-icons/im";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />

      <Container className="glass-hero">
        <Row className="align-items-center">
          <Col md={5} className="text-center">
            <Tilt>
              <img src={myImg} alt="avatar" className="modern-avatar" />
            </Tilt>
          </Col>
          <Col md={7}>
            <div className="glass-card">
              <h1>
                About <span className="purple">Me</span>
              </h1>
              <p style={{ textAlign: "justify" }}>
                Hi Everyone, I am Rohit Kumar from Baghpat, Uttar Pradesh.
                <br />
                I am currently pursuing my B.Tech in Electronics and
                Communication Engineering (ECE) from Madan Mohan Malaviya
                University of Technology (MMMUT), Gorakhpur.
                <br />
                <br />
                I love exploring new tech stacks, working on real-world
                projects, and continuously upgrading my skills to build
                efficient, scalable, and creative web applications.
                <br />
                <br />
                Apart from coding, some other activities that I love to do!
              </p>

              <ul className="list-unstyled about-activities">
                <li className="about-activity">
                  <ImPointRight /> Story Telling
                </li>
                <li className="about-activity">
                  <ImPointRight /> Playing Chess
                </li>
                <li className="about-activity">
                  <ImPointRight /> Listening to Music
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

      <h1 className="section-heading">
        Professional <span className="purple">Skills</span>
      </h1>
      <Techstack />

      <h1 className="section-heading">
        Tools & <span className="purple">Technologies</span>
      </h1>
      <Toolstack />

      <h1 className="section-heading">
        My <span className="purple">Leetcode</span> Stats
      </h1>
      <Leetcode />
    </Container>
  );
}

export default About;

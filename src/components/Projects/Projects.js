import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import TripGo from "../../Assets/Projects/TripGo.png";
import Foodify from "../../Assets/Projects/Foodify.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects</strong>
        </h1>
        <p className="project-subtext">
          Here are a few projects I've developed.
        </p>
        <Row>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={TripGo}
              title="TripGo"
              description="AI-powered travel planner using React.js, TailwindCSS, ShadCN UI, Firebase and AI-powered itinerary generation."
              ghLink="https://github.com/rohit22131/TripPlanner"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={Foodify}
              title="Foodify"
              description="Satisfy your hunger with just a click. Fresh, fast, and delicious meals delivered right to your doorstep."
              ghLink="https://github.com/rohit22131/Foodify"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={TripGo}
              title="TripGo"
              description="AI-powered travel planner using React.js, TailwindCSS, ShadCN UI, Firebase and AI-powered itinerary generation."
              ghLink="https://github.com/rohit22131/TripPlanner"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={TripGo}
              title="TripGo"
              description="AI-powered travel planner using React.js, TailwindCSS, ShadCN UI, Firebase and AI-powered itinerary generation."
              ghLink="https://github.com/rohit22131/TripPlanner"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

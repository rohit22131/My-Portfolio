import React from "react";
import { Col } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
  <Col md={10} className="project-card">
  <div className="fancy-card">
    <div className="card-image">
      <img src={props.imgPath} alt={props.title} />
    </div>
    <div className="card-info">
      <h3 className="card-title">{props.title}</h3>
      <p className="card-description">{props.description}</p>
      <a className="github-btn" href={props.ghLink} target="_blank" rel="noreferrer">
        <BsGithub /> GitHub
      </a>
    </div>
  </div>
</Col>
  );
}

export default ProjectCards;

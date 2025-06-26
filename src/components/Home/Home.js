import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/portfolio image.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import ContactForm from "./ContactForm";
import SocialLinks from "./SocialLinks";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                <strong>
                  {" "}
                  I'm
                  <strong className="main-name"> Rohit Kumar</strong>
                </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col
              md={5}
              style={{
                display: "flex",
                justifyContent: "center",
                paddingBottom: 20,
              }}
            >
              <img
                src={homeLogo}
                alt="home pic"
                className="homeLogo"
                style={{
                  maxHeight: "400px",
                  borderRadius: "8px",
                  filter: "brightness(0.95) opacity(0.8) contrast(1.1)",
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <SocialLinks />
      <ContactForm />
    </section>
  );
}

export default Home;

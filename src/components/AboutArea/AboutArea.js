import { aboutArea } from "@/data/aboutArea";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Link from "../Reuseable/Link";

const {
  photo,
  title,
  text,
  lists
} = aboutArea;

const AboutArea = () => {
  return (
    <section className="about-area pt-120 pb-120 logo-color">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="about-thumb">
              <Image src={photo.src} alt="about" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-content">
              <h3 className="title">{title}</h3>
              <p>{text}</p>
              <div className="list">
                <ul>
                  {lists.map((list, i) => (
                    <li key={i}>
                      <i className="flaticon-check"></i> {list}
                    </li>
                  ))}
                </ul>
              </div>
              <Link className="main-btn" href="/about">
                Plus d'information
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutArea;

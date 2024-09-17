import React from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";

const Services = () => {
  const services = [
    "UI/UX Designing",
    "Graphic Design",
    "App UI/UX",
    "Social Media",
    "Video Editing",
    "Landing Pages Design",
  ];

  return (
    <div className={styles.Services}>
      <Container>
        <Row>
          {services.map((service) => (
            <Col lg={4}>
              <button key={service} className={styles.serviceButton}>
                {service}
              </button>
            </Col>
          ))}
        </Row>
        <Row>
          <div className={styles.viewbtn}>
            <button className={styles.viewAllButton}>View All</button>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Services;

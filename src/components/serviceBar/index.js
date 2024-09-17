import React from "react";
import styles from "./style.module.css";
import { Container, Row, Col } from "react-bootstrap";

const ServiceBar = () => {
  return (
    <div className={styles.services}>
      <Container>
        <Row>
          <Col xs={12} sm={6} md={3} className={styles["service-item"]}>
            ✰ UI/UX Designer
          </Col>
          <Col xs={12} sm={6} md={3} className={styles["service-item"]}>
            ✰ Social Media
          </Col>
          <Col xs={12} sm={6} md={3} className={styles["service-item"]}>
            ✰ Graphic Design
          </Col>
          <Col xs={12} sm={6} md={3} className={styles["service-item"]}>
            ✰ Video Editing
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceBar;

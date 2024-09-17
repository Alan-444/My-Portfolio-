import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import heroimg from "../../assets/images/Picsart_24-09-17_14-37-45-731.png";
import styles from "./style.module.css";

const HeroSection = () => {
  return (
    <div className={`${styles.heroSection} `}>
      <Container>
        <Row className="align-items-center">
          <Col lg={7} md={7} sm={12} xs={12}>
            <div className={styles.hero_content}>
              <h1>
                HEY, I'M
                <span className={styles.highlight}>Rahul Prajapat</span>, A
                Creative UI/UX DESIGNER.
              </h1>
              <p>
                Hello, I'm John Doe, a UI/UX designer from Pakistan. I have more
                than one year of experience in designing websites and apps. I've
                got certificates from Google, and I've worked on creating and
                improving many websites and apps on my own.
              </p>
              <button className={styles.herobtn}>About Me.</button>
            </div>
          </Col>
          <Col lg={5} md={5} sm={12} xs={12}>
            <div className={styles.hero_imgbox}>
              <img src={heroimg} alt="John Doe" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;

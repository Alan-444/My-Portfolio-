import React from "react";
import { Link } from "react-router-dom";
import logoimg from "../../assets/images/logo.png";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Row className="align-items-center">
          <Col lg={3}>
            <div className={styles.logo}>
              <img src={logoimg} alt="Portfolio Logo" />
              <span>PORTFOLIOLOGY</span>
            </div>
          </Col>
          <Col lg={6}>
            <div className={styles.nav}>
              <Link to="/" className={styles.link}>
                Home
              </Link>
              <Link to="/" className={styles.link}>
                Portfolio
              </Link>
              <Link to="/" className={styles.link}>
                Services
              </Link>
              <Link to="/" className={styles.link}>
                Contact
              </Link>
            </div>
          </Col>
          <Col lg={3}>
            <div className={styles.head_btn}>
              <button className={styles.button}>Let's Talk.</button>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;

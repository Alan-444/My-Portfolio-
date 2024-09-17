import React from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import logoimg from "../../assets/images/logo.png";
import FacebookIcon from "../../icons/facebookIcon";
import LinkedInIcon from "../../icons/linkedinIcon";
import InstagramIcon from "../../icons/instagramIcon";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <Row>
          <Col lg={6}>
            <div className={styles.footer_sub}>
              <div className={styles.footer_logo}>
                <img src={logoimg} alt="Portfolio Logo" />
                <span>PORTFOLIOLOGY</span>
              </div>
              <div className={styles.footer_btn}>
                <button>Contact Us</button>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className={styles.footer_page}>
              <ul>
                <li>HOME</li>
                <li>WORK</li>
                <li>BLOG</li>
                <li>ABOUT</li>
              </ul>
            </div>
          </Col>
          <Col lg={2}>
            <div className={styles.footer_social}>
              <FacebookIcon />
              <LinkedInIcon />
              <InstagramIcon />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;

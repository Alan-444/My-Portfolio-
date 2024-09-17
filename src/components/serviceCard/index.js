import React from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import UxUiIcon from "../../icons/uxUiIcon";
import GeometricStarIcon from "../../icons/geometricStarIcon";
import InstagramIcon from "../../icons/instagramIcon";

const ServiceCards = ({ icon }) => {
  const services = [
    {
      icon: <UxUiIcon />,
      title: "UI/UX Design",
      description:
        "I create stunning designs for your UI/UX projects. I can handle any project related to landing page design, e-commerce designs, portfolios, business websites, and more according to your requirements.",
    },
    {
      icon: <GeometricStarIcon />,
      title: "Graphic Design",
      description:
        "I provide amazing and professional graphic assets for your project, such as social media post design, logo creation, posters, thumbnails, blog graphics, product label design, and many more categories, tailored to your specific requirements.",
    },
    {
      icon: <InstagramIcon />,
      title: "Social Media",
      description:
        "Quality social media post designs are essential for promoting your business online. I specialize in creating engaging and eye-catching posts tailored to your brand.",
    },
  ];

  return (
    <div className={styles.container}>
      <Container>
        <Row>
          {services.map((service) => (
            <Col lg={4}>
              <div key={service.title} className={styles.card}>
                <div className={styles.icon}>{service.icon}</div>
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ServiceCards;

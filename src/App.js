import { Fragment } from "react";
import Header from "./components/header";
import HeroSection from "./components/heroSection";
import ServiceBar from "./components/serviceBar";
import SectionHeading from "./components/sectionHeadding";
import ServicesComponent from "./components/serviceComp";
import ServiceCards from "./components/serviceCard";
import Certificates from "./components/certificates";
import { Col, Container, Row } from "react-bootstrap";
import GoogleIcon from "./icons/googleIcon";
import GIcon from "./icons/gIcon";
import CanvaIcon from "./icons/canvaIcon";
import Footer from "./components/footer";

const App = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <ServiceBar />
      <SectionHeading
        title={"Services"}
        subtitle={"Here are the services I offer to you."}
      />
      <ServicesComponent />
      <SectionHeading
        title={"Portfolio"}
        subtitle={"Click the cards to view portfolios in the related category."}
      />
      <ServiceCards />
      <SectionHeading
        title={"Certificates"}
        subtitle={"Here are the certificates I have earned."}
      />
      <Container>
        <Row>
          <Col lg={4}>
            <Certificates logo={<GoogleIcon />} name="Google" />
          </Col>
          <Col lg={4}>
            <Certificates logo={<GIcon />} name="Great Learning" />
          </Col>
          <Col lg={4}>
            <Certificates logo={<CanvaIcon />} name="Canva" />
          </Col>
        </Row>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default App;

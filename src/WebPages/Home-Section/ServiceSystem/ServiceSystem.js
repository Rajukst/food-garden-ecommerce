import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./ServiceSystem.css";
import iconOne from "../../../Images/Icon/delevary.png";
import iconTwo from "../../../Images/Icon/refound.png";
import iconThree from "../../../Images/Icon/secure.png";
import iconFour from "../../../Images/Icon/support.png";
const ServiceSystem = () => {
  return (
    <Container fluid>
      <Row className="m-2">
        <Col xs={12} md={6} lg={3}>
          <div className="service-div">
            <div>
              <img
                className="img-fluid me-3"
                src={iconOne}
                alt="Girl in a jacket"
              />
            </div>
            <div>
              <h5>Free Delivery</h5>
              <p>For all oders over $100</p>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <div className="service-div">
            <div>
              <img
                className="img-fluid me-3"
                src={iconTwo}
                alt="Girl in a jacket"
              />
            </div>
            <div>
              <h5>Refundable</h5>
              <p>100% refoundable system</p>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <div className="service-div">
            <div>
              <img
                className="img-fluid me-3"
                src={iconThree}
                alt="Girl in a jacket"
              />
            </div>
            <div>
              <h5>Secure Payment</h5>
              <p>100% secure payment</p>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <div className="service-div">
            <div>
              <img
                className="img-fluid me-3"
                src={iconFour}
                alt="Girl in a jacket"
              />
            </div>
            <div>
              <h5>24/7 Customer Support</h5>
              <p>We have dedicated support</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceSystem;

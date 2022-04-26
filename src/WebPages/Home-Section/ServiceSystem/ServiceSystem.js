import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./ServiceSystem.css";

const ServiceSystem = () => {
  return (
    <Container fluid>
      <Row className="m-2">
        <Col xs={12} md={6} lg={3}>
    <div className="service-div mt-4">
    <div className="icon-div">
     <i class="fa-solid fa-truck fa-3x"></i>
     </div>
      <div className="delevary-div">
      <p>Free Delivery</p>
       <p>For all oders over $100</p>
      </div>
    </div>
        </Col>
        <Col xs={12} md={6} lg={3}>
    <div className="service-div mt-4">
    <div className="icon-div">
    <i class="fa-solid fa-arrow-rotate-right fa-3x"></i>
     </div>
      <div className="delevary-div">
      <p>Refundable</p>
       <p>If your item have no damage we agree to refund it.</p>
      </div>
    </div>
        </Col>
        <Col xs={12} md={6} lg={3}>
    <div className="service-div mt-4">
    <div className="icon-div">
    <i class="fa-solid fa-user-shield fa-3x"></i>
     </div>
      <div className="delevary-div">
      <p>Secure Payment</p>
       <p>100% secure payment</p>
      </div>
    </div>
        </Col>
        <Col xs={12} md={6} lg={3}>
    <div className="service-div mt-4">
    <div className="icon-div">
    <i class="fa-solid fa-headset fa-3x"></i>
     </div>
      <div className="delevary-div">
      <p>24/7 Customer Support</p>
       <p>We have dedicated Customer support</p>
      </div>
    </div>
        </Col>
       
        
     
      </Row>
    </Container>
  );
};

export default ServiceSystem;

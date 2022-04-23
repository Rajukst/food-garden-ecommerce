import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import discountPic from "../../../Images/discount.png";
import "./DiscountOffer.css"
const DiscountOffer = () => {

    return (
    <Container fluid>
      <Row className="myDiscount m-2">
      <Col>
     <div className="myDiv">
     <div>
     <h2>Stay home & get your daily need's</h2>
      <p>Start You'r Daily Sopping with JamCart</p>
      <a className="btn btn-4">Order Now</a>
     </div>
     <div>
     <img className='img-fluid' src={discountPic} alt="Girl in a jacket"/>
     </div>
     </div>
      </Col>
      </Row>
      </Container>
    );
};

export default DiscountOffer;
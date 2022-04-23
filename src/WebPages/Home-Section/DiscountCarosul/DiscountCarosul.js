import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick/lib/slider";
import discountPicOne from "../../../Images/DiscountOffer/discountOffer1.png";
import discountPicTwo from "../../../Images/DiscountOffer/bakery.png";
import discountPicThree from "../../../Images/DiscountOffer/meat.png";
import "./DiscountCarosul.css";
import { Link } from "react-router-dom";
const DiscountCarosul = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container fluid>
      <Row>
        <Col className="ps-5 pe-5">
          <Slider {...settings}>
            <div>
              <Row className="DiscountCarosul m-2">
                <Col>
                  <div className="discountDiv">
                    <div>
                      <h2>Stay home & get your daily need's</h2>
                      <p>Start You'r Daily Sopping with JamCart</p>
                      <div className="containers">
                        <a className="btn btn-1">Order Now</a>
                      </div>
                    </div>
                    <div>
                      <img
                        className="img-fluid"
                        src={discountPicOne}
                        alt="Girl in a jacket"
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div>
              <Row className="DiscountCarosul m-2">
                <Col>
                  <div className="discountDiv">
                    <div>
                      <h2>Stay home & get your daily need's</h2>
                      <p>Start You'r Daily Sopping with JamCart</p>
                      <div className="containers">
                        <a className="btn btn-2">Order Now</a>
                      </div>
                    </div>
                    <div>
                      <img
                        className="img-fluid"
                        src={discountPicThree}
                        alt="Girl in a jacket"
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div>
              <Row className="DiscountCarosul m-2">
                <Col>
                  <div className="discountDiv">
                    <div>
                      <h2>Stay home & get your daily need's</h2>
                      <p>Start You'r Daily Sopping with JamCart</p>
                      <div className="containers">
                        <a className="btn btn-3">Order Now</a>
                      </div>
                    </div>
                    <div>
                      <img
                        className="img-fluid"
                        src={discountPicTwo}
                        alt="Girl in a jacket"
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Slider>
        </Col>
      </Row>
    </Container>
  );
};

export default DiscountCarosul;

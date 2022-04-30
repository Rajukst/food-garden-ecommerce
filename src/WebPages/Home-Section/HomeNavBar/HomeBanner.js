import React from "react";
import { Carousel, Col, Container, Row, Button } from "react-bootstrap";
import slide1 from "../../../Images/Top-Carosul/3.png";
import slide2 from "../../../Images/Top-Carosul/slide4.png";
import slide3 from "../../../Images/Top-Carosul/slide.png";
import "./HomeBanner.css";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
const HomeBanner = () => {
  return (
    <>
      <div className="top-div">
        <Carousel fade>
          <Carousel.Item>
            <Container>
              <Row>
                <Col xs={12} md={7}>
                  <div className="myLeftHeading">
                    <div>
                      <Fade up>
                        <h1 className="my-text">Special Offer</h1>
                      </Fade>
                    </div>
                    <div>
                      <Fade down>
                        <h1 className="my-subText">This is Second heading</h1>
                      </Fade>
                    </div>
                    <div>
                      <Fade right>
                        <Link to="/all-products"><Button variant="outline-dark">Shop Now</Button></Link>
                      </Fade>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={5}>
                  <img className="img-fluid animated fadeIn" src={slide1} alt="Third slide" />
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row>
                <Col xs={12} md={7}>
                <div className="myLeftHeading">
                    <div>
                      <Fade up>
                      <h1 className="my-text">This is first heading</h1>
                      </Fade>
                    </div>
                    <div>
                      <Fade down>
                      <h1 className="my-subText">This is Second heading</h1>
                      </Fade>
                    </div>
                    <div>
                      <Fade right>
                      <Link to="/all-products"><Button variant="outline-dark">Shop Now</Button></Link>
                      </Fade>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={5}>
                  <img className="img-fluid animated fadeIn" src={slide2} alt="Third slide" />
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row>
                <Col xs={12} md={7}>
                <div className="myLeftHeading">
                    <div>
                      <Fade up>
                      <h1 className="my-text">This is first heading</h1>
                      </Fade>
                    </div>
                    <div>
                      <Fade down>
                      <h1 className="my-subText">This is Second heading</h1>
                      </Fade>
                    </div>
                    <div>
                      <Fade right>
                      <Link to="/all-products"><Button variant="outline-dark">Shop Now</Button></Link>
                      </Fade>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={5}>
                  <img className="img-fluid animated fadeIn" src={slide3} alt="Third slide" />
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default HomeBanner;

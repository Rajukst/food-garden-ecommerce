import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
import { Link } from "react-router-dom";
import carosulImage1 from "../../../../Images/Carosul/Bakery.jpg";
import carosulImage2 from "../../../../Images/Carosul/Dairy.jpg";
import carosulImage3 from "../../../../Images/Carosul/fish.jpg";
import carosulImage4 from "../../../../Images/Carosul/fruits.jpg";
import carosulImage5 from "../../../../Images/Carosul/Grocery.jpeg";
import carosulImage6 from "../../../../Images/Carosul/Snacks.jpg";
import carosulImage7 from "../../../../Images/Carosul/vegetables.jpg";
import { Col, Container, Row } from "react-bootstrap";
const HomeCarosul = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
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
    <>
      <Container fluid>
        <Row>
          <Col className="ps-5 pe-5">
            <Slider {...settings}>
              <div>
                <Link to="/bekary">
                  <img
                    className="img-fluid p-1"
                    src={carosulImage1}
                    alt="Girl in a jacket"
                  />
                </Link>
                <p>Bekary</p>
              </div>
              <div>
                <Link to="/milk-dairy">
                  <img
                    className="img-fluid p-1"
                    src={carosulImage2}
                    alt="Girl in a jacket"
                  />
                </Link>
                <p>Milk</p>
              </div>
              <div>
                <Link to="/meat-fish">
                  <img
                    className="img-fluid p-1"
                    src={carosulImage3}
                    alt="Girl in a jacket"
                  />
                </Link>
                <p>meat and Fish</p>
              </div>
              <div>
                <Link to="/fruits">
                  <img
                    className="img-fluid p-1"
                    src={carosulImage4}
                    alt="Girl in a jacket"
                  />
                </Link>
                <p>Fruits</p>
              </div>
              <div>
                <Link to="/grocery">
                  <img
                    className="img-fluid p-1"
                    src={carosulImage5}
                    alt="Girl in a jacket"
                  />
                </Link>
                <p>Grocery</p>
              </div>
              <div>
                <Link to="/snacks">
                  <img
                    className="img-fluid p-1"
                    src={carosulImage6}
                    alt="Girl in a jacket"
                  />
                </Link>
                <p>Snacks and Bevarage</p>
              </div>
              <div>
                <Link to="/vegetable">
                  <img
                    className="img-fluid p-1"
                    src={carosulImage7}
                    alt="Girl in a jacket"
                  />
                </Link>
                <p>Vegetables</p>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeCarosul;

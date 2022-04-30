import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";

import "./SingleItemProduct.css";
const SingleItemProduct = () => {
  // increment
  const [count, setCount] = useState(1);
  const maxGuests = 100;
  const minGuests = 0;

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleCount = (e) => {
    if (e > maxGuests) {
      setCount(maxGuests);
    } else if (e < minGuests) {
      setCount(minGuests);
    } else setCount(e);
  };

  const decrementCount = () => {
    if (count > minGuests) setCount(count - 1);
  };

  const incrementCount = () => {
    if (count < maxGuests) setCount(count + 1);
    else if (count > maxGuests) setCount(maxGuests);
  };
  // increment done
  const { serviceId } = useParams();
  const [singleItem, setSingleItem] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/single-items/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setSingleItem(data));
  }, []);
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={12} sm={12} md={5} lg={5}>
            <div className="left-item">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Wristwatch by Ted Baker London",
                    isFluidWidth: true,
                    src: singleItem.image,
                  },
                  largeImage: {
                    src: singleItem.image,
                    width: 1200,
                    height: 1800,
                  },
                }}
              />
            </div>
          </Col>
          <Col xs={12} sm={12} md={7} lg={7}>
            <div className="right-item">
              <div className="product-information">
                <h4 className="card-title"> Product Name: {singleItem.name}</h4>
                <h6 className="card-subtitle mb-2 text-muted">
                  {singleItem.price} taka per {singleItem.quantity}
                </h6>
                <p className="card-text my-carts description-box">
                  <span className="my-span">Product Info:</span>{" "}
                  {singleItem.description}
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="my-counter">
                <input
                  type="button"
                  onClick={() => decrementCount()}
                  value="-"
                  className="cursor-pointer"
                />
                <input
                  required
                  type="number"
                  name="counter"
                  value={count}
                  onChange={(event) => {
                    handleCount(event.target.value);
                  }}
                />
                <input
                  type="button"
                  onClick={() => incrementCount()}
                  value="+"
                  className="cursor-pointer"
                />
              </div>
              <div className="class-div">
                <button type="submit" variant="outline-info">
                  Add To Cart
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SingleItemProduct;

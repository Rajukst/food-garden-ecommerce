import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./SingleItemProduct.css";
const SingleItemProduct = () => {
  // increment
  let [num, setNum] = useState(0);
  let incNum = () => {
    if (num < 100) {
      setNum(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  let handleChange = (e) => {
    setNum(e.target.value);
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
              <img className="img-fluid" src={singleItem.image} alt="" />
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
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SingleItemProduct;

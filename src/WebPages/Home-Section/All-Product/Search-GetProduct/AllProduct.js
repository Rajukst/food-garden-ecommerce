import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import SetAllProduct from "./SetAllProduct";
import "./AllProduct.css"
const AllProduct = () => {
  const [allProduct, setAllProduct] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/all-products`)
      .then((res) => res.json())
      .then((data) => setAllProduct(data));
  }, []);
  return (
    <>
      <div className="input-searchBox mt-3 mb-3">
          <div className="searchBox">
        <input
          class="form-control"
          type="text"
          placeholder="Search any product..."
          
        />
          </div>
      </div>
      <Container fluid>
        <Row>
          <Col xs={12} md={2} lg={2}>
            <h2>my Selection</h2>
       
          </Col>
          <Col xs={12} md={10} lg={10}>
            <div className="featured">
              <Row xs={12} md={4} lg={4} className="g-4 m-2">
                {allProduct.map((allProducts) => (
                  <SetAllProduct
                    key={allProducts._id}
                    getProducts={allProducts}
                  ></SetAllProduct>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AllProduct;

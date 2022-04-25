import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FilteredGrocery from "./FilteredGrocery";

const Grocery = () => {
  const [grocery, setGrocery] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/all-products`)
      .then((res) => res.json())
      .then((data) => setGrocery(data));
  }, []);
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={12} md={2} lg={2}>
            1 of 1
          </Col>
          <Col xs={12} md={10} lg={10}>
            <div className="featured">
              <h1>This is Fruits Component</h1>
              <Row xs={12} md={2} lg={4} className="g-4 m-2">
                {grocery
                  .filter((groceryProduct) => groceryProduct.tag === "grocery")
                  .map((filteredGrocery) => (
                    <FilteredGrocery
                      key={filteredGrocery._id}
                      getGrocery={filteredGrocery}
                    ></FilteredGrocery>
                  ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Grocery;

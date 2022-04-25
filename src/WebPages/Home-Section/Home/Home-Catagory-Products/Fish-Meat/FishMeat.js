import React, { useEffect, useState } from "react";
import { Container, Row, Col,Accordion, InputGroup,FormControl  } from "react-bootstrap";
import FilteredFishMeat from "./FilteredFishMeat";

const FishMeat = () => {
  const [fishMeat, setFishMeat] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/all-products`)
      .then((res) => res.json())
      .then((data) => setFishMeat(data));
  }, []);
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={12} md={2} lg={2}>
              <h2>my Selection</h2>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Recommended Filters</Accordion.Header>
                <Accordion.Body>
                
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col xs={12} md={10} lg={10}>
            <div className="featured">
              <Row xs={12} md={4} lg={4} className="g-4 m-2">
                {fishMeat
                  .filter(
                    (getFilterFishMeat) => getFilterFishMeat.tag === "fish"
                  )
                  .map((filteredFishMeat) => (
                    <FilteredFishMeat
                      key={filteredFishMeat._id}
                      getfishMeat={filteredFishMeat}
                    ></FilteredFishMeat>
                  ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FishMeat;

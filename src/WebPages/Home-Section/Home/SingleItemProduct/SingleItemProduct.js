import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

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
          <Col>
            <div>
              <img src={singleItem.image} alt="Girl in a jacket" />
              <div className="col-xl-2 align-center">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <button
                      class="btn btn-outline-primary"
                      type="button"
                      onClick={decNum}
                    >
                      -
                    </button>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    value={num}
                    onChange={handleChange}
                  />
                  <div class="input-group-prepend">
                    <button
                      class="btn btn-outline-primary"
                      type="button"
                      onClick={incNum}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <Button>Add To Cart</Button>
          </Col>
          <Col>
            <div className="my-dash">
              <h3>{singleItem.name}</h3>
              <h3>
                {singleItem.price} taka per {singleItem.quantity}
              </h3>
              <h3>{singleItem.tag}</h3>
              <p>{singleItem.description}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SingleItemProduct;

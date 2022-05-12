import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SetAllProduct from "./SetAllProduct";
import "./AllProduct.css";
import Cart from "../../Cart/Cart";
const AllProduct = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [filter, setFilter]= useState('');
  const [cart, setCart]= useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/all-products`)
      .then((res) => res.json())
      .then((data) => setAllProduct(data));
  }, []);

  const handleAddToCart=(allProducts)=>{
  const newCart=[...cart, allProducts]
  setCart(newCart)
  }
  return (
    <>
      <div className="input-searchBox mt-3 mb-3">
        <div className="searchBox">
          <input
            className="form-control"
            type="text"
            placeholder="Search any product..."
            onChange={(e)=>setFilter(e.target.value)}
          />
        </div>
      </div>
      <Container fluid>
        <Row>
          <Col xs={12} md={2} lg={2}>
           {/* send data to cart component  */}
           <Cart myCart={cart}></Cart>
           
          </Col>
          <Col xs={12} md={10} lg={10}>
            <div className="featured">
              <Row xs={12} md={4} lg={4} className="g-4 m-2">
                {allProduct.filter((value)=>{
                  if(filter===""){
                   return value
                  }
                  else if (value.name.toLowerCase().includes(filter.toLocaleLowerCase())){
                    return value
                  }
                })
                .map((allProducts) => (
                  <SetAllProduct
                    key={allProducts._id}
                    getProducts={allProducts}
                    addToCart={handleAddToCart}
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

import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import "./FeaturedProduct.css"
import SingleFeaturedProduct from './SingleFeaturedProduct';

const FeaturedProducts = () => {

    const [product, setProduct]= useState([])
    const [cart, setCart]= useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/all-products")
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])

    const handleOnClick=(getTestResult)=>{
      cart.push(getTestResult)
      console.log(cart)
    }

    return (
       <Container fluid>
            <div className="featured">
            <h1>This is Featured Product</h1>
            
            <Row xs={12} md={2} lg={5} className="g-4 m-2">
            {product.slice(0, 12).map((getTestResult) => (
          <SingleFeaturedProduct
            key={getTestResult._id}
          handleClick={handleOnClick}
            getProduct={getTestResult}
            //comment goes here
          ></SingleFeaturedProduct>
        ))}
      </Row>
     
        </div>
       </Container>
    );
};

export default FeaturedProducts;
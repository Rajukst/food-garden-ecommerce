import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import "./FeaturedProduct.css"
import SingleFeaturedProduct from './SingleFeaturedProduct';
const FeaturedProducts = () => {
    const [product, setProduct]= useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/all-products")
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    return (
       <Container fluid>
            <div className="featured">
            <h1>This is Featured Product</h1>
            <Row xs={12} md={5} className="g-4 m-2">
             <h1> {product.length}</h1>
            {product.map((getTestResult) => (
          <SingleFeaturedProduct
            key={getTestResult._id}
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
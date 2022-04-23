import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import FilterFruits from './FilterFruits';

const Fruits = () => {
    const [filterProduct, setFilterProduct]= useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/all-products`)
        .then(res=>res.json())
        .then(data=>setFilterProduct(data))
    },[])
    return (
        <Container fluid>
        <div className="featured">
        <h1>This is Fruits Component</h1>
        <Row xs={12} md={5} className="g-4 m-2">
        {filterProduct.filter(product=> product.tag==='fruits').map(filteredPerson => (
       <FilterFruits
       key={filteredPerson._id}
       getFruits={filteredPerson}
       ></FilterFruits>
      ))}
  </Row>
    </div>
   </Container>
    );
};

export default Fruits;




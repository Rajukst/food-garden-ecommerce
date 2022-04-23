import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import FilteredGrocery from './FilteredGrocery';

const Grocery = () => {
    const [grocery, setGrocery]= useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/all-products`)
        .then(res=>res.json())
        .then(data=>setGrocery(data))
    },[])
    return (
        <Container fluid>
        <div className="featured">
        <h1>This is Fruits Component</h1>
        <Row xs={12} md={2} lg={4} className="g-4 m-2">
        {grocery.filter(groceryProduct=> groceryProduct.tag==='grocery').map(filteredGrocery => (
       <FilteredGrocery
       key={filteredGrocery._id}
       getGrocery={filteredGrocery}
       ></FilteredGrocery>
      ))}
  </Row>
    </div>
   </Container>
    );
};

export default Grocery;
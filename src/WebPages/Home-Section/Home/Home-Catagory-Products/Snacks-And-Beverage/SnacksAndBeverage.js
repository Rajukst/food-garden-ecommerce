import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import FillteredSnacks from './FillteredSnacks';

const SnacksAndBeverage = () => {
    const [snacks, setSnacks]= useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/all-products`)
        .then(res=>res.json())
        .then(data=>setSnacks(data))
    },[])
    return (
        <Container fluid>
        <div className="featured">
        <h1>This is Vegetables Component</h1>
        <Row xs={12} md={2} lg={4} className="g-4 m-2">
        {snacks.filter(getFilterSnacks=> getFilterSnacks.tag==='snacks').map(filteredSnacks => (
       <FillteredSnacks
       key={filteredSnacks._id}
       getSnacks={filteredSnacks}
       ></FillteredSnacks>
      ))}
  </Row>
    </div>
   </Container>
    );
};

export default SnacksAndBeverage;
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import FilteredFishMeat from './FilteredFishMeat';

const FishMeat = () => {
    const [fishMeat, setFishMeat]= useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/all-products`)
        .then(res=>res.json())
        .then(data=>setFishMeat(data))
    },[])
    return (
        <Container fluid>
        <div className="featured">
        <h1>This is Vegeta Component</h1>
        <Row xs={12} md={2} lg={4} className="g-4 m-2">
        {fishMeat.filter(getFilterFishMeat=> getFilterFishMeat.tag==='fish').map(filteredFishMeat => (
       <FilteredFishMeat
       key={filteredFishMeat._id}
       getfishMeat={filteredFishMeat}
       ></FilteredFishMeat>
      ))}
  </Row>
    </div>
   </Container>
    );
};

export default FishMeat;
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import FilteredVegetables from './FilteredVegetables';

const Vegetables = () => {
    const [filterVegetables, setFilterVegetables]= useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/all-products`)
        .then(res=>res.json())
        .then(data=>setFilterVegetables(data))
    },[])
    return (
        <Container fluid>
        <div className="featured">
        <h1>This is Vegetables Component</h1>
        <Row xs={12} md={5} className="g-4 m-2">
        {filterVegetables.filter(getFilterVegetable=> getFilterVegetable.tag==='vegetable').map(filteredVegetable => (
       <FilteredVegetables
       key={filteredVegetable._id}
       getVegetable={filteredVegetable}
       ></FilteredVegetables>
      ))}
  </Row>
    </div>
   </Container>
    );
};

export default Vegetables;
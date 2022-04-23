import React from 'react';
import { Col } from 'react-bootstrap';

const FilteredVegetables = ({getVegetable}) => {
    const {name, price, image, description, quantity}= getVegetable
    return (
        <div>
        <Col>
        <div className="container">
      <div className="row">
        <div className="aaaaa">
          <div className="card border-0">
            <div className="card-body">
              <button className="cart-button">Add to Cart </button>
            <img src={image} className="img-fluid p-1" alt="Girl in a jacket" />
              <h4 className="card-title">{name}</h4>
              <h6 className="card-subtitle mb-2 text-muted">{price} taka per {quantity}</h6>
              <p className="card-text">{description.slice(0, 100)}...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
        </Col>
            </div>
    );
};

export default FilteredVegetables;
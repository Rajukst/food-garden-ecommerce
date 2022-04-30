import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const FilteredGrocery = ({getGrocery}) => {
    const {_id, name, price, image, description, quantity}= getGrocery
    return (
        <div>
        <Col>
          <div className="container">
            <div className="row">
              <div className="aaaaa">
                <div className="card border-0">
                  <div className="card-body">
                  <div className="icon-button">
                    <div>
                      <button title="Add to cart"
                        className="cart-button"
                      >
                        <i className="fa-solid fa-cart-plus"></i>
                      </button>
                    </div>
                  </div>
                  <Link to={`/single-item/${_id}`}>
                    <img
                      src={image}
                      className="img-fluid p-1"
                      alt="Girl in a jacket"
                    />
                  </Link>
                    <h4 className="card-title">{name}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {price} taka per {quantity}
                    </h6>
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

export default FilteredGrocery;
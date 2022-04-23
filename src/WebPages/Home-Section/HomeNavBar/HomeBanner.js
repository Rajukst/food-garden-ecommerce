import React from 'react';
import { Button } from 'react-bootstrap';
import "./HomeBanner.css"
const HomeBanner = () => {
    return (
        <div className="banner-image w-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="content text-center">
            <h1 className="text-dark">SEARCH YOUR PRODUCT HERE</h1>
            <input
            type="text"
            name=""
            id=""
            placeholder="Search what do you want"
            required
          />  
           <Button variant="outline-info mt-3">Search</Button>  
          </div>
        </div>
    );
};

export default HomeBanner;
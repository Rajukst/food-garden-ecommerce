import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import "./AddProduct.css";
const AddProduct = () => {
  const productName = useRef();
  const productImage = useRef();
  const productDescription = useRef();
  const productPrice = useRef();
  const tagName = useRef();
  const quantityName = useRef();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const name = productName.current.value;
    const image = productImage.current.value;
    const description = productDescription.current.value;
    const price = productPrice.current.value;
    const tag = tagName.current.value;
    const quantity = quantityName.current.value;
    const totalBio = { name, image, price, description, tag, quantity };
    console.log(totalBio);
    fetch("http://localhost:5000/add-products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(totalBio),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product Add Success!!",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
          console.log(data);
        }
      });
  };
  return (
    <div className="addProduct-image">
      <h1 className="pt-5"> Your Product Add Here</h1>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name=""
          id=""
          ref={productName}
          placeholder="Product Name"
          required
        />
        <br />
        <br />
        <input
          type="text"
          name=""
          id=""
          ref={productPrice}
          placeholder="Product Price"
          required
        />
        <br />
        <br />
        <label htmlFor="tag">Select a Tag:</label>
        <select ref={tagName} name="tag" id="tag">
          <option value="vegetable">Vegetables</option>
          <option value="bakery">Bakery & Pastry</option>
          <option value="fish">Fish & Meat</option>
          <option value="snacks">Snacks & Beverages</option>
          <option value="fruits">Fruits</option>
          <option value="grocery">Grocery</option>
        </select>
        <br />
        <br />
        <label htmlFor="quantity">Select Quantity:</label>
        <select ref={quantityName} name="quantity" id="quantity">
          <option value="kg">Kg</option>
          <option value="pcs">Pcs</option>
          <option value="gram">Gram</option>
          <option value="ltr">Litter</option>
          <option value="packet">Packet</option>
        </select>
        <br />
        <br />
        <input
          type="text"
          name=""
          id=""
          ref={productImage}
          placeholder="Product's Image or Image Url"
          required
        />
        <br />
        <br />
        <textarea
          placeholder="Short Description of Product"
          id=""
          ref={productDescription}
          name=""
          rows=""
          cols=""
        ></textarea>
        <br />
        <br />
        <Button type="submit" variant="outline-info">
          Add Product
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;

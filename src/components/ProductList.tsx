import React from "react";
import TestImage from "../Images/Image.svg";
import styled from "styled-components";
import AddToCart from "../Images/Add To Cart.svg";

const Product = styled.div`
  border: 1px solid #e6e6e6;
  border-radius: 8px;
`;

const ProductList = () => {
  return (
    <Product>
      <img src={TestImage} alt="" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 15px",
        }}
      >
        <div>
          <p style={{ color: "#4D4D4D", fontSize: "14px" }}>Big potatos</p>
          <h3 style={{ fontSize: "16px" }}>$14.99</h3>
        </div>
        <img src={AddToCart} alt="Shopping icon" />
      </div>
    </Product>
  );
};

export default ProductList;

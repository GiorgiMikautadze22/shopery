import React from "react";
import { Product } from "../Interface";
import styled from "styled-components";
import ShoppingIcon from "../Images/Rectangle.svg";
import HeartIcon from "../Images/Heart.svg";

interface Props {
  currentProduct: Product;
}

const Line = styled.div`
  width: 100%;
  height: 1px;
  border: 1px solid #e6e6e6;
  margin: 20px 0px;
`;

const AddToCartButton = styled.button`
  width: 450px;
  height: 50px;
  background-color: #00b207;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  cursor: pointer;
`;

const HeartButton = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: #20b5261a;
  display: flex;
  justify-content: center;
  align-item: center;
  cursor: pointer;
`;

const ProductInfo = ({ currentProduct }: Props) => {
  return (
    <div style={{ width: "650px" }}>
      <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
        {currentProduct.title}
      </h2>
      <h3 style={{ color: "#2C742F", fontSize: "24px" }}>
        ${currentProduct.price}
      </h3>
      <Line />
      <p style={{ fontSize: "14px", color: "#808080" }}>
        {currentProduct.description}
      </p>
      <Line />
      <div style={{ display: "flex", gap: "12px" }}>
        <AddToCartButton>
          <span>Add to Cart</span>
          <img src={ShoppingIcon} alt="" />
        </AddToCartButton>
        <HeartButton>
          <img
            style={{
              width: "23px",
              height: "23px",
              display: "flex",
              margin: "auto",
            }}
            src={HeartIcon}
            alt=""
          />
        </HeartButton>
      </div>
      <Line />
      <p style={{ color: "#808080" }}>
        <span style={{ fontWeight: 600, color: "#1A1A1A" }}>Category:</span>{" "}
        {currentProduct.category}
      </p>
    </div>
  );
};

export default ProductInfo;

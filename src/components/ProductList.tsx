import React, { useEffect, useState } from "react";
import BagIcon from "../Images/Bag.svg";
import styled from "styled-components";
import AddToCart from "../Images/Add To Cart.svg";
import { Products } from "../Interface";
import { useNavigate } from "react-router-dom";

const Product = styled.div`
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  padding: 5px;

  &:hover {
    transform: scale(1.05);
    transition: 200ms;
    box-shadow: 0px 0px 15px 8px #00000040;
  }
  &:active {
    transform: scale(0.95);
    transition: 0ms;
  }
`;

const ShoppingIcon = styled.div`
  cursor: pointer;
  background: #f2f2f2;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justidy-content: center;
  align-items: center;

  &:hover {
    background-color: #00b207;
    opacity: 0.8;
    transform: scale(1.15);
    transition: 150ms;
  }
`;

interface Props {
  products: Products[];
  setProducts: React.Dispatch<React.SetStateAction<Products[]>>;
  currentCategory: string;
  setCurrentProduct: React.Dispatch<React.SetStateAction<{}>>;
  value: number[];
  setValue: React.Dispatch<React.SetStateAction<number[]>>;
  highestPrice: number;
  lowestPrice: number;
  prices: number[];
  filteredProducts: Products[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<Products[]>>;
}

const ProductList = ({
  products,
  setProducts,
  currentCategory,
  setCurrentProduct,
  value,
  setValue,
  highestPrice,
  lowestPrice,
  prices,
  filteredProducts,
  setFilteredProducts,
}: Props) => {
  const navigate = useNavigate();

  // const [filteredProducts, setFilteredProducts] = useState<Products[]>([]);

  const viewProduct = (productName: object) => {
    setCurrentProduct(productName);
    navigate("/product");
  };

  return (
    <div>
      {filteredProducts.length > 0 ? (
        <p
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "end",
            marginTop: "59px",
            marginRight: "-200%",
            marginBottom: "34px",
          }}
        >
          {filteredProducts.length} Results Found
        </p>
      ) : (
        <p
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "end",
            marginTop: "59px",
            marginRight: "-200%",
            marginBottom: "34px",
          }}
        >
          {products.length} Results Found
        </p>
      )}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          gap: "20px",
          width: "320px",
        }}
      >
        {filteredProducts.map((item) => (
          <Product
            onClick={() => viewProduct(item)}
            key={item.id}
            style={{ cursor: "pointer" }}
          >
            <img
              style={{
                width: "300px",
                height: "300px",
                objectFit: "contain",
              }}
              src={item.image}
              alt={item.title}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 15px",
              }}
            >
              <div>
                <p
                  style={{
                    color: "#4D4D4D",
                    fontSize: "14px",
                    width: "200px",
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  {item.title.split(" ").slice(0, 3).join(" ")}
                </p>
                <h3 style={{ fontSize: "16px" }}>${item.price}</h3>
              </div>
              <ShoppingIcon>
                <img
                  style={{
                    width: "25px",
                    height: "25px",
                    margin: "auto",
                  }}
                  src={BagIcon}
                  alt="Shopping icon"
                />
              </ShoppingIcon>
            </div>
          </Product>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

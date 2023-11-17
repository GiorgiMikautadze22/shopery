import React, { useEffect, useState } from "react";
import TestImage from "../Images/Image.svg";
import styled from "styled-components";
import AddToCart from "../Images/Add To Cart.svg";
import { Products } from "../Interface";
import { useNavigate } from "react-router-dom";

const Product = styled.div`
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  padding: 5px;
`;

interface Props {
  products: Products[];
  setProducts: React.Dispatch<React.SetStateAction<Products[]>>;
  currentCategory: string;
  setCurrentProduct: React.Dispatch<React.SetStateAction<{}>>;
}

const ProductList = ({
  products,
  setProducts,
  currentCategory,
  setCurrentProduct,
}: Props) => {
  const navigate = useNavigate();

  const [filteredProducts, setFilteredProducts] = useState<Products[]>([]);

  const viewProduct = (productName: object) => {
    setCurrentProduct(productName);
    navigate("/product");
  };

  useEffect(() => {
    const filtered = products.filter(
      (item) => item.category === currentCategory
    );
    setFilteredProducts(filtered);
  }, [currentCategory, products]);

  return (
    <div>
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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          gap: "20px",
          width: "320px",
        }}
      >
        {currentCategory.length > 0
          ? filteredProducts.map((item) => (
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
                      }}
                    >
                      {item.title}
                    </p>
                    <h3 style={{ fontSize: "16px" }}>${item.price}</h3>
                  </div>
                  <img src={AddToCart} alt="Shopping icon" />
                </div>
              </Product>
            ))
          : products.map((item) => (
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
                      }}
                    >
                      {item.title}
                    </p>
                    <h3 style={{ fontSize: "16px" }}>${item.price}</h3>
                  </div>
                  <img src={AddToCart} alt="Shopping icon" />
                </div>
              </Product>
            ))}
      </div>
    </div>
  );
};

export default ProductList;

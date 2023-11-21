import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Product, Products } from "../../Interface";
import ProductInfo from "../../components/ProductInfo";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface Props {
  products: Products[];
  currentCategory: string;
  currentProduct: Product;
  productsInCart: Product[];
  setProductsInCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

const SingleProduct = ({
  products,
  currentCategory,
  currentProduct,
  productsInCart,
  setProductsInCart,
}: Props) => {
  // const [productsInCart, setProductsInCart] = useState<Product[]>([]);

  const navigate = useNavigate();

  const addToCart = () => {
    setProductsInCart([...productsInCart, currentProduct]);
    navigate("/shopping-cart");
    console.log(productsInCart);
  };

  return (
    <div style={{ marginBottom: "100px" }}>
      <Header
        currentCategory={currentCategory}
        products={products}
        currentProduct={currentProduct}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
          gap: "75px",
        }}
      >
        <img
          style={{ width: "500px", height: "500px", objectFit: "contain" }}
          src={currentProduct.image}
          alt=""
        />
        <ProductInfo currentProduct={currentProduct} addToCart={addToCart} />
      </div>
    </div>
  );
};

export default SingleProduct;

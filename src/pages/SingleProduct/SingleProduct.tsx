import React, { useState } from "react";
import Header from "../../components/Header";
import { Product, Products } from "../../Interface";
import ProductInfo from "../../components/ProductInfo";
import styled from "styled-components";

interface Props {
  products: Products[];
  currentCategory: string;
  currentProduct: Product;
}

const SingleProduct = ({
  products,
  currentCategory,
  currentProduct,
}: Props) => {
  return (
    <div>
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
        <ProductInfo currentProduct={currentProduct} />
      </div>
    </div>
  );
};

export default SingleProduct;

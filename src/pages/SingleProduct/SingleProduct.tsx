import React, { useState } from "react";
import Header from "../../components/Header";
import { Product, Products } from "../../Interface";
import ProductInfo from "../../components/ProductInfo";

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
      <div>
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

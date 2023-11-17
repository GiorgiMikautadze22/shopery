import React from "react";
import { Product } from "../Interface";

interface Props {
  currentProduct: Product;
}

const ProductInfo = ({ currentProduct }: Props) => {
  return (
    <div>
      <h2>{currentProduct.title}</h2>
      <h3>{currentProduct.price}</h3>
      <div></div>
      <p>{currentProduct.description}</p>
      <div></div>
      <div>
        <button>Add to Cart</button>
        <img src="" alt="" />
      </div>
      <p>Category: {currentProduct.category}</p>
    </div>
  );
};

export default ProductInfo;

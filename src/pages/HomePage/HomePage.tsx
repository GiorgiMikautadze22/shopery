import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Filter from "../../components/Filter";
import ProductList from "../../components/ProductList";
import { Products } from "../../Interface";

interface Props {
  setCurrentCategory: React.Dispatch<React.SetStateAction<string>>;
  products: Products[];
  setProducts: React.Dispatch<React.SetStateAction<Products[]>>;
  currentCategory: string;
  setCurrentProduct: React.Dispatch<React.SetStateAction<{}>>;
}

function HomePage({
  currentCategory,
  products,
  setCurrentCategory,
  setProducts,
  setCurrentProduct,
}: Props) {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <div className="App">
      <Header currentCategory={currentCategory} />
      <div style={{ display: "flex", gap: "20px" }}>
        <Filter
          products={products}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        />
        <ProductList
          products={products}
          setProducts={setProducts}
          currentCategory={currentCategory}
          setCurrentProduct={setCurrentProduct}
        />
      </div>
    </div>
  );
}

export default HomePage;

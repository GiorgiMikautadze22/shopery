import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Filter from "./components/Filter";
import ProductList from "./components/ProductList";
import { Products } from "./Interface";

function App() {
  const [products, setProducts] = useState<Products[]>([]);
  const [currentCategory, setCurrentCategory] = useState("");

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
        />
      </div>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Filter from "./components/Filter";
import ProductList from "./components/ProductList";
import { Products } from "./Interface";

function App() {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex", gap: "20px" }}>
        <Filter products={products} />
        <ProductList products={products} setProducts={setProducts} />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Filter from "./components/Filter";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex", gap: "20px", marginTop: "120px" }}>
        <Filter />
        <ProductList />
      </div>
    </div>
  );
}

export default App;

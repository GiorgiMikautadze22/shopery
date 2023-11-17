import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import { useState } from "react";
import { Product, Products } from "./Interface";

function App() {
  const [products, setProducts] = useState<Products[]>([]);
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentProduct, setCurrentProduct] = useState<any>({});

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              currentCategory={currentCategory}
              products={products}
              setCurrentCategory={setCurrentCategory}
              setProducts={setProducts}
              setCurrentProduct={setCurrentProduct}
            />
          }
        />
        <Route
          path="/product"
          element={
            <SingleProduct
              currentCategory={currentCategory}
              products={products}
              currentProduct={currentProduct}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

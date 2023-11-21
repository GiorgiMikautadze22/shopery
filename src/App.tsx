import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import { useState } from "react";
import { Product, Products } from "./Interface";
import ShoppingCartPage from "./pages/ShoppingCartPage/ShoppingCartPage";

function App() {
  const [products, setProducts] = useState<Products[]>([]);
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentProduct, setCurrentProduct] = useState<Product>(Object);
  const [productsInCart, setProductsInCart] = useState<Product[]>([]);

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
              productsInCart={productsInCart}
              setProductsInCart={setProductsInCart}
            />
          }
        />
        <Route
          path="/shopping-cart"
          element={
            <ShoppingCartPage
              productsInCart={productsInCart}
              setProductsInCart={setProductsInCart}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

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

  const [filteredProducts, setFilteredProducts] = useState<Products[]>([]);
  const [value, setValue] = useState<number[]>([]);
  const [highestPrice, setHighestPrice] = useState(Number);
  const [lowestPrice, setLowestPrice] = useState(Number);
  const [prices, setPrices] = useState<number[]>([]);

  useEffect(() => {
    setPrices(products.map((product) => product.price));
    setHighestPrice(Math.max(...prices));
    setLowestPrice(Math.min(...prices));
  }, [products]);

  useEffect(() => {
    const filtered = products.filter(
      (item) => item.category === currentCategory
    );
    setValue([lowestPrice, highestPrice]);
    setFilteredProducts(filtered);
  }, [currentCategory]);

  useEffect(() => {
    setValue([lowestPrice, highestPrice]);
  }, [lowestPrice, highestPrice]);

  const handleFilter = () => {
    const filtered = products.filter(
      (product) => product.price >= value[0] && product.price <= value[1]
    );

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    if (filteredProducts.length === 0) {
      setFilteredProducts([...products]);
    }
  }, [filteredProducts]);

  return (
    <div className="App">
      <Header currentCategory={currentCategory} />
      <div style={{ display: "flex", gap: "20px" }}>
        <Filter
          products={products}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          value={value}
          setValue={setValue}
          highestPrice={highestPrice}
          lowestPrice={lowestPrice}
          prices={prices}
          filteredProducts={filteredProducts}
          setFilteredProducts={setFilteredProducts}
          handleFilter={handleFilter}
        />
        <ProductList
          products={products}
          setProducts={setProducts}
          currentCategory={currentCategory}
          setCurrentProduct={setCurrentProduct}
          value={value}
          setValue={setValue}
          highestPrice={highestPrice}
          lowestPrice={lowestPrice}
          prices={prices}
          filteredProducts={filteredProducts}
          setFilteredProducts={setFilteredProducts}
        />
      </div>
    </div>
  );
}

export default HomePage;

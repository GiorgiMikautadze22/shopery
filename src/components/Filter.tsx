import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FilterIcon from "../Images/Filter 24px.svg";
import { Products } from "../Interface";
import RangeSlider from "./PriceRange";

const FilterButton = styled.button`
  width: 130px;
  height: 45px;
  border-radius: 43px;
  background-color: #00b207;
  color: white;
  border: none;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
    transition: 120ms;
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
  }
`;

const StyledInput = styled.input`
  display: none;
`;

const CheckboxContainer = styled.span`
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
  background-color: #fff;
  border: 1px solid #cccccc;
  border-radius: 50%;
  cursor: pointer;
`;

const InnerCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 60%;
  background-color: #00b207;
  border-radius: 50%;
  opacity: 0;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  border: 1px solid #e6e6e6;
  margin: 20px 0px;
`;

const CategoryName = styled.p`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: green;
  }
`;

interface Props {
  products: Products[];
  currentCategory: string;
  setCurrentCategory: React.Dispatch<React.SetStateAction<string>>;
  value: number[];
  setValue: React.Dispatch<React.SetStateAction<number[]>>;
  highestPrice: number;
  lowestPrice: number;
  prices: number[];
  filteredProducts: Products[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<Products[]>>;
  handleFilter: () => void;
}
const Filter = ({
  products,
  currentCategory,
  setCurrentCategory,
  value,
  setValue,
  highestPrice,
  lowestPrice,
  prices,
  filteredProducts,
  setFilteredProducts,
  handleFilter,
}: Props) => {
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  const [specificCategory, setSpecificCategory] = useState<Products[]>([]);
  const [electronics, setElectronics] = useState<Products[]>([]);
  const [jewelery, setJewelery] = useState<Products[]>([]);
  const [mensClothing, setMensClothing] = useState<Products[]>([]);
  const [womansClothing, setWomansClothing] = useState<Products[]>([]);

  // const prices =
  //   products.length > 0 ? products.map((product) => product.price) : [];

  // const highestPrice = prices.length > 0 ? Math.max(...prices) : 0;
  // const lowestPrice = prices.length > 0 ? Math.min(...prices) : 0;

  // const [value, setValue] = useState<number[]>([]);

  // useEffect(() => {
  //   setValue([lowestPrice, highestPrice]);
  // }, [highestPrice]);

  useEffect(() => {
    categories.map((item) => {
      fetch(`https://fakestoreapi.com/products/category/${item}`)
        .then((res) => res.json())
        .then((json) => {
          if (item === "electronics") {
            setElectronics(json);
          } else if (item === "jewelery") {
            setJewelery(json);
          } else if (item === "men's clothing") {
            setMensClothing(json);
          } else {
            setWomansClothing(json);
          }
        });
    });
  }, []);

  return (
    <div style={{ margin: "48px 50px 0px  80px" }}>
      <FilterButton onClick={handleFilter}>
        Filter <img src={FilterIcon} alt="" />
      </FilterButton>
      <div>
        <h4
          style={{ fontSize: "20px", margin: "24px 0px", cursor: "pointer" }}
          onClick={() => setCurrentCategory("")}
        >
          All Categories
        </h4>
        <div style={{ display: "grid", gap: "14px" }}>
          {categories.map((item) => (
            <div
              onClick={() => setCurrentCategory(item)}
              key={item}
              style={{ display: "flex", gap: "10px" }}
            >
              <label>
                <StyledInput type="checkbox" />
                <CheckboxContainer className="checkbox-container">
                  <InnerCircle className="inner-circle"></InnerCircle>
                </CheckboxContainer>
              </label>
              <CategoryName style={{ cursor: "pointer" }}>{item}</CategoryName>
              {item === "electronics" ? (
                <p>({electronics.length})</p>
              ) : item === "jewelery" ? (
                <p>({jewelery.length})</p>
              ) : item === "men's clothing" ? (
                <p>({mensClothing.length})</p>
              ) : item === "women's clothing" ? (
                <p>({womansClothing.length})</p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <Line />
      <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>Price</h3>
      <RangeSlider
        value={value}
        setValue={setValue}
        highestPrice={highestPrice}
        lowestPrice={lowestPrice}
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
      />
      <p>
        Pice:
        {prices.length > 0 ? (
          <span style={{ fontWeight: "600", marginTop: "10px" }}>
            {value[0]} - {value[1]}
          </span>
        ) : null}
      </p>
      <Line />
    </div>
  );
};

export default Filter;

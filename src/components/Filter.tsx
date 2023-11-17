import React, { useState } from "react";
import styled from "styled-components";
import FilterIcon from "../Images/Filter 24px.svg";
import { Products } from "../Interface";

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

interface Props {
  products: Products[];
  currentCategory: string;
  setCurrentCategory: React.Dispatch<React.SetStateAction<string>>;
}
const Filter = ({ products, currentCategory, setCurrentCategory }: Props) => {
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  return (
    <div style={{ margin: "48px 100px 0px  300px" }}>
      <FilterButton>
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
              <p style={{ cursor: "pointer" }}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;

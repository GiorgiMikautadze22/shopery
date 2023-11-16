import React from "react";
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
}
const Filter = ({ products }: Props) => {
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  // let mensClothingCount = 0;
  // let electronicsCount = 0;
  // let jeweleryCount = 0;
  // let womansClothingCount = 0;

  // products.map((item) => {
  //   if (item.category === "electronics") {
  //     electronicsCount++;
  //   } else if (item.category === "jewelery") {
  //     jeweleryCount++;
  //   } else if (item.category === "men's clothing") {
  //     mensClothingCount++;
  //   } else if (item.category === "women's clothing") {
  //     womansClothingCount++;
  //   }
  // });

  return (
    <div style={{ margin: "48px 100px 0px  300px" }}>
      <FilterButton>
        Filter <img src={FilterIcon} alt="" />
      </FilterButton>
      <div>
        <h4 style={{ fontSize: "20px", margin: "24px 0px" }}>All Categories</h4>
        <div style={{ display: "grid", gap: "14px" }}>
          {categories.map((item, index) => (
            <div style={{ display: "flex", gap: "10px" }}>
              <label>
                <StyledInput type="checkbox" />
                <CheckboxContainer className="checkbox-container">
                  <InnerCircle className="inner-circle"></InnerCircle>
                </CheckboxContainer>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;

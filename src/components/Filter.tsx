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

  return (
    <div style={{ margin: "48px 100px 0px  300px" }}>
      <FilterButton>
        Filter <img src={FilterIcon} alt="" />
      </FilterButton>
      <div>
        <h4>All Categories</h4>
        {categories.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default Filter;

import React from "react";
import styled from "styled-components";
import HeaderImg from "../Images/Breadcrumbs.svg";
import HomeIcon from "../Images/home-1 1.svg";
import ArrowIcon from "../Images/Vector (2).svg";
import { Product, Products } from "../Interface";

const StyledHeader = styled.div`
  display: flex;
  background-image: url(${HeaderImg});
  // background-size: 100%; // after image size exeeds 1920px
  background-repeat: no-repeat;
  background-position: 100% 0%;
  width: 100%;
  height: 120px;
  padding-left: 300px;
  gap: 10px;
`;

interface Props {
  currentCategory?: string;
  products?: Products[];
  active?: boolean;
  currentProduct?: Product;
}

const Header = ({
  currentCategory,
  products,
  active,
  currentProduct,
}: Props) => {
  return (
    <StyledHeader>
      <img style={{ width: "24px" }} src={HomeIcon} alt="" />
      <img style={{ width: "8px" }} src={ArrowIcon} alt="" />
      <h2
        style={{
          color: "#999999",
          fontSize: "14px",
          margin: "auto 0px",
          fontWeight: 400,
        }}
      >
        Categories
      </h2>
      {currentCategory ? (
        <>
          <img style={{ width: "8px" }} src={ArrowIcon} alt="" />
          <h2
            style={{
              color: "#999999",
              fontSize: "14px",
              margin: "auto 0px",
              fontWeight: 400,
            }}
          >
            {currentCategory}
          </h2>
        </>
      ) : null}
      {currentProduct ? (
        <>
          <img style={{ width: "8px" }} src={ArrowIcon} alt="" />
          <h2
            style={{
              color: "#00B207",
              fontSize: "14px",
              margin: "auto 0px",
              fontWeight: 400,
            }}
          >
            {currentProduct.title}
          </h2>
        </>
      ) : null}
    </StyledHeader>
  );
};

export default Header;

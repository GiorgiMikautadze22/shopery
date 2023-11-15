import React from "react";
import styled from "styled-components";
import HeaderImg from "../Images/Breadcrumbs.svg";
import HomeIcon from "../Images/home-1 1.svg";
import ArrowIcon from "../Images/Vector (2).svg";

const StyledHeader = styled.div`
  display: flex;
  background-image: url(${HeaderImg});
  //   background-size: 100%; // after image size exeeds 1920px
  background-repeat: no-repeat;
  background-position: 100% 0%;
  width: 100%;
  height: 120px;
  padding-left: 300px;
  gap: 10px;
`;

const Header = () => {
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
      <img style={{ width: "8px" }} src={ArrowIcon} alt="" />
      <h2
        style={{
          color: "#999999",
          fontSize: "14px",
          margin: "auto 0px",
          fontWeight: 400,
        }}
      >
        Vegetables
      </h2>
    </StyledHeader>
  );
};

export default Header;

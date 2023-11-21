import React from "react";
import styled from "styled-components";
import MapPinIcon from "../Images/Map Pin.svg";
import ArrowDown from "../Images/Group.svg";
import Logo from "../Images/Logo (1).svg";
import SearchIcon from "../Images/Search.svg";
import HeartIcon from "../Images/Heart.svg";
import BagIcon from "../Images/Bag.svg";
import CallIcon from "../Images/PhoneCall 1.svg";
import Header from "./Header";

const HeaderText = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
  align-items: center;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  font-size: 12px;
  padding: 10px 300px;
`;

const SearchInput = styled.input`
  width: 400px;
  height: 45px;
  border: 1px solid #cccccc;
  border-radius: 8px 0px 0px 8px;
  background-image: url(${SearchIcon});
  background-position: 3% 50%;
  background-repeat: no-repeat;
  padding-left: 40px;
  outline: none;
`;

const SearchButton = styled.button`
  width: 100px;
  height: 45px;
  background-color: #00b207;
  color: white;
  border: none;
  border-radius: 0px 8px 8px 0px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const VerticalLine = styled.div`
  display: flex;
  margin: auto 0px;
  width: 1px;
  height: 25px;
  background-color: #e6e6e6;
  border: none;
`;

const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e6e6e6;
  border: none;
  margin-top: 15px;
`;

const PaymentHeader = () => {
  return (
    <div>
      <HeaderWrapper
        style={{
          backgroundColor: "#333333",
          color: "#b3b3b3",
        }}
      >
        <HeaderText>
          <img src={MapPinIcon} alt="" />
          <p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
        </HeaderText>
        <div style={{ display: "flex", gap: "10px" }}>
          <HeaderText>
            <p>Eng</p>
            <img src={ArrowDown} alt="" />
          </HeaderText>
          <HeaderText>
            <p>USD</p>
            <img src={ArrowDown} alt="" />
          </HeaderText>
          <HeaderText>
            <p>Sign In</p>/<p>Sign Up</p>
          </HeaderText>
        </div>
      </HeaderWrapper>
      <HeaderWrapper style={{ marginTop: "25px" }}>
        <img src={Logo} alt="" />
        <div>
          <SearchInput type="text" placeholder="Search" />
          <SearchButton>Search</SearchButton>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <img style={{ width: "27px" }} src={HeartIcon} alt="" />
          <VerticalLine />
          <div style={{ display: "flex", gap: "10px" }}>
            <img style={{ width: "32px" }} src={BagIcon} alt="" />
            <div>
              <p>Shopping cart:</p>
              <label style={{ fontWeight: 600 }}>$57.00</label>
            </div>
          </div>
        </div>
      </HeaderWrapper>
      <HorizontalLine />
      <HeaderWrapper>
        <HeaderText style={{ color: "#666666", gap: "30px" }}>
          <p>Home</p>
          <p>Shop</p>
          <p>Pages</p>
          <p>Blog</p>
          <p>About Us</p>
          <p>Contact Us</p>
        </HeaderText>
        <HeaderText>
          <img src={CallIcon} alt="" />
          <p>(219) 555-0114</p>
        </HeaderText>
      </HeaderWrapper>
      <Header />
    </div>
  );
};

export default PaymentHeader;

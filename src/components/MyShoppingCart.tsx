import React, { useState } from "react";
import styled from "styled-components";
import TestImage from "../Images/Image (1).svg";
import CloseIcon from "../Images/Close.svg";
import Minus from "../Images/Minus.svg";
import Plus from "../Images/Plus.svg";
import { Product } from "../Interface";

const Title = styled.h2`
  display: flex;
  justify-content: center;
  margin: 40px auto;
  font-size: 32px;
`;

const CartWrapper = styled.div`
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  padding: 20px;
  align-items: center;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e6e6e6;
  border: none;
`;

const ReturnAndUpldateButton = styled.button`
  width: 170px;
  height: 45px;
  background-color: #f2f2f2;
  border-radius: 43px;
  border: none;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const CouponInput = styled.input`
  width: 530px;
  height: 52px;
  border: 1px solid #e6e6e6;
  border-radius: 46px;
  padding-left: 30px;
  font-size: 16px;
  outline: none;
`;

const CouponButton = styled.button`
  width: 200px;
  height: 52px;
  font-size: 16px;
  font-weight: 600;
  background-color: #333333;
  border: none;
  color: white;
  border-radius: 43px;
  position: relative;
  right: 72px;

  &:hover {
    transition: 120ms;
    opacity: 0.7;
  }
`;

const CheckoutButton = styled.button`
  width: 100%;
  background-color: #00b207;
  color: white;
  border: none;
  border-radius: 43px;
  font-size: 16px;
  font-weight: 600;
  height: 52px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  gap: 100px;
  alignitems: center;
`;

interface Props {
  productsInCart: Product[];
  setProductsInCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

const MyShoppingCart = ({ productsInCart, setProductsInCart }: Props) => {
  const [count, setCount] = useState(1);

  return (
    <div style={{ marginBottom: "100px" }}>
      <Title>My Shopping Cart</Title>
      <div
        style={{
          display: "flex",
          gap: "25px",
          justifyContent: "center",
        }}
      >
        <div>
          <CartWrapper>
            <div>
              <div
                style={{
                  display: "flex",
                  gap: "350px",
                  color: "#808080",
                  fontWeight: 600,
                  marginBottom: "10px",
                }}
              >
                <p>PRODUCT</p>
                <div style={{ display: "flex", gap: "80px" }}>
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                </div>
              </div>
              <Line />
              {productsInCart.map((product) => (
                <ProductInfo key={product.title}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "90px",
                      width: "240px",
                    }}
                  >
                    <img
                      style={{
                        width: "100px",
                        height: "100px",
                        margin: "20px",
                      }}
                      src={product.image}
                      alt=""
                    />
                    <p>{product.title}</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "70px",
                      alignItems: "center",
                    }}
                  >
                    <p>${product.price}</p>
                    <div
                      style={{
                        border: "1px solid #e6e6e6",
                        borderRadius: "170px",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "5px",
                      }}
                    >
                      <img
                        src={Minus}
                        onClick={() => setCount(count - 1)}
                        alt=""
                      />
                      <p>{count}</p>
                      <img
                        onClick={() => setCount(count + 1)}
                        src={Plus}
                        alt=""
                      />
                    </div>
                    <p>${product.price * count}</p>
                    <img src={CloseIcon} alt="" />
                  </div>
                </ProductInfo>
              ))}

              <Line />
              <div
                style={{
                  marginTop: "15px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <ReturnAndUpldateButton>Return to shop</ReturnAndUpldateButton>
                <ReturnAndUpldateButton>Update Cart</ReturnAndUpldateButton>
              </div>
            </div>
          </CartWrapper>
          <CartWrapper
            style={{
              marginTop: "25px",
              display: "flex",
              gap: "30px",
              justifyContent: "space-between",
            }}
          >
            <h3 style={{ fontSize: "20px" }}>Coupon Code</h3>
            <CouponInput type="text" placeholder="Enter code" />
            <CouponButton>Apply Coupon</CouponButton>
          </CartWrapper>
        </div>
        <CartWrapper
          style={{
            width: "425px",
            height: "300px",
            display: "grid",
            gap: "5px",
          }}
        >
          <h3>Cart Total</h3>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p>Subtotal:</p>
            <h5>$84.00</h5>
          </div>
          <Line />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p>Shipping:</p>
            <h5>Free</h5>
          </div>
          <Line />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p style={{ fontSize: "20px" }}>Total:</p>
            <h5 style={{ fontSize: "20px" }}>$84.00</h5>
          </div>
          <CheckoutButton>Proceed to checkout</CheckoutButton>
        </CartWrapper>
      </div>
    </div>
  );
};

export default MyShoppingCart;

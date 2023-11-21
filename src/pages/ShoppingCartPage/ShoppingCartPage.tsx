import React from "react";
import PaymentHeader from "../../components/PaymentHeader";
import MyShoppingCart from "../../components/MyShoppingCart";
import { Product } from "../../Interface";

interface Props {
  productsInCart: Product[];
  setProductsInCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

const ShoppingCartPage = ({ productsInCart, setProductsInCart }: Props) => {
  return (
    <div>
      <PaymentHeader />
      <MyShoppingCart
        productsInCart={productsInCart}
        setProductsInCart={setProductsInCart}
      />
    </div>
  );
};

export default ShoppingCartPage;

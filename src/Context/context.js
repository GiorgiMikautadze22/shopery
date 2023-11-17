import { createContext, useContext } from "react";

const UserContext = createContext();

export const Context = ({ children }) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};

export const ProductsShop = () => {
  return useContext(UserContext);
};

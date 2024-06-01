"use client";
import React from "react";
import { CartContextPropvider } from "../Hooks/useCart";
interface cartProviderProps {
  children: React.ReactNode;
}

const CartProvider: React.FC<cartProviderProps> = ({ children }) => {
  return <CartContextPropvider>{children}</CartContextPropvider>;
};

export default CartProvider;

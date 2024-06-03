import React from "react";
import Cart from "./Cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart",
  description: "E-Commerce Site Cart section",
};

const Page = () => {
  return (
    <div className="mt-5">
      <Cart />
    </div>
  );
};

export default Page;

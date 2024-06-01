import React, { Suspense } from "react";
import ProductList from "./ProductList";
import { ProductType } from "./ProductCard";

const ProductListWrapper = ({ products }: { products: ProductType[] }) => {
  return (
    <>
      <Suspense>
        <ProductList products={products} />
      </Suspense>
    </>
  );
};

export default ProductListWrapper;

"use client";
import React, { useEffect, useState } from "react";
import ProductCard, { ProductType } from "./ProductCard";
import { useSearchParams } from "next/navigation";

const ProductList = ({ products }: { products: ProductType[] }) => {
  const searchParams = useSearchParams();
  const [productList, setProductList] = useState<ProductType[]>(products);

  useEffect(() => {
    const TempSearchTerm = searchParams?.get("search") || "";
    if (TempSearchTerm?.length > 0) {
      setProductList((prevList) => {
        return prevList?.filter(
          (item) =>
            item?.title
              ?.toLocaleLowerCase()
              ?.includes(TempSearchTerm?.toLocaleLowerCase()) ||
            item?.category
              ?.toLocaleLowerCase()
              ?.includes(TempSearchTerm?.toLocaleLowerCase())
        );
      });
    } else {
      setProductList(products);
    }
  }, [searchParams]);

  return (
    <>
      {productList?.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 mt-8">
          {productList?.map((product: ProductType, index: number) => {
            return <ProductCard product={product} key={product?.id} />;
          })}
        </div>
      ) : (
        <div className="flex w-full justify-center items-center py-6 text-2xl">
          Not Found!
        </div>
      )}
    </>
  );
};

export default ProductList;

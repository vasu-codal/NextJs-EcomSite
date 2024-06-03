import React from "react";
import { ProductType } from "../../../../components/Product/ProductCard";
import ProductDetails from "./ProductDetails";

export async function generateMetadata({
  params,
}: {
  params: { productdetails: string };
}) {
  const product: ProductType = await fetch(
    `https://fakestoreapi.com/products/${params?.productdetails}`
  ).then((res) => res.json());

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      images: product?.image,
    },
  };
}

export async function generateStaticParams() {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return products?.map((product: ProductType) => {
    return { productdetails: `${product.id}` };
  });
}

export default async function page({
  params,
}: {
  params: { productdetails: string };
}) {
  const product: ProductType = await fetch(
    `https://fakestoreapi.com/products/${params?.productdetails}`
  ).then((res) => res.json());

  return (
    <ProductDetails
      productDetails={{ ...product, quantity: 1, total: product?.price }}
    />
  );
}

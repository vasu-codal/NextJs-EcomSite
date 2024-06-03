import React from "react";
import Container from "../../../../components/Container";
import ProductListWrapper from "../../../../components/Product/ProductListWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product By Category",
  description: "E-Commerce Site Product section",
};

export async function generateStaticParams() {
  const categories = await fetch(
    "https://fakestoreapi.com/products/categories"
  ).then((res) => res.json());

  return categories.map((item: string) => ({
    categoryname: item,
  }));
}

export default async function Page({
  params,
}: {
  params: { categoryname: string };
}) {
  const products = await fetch(
    `https://fakestoreapi.com/products/category/${params?.categoryname}`
  ).then((res) => res.json());

  return (
    <Container>
      <ProductListWrapper products={products} />
    </Container>
  );
}

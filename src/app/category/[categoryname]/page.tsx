import React from "react";
import ProductCard, {
  ProductType,
} from "../../../../components/Product/ProductCard";
import Container from "../../../../components/Container";
import ProductList from "../../../../components/Product/ProductList";

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
      <ProductList products={products} />
    </Container>
  );
}

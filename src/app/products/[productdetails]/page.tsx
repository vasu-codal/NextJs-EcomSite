import React from "react";
import { ProductType } from "../../../../components/Product/ProductCard";
import Container from "../../../../components/Container";
import RatingReview from "../../../../components/RatingReview";
import placeHolderImage from "../../../../public/images/No-Image-Placeholder.svg.png";
import Image from "next/image";
import Button from "../../../../components/Button";

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
    <div className="p-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Image
              src={product?.image ?? placeHolderImage}
              alt="Product Image"
              width={500}
              height={0}
              className="w-full max-h-80 object-contain mix-blend-multiply contrast-125"
            />
          </div>
          <div className="flex flex-col gap-1 text-slate-500 text-sm">
            <h2 className="text-2xl md:text-3xl font-medium text-slate-700">
              {product?.title}
            </h2>
            <div className="text-2xl md:text-3xl font-semibold text-slate-700">
              ${product?.price?.toFixed(2)}
            </div>
            <div className="flex items-center gap-2">
              <RatingReview rating={product?.rating?.rate} />
              <div>{product?.rating?.count} reviews</div>
            </div>
            <hr className="w-[30%] mt-2 mb-2" />
            <div className="text-justify">{product?.description}</div>
            <hr className="w-[30%] mt-2 mb-2" />
            <div>
              <span className="font-semibold">CATEGORY: </span>
              {product?.category}
            </div>
            <div className="text-teal-400">In stock</div>
            <hr className="w-[30%] mt-2 mb-2" />
            <div className="max-w-80">
              <Button name="Add to Cart" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

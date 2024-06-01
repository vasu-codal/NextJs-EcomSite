"use client";
import React from "react";
import placeHolderImage from "../../public/images/No-Image-Placeholder.svg.png";
import Image from "next/image";
import PopHover from "../PopHover";
import { redirect } from "next/navigation";
import RatingReview from "../RatingReview";
import Link from "next/link";

export interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  quantity: number;
  total: number;
}

interface ProductCardProps {
  product: ProductType;
  key: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className=" col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-md p-2 transition hover:scale-105 text-center text-sm ">
      <Link href={`/products/${product?.id}`}>
        <div className="flex flex-col justify-center items-center gap-2 text-base  text-slate-600">
          <Image
            src={product?.image ?? placeHolderImage}
            alt="Product Image"
            width={100}
            height={0}
            className="w-full max-h-48 object-contain mb-2 mix-blend-multiply contrast-125"
          />
          <p className="font-bold relative group">
            {product?.title?.length > 20
              ? product?.title?.substring(0, 20) + "..."
              : product?.title ?? "Product Title"}
            {product?.title?.length > 20 && <PopHover title={product?.title} />}
          </p>
          <p className="text-pretty text-sm relative group">
            {product?.description?.length > 20
              ? product?.description?.substring(0, 45) + "..."
              : product?.description ?? "Product Description"}
            {product?.description?.length > 20 && (
              <PopHover title={product?.description} />
            )}
          </p>
          <RatingReview rating={product?.rating?.rate} />
          <p>{product?.rating?.count ?? "0"} reviews</p>
          <p className="text-base font-bold text-slate-900">
            ${product?.price?.toFixed(2)}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;

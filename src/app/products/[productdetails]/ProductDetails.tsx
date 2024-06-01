"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import placeHolderImage from "../../../../public/images/No-Image-Placeholder.svg.png";
import { ProductType } from "../../../../components/Product/ProductCard";
import RatingReview from "../../../../components/RatingReview";
import Button from "../../../../components/Button";
import Container from "../../../../components/Container";
import { useCart } from "../../../../components/Hooks/useCart";
import { useRouter } from "next/navigation";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { MdOutlineDone } from "react-icons/md";

const ProductDetails = ({
  productDetails,
}: {
  productDetails: ProductType;
}) => {
  const [isProductInCart, setIsProductInCart] = useState<boolean>(false);
  const { cartProducts, handleCartProduct } = useCart();
  const [product, setProduct] = useState({ ...productDetails });
  const router = useRouter();

  const hadleProductQty = (action: string) => {
    if (action === "increase") {
      setProduct((prev) => ({
        ...prev,
        quantity: prev?.quantity + 1,
        total: prev?.price * (prev?.quantity + 1),
      }));
    }
    if (action === "decrease") {
      setProduct((prev) => ({
        ...prev,
        quantity: prev?.quantity - 1,
        total: prev?.price * (prev?.quantity - 1),
      }));
    }
  };

  useEffect(() => {
    if (cartProducts) {
      const addedProduct = cartProducts.find(
        (cartProduct: ProductType) => cartProduct?.id === product?.id
      );
      if (addedProduct?.id) {
        setIsProductInCart(addedProduct?.id ? true : false);
      }
    }
  });

  const sucessNotify = () =>
    toast.success("Added Product To Cart Sucessfully!");

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
            <hr className="w-[30%] mt-2 mb-2" />
            {!isProductInCart && (
              <div className="flex flex-row items-center gap-2">
                <div className="font-semibold">QUANTITY: </div>
                <div className="flex flex-row items-center gap-2">
                  <span
                    className="text-slate-500 text-2xl hover:text-slate-400 hover:cursor-pointer"
                    onClick={() => {
                      if (product?.quantity > 1) {
                        hadleProductQty("decrease");
                      } else {
                        toast.error("Quantity can not be 0");
                      }
                    }}
                  >
                    <CiCircleMinus />
                  </span>
                  <span className="text-lg">{product?.quantity ?? "1"}</span>
                  <span
                    className="text-slate-500 text-2xl hover:text-slate-400 hover:cursor-pointer"
                    onClick={() => {
                      hadleProductQty("increase");
                    }}
                  >
                    <CiCirclePlus />
                  </span>
                </div>
              </div>
            )}
            {isProductInCart ? (
              <div className="flex flex-row gap-1 items-center">
                <span className="bg-teal-400 text-white text-sm rounded-full size-4 border">
                  <MdOutlineDone />
                </span>
                <span>Product added to cart</span>
              </div>
            ) : (
              <div className="text-teal-400">In stock</div>
            )}

            <div className="max-w-80">
              <Button
                name={isProductInCart ? "Veiw Cart" : "Add to Cart"}
                onClick={() => {
                  if (!isProductInCart) {
                    handleCartProduct(product);
                    sucessNotify();
                  } else {
                    router?.push("/cart");
                  }
                }}
                outline={isProductInCart}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;

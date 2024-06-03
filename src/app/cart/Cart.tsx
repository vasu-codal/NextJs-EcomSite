"use client";
import React from "react";
import Container from "../../../components/Container";
import { useCart } from "../../../components/Hooks/useCart";
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
import Image from "next/image";
import toast from "react-hot-toast";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import Button from "../../../components/Button";

export const RenderColl = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-5 text-xs md:text-sm gap-4 border-t-[1.5px] border-slate-200 py-4 items-center">
      {children}
    </div>
  );
};

const Cart = () => {
  const {
    cartProducts,
    handleCartProductQty,
    cartTotalQty,
    removeCartProduct,
    clearCart,
  } = useCart();

  return (
    <Container>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl text-slate-600 text-center">
          {cartProducts === undefined
            ? null
            : cartProducts?.length > 0
            ? "Shopping Cart"
            : "Your cart is empty"}
        </h1>
        {cartProducts && cartProducts?.length > 0 && (
          <div className="w-full px-0 md:px-10 py-6 text-xs text-slate-500">
            <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center">
              <div className="col-span-2 justify-self-start">PRODUCT</div>
              <div className="justify-self-center">PRICE</div>
              <div className="justify-self-center">QUANTITY</div>
              <div className="justify-self-end">TOTAL</div>
            </div>

            {cartProducts?.map((product, index) => {
              return (
                <>
                  <div key={index}>
                    <RenderColl>
                      <div className="col-span-2 justify-self-start flex gap-2 md:gap-4">
                        <div className="col-span-2 justify-self-start flex gap-2 md:gap-4">
                          <div className="col-span-2 justify-self-start flex flex-col md:flex-row gap-2 md:gap-5">
                            <Image
                              src={product?.image}
                              alt={product?.title}
                              width={0}
                              height={0}
                              className="size-16 object-contain mb-2 mix-blend-multiply contrast-125"
                              unoptimized
                            />
                            <div className="flex flex-col justify-between">
                              <Link href={`products/${product?.id}`}>
                                {product?.title}
                              </Link>
                              <div className="font-bold">
                                {product?.category?.toLocaleUpperCase()}
                              </div>
                              <div className="w-[70px]">
                                <button
                                  className="text-slate-500 underline"
                                  onClick={() => {
                                    removeCartProduct(product);
                                  }}
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="justify-self-center">
                        {product?.price}
                      </div>
                      <div className="justify-self-center">
                        <div className="flex flex-row items-center gap-2">
                          <span
                            className="text-slate-500 text-2xl hover:text-slate-400 hover:cursor-pointer"
                            onClick={() => {
                              if (product?.quantity && product?.quantity > 1) {
                                handleCartProductQty(product, "decrease");
                              } else {
                                toast.error("Quantity can not be 0");
                              }
                            }}
                          >
                            <CiCircleMinus />
                          </span>
                          <span className="text-lg">
                            {product?.quantity ?? "1"}
                          </span>
                          <span
                            className="text-slate-500 text-2xl hover:text-slate-400 hover:cursor-pointer"
                            onClick={() => {
                              handleCartProductQty(product, "increase");
                            }}
                          >
                            <CiCirclePlus />
                          </span>
                        </div>
                      </div>
                      <div className="justify-self-end font-semibold">
                        ${product?.total}
                      </div>
                    </RenderColl>
                  </div>
                </>
              );
            })}

            <div className="py-4 flex flex-col md:flex-row justify-between gap-4">
              <div className="w-[90px]">
                <button
                  className="
                    disabled:opacity-70
                    disabled:cursor-not-allowed
                    rounded-md
                    hover:opacity-80
                    transition
                    w-full
                    border-slate-700
                    flex items-center justify-center gap-2
                    bg-white
                    text-slate-700
                    text-sm
                    py-1 px-2
                    font-light
                    border-[1px]"
                  onClick={() => {
                    clearCart();
                  }}
                >
                  Clear Cart
                </button>
              </div>
              <div className="text-sm flex flex-col gap-1 items-start">
                <div className="flex justify-between w-full text-base font-semibold">
                  <span>Subtotal</span>
                  <span>${cartTotalQty?.totalAmount?.toFixed(2)}</span>
                </div>
                <p className="text-slate-500">
                  Taxes and shipping calculated at checkout
                </p>
                <Button name="Login To Checkout" outline />
                <div className="flex text-sm text-slate-400 items-center gap-3">
                  <Link href={"/"}>
                    <span className="pr-2 inline-block align-middle">
                      <GoArrowLeft />
                    </span>
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        {cartProducts && cartProducts?.length === 0 && (
          <div className="text-lg text-slate-400 mt-4">
            <Link href={"/register"}>
              <span className="pr-2 inline-block">
                <GoArrowLeft />
              </span>
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Cart;

"use client";
import React, { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi";
import { useCart } from "../Hooks/useCart";
import { useRouter } from "next/navigation";
import Menu from "../Menu/Menu";
import MenuItem from "../Menu/MenuItem";
import Backdrop from "../Menu/Backdrop";
import Link from "next/link";

const HeaderRightSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const router = useRouter();
  const { cartTotalQty } = useCart();

  return (
    <div className="flex flex-row items-center gap-10">
      <div
        className="relative text-3xl text-slate-600 hover:cursor-pointer"
        onClick={() => {
          router?.push("/cart");
        }}
      >
        <CiShoppingCart />
        <div className="absolute size-6 -top-2 -right-2 rounded-full bg-slate-700 text-white text-lg ">
          <span className="flex items-center justify-center text-center text-sm pt-[3px]">
            {cartTotalQty?.totalQty}
          </span>
        </div>
      </div>
      <div className="relative">
        <div
          className="flex flex-row text-2xl  text-slate-600 gap-1 rounded-3xl border-[1px] border-slate-400 py-2 px-2 hover:shadow-md duration-200 hover:cursor-pointer"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <span>
            <HiOutlineUser />
          </span>
          <span>{isMenuOpen ? <FaCaretUp /> : <FaCaretDown />}</span>
        </div>
        {isMenuOpen && (
          <>
            <Menu
              onClose={() => {
                setIsMenuOpen(false);
              }}
            >
              <MenuItem href={"/login"}>Login</MenuItem>
              <MenuItem href={"/register"}>Register</MenuItem>
            </Menu>
            <span
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              <Backdrop />
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default HeaderRightSection;

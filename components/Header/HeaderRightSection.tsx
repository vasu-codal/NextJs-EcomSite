"use client";
import React, { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi";

const HeaderRightSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-row items-center gap-10">
      <div className="relative text-3xl text-slate-600 ">
        <CiShoppingCart />
        <div className="absolute size-6 -top-2 -right-2 rounded-full bg-slate-700 text-white text-lg ">
          <span className="flex items-center justify-center text-center text-sm pt-[2px]">
            7
          </span>
        </div>
      </div>
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
    </div>
  );
};

export default HeaderRightSection;

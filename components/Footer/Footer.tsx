import React from "react";
import FooterItems from "./FooterItems";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = async () => {
  const categories = await fetch(
    "https://fakestoreapi.com/products/categories"
  ).then((res) => res.json());

  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <div className=" max-w-[1920px] mx-auto xl:px-20 md:px-2 px-4">
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterItems>
            <h2 className="text-base font-bold mb-2">Shop Categories</h2>
            <div className="flex flex-col justify-center items-start gap-1">
              {categories?.map((item: string, index: number) => {
                return <div key={index}>{item?.toLocaleUpperCase()}</div>;
              })}
            </div>
          </FooterItems>
          <FooterItems>
            <h2 className="text-base font-bold mb-2">Customer Service</h2>
            <div className="flex flex-col justify-center items-start gap-1">
              <div>Contact Us</div>
              <div>Shipping Policy</div>
              <div>Returns & Exchanges</div>
              <div>Watches</div>
              <div>FAQs</div>
            </div>
          </FooterItems>
          <FooterItems className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-base font-bold mb-2">About Us</h2>
            <div className="flex flex-col justify-center items-start">
              <p className="pb-1">
                At our E-commerec store, we are dedicated to providing the
                latest and greatest devices and accessories to our customers.
                With a wide selection of categories.
              </p>
              <span>
                &copy;{new Date()?.getFullYear()} E-Shop. All rights reserved.
              </span>
            </div>
          </FooterItems>
          <FooterItems>
            <h2 className="text-base font-bold mb-2">Follow Us</h2>
            <div className="flex flex-row  items-start gap-3 text-xl ">
              <div>
                <FaFacebook />
              </div>
              <div>
                <BsInstagram />
              </div>
              <div>
                <BsTwitter />
              </div>
              <div>
                <BsYoutube />
              </div>
            </div>
          </FooterItems>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

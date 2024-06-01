"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logos/Eshop-Logo.png";
import Container from "../Container";
import HeaderRightSection from "./HeaderRightSection";
import SearchInput from "../Product/SearchInput";

const Header = () => {
  return (
    <div className="w-full bg-slate-200 z-30 shadow-sm top-0">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row justify-between items-center gap-2 h-full w-full">
            <div>
              <Link href={"/"}>
                <Image src={Logo} alt="site-logo" className="max-w-36" />
              </Link>
            </div>
            <div className="md:flex md:flex-row items-center justify-center hidden">
              <SearchInput />
            </div>
            <div>
              <HeaderRightSection />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Header;

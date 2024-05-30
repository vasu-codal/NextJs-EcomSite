import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logos/Eshop-Logo.png";
import Container from "../Container";
import HeaderRightSection from "./HeaderRightSection";

interface item {
  name: string;
  link: string;
}

const Header = () => {
  return (
    <div className=" top-0 w-full bg-slate-200 shadow-md z-40">
      <Container>
        <div className="flex flex-row justify-between items-center gap-2">
          <div>
            <Link href={"/"}>
              <Image
                src={Logo}
                alt="site-logo"
                className="max-w-24 max-h-24"
              ></Image>
            </Link>
          </div>
          <div className="md:flex md:flex-row items-center justify-center hidden">
            <input
              className="px-3 py-2 w-[350px] rounded-l-md rounded-r-none border-[1px] border-gray-300 outline-none"
              placeholder="Explore E-shop"
              name="searchInput"
            ></input>
            <button
              name="searchButton"
              className="px-2 py-[6px] rounded-r-md rounded-l-none border-[1px] bg-slate-700 hover:bg-slate-600 text-white text-lg border-none"
            >
              Search
            </button>
          </div>
          <div>
            <HeaderRightSection />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;

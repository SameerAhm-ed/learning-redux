"use client";
import Link from "next/link";
import { CgShoppingCart } from "react-icons/cg";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Header = () => {
  const cartValue = useSelector((state: RootState) => state.cart.totalQuantity);

  return (
    <nav className="container flex justify-between p-5 mx-auto">
      <div className="text-2xl">Logo Here</div>
      <div className="">
        <ul className="flex flex-row text-2xl gap-x-6">
          <li>
            <Link href={"#"}>Home</Link>
          </li>
          <li>
            <Link href={"/about/"}>About us</Link>
          </li>
          <li>
            <Link href={"/contact/"}>Contact us</Link>
          </li>
        </ul>
      </div>
      <div className="relative flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
        <span className="absolute top-1 right-0 w-4 h-4 text-center text-white bg-red-600 rounded-full text-[11px]">
          {cartValue}
        </span>
        <CgShoppingCart className="w-7 h-7" />
      </div>
    </nav>
  );
};

export default Header;

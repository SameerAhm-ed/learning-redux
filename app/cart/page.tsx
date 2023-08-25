"use client";
import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const cartItems = useSelector((state: RootState) => state.cart);
  console.log(cartItems.items)
  return (
    <>
      <section>
        <div>
          <h1 className="text-6xl text-center">CART PAGE</h1>
        </div>
      </section>
    </>
  );
};

export default Page;

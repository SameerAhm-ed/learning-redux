"use client";

import { useDispatch } from "react-redux";
import { cartActions } from "@/redux/slices/cartSlice";
import toast from "react-hot-toast";

const AddToCart = () => {
  const dispatch = useDispatch();
  const addItem = () => {
    dispatch(cartActions.addToCart({ quantity: 1, product: {} }));
    toast.success("Product Added");
  };
  return (
    <button onClick={addItem} className="p-2 text-white bg-blue-500 rounded-md">
      Add to Cart
    </button>
  );
};

export default AddToCart;

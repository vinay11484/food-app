import React from "react";
import ItemList from "./ItemList";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
export default function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center">
      <div>Cart</div>
      <button
        className="bg-slate-950 m-2 p-2 rounded-xl text-white"
        onClick={handleClear}
      >
        ClearCart
      </button>
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems}></ItemList>
      </div>
    </div>
  );
}

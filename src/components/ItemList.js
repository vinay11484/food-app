import React from "react";
import { IMAGE_URL } from "../utils/contants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
export default function ItemList({ items }) {
  const dispatch = useDispatch();
  const addCartItems = (item) => {
    dispatch(addItem(item));
  };

  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="flex justify-between pb-8 mb-8 border-b-2 border-gray-300"
        >
          <div className=" text-left p-2">
            <div>{item?.card?.info?.name}</div>
            <div>RS-{item?.card?.info?.price / 100}</div>
            <div>{item?.card?.info?.description}</div>
          </div>
          <div className="w-[130px] h-[100px] mb-8">
            <div className="absolute ml-[35px] mt-[110px]">
              <button
                className="bg-white px-4"
                onClick={() => addCartItems(item)}
              >
                ADD +
              </button>
            </div>
            <img src={IMAGE_URL + item?.card?.info?.imageId}></img>
          </div>
        </div>
      ))}
    </div>
  );
}

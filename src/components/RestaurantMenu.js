import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import RestaurantCategories from "./RestaurantCategories";
export default function RestaurantMenu() {
  const { resId } = useParams();

  const resInfo = useRestaurant(resId);
  const [shoIndex, setShowIndex] = useState(null);

  const { name, cuisines, costForTwoMessage } =
    resInfo != null ? resInfo?.cards[0]?.card?.card?.info : [];

  const { itemCards } =
    resInfo != null
      ? resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card
      : [];
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (crd) => {
        if (
          crd?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ) {
          return crd;
        }
        if (
          crd?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        ) {
          return crd;
        }
      }
    );
  return resInfo == null ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="text-center">
      <div className="font-bold m-4 p-2">{name}</div>
      <div>
        {cuisines.join(", ")} - {costForTwoMessage}
      </div>
      {categories.map((category, index) => (
        <RestaurantCategories
          key={category.card.card.title}
          data={category?.card?.card}
          shoItems={index === shoIndex && true}
          setShowIndex={() => setShowIndex(index)}
        ></RestaurantCategories>
      ))}
    </div>
  );
}

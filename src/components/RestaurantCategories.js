import React, { useState } from "react";
import ItemList from "./ItemList";

export default function RestaurantCategories({ data, shoItems, setShowIndex }) {
  // const [shoItems, setShowItems] = useState(false);
  // console.log(data);
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 bg-gray-50 mx-auto my-4 p-4 shadow-lg">
        {data.categories ? (
          <div className="text-left">
            <span>{data.title}</span>
            {data.categories.map((d) => (
              <div
                key={d.title}
                className=" w-[729px] bg-gray-50 mx-auto my-4 py-4 shadow-lg"
              >
                <div
                  className="flex justify-between cursor-pointer"
                  onClick={handleClick}
                >
                  <span>
                    {d.title} ({d.itemCards.length})
                  </span>
                  <span>{"\u21E3"}</span>
                </div>
                <div className="text-center">
                  {console.log(shoItems, "hello")}
                  {shoItems && <ItemList items={d.itemCards}></ItemList>}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div
              className="flex justify-between cursor-pointer"
              onClick={handleClick}
            >
              <span>
                {data.title} ({data.itemCards.length})
              </span>
              <span>{"\u21E3"}</span>
            </div>
            <div>
              {console.log(shoItems, "hello")}
              {shoItems && <ItemList items={data.itemCards}></ItemList>}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

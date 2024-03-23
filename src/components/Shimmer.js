// Fake page
import React from "react";
export default function () {
  return (
    <div className="bg-gray-200 flex flex-wrap w-[1300px] m-auto justify-evenly">
      {[...Array(16)].map((x, i) => (
        <div
          className="w-[270px] h-[300px] bg-gray-300  mt-10 rounded-2xl"
          key={i}
        ></div>
      ))}
    </div>
  );
}

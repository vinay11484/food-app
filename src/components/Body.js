import ResCart, { withPromotedLabel } from "./ResCart";
import Shimmer from "./Shimmer";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { SWIGGY_URl } from "../utils/contants";
import { useQuery } from "@tanstack/react-query";

const Body = () => {
  const [resturents, setRestrents] = useState([]);
  const [filterResturents, setFilterRestrents] = useState([]);

  // const { status, isPending, error, data } = useQuery({
  //   queryKey: ["repoData"],
  //   queryFn: () => fetch(SWIGGY_URl).then((res) => res.json()),
  // staleTime: 1000 * 5,
  // gcTime: 1000,
  // });
  // console.log(data);

  // useEffect(() => {
  //   if (status === "success") {
  //     setRestrents(
  //       data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
  //         ?.restaurants
  //     );
  //     setFilterRestrents(
  //       data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
  //         ?.restaurants
  //     );
  //   }
  // }, [status, data]);
  // console.log("hello", resturents);

  // const [searchText, setSearchText] = useState("");
  const refInput = useRef(null);
  const RestuarentCardPromoted = withPromotedLabel(ResCart);

  // data featching from swiggy api->>>

  useEffect(() => {
    featchData();
  }, []);

  const featchData = async () => {
    const data = await fetch(SWIGGY_URl);
    const json = await data.json();
    setRestrents(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestrents(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }; //optional chaning<<<-

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>you are offline</h1>;
  }
  //data featching from swiggy api <<<-
  const handleClick = () => {
    const filterResturent = resturents.filter((res) =>
      res.info.name
        .toLowerCase()
        .includes(refInput?.current?.value.toLowerCase())
    );
    setFilterRestrents(filterResturent);
  };
  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      handleClick();
    }
  };
  return resturents.length === 0 ? (
    <Shimmer></Shimmer> // rendar fack page
  ) : (
    <div className="bg-gray-100 w-10/12 m-auto p-4">
      {/* start of search resturents */}
      <div className="search">
        <button
          className="bg-gray-200 hover:bg-gray-300 absolute font-medium mt-[10px] ml-[198px] border-2 border-gray-400 px-1 rounded-md"
          onClick={handleClick}
        >
          search
        </button>
        <input
          className="border-2 border-gray-400 m-2 h-8 w-[250px] rounded-md"
          type="text"
          // value={searchText}
          ref={refInput}
          // onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleEnter}
        ></input>

        {/* end of search resturents */}

        {/* start of top rated resturents  */}
        <button
          className="bg-gray-200 p-[2px] font-medium rounded-md border-2 border-gray-400 hover:bg-gray-300"
          onClick={() => {
            const restaurants1 = resturents.filter(
              (res) => res?.info?.avgRating > 4.5
            );
            setFilterRestrents(restaurants1);
          }}
        >
          top rated restuarent
        </button>
        {/* end of top rated resturents */}
      </div>
      <div className="flex flex-wrap justify-start">
        {filterResturents.map((resData) => (
          <Link key={resData.info.id} to={"/restaurant/" + resData.info.id}>
            {resData.info.avgRating >= 4.5 ? (
              <RestuarentCardPromoted
                cartData={resData?.info}
              ></RestuarentCardPromoted>
            ) : (
              <ResCart cartData={resData?.info}></ResCart>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

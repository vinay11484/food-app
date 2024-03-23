import { IMAGE_URL } from "../utils/contants";
const ResCart = (props) => {
  //const retting = props.cartData?.avgRating;
  //const name1 = props.cartData?.name;
  //const cloudinaryImageId = props.cartData?.cloudinaryImageId;

  const { name, avgRating, cloudinaryImageId, sla } = props.cartData;
  const { slaString } = sla;

  return (
    <div className="p-4 m-2 mx-[18px] w-[271px] rounded-xl bg-gray-100 hover:bg-gray-200 ">
      <img
        className="h-[200px] w-[270px] rounded-3xl"
        src={IMAGE_URL + cloudinaryImageId}
      ></img>
      <h4>{name}</h4>
      <h4>{slaString}</h4>
      <h4>{avgRating} </h4>
    </div>
  );
};

export const withPromotedLabel = (ResCart) => {
  return (props) => {
    console.log("promoted", props);
    return (
      <div>
        <label className="absolute bg-black text-yellow-500 rounded-xl rounded-bl-none rounded-tr-none px-2 ml-7 mt-4">
          Promoted
        </label>
        <ResCart {...props}></ResCart>
      </div>
    );
  };
};

export default ResCart;

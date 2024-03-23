import LOGO_URL from "../utils/contants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  let [btnName, setBtnName] = useState("login");
  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between m-1 p-1 bg-white">
      <div className="w-28 ml-36">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center mr-36">
        <ul className="flex font-bold">
          <li className="m-3 p-3">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="m-3 p-3">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="m-3 p-3">
            <Link to={"/contact-us"}>Contact Us</Link>
          </li>
          <li className="m-3 p-3">
            <Link to={"/cart"}>Cart{cartItems.length}</Link>
          </li>

          <button
            className="m-3 p-3"
            onClick={() => {
              btnName == "login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnName}
          </button>
          <li className="m-3 p-3">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

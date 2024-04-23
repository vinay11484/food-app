import LOGO_URL from "../utils/contants";
import { useState, useContext } from "react";
import { Link, state } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import Register from "./Register";
const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  let [btnName, setBtnName] = useState("login");
  const { loggedInUser } = useContext(UserContext);
  const childData = (data) => {
    console.log(data, "wfewrferwfere");
    data && setShowSidebar(false);
  };

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
          <li className="m-3 p-3">
            <button onClick={() => setShowSidebar(!showSidebar)}>
              Sign In
            </button>
          </li>
          <li className="m-3 p-3">{loggedInUser}</li>
        </ul>
      </div>
      <div
        className={`transition-all absolute top-0 right-0 z-50 bg-black/40 w-full h-full ease-in-out duration-0 ${
          showSidebar ? "translate-x-0 " : "translate-x-full "
        } `}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            setShowSidebar(!showSidebar);
          }
        }}
      >
        <div
          className={`top-0 right-0 w-[35vw]  overflow-y-auto bg-white p-10 pl-20 text-black fixed h-full z-40 ${
            showSidebar ? "translate-x-0 " : "translate-x-full "
          } ease-in-out duration-300 `}
        >
          <Register childData={childData}></Register>
        </div>
      </div>
    </div>
  );
};

export default Header;

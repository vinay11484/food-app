import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register({ childData }) {
  const [account, setAccount] = useState(false);
  const [otpInput, setOtpInput] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          childData(true);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="text-3xl pt-5 font-semibold">Login</div>
      <span>or</span>
      <button
        className="text-[#fc8019] font-medium"
        onClick={() => {
          setAccount(!account);
          setOtpInput(!otpInput);
        }}
      >
        &nbsp;create an account
      </button>
      <form>
        <label className="absolute pt-2 mt-12 text-zinc-500 pb-2 pl-5">
          Phone number
        </label>
        <input
          type="text"
          className="bg-white border mt-12 h-10 w-[80%] p-11 pl-5 pr-5 pb-7"
        ></input>
        {account && (
          <div>
            <label className="absolute pt-2 mt-2 text-zinc-500 pb-2 pl-5">
              Name
            </label>
            <input
              type="text"
              className="bg-white border mt-2 h-10 w-[80%] p-11 pl-5 pr-5 pb-7"
            ></input>
            <br></br>
            <label className="absolute pt-2 mt-2 text-zinc-500 pb-2 pl-5">
              Email
            </label>
            <input
              type="text"
              className="bg-white border mt-2 h-10 w-[80%] p-11 pl-5 pr-5 pb-7"
            ></input>
          </div>
        )}
        {otpInput && (
          <>
            <input
              type="text"
              className="bg-white border mt-2 h-10 w-[80%] p-11 pl-5 pr-5 pb-7"
            ></input>
          </>
        )}
        <button
          className="bg-[#fc8019] text-white font-semibold border mt-5  w-[80%] p-11 pl-5 pr-5 py-4"
          onClick={(e) => {
            e.preventDefault();
            setOtpInput(true);
          }}
        >
          {account ? "CONTINUE" : otpInput ? "VERIFY OTP" : "LOGIN"}
        </button>
      </form>
    </div>
  );
}

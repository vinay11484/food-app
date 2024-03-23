import React, { useState } from "react";

export default function ContactUs() {
  const [userName, setUserName] = useState(" ");
  const [userPassword, setUserPassword] = useState("");
  const handleClick = (e) => {
    console.log(userName, userPassword);
    e.preventDefault();
  };

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleUserPassword = (e) => {
    setUserPassword(e.target.value);
  };
  return (
    <div>
      <h2>ContactUs</h2>
      <form className="flex flex-col" onSubmit={handleClick} method="POST">
        <input
          id="2"
          type="text"
          value={userName}
          required
          placeholder="Name"
          className="w-48 p-2 m-2 border "
          onChange={handleUserName}
        />
        <input
          id="1"
          type="password"
          value={userPassword}
          placeholder="password"
          className="w-48 p-2 m-2 border"
          onChange={handleUserPassword}
          required
        />
        <button
          type="submit"
          className="text-left p-2 m-2 bg-slate-200 w-16"
          onClick={handleClick}
        >
          submit
        </button>
      </form>
    </div>
  );
}

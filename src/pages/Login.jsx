import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Login from "../components/Login/Login";
import { useSelector } from "react-redux";

function Logins() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  console.log(isLoggedIn);

  if (isLoggedIn) navigate("/");

  return (
    <>
      <div className="signin__regtangle"></div>
      {/* <div className="signin__regtangle2"></div> */}
      <Login />
    </>
  );
}

export default Logins;

import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LOGO from "../../../image/newton-logo-cbt2.png";
import { useState } from "react";
import { useEffect } from "react";

const HeaderWebsite = (props) => {
  const firstName = useSelector((state) => state.auth.userData.firstName);
  const lastName = useSelector((state) => state.auth.userData.lastName);
  const role = useSelector((state) => state.auth.userData.role);
  const [roleColor, setRoleColor] = useState("#ffffff50");
  const [greetings, setGreeting] = useState("Good ,");

  useEffect(() => {
    const hour = new Date().getHours();

    console.log(hour);

    if (hour >= 0 && hour < 12) setGreeting("Good Morning,");
    if (hour >= 12 && hour < 16) setGreeting("Good Afternoon,");
    if (hour >= 16) setGreeting("Good Evening,");

    switch (role) {
      case "student":
        setRoleColor("#2B69E7");
        break;
      case "supervisor":
        setRoleColor("#FF3A3A");
        break;
      case "developer":
        setRoleColor("#ffffff");
        break;
      default:
        setRoleColor("#2B69E7");
        break;
    }
  }, []);

  return (
    <div className="header">
      <Link to="/" className="header__logo">
        <img src={LOGO} alt="Newton Timetables BETA" />
      </Link>
      {/* <div className="header__navi">
        <Link
          to="/moreteacherstimetable"
          style={{ color: "#c4c4c4", textDecoration: "none" }}
        >
          <h3>Teacher Timetable</h3>
        </Link>
        <Link
          to="/yeartimetable"
          style={{ color: "#c4c4c4", textDecoration: "none" }}
        >
          <h3>Year Timetables</h3>
        </Link>
        <h3>News</h3>
        <Link
          to="/Developers"
          style={{ color: "#c4c4c4", textDecoration: "none" }}
        >
          <h3>About Us</h3>
        </Link>
      </div> */}

      <div className="header__menu">
        <h3> hello</h3>
      </div>

      <div className="header__user">
        <h3 className="header__user--text">
          {greetings}
          <br />
          {firstName || "ERROR"} {lastName || "ERROR"}
        </h3>
        <Link to="/settings" className="header__user--profile">
          <img
            style={{ border: `3px solid ${roleColor}` }}
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="User Profile Picture"
          />
        </Link>
      </div>
    </div>
  );
};

export default HeaderWebsite;

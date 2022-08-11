import react from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


export default function GlanceBox(props) {
  const userData = useSelector((state) => state.auth.userData);

  let nav = useNavigate();

  let year = "";

  switch (userData.year) {
    case 8:
      year = "y8a9t";
      break;
    case 9:
      year = "y8a9t";
      break;
    case 10:
      year = "y10a11t";
      break;
    case 11:
      year = "y10a11t";
      break;
    case 12:
      year = "y12a13t";
      break;
    case 13:
      year = "y12a13t";
      break;
  }

  console.log(year);

  return (
    <div
      style={
        props.curClass ? { background: "#0E6BA8" } : { background: "#FF8600" }
      }
      className="glance-item"
    >
      <h3>
        {props.curClass ? "Current Class:" : "Next Class:"} <br />{" "}
        {props.className}{" "}
      </h3>
      {/* <Link to={`/timetable/${props.timetableId}`}> */}
      <button
        className="glance-item__btn"
        onClick={() => {
          nav(`/timetable/${year}`);
        }}
      >
        View In Timetable
      </button>
      {/* </Link> */}
    </div>
  );
}

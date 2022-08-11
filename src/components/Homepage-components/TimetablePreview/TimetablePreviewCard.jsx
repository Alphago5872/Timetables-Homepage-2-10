import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";

function Box({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

const TimetablePreviewCard = (props) => {
  const nav = useNavigate();

  const toggleHandler = () => {
    localStorage.setItem("year", `${props.year.replace(/ /g, "")}`);

    console.log(localStorage.getItem("year"));
  };

  return (
    <Link
      to={!props.preview ? `/timetable/${props.id.replace(/ /g, "")}` : "/"}
      onClick={toggleHandler}
    >
      <div
        className="timetable-preview__item"
        style={props.preview ? { backgroundColor: "black" } : {}}
      >
        <div className="bgyear">
          <h3 className="timetable-preview__year">Year {props.year}</h3>
        </div>
      </div>
      {/* </image> */}
    </Link>
  );
};

export default TimetablePreviewCard;

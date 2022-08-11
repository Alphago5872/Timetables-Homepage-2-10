import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Teachers = (props) => {

  return (
    <button>
      <Link to="/teacherstimetable">
        <div>
          <img src={props.image} alt="Picture of Teacher" />
          <h1>{props.teacher}</h1>
          <h3>{props.name}</h3>
          <h2>{props.position}</h2>
        </div>
      </Link>
    </button>
  );
};

export default Teachers;

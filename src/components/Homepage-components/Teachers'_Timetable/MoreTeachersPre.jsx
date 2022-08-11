import { Link, useNavigate } from "react-router-dom";

const MoreTeachersTimetableCard = (props) => {
  const nav = useNavigate();

  const toggleHandler = () => {
    localStorage.setItem("teacher", `${props.teacher.replace(/ /g, "")}`);

    console.log(localStorage.getItem("teacher"));
  };

  return (
    <button className="tttpre__more" onClick={props.onClick}>
      <h1>{props.teacher}</h1>
      <h2>{props.teacherFull}</h2>
    </button>

    //     <Link
    //       to={
    //         !props.preview ? `/timetable/${props.teacher.replace(/ /g, "")}` : "/"
    //       }
    //       onClick={toggleHandler}
    //     >
    //       <div
    //         className="ttpre__item"
    //         style={props.preview ? { backgroundColor: "#808080" } : {}}
    //       >
    //         {" "}
    //         <h1>{props.teacher}</h1>
    //         <h2>{props.teacherFull}</h2>
    //       </div>
    //     </Link>
  );
};

export default MoreTeachersTimetableCard;

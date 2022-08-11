import { Link, useNavigate } from "react-router-dom";


const TeachersTimetableCard = (props) => {
  const nav = useNavigate();

  const toggleHandler = () => {
    localStorage.setItem("teacher", `${props.teacher.replace(/ /g, "")}`);

    console.log(localStorage.getItem("teacher"));
  };

  return (
    // <Link
    //   to={
    //     !props.preview
    //       ? `/teachertimetable/${props.teacher.replace(/ /g, "")}`
    //       : "/"
    //   }
    //   onClick={toggleHandler}
    // >
    <button
      className="tttpre__item"
      onClick={() => alert("This feature is coming soon")}
    >
      <h1>{props.teacher}</h1>
      <h2>{props.teacherFull}</h2>
    </button>
    // </Link>

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

export default TeachersTimetableCard;

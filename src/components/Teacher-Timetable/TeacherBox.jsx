const TeacherBox = (props) => {
  return (
    <div
      style={{
        gridColumn: `span ${props.hori ?? 1}`,
        backgroundColor: `${props.color}`,
      }}
      className={`timetable2 ${props.lunch ? "lunch" : ""} ${
        props.no_hover ? "timetable2__no-hover" : ""
      }`}
    >
      <div>
        {props.subject ? <h2>{props.subject}</h2> : ""}
        {props.teacher ? <h3>{props.teacher}</h3> : ""}
        {props.date ? <h1>{props.date}</h1> : ""}
        {props.room ? <h4>{props.room}</h4> : ""}
        {props.time ? <h6>{props.time}</h6> : ""}
      </div>
    </div>
  );
};

export default TeacherBox;

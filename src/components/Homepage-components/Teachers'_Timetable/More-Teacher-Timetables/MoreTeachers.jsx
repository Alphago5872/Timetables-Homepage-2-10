const Teachers = (props) => {
  return (
    <div className="teachers__profile">
      <img src={props.image} alt="Picture of Teacher" className="teachers__profile--image"/>
      <h1>{props.teacher}</h1>
      <h3>{props.name}</h3>
      <h2>{props.position}</h2>
      {/* <div className="developers__social"> */}
      {/* <ul> */}
      {/* <li> */}
      {/* <i class='bx bxl-instagram'></i> */}
      {/* </li> */}
      {/* </ul> */}
      {/* </div> */}
    </div>
  );
};

export default Teachers;

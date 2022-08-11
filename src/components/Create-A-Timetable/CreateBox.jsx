import { useState } from "react";
import Modal2 from "./modal";

const CreateBox = (props) => {
  const [modalOpen, setModalOpen] = useState(false);


  return (
    <>
      <a
        style={{
          gridColumn: `span ${props.hori ?? 1}`,
          backgroundColor: `${props.color}`,
          color: `${props.color ? "#000" : "#454545"}`,
        }}
        onClick={() => {
          setModalOpen(true);
        }}
        className={`timetable2 ${props.lunch ? "lunch" : ""} ${
          props.no_hover ? "timetable2__no-hover" : ""
        }`}
      >
        {props.subject ? (
          <h2
            style={{
              fontSize: `${!props.color && !props.lunch ? "1.5rem" : ""}`,
            }}
          >
            {props.subject}
          </h2>
        ) : (
          ""
        )}
        {props.teacher ? <h3>{props.teacher}</h3> : ""}
        {props.date ? <h1>{props.date}</h1> : ""}
        {props.room ? <h4>{props.room}</h4> : ""}
        {props.time ? <h6>{props.time}</h6> : ""}
      </a>

      {modalOpen && <Modal2 setOpenModal={setModalOpen} />}
    </>
  );
};

export default CreateBox;

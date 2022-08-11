import "../../sass/components/_timetable.scss";
import TimeBox from "../Timetable/TimeBox";

function Box({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

const timeLayout = [
  "09:00 - 10:30",
  "10:30 - 12:00",
  "12:00 - 13:00",
  "13:00 - 14:30",
  "14:30 - 16:00",
];

const TeacherGrid = (props) => {
  console.log(props.timetableData.content);

  // for (const day in props.timetableData.content) {

  return (
    <div className="timetable__wrapper">
      <Box className="ttbigbox">
        <div className="timetable">
          {/* {props.timetableContent.content &&
        props.timetableContent.content.map((weekday, index) => {
          console.log(weekday, index);
        })}{" "} */}
          <div className="timetable__time timetable__time--empty">
            <h3></h3>
          </div>
          {timeLayout.map((time, index) => {
            return (
              <div
                className={`timetable__time ${
                  index === 0 ? "timetable__time--first" : ""
                } ${
                  index === timeLayout.length - 1 ? "timetable__time--last" : ""
                }`}
              >
                <h3>{time}</h3>
              </div>
            );
          })}

          <TimeBox subject="Monday" color="#F0D750" no_hover hori={3} />
          {props.timetableData.content.monday.map((e) => {
            console.log(e);
            return (
              <TimeBox
                subject={e.name}
                teacher={e.teachers && e.teachers.join(", ")}
                room={e.room && e.room}
                hori={e.hori}
                no_hover={e.name === "Holiday" ? true : false}
              />
            );
          })}
          <TimeBox subject="Tuesday" color="#FF99DC" no_hover hori={3} />
          {props.timetableData.content.tuesday.map((e) => {
            console.log(e);
            return (
              <TimeBox
                subject={e.name}
                teacher={e.teachers && e.teachers.join(", ")}
                room={e.room && e.room}
                hori={e.hori}
                no_hover={e.name === "Holiday" ? true : false}
              />
            );
          })}
          <TimeBox subject="Wednesday" color="#77ED6D" no_hover hori={3} />
          {props.timetableData.content.wednesday.map((e) => {
            console.log(e);
            return (
              <TimeBox
                subject={e.name}
                teacher={e.teachers && e.teachers.join(", ")}
                room={e.room && e.room}
                hori={e.hori}
                no_hover={e.name === "Holiday" ? true : false}
              />
            );
          })}
          <TimeBox subject="Thursday" color="#FFB35A" no_hover hori={3} />
          {props.timetableData.content.thursday.map((e) => {
            console.log(e);
            return (
              <TimeBox
                subject={e.name}
                teacher={e.teachers && e.teachers.join(", ")}
                room={e.room && e.room}
                hori={e.hori}
                no_hover={e.name === "Holiday" ? true : false}
              />
            );
          })}
          <TimeBox subject="Friday" color="#96BAFF" no_hover hori={3} />
          {props.timetableData.content.friday.map((e) => {
            console.log(e);
            return (
              <TimeBox
                subject={e.name}
                teacher={e.teachers && e.teachers.join(", ")}
                room={e.room && e.room}
                hori={e.hori}
                no_hover={e.name === "Holiday" ? true : false}
              />
            );
          })}
          <TimeBox subject="Lunch" lunch no_hover />
        </div>

        {/* <TimeBox subject="Monday" color="#F0D750" no_hover /> */}

        {/* {props.timetableContent.content.forEach((data) => console.log(data))} */}
      </Box>
    </div>
  );
};

export default TeacherGrid;

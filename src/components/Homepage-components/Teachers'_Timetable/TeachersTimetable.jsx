import TeachersTimetableCard from "./TeachersTimetableCard";
import MoreTeachersTimetableCard from "./MoreTeachersPre";
import { useNavigate } from "react-router-dom";

function Box({ children, ...props }) {
  return (
    <div className="tttpre" {...props}>
      {children}
    </div>
  );
}

const TeachersTimetable = () => {
  let navigate = useNavigate();

  return (
    <div>
      <h1>Teachers' Timetable</h1>
      <Box>
        <TeachersTimetableCard
          teacher="June"
          teacherFull="Mr. Thonnisorn Choochaisangrat"
        />
        <TeachersTimetableCard
          teacher="Mink"
          teacherFull="Mrs. Watcharee Amornwatcharapong"
        />
        <TeachersTimetableCard
          teacher="Ith"
          teacherFull="Mr. Teeraphong Vechatrakoolphaisan"
        />
        {/* <TeachersTimetableCard
          teacher="Earth"
          teacherFull="Mr. Dhanuphon Boriboonsub"
        /> */}
        <MoreTeachersTimetableCard
          image="none"
          // teacher="View more"
          teacherFull="View more"
        />
      </Box>
    </div>
  );
};

export default TeachersTimetable;

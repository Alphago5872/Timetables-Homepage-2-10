import Clock from "../components/Homepage-components/Clock/Clock";
import TeacherGrid from "../components/Teacher-Timetable/TeacherGrid";
import WebCard from "../components/Wrapper-Components/Wrapper-1/WebCard_1";
import { getTimetables } from "../datas/datas";
import Loading from "../components/Loading/Loader";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const year = "10-11";

const TeachersTimetablePage = () => {
  const { id } = useParams();
  const [timetableData, setTimetableData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimetableData(getTimetables(id));
    setIsLoading(false);
  }, []);
  console.log(timetableData);
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <WebCard>
            <TeacherGrid timetableData={timetableData} />
          </WebCard>
        </>
      )}
    </div>
  );
};

export default TeachersTimetablePage;

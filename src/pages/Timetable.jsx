import Clock from "../components/Homepage-components/Clock/Clock";
import TimetableGrid from "../components/Timetable/TimetableGrid";
import WebCard from "../components/Wrapper-Components/Wrapper-1/WebCard_1";
import { getTimetables } from "../datas/datas";
import Loading from "../components/Loading/Loader";
import { useMediaQuery } from "react-responsive";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Timetable = () => {
  const { id } = useParams();
  const [timetableData, setTimetableData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const isSuperSmall = useMediaQuery({ query: "(max-width: 360px)" });

  useEffect(() => {
    setTimetableData(getTimetables(id));

    // axios
    //   .post(
    //     "https://apis.timetables.newton.ac.th/timetables/getTimetable",
    //     {
    //       year: 10,
    //       tag: "main",
    //     },
    //     {
    //       headers: {
    //         Authentication: "Bearer " + localStorage.getItem("token"),
    //       },
    //     }
    //   )
    //   .then(({ data }) => console.log(data))
    //   .catch((data) => console.error(data));

    setIsLoading(false);
  }, []);
  console.log(timetableData);
  return (
    <WebCard>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="timetable1">
            <div className="timetable1__right">
              <div class=" timetable1__year timetable1__item">
                <i class="bx bx-info-circle"></i>
                <span>{`${isSuperSmall ? "Y" : "Year "}${
                  timetableData.metaData.year
                }`}</span>
              </div>
              <div className="timetable1__time timetable1__item">
                <i class="bx bxs-buildings"></i>
                <span>{timetableData.metaData.def_fl}</span>
              </div>
            </div>

            <div className="timetable1__time timetable1__item">
              <i class="bx bx-time-five"></i>
              <Clock hour12={false} format={"hh-mm"} />
            </div>
          </div>
          <TimetableGrid timetableData={timetableData} />
        </>
      )}
    </WebCard>
  );
};

export default Timetable;

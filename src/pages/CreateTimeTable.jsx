import Clock from "../components/Homepage-components/Clock/Clock";
import WebCard from "../components/Wrapper-Components/Wrapper-1/WebCard_1";
import { getTimetables } from "../datas/datas";
import Loading from "../components/Loading/Loader";
import CreateGrid from "../components/Create-A-Timetable/CreateGrid";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const CreateTT = () => {
  // const [year, setYear] = useState(9);
  // const [defaultFloor, setDefaultFloor] = useState(9);
  const year = "10-11";
  const defaultFloor = "9";

  return (
    <WebCard>
      <>
        <div className="timetable1">
          <div className="timetable1__right">
            <a>
              <div class=" timetable1__year timetable1__item create-timetable__info--item">
                <i class="bx bx-info-circle"></i>
                <span>{`${"Year "}${year}`}</span>
              </div>
            </a>
            <a>
              <div className="timetable1__time timetable1__item create-timetable__info--item">
                <i class="bx bxs-buildings"></i>
                <span>{defaultFloor}</span>
              </div>
            </a>
          </div>

          <div className="timetable1__time timetable1__item">
            <i class="bx bx-time-five"></i>
            <Clock hour12={false} format={"hh-mm"} />
          </div>
        </div>
        <CreateGrid />
      </>
    </WebCard>
  );
};

export default CreateTT;

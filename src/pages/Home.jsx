import Glance from "../components/Homepage-components/Glance/Glance";
import NewtonNews from "../components/Homepage-components/Newton_News/NewsPreview/NewtonNews";
import TeachersTimetable from "../components/Homepage-components/Teachers'_Timetable/TeachersTimetable";
import WebCard from "../components/Wrapper-Components/Wrapper-1/WebCard_1";
import TimetablePreview from "../components/Homepage-components/TimetablePreview/TimetablePreview";
import Clock from "../components/Homepage-components/Clock/Clock";
import { useSelector } from "react-redux";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = (props) => {
  const LoggedIn = localStorage.getItem("isLoggedIn");
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const permission = useSelector((state) => state.auth.permission);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      {/* <div className="hero"></div> */}
      <WebCard>
        <div className="home">
          <Glance />

          {/* <NewtonNews /> */}

          {permission === 4 ? (
            <>
              <TimetablePreview />
              <NewtonNews />
              <TeachersTimetable />
            </>
          ) : (
            <>
              <div>{permission > 1 && <TeachersTimetable />}</div>
              <div>
                <TimetablePreview />
              </div>
            </>
          )}
        </div>
      </WebCard>
    </div>
  );
};

export default Home;

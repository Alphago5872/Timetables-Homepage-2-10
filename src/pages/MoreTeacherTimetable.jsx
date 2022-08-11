import WebCard_1 from "../components/Wrapper-Components/Wrapper-1/WebCard_1";
import Teachers from "../components/Homepage-components/Teachers'_Timetable/More-Teacher-Timetables/MoreTeachers";
import Clock from "../components/Homepage-components/Clock/Clock";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MoreTeachersTimetablePage = () => {
  const toggleHandler = (props) => {
    localStorage.setItem("teacher", `${props.teacher.replace(/ /g, "")}`);

    console.log(localStorage.getItem("teacher"));
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <WebCard_1>
        <div className="teachers">
          {/* <Clock className="timetable3__clock" format={"hh-mm"} /> */}
          <div className="teachers__wrapper">
            <div data-aos="fade-up">
              <Teachers
                image="https://secureservercdn.net/198.71.190.156/l1j.0d8.myftpupload.com/wp-content/uploads/2021/05/Wittaya-Panomchai.png"
                teacher="Hello"
                name="Mr. Wittaya Panomchai"
                position="Head Badminton Coach"
              />
            </div>
            <div data-aos="fade-up">
              <Teachers
                image="https://secureservercdn.net/198.71.190.156/l1j.0d8.myftpupload.com/wp-content/uploads/2021/05/Teeraphong-Vechatrakoolphaisan.png"
                teacher="Ith"
                name="Mr. Teeraphong Vechatrakoolphaisan"
                position="Computer Science"
              />
            </div>
            <div data-aos="fade-up">
              <Teachers
                image="https://secureservercdn.net/198.71.190.156/l1j.0d8.myftpupload.com/wp-content/uploads/2021/05/Ninart-Boonphothong.png"
                teacher="Joob"
                name="Mr. Ninart Boonphothong"
                position="Creative Drama"
              />
            </div>
            <div data-aos="fade-up">
              <Teachers
                image="https://secureservercdn.net/198.71.190.156/l1j.0d8.myftpupload.com/wp-content/uploads/2021/05/Prohrak-Kruengthomya.png"
                teacher="Paoju"
                name="Mrs. Prohrak Kruengthomya"
                position="Math Teacher"
              />
            </div>
            <div data-aos="fade-up">
              <Teachers
                image="https://secureservercdn.net/198.71.190.156/l1j.0d8.myftpupload.com/wp-content/uploads/2021/05/Thonnisorn-Choochaisangrat.png"
                teacher="June"
                name="Mr. Thonnisorn Choochaisangrat"
                position="Math Teacher"
              />
            </div>
            <div data-aos="fade-up">
              <Teachers
                image="https://secureservercdn.net/198.71.190.156/l1j.0d8.myftpupload.com/wp-content/uploads/2021/05/Watcharee-Amornwatcharapong.png"
                teacher="Mink"
                name="Mr. Watcharee Amornwatcharapong"
                position="Science Teacher"
              />
            </div>
          </div>
        </div>
      </WebCard_1>
    </>
  );
};

export default MoreTeachersTimetablePage;

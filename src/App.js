import React, { useContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Timetable from "./pages/Timetable";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import DevCredits from "./pages/DevCredits";
import "./sass/main.css";
import UserConfigure from "./pages/UserConfigure";
import TeachersTimetablePage from "./pages/TeachersTimetablePage";
import MoreTeachersTimetablePage from "./pages/MoreTeacherTimetable";
import Login from "./pages/Login";
import { useDispatch, useSelector } from "react-redux";
import ForgotPassword from "./pages/ForgotPassword";
import ChangePassword from "./pages/ChangePassword";
import Loading from "./components/Loading/Loader";
import TTyearPage from "./pages/YearTTPage";
import Modal8_11 from "./UI/Modal8_11";
import CreateTT from "./pages/CreateTimeTable";
import Modal from "./UI/Modal";
import axios from "axios";
import { authAcctions } from "./store/authSlice";
import NewsPage from "./pages/NewsPage";
import MoreNewsPage from "./pages/MoewNewsPage";

/* Dependencies needed:
npm install
npm install react-router-dom@6
npm install -g sass
npm install boxicons --save
npm install react-responsive --save
npm install --save react-spinners
npm install aos --save
*/

/*
IMPORTANT!!! :

npm start
npm run sass BEFORE making sass changes
*/

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      axios
        .post(
          "https://apis.timetables.newton.ac.th/auth/getUser",
          {},
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then(({ data }) => {
          dispatch(authAcctions.login(data.user));
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (isLoading) return <Loading />;

  if (isLoggedIn) {
    return (
      <>
        <Modal>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/timetable/:id" element={<Timetable />} />
            <Route path="/news" element={<NewsPage />} exact />
            <Route path="/news/:id" element={<MoreNewsPage />} />
            <Route
              path="/teacherstimetable/:id"
              element={<TeachersTimetablePage />}
            />
            <Route
              path="/moreteacherstimetable"
              element={<MoreTeachersTimetablePage />}
            />
            <Route path="/developers" element={<DevCredits />} />
            <Route path="/loading" element={<Loading />} />
            <Route path="*" element={<ErrorPage errorCode="404" />} />
            <Route path="/settings" element={<UserConfigure />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/changepassword" element={<ChangePassword />} />
            <Route path="yeartimetable" element={<TTyearPage />} />
            <Route path="/YEET" element={<Modal8_11 />} />
            <Route path="/creatett" element={<CreateTT />} />
          </Routes>
        </Modal>
      </>
    );
  } else {
    console.log(isLoggedIn);
    return (
      <>
        <Modal>
          <Routes>
            <Route path="*" element={<Login />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/developers" element={<DevCredits />} />
          </Routes>
        </Modal>
      </>
    );
  }
}

export default App;

import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "./Store/auth-context";

import { useDispatch, useSelector } from "react-redux";
import { authAcctions } from "../../store/authSlice";
import axios from "axios";

const Login = (props) => {
  const dispatch = useDispatch();
  const [moreOpen, setMoreOpen] = useState(false);
  const LooggedIn = localStorage.getItem("isLoggedIn");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInHandler = (e) => {
    e.preventDefault();

    axios
      .post("https://apis.timetables.newton.ac.th/auth/signin", {
        email: email,
        password: password,
      })
      .then(({ data }) => {
        localStorage.setItem("token", data.token);

        axios
          .post(
            "https://apis.timetables.newton.ac.th/auth/getUser",
            {},
            {
              headers: {
                Authorization: "Bearer " + data.token,
              },
            }
          )
          .then(({ data }) => {
            console.log(data);
            dispatch(authAcctions.login(data.user));

            return 0;
          })
          .catch(({ response }) =>
            alert(`${response.status} - ${response.message}`)
          );

        return 0;
      })
      .catch(({ response }) =>
        alert(
          `${response.status} - ${response.data.message}\nThis alert will be replace with a proper error message later.`
        )
      );
  };

  return (
    <div className="signin">
      <div className="signin__modal">
        <div className="signin__modal--text">
          <h1>Sign-In</h1>
          <h3>Sign-In to your Newton Timetables Account</h3>
          <div
            className="signin__modal--info noselect"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <h3>Closed Beta Testers Only</h3>
          </div>
          <div
            className="signin__modal--infoPopup"
            style={
              !moreOpen
                ? { opacity: 0, position: "absolute", transform: "scale(0)" }
                : { height: "fit-content" }
            }
          >
            Selected individuals have been listed and informed in their
            respective Year Line groups, please check whether or not you have
            been selected.
          </div>
        </div>
        <div className="signin__modal--form">
          <form>
            <div className="signin__modal--form--top">
              <div>
                <input
                  type="text"
                  id="email"
                  placeholder="Student Email / ID"
                  autoComplete="on"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="signin__modal--forgotPass">
                <Link to={"/forgotpassword"}>Forgot Password</Link>
              </div>
            </div>

            <button onClick={signInHandler} className="signin__modal--btn">
              Sign-In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

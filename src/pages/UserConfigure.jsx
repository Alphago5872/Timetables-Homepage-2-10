import WebCard from "../components/Wrapper-Components/Wrapper-1/WebCard_1";
import WebCard_2 from "../components/Wrapper-Components/Wrapper-2/WebCard_2";
import { BoxIconElement } from "boxicons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authAcctions } from "../store/authSlice";
import { useMediaQuery } from "react-responsive";
function Box({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

// Data will be fixed later
const UserConfigure = () => {
  const userData = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  const naviagte = useNavigate();
  const isSmallScreen = useMediaQuery({ query: "(max-width: 380px)" });

  const userPfp = "https://cdn-icons-png.flaticon.com/512/149/149071.png";

  console.log("isSmallScreen", isSmallScreen);

  const signOutHandler = () => {
    localStorage.removeItem("token");
    naviagte("/");
    dispatch(authAcctions.signout());
  };

  return (
    <WebCard>
      <div className="settings__wrapper">
        <Box className="settings">
          <h1 className="settings__header">Account Settings</h1>
          <div className="settings__body">
            <div className="settings__userInfo">
              <div className="settings__userInfo--pfp">
                <img
                  onClick={() =>
                    alert("Changing Profile picture not yet avaliable.")
                  }
                  src={userPfp}
                  alt="profile_picture"
                />
              </div>
              <div className="settings__userInfo--name">
                <h2
                  style={
                    userData.firstName.length + userData.lastName.length > 25 ||
                    isSmallScreen
                      ? { fontSize: "2.5rem" }
                      : {}
                  }
                >
                  {userData.firstName} {userData.lastName}
                </h2>
              </div>
            </div>
            <div className="settings__userData">
              <div className="settings__userData--email settings__userData--item">
                <span className="settings__label">Email</span>
                <span className="settings__value">{userData.email}</span>
              </div>
              <div className="settings__userData--year settings__userData--item">
                <span className="settings__label">Year</span>
                <span className="settings__value">Year Unknown - Unknown</span>
              </div>
              <div className="settings__userData--pass settings__userData--item">
                <span className="settings__label">Password</span>
                <button
                  className="settings__action"
                  onClick={() =>
                    alert(
                      "Feature Unavaliable at the time.\n(Planned to be supported on Thursday, 11th August 2022)"
                    )
                  }
                >
                  Change Password
                </button>
              </div>
              <div className="settings__userData--out settings__userData--item">
                <span className="settings__label"> </span>
                <button
                  className="settings__action settings__action--danger"
                  onClick={signOutHandler}
                >
                  <i className="bx bxs-log-out"></i> Signout
                </button>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </WebCard>
  );
};

export default UserConfigure;

import FooterWebsite from "./FooterWebsite_1";
import HeaderWebsite from "./HeaderWebsite_1";
import { useMediaQuery } from "react-responsive";

const WebCard = (props) => {
  const isSupported = useMediaQuery({ query: "(max-width: 345px)" });

  console.log(isSupported);
  return (
    <>
      {!isSupported ? (
        <div>
          <HeaderWebsite />
          <main>{props.children}</main>
          <FooterWebsite />
        </div>
      ) : (
        <div className="not-support__wrapper">
          <div className="not-support">
            <span
              style={{ fontSize: "5rem" }}
              className="material-symbols-outlined"
            >
              devices_fold
            </span>{" "}
            <br />
            This screen resolution is not supported. If you're using a folable
            phone please unfold your device.
          </div>
        </div>
      )}
    </>
  );
};

export default WebCard;

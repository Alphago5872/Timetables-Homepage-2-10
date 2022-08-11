import HeaderWebsite_2 from "./HeaderWebsite_2";
import FooterWebsite from "../Wrapper-1/FooterWebsite_1";

const WebCard_2 = (props) => {
  return (
    <div>
      <HeaderWebsite_2 />
      {props.children}
      <FooterWebsite />
    </div>
  );
};

export default WebCard_2;

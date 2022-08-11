import { useSelector } from "react-redux";
import Clock from "../Clock/Clock";
import GlanceBox from "./Glance-box";

function Box({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

const Glance = (props) => {
  return (
    <div className="glance">
      <div className="glance__wraptext">
        <h1 className="glance__text">At a Glance</h1>
        <h1>
          <Clock hour12={false} format={"hh-mm"} />
        </h1>
      </div>
      <Box className="glance-bigbox">
        <GlanceBox curClass className="Unsupported" />
        <GlanceBox className="Unsupported" />
      </Box>
    </div>
  );
};

export default Glance;
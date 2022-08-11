import TimetablePreviewCard from "./TimetablePreviewCard";
import { Link, NavLink, Route } from "react-router-dom";

function Box({ children, ...props }) {
  return (
    <div className="timetable-preview" {...props}>
      {children}
    </div>
  );
}

const TimetablePreview = () => {
  return (
    <div>
      <h1 style={{ marginTop: "-12px" }}> Year Timetables</h1>
      <Box>
        <TimetablePreviewCard year="8 - 9" id="y8a9t" />
        <TimetablePreviewCard year="10 - 11" id="y10a11t" />
        <TimetablePreviewCard year="12 - 13" id="y12a13t" />
      </Box>
    </div>
  );
};

export default TimetablePreview;

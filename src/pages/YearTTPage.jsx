import TimetablePreview from "../components/Homepage-components/TimetablePreview/TimetablePreview";
import WebCard from "../components/Wrapper-Components/Wrapper-1/WebCard_1";

const TTyearPage = () => {
  return (
    <WebCard>
      <div style={{ marginTop: "25px", height: "fit-content" }}>
        <TimetablePreview />;
      </div>
    </WebCard>
  );
};

export default TTyearPage;

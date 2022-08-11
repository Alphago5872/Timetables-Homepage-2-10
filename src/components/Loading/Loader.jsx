import { HashLoader } from "react-spinners";

function Loading() {
  return (
    <>
      <div className="loading__wrapper">
        <HashLoader
          className="loading__"
          color="#0e3178"
          size={60}
          speedMultiplier="0.5"
        />
        <h2>Loading...</h2>
      </div>
    </>
  );
}

export default Loading;

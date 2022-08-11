import NewtonNewsCard from "./NewtonNewsCard";
import NewsBox from "./NewtonNewsBox";
import { useNavigate } from "react-router-dom";

const NewtonNews = (props) => {
  const nav = useNavigate();

  const toggleHandler = () => {
    nav("/news")
  }

  return (
    <div>
      <h1 onClick={toggleHandler} className="newsH1Tag">Newton News</h1>
      <NewsBox />
    </div>
  );
};

export default NewtonNews;

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NewtonNewsCard = (props) => {
  const nav = useNavigate();
  localStorage.setItem("newsId", "n1");

  return (
    <div className="newsCard__card">
      <div className="newsCard__card--info">
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
        {props.Click && (
          <button
            onClick={() => {
              nav(`/news/${props.id}`);
              localStorage.setItem("newsId", props.id);
            }}
          >
            Learn More
          </button>
        )}
      </div>
    </div>
  );
};

export default NewtonNewsCard;

import { useNavigate } from "react-router-dom";

const NewsCardPage = (props) => {
  const nav = useNavigate();

  return (
    <div className="newsPage__card">
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      {props.Click && (
        <button
          onClick={() => {
            nav(`/news/${props.id}`);
          }}
        >
          Learn More
        </button>
      )}
    </div>
  );
};

export default NewsCardPage;

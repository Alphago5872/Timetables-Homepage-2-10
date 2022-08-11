import GUN from "../../../../sass/pages/GUN.jpg"

const DetailedNewsCard = (props) => {
  return (
    <div className="detailNews">
      <h1>{props.title}</h1>
      <img src={GUN} />
      <h2>{props.description}</h2>
    </div>
  );
};

export default DetailedNewsCard;

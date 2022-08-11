import DetailedNewsCard from "./DetailedNewsCard";
import { NewsData } from "../../../../datas/NewsData";

const DetailedNews = (props) => {
  const selectedNews = NewsData.filter((NewsData) => {
    return NewsData.id === localStorage.getItem("newsId");
  });

  console.log(selectedNews);
  console.log(NewsData);

  return (
    <>
      {selectedNews.map((NewsData) => (
        <DetailedNewsCard
          title={NewsData.title}
          description={NewsData.description}
        />
      ))}
    </>
  );
};

export default DetailedNews;

import WebCard from "../components/Wrapper-Components/Wrapper-1/WebCard_1";
import { NewsData } from "../datas/NewsData";
import NewsCardPage from "../components/Homepage-components/Newton_News/NewsPage/NewsCardPage";


const NewsPage = () => {
  return (
    <WebCard>
      <h1>Newton News</h1>
      <div className="newsPage">
        {NewsData.map(NewsData => <NewsCardPage title={NewsData.title} description={NewsData.description} id={NewsData.id} Click />)}
      </div>
    </WebCard>
  );
};

export default NewsPage;

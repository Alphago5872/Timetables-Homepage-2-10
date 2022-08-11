import WebCard from "../components/Wrapper-Components/Wrapper-1/WebCard_1";
import DetailedNews from "../components/Homepage-components/Newton_News/NewsPage/DetailedNews";
import DetailedNewsCard from "../components/Homepage-components/Newton_News/NewsPage/DetailedNewsCard";

const MoreNewsPage = () => {
    console.log(window.location.pathname.toString())
  return (
    <WebCard>
      <DetailedNews />
    </WebCard>
  )
}

export default MoreNewsPage;
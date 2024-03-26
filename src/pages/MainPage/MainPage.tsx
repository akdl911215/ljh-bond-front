import React from 'react';
import { BsBank2 } from "react-icons/bs";
import moneyImage from './money.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import './MainPage.css'; 

interface Article {
  id: number;
  title: string;
  author: string;
  link: string;
}

// Additional sample articles data
const sampleArticles: Article[] =[
  {
    id: 1,
    title: "Investing 101: The Basics",
    author: "Jane Doe",
    link: "/articles/1"
  },
  {
    id: 2,
    title: "How to Diversify Your Portfolio",
    author: "John Smith",
    link: "/articles/2"
  },
  {
    id: 3,
    title: "How to Diversify Your Portfolio",
    author: "John ",
    link: "/articles/3"
  },

  // Add more articles as needed
];

// Function to group articles into pairs
const groupArticlesInPairs = (articles: Article[]): Article[][] => {
  const pairs: Article[][] = [];
  for (let i = 0; i < articles.length; i += 3) {
    pairs.push(articles.slice(i, i + 3));
  }
  return pairs;
};

// 필요한 경우 employee-dashboard.css를 import합니다.
const MainPage = () => {
  const articlePairs = groupArticlesInPairs(sampleArticles);

  return (
    <div className="dashboard-container">
      {/* 대시보드 상단 네비게이션 바 */}
      {/* 대시보드 콘텐츠 */}
      <div className="container-fluid">
        <div className="row justify-content-center">
          {/* 사이드바 메뉴 */}
          {/* 메인 콘텐츠 영역 */}
          <div className="col-12 col-md-9 col-lg-7">
          <h2 className="section-title">현재 모집 중인 채권</h2>
            <div className="card">
              <img src={moneyImage} className="card-img-top" alt="image" />
              <div className="card-body">
                <h5 className="card-title">Card Title<BsBank2 /></h5>         
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-custom">투자하기</a>
                {/* 이곳에 현재 모집 중인 채권 정보를 표시합니다. */}

              </div>
            </div>
            <h2 className="section-title ">사람들이 많이 보고 있는 채권</h2>
            <div className="card">
              <img src={moneyImage} className="card-img-top" alt="image" />
              <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-custom">투자하기</a>
                {/* 이곳에 현재 모집 중인 채권 정보를 표시합니다. */}

              </div>
            </div>
            <h2 className="section-title">투자 이야기</h2>
            {articlePairs.map((pair, index) => (
              <div key={index} className="card">
                {pair.map(article => (
                  <div key={article.id} className="article-container">
                    <a href={article.link} className="card-title">{article.title}</a>
                    <p className="card-text">By {article.author}</p>
                  </div>
                ))}
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;

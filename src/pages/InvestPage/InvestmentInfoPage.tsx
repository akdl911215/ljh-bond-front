import React from 'react';
import './InvestmentInfoPage.css'; // Make sure to create and link the CSS file

interface Article {
  id: number;
  title: string;
  summary: string;
  publishedDate: string;
}

// Sample data for demonstration
const articles: Article[] = [
  {
    id: 1,
    title: 'Understanding the Stock Market',
    summary: 'An introductory guide to the stock market and its components.',
    publishedDate: '2024-01-01',
  },
  // Add more articles as needed
];

const InvestmentInfoPage: React.FC = () => {
  return (
    <div className="investment-info-container">
      <h1>Investment Information</h1>
      <div className="articles-list">
        {articles.map((article) => (
          <div key={article.id} className="article">
            <h2>{article.title}</h2>
            <p>{article.summary}</p>
            <span>Published on: {article.publishedDate}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestmentInfoPage;
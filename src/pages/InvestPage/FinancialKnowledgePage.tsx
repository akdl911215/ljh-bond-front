import React from 'react';
import './FinancialKnowledgePage.css'; // Assume you've created a CSS file for styling

// Sample data structure for articles
interface FinancialArticle {
  id: string;
  title: string;
  summary: string;
  publishedDate: string;
}

// Sample list of financial articles
const articles: FinancialArticle[] = [
  {
    id: 'article1',
    title: 'Budgeting Basics',
    summary: 'Learn the fundamentals of budgeting to manage your finances effectively.',
    publishedDate: '2024-02-01',
  },
  {
    id: 'article2',
    title: 'Investing 101',
    summary: 'An introduction to investing and how to get started with confidence.',
    publishedDate: '2024-02-15',
  },
  // Add more articles as needed
];

const FinancialKnowledgePage: React.FC = () => {
  return (
    <div className="financial-knowledge-container">
      <h1>Financial Knowledge</h1>
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

export default FinancialKnowledgePage;
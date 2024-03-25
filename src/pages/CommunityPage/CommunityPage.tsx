import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CommunityPage.css';

interface Post {
  id: number;
  title: string;
  author: string;
  date: string;
  views: number;
}
const CommunityPage: React.FC = () => {
  const samplePosts: Post[] = [
    // Assuming you have more than 10 posts for demonstration
    { id: 1, title: "First Post", author: "John Doe", date: "2023-03-10", views: 150 },
    { id: 2, title: "Second Post", author: "Jane Doe", date: "2023-03-11", views: 100 },
    { id: 3, title: "First Post", author: "John Doe", date: "2023-03-10", views: 150 },
    { id: 4, title: "Second Post", author: "Jane Doe", date: "2023-03-11", views: 100 },
    { id: 5, title: "First Post", author: "John Doe", date: "2023-03-10", views: 150 },
    { id: 6, title: "Second Post", author: "Jane Doe", date: "2023-03-11", views: 100 },
    { id: 7, title: "First Post", author: "John Doe", date: "2023-03-10", views: 150 },
    { id: 8, title: "Second Post", author: "Jane Doe", date: "2023-03-11", views: 100 },
    { id: 9, title: "First Post", author: "John Doe", date: "2023-03-10", views: 150 },
    { id: 10, title: "Second Post", author: "Jane Doe", date: "2023-03-11", views: 100 },
    { id: 11, title: "First Post", author: "John Doe", date: "2023-03-10", views: 150 },
    { id: 12, title: "Second Post", author: "Jane Doe", date: "2023-03-11", views: 100 },

    // Add more dummy posts...
  ];

  const [posts, setPosts] = useState<Post[]>(samplePosts);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const navigate = useNavigate();

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="community-page">
      <h2>커뮤니티</h2>
      <table>
        <thead>
          <tr>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>조회</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map(post => (
            <tr key={post.id} onClick={() => navigate(`/post/${post.id}`)}>
              <td>{post.title}</td>
              <td>{post.author}</td>
              <td>{post.date}</td>
              <td>{post.views}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {pageNumbers.map(number => (
          <button key={number} className={currentPage === number ? 'active' : ''} onClick={() => setCurrentPage(number)}>
            {number}
          </button>
        ))}
      </div>
      <button onClick={() => navigate('/create-post')} className="write-btn">작성하기</button>
    </div>
  );
};

export default CommunityPage;
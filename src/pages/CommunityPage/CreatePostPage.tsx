import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreatePostPage.css'; // Make sure to link to your CSS file

interface Post {
  id: number;
  title: string;
  content: string;
}

const CreatePostPage: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the post data to your server or state management
    console.log({ title, content });
    navigate('/community'); // Navigate back to the community page after submission
  };

  return (
    <div className="create-post-page">
      <h2>게시글 작성</h2>
      <br />
      <form onSubmit={handleSubmit} className="post-form">
        <div className="form-group">
          <label htmlFor="postTitle">제목</label>
          <input
            id="postTitle"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력하세요"
          />
        </div>
        <div className="form-group">
          <label htmlFor="postContent">본문</label>
          <textarea
            id="postContent"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력하세요"
          />
        </div>
        <button type="submit">게시하기</button>
      </form>
    </div>
  );
};

export default CreatePostPage;
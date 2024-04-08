//src>pages>CommunityPage>CreatePostPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetPost, setCurrentPost } from '../../store/postSlice';
import './CreatePostPage.css';
import { Post } from '../../components/types';

const CreatePostPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitleLocal] = useState<string>('');
  const [content, setContentLocal] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
        // 새로운 게시글 객체를 생성하고, setCurrentPost 액션을 사용하여 상태에 설정
   // id를 제외한 Post 인터페이스를 충족하는 객체 생성
   const newPost: Post = {
    id: Date.now(), // 임시 ID 생성
    title,
    content,
    author: "임시 작성자", // 임시 작성자 정보
    date: new Date().toISOString(), // 현재 날짜를 ISO 문자열로
    views: 0, // 초기 조회수는 0
  };

    dispatch(setCurrentPost(newPost));
    // Here, you would typically send the post data to your server
    console.log(newPost);
    dispatch(resetPost());
    navigate('/community');
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
            onChange={(e) => setTitleLocal(e.target.value)}
            placeholder="제목을 입력하세요"
          />
        </div>
        <div className="form-group">
          <label htmlFor="postContent">본문</label>
          <textarea
            id="postContent"
            value={content}
            onChange={(e) => setContentLocal(e.target.value)}
            placeholder="내용을 입력하세요"
          />
        </div>
        <button type="submit" className="btn-submit-post">게시하기</button>
      </form>
    </div>
  );
};

export default CreatePostPage;
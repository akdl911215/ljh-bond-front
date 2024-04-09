//src>pages>CommunityPage>PostDetailPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPost, updatePost, deletePost, resetPost } from '../../store/postSlice';
import { RootState } from '../../store/store'; // RootState 타입을 정의한 경로를 확인해주세요.
import './PostDetailPage.css';
import { Post } from '../../components/types';
import { RiArrowLeftLine } from 'react-icons/ri';

const DUMMY_POSTS: Post[] = [
  { id: 1, title: 'First Post', author: 'John Doe', date: '2023-03-10', views: 150, content: 'This is the first post content.' },
  { id: 2, title: 'Second Post', author: 'Jane Doe', date: '2023-03-11', views: 100, content: 'This is the second post content.' },
  { id: 3, title: 'Third Post', author: 'Jim Bean', date: '2023-03-12', views: 200, content: 'This is the third post content.' },
];

const PostDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const post = useSelector((state: RootState) => state.post.currentPost);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedTitle, setEditedTitle] = useState<string>(post?.title || '');
  const [editedContent, setEditedContent] = useState<string>(post?.content || '');

  useEffect(() => {
    const foundPost = DUMMY_POSTS.find(post => post.id.toString() === id);
    if (foundPost) {
      dispatch(setCurrentPost(foundPost));
    }
  }, [id]);

  const handleEdit = () => setIsEditing(!isEditing);

  const handleSave = () => {
    if (post) {
      dispatch(updatePost({ title: editedTitle, content: editedContent }));
      setIsEditing(false);
    }
  };

  // resetPost 사용 예시
  const handleCancelEdit = () => {
    // 포스트 편집을 취소하고 초기 상태로 돌아갑니다.
    dispatch(resetPost());
    setIsEditing(false);
  };
  const handleDelete = () => {
    if (post) {
      dispatch(deletePost(post.id));
      navigate('/community');
    }
  };

  const handleGoBack = () => navigate(-1); // Navigate back to the previous page

  return (
    <div className="post-detail-page">
      <div className="post-header">
        <button onClick={handleGoBack} className="back-button"><RiArrowLeftLine /></button>
      </div>
      {post ? (
        <>
          {isEditing ? (
            <form className="edit-form">
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  id="title"
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="content">Content</label>
                <textarea
                  id="content"
                  value={editedContent}
                  onChange={(e) => setEditedContent(e.target.value)}
                />
              </div>
            </form>
          ) : (
            <>
              <h1>{post.title}</h1>
              <p><strong>Author:</strong> {post.author}</p>
              <p><strong>Date:</strong> {post.date}</p>
              <p><strong>Views:</strong> {post.views}</p>
              <div>{post.content}</div>
            </>
          )}
            <div className="buttons">
              {isEditing ? (
                <>
                  <button onClick={handleSave} className="save-button">Save</button>
                  <button onClick={handleCancelEdit} className="cancel-button">Cancel</button> {/* 수정됨 */}

                </>
              ) : (
                <>
                  <button onClick={handleEdit} className="edit-button">Edit</button>
                  <button onClick={handleDelete} className="delete-button">Delete</button>
                </>
              )}
            </div>
        </>
      ) : (
        <p>Post not found.</p>
      )}
    </div>
  );
};

export default PostDetailPage;
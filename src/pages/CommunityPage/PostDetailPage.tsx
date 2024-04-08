import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PostDetailPage.css';
import { Post } from '../../components/types';

const DUMMY_POSTS: Post[] = [
  { id: 1, title: 'First Post', author: 'John Doe', date: '2023-03-10', views: 150, content: 'This is the first post content.' },
  { id: 2, title: 'Second Post', author: 'Jane Doe', date: '2023-03-11', views: 100, content: 'This is the second post content.' },
  { id: 3, title: 'Third Post', author: 'Jim Bean', date: '2023-03-12', views: 200, content: 'This is the third post content.' },
];

const PostDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | undefined>();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedTitle, setEditedTitle] = useState<string>('');
  const [editedContent, setEditedContent] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const foundPost = DUMMY_POSTS.find(post => post.id.toString() === id);
    if (foundPost) {
      setPost(foundPost);
      setEditedTitle(foundPost.title);
      setEditedContent(foundPost.content);
    }
  }, [id]);

  const handleEdit = () => setIsEditing(!isEditing);

  const handleSave = () => {
    console.log({ id: post?.id, title: editedTitle, content: editedContent });
    setIsEditing(false);
    // Here, you'd typically update the post in your backend or state management system
  };

  const handleDelete = () => {
    console.log(`Deleting post with id: ${id}`);
    navigate('/community'); // Redirect to the community listing
  };

  const handleGoBack = () => navigate(-1); // Navigate back to the previous page

  return (
    <div className="post-detail-page">
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
                <button onClick={() => setIsEditing(false)} className="cancel-button">Cancel</button>
              </>
            ) : (
              <button onClick={handleEdit} className="edit-button">Edit</button>
            )}
            <button onClick={handleDelete} className="delete-button">Delete</button>
            <button onClick={handleGoBack} className="back-button">Go Back</button>
          </div>
        </>
      ) : (
        <p>Post not found.</p>
      )}
    </div>
  );
};

export default PostDetailPage;
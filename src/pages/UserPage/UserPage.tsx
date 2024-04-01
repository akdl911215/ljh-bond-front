import React, { useState } from 'react';
import './UserPage.css';
import { useNavigate } from 'react-router-dom';
import { User, initialUser } from './UserData';

const BasicInformationPage: React.FC = () => {
  const [user, setUser] = useState<User>(initialUser);
  const [editMode, setEditMode] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user); // Here, you'd update the database or state with the new user info
    setEditMode(false);
  };
  const handleGoBack = () => navigate(-1); // Navigate back to the previous page

  return (
    <div className="basic-info-container">
      <div className="info-card">
        {editMode ? (
          <form onSubmit={handleSubmit} className="edit-form">
            <div className="form-group">
              <label>Name:</label>
              <input type="text" name="name" value={user.name || ''} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" name="email" value={user.email || ''} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>Phone Number:</label>
              <input type="text" name="phoneNumber" value={user.phoneNumber || ''} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>Address:</label>
              <input type="text" name="address" value={user.address || ''} onChange={handleInputChange} />
            </div>
            <div className="buttons">
              <button type="submit" className="save-button">Save</button>
              <button type="button" onClick={() => setEditMode(false)} className="cancel-button">Cancel</button>
              <button type="button" onClick={handleGoBack} className="back-button">Go Back</button>
            </div>
          </form>
        ) : (
          <>
            <h2>{user.name}님</h2>
            <br />
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
            <p><strong>Address:</strong> {user.address}</p>
            <div className="buttons">
              <button onClick={() => setEditMode(true)} className="edit-info-btn">Edit Information</button>
              <button type="button" onClick={handleGoBack} className="back-button">Go Back</button>
            </div>          </>
        )}
        <button onClick={() => navigate('/userassets')} className="view-assets-btn">View Assets</button>
      </div>
    </div>
  );
};

export default BasicInformationPage;

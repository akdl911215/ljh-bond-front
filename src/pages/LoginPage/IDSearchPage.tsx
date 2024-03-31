import React, { useState } from 'react';
import './IDSearchPage.css'; 

const IDSearchPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Assuming you have an API endpoint for ID search
    const apiEndpoint = '/api/id-search';
    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (data.success) {
        alert('Please check your email for your ID.');
      } else {
        alert(data.message); // "No account found with that email" or other messages
      }
    } catch (error) {
      console.error('Error during ID search:', error);
      alert('There was an issue with your request. Please try again later.');
    }
  };
  const handleEmailVerification = () => {
    // Logic for email verification request
    console.log("Email verification requested for:", email);
    // This is where you'd potentially send a request to your backend to handle email verification
  };

  return (
    <div className="id-search-page">
      <h2>아이디 찾기</h2>
      <form onSubmit={handleSubmit} className="id-search-form">
       <div className="form-group email-input-group">
          <label htmlFor="email">이메일</label>
          <div className="email-input-container">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="button" onClick={handleEmailVerification} className="email-verify-btn">인증요청</button>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">아이디 찾기</button>
    </form>
  </div>
  );
};

export default IDSearchPage;
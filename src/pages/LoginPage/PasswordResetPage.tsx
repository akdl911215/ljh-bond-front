import React, { useState } from 'react';
import './PasswordResetPage.css'
const PasswordResetPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logic to handle password reset request
    console.log('Password reset requested for email:', email);
    // This would usually trigger sending a reset link or code to the user's email
  };
  const handleEmailVerification = () => {
    console.log('Email verification requested for:', email);
    // Trigger email verification logic here
  };

  return (
    <div className="password-reset-page">
      <h2>비밀번호 재설정</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">이메일</label>
          <div className="email-input-container">
          <input
            type="email"
            id="email"
            className="email-input"
            placeholder= "이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button 
            type="button" 
            className="email-verify-btn"
            onClick={handleEmailVerification}
          >
            인증 확인
          </button>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">이메일로 인증코드 받기</button>
      </form>
    </div>
  );
};

export default PasswordResetPage;
import React, { ChangeEvent, FormEvent, useState } from 'react';
import './RegistrationPage.css';
import { FaFacebook } from "react-icons/fa";
import { SiNaver, SiKakao } from "react-icons/si";
import { RiKakaoTalkFill } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    nickname: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    console.log('Form Submitted', formData);
  };

  return (
    <div className="registration-page">
      <h2>Membership Registration</h2>
      <div className="sns-registration">
        <p>SNS계정으로 간편하게 회원가입</p>
        
        <div className="sns-buttons">
          <button className="btn btn-google"><FcGoogle /></button>
          <button className="btn btn-facebook"><FaFacebook /></button>
          <button className="btn btn-naver"><SiNaver /></button>
          <button className="btn btn-kakao"><RiKakaoTalkFill color='black' /></button>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          <button type="button" className="email-verify">이메일 인증하기</button>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="nickname">Nickname:</label>
          <input type="text" id="nickname" name="nickname" value={formData.nickname} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
        <div className="login-redirect">
        Already have an account? <Link to="/login" className="login-link">Log in</Link>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
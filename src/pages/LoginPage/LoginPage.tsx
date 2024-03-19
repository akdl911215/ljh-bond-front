import React, { useState } from 'react';
import './LoginPage.css'; // Ensure this path matches your file structure
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from 'react-icons/ri';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Implementation for login logic
    console.log(email, password, rememberMe);
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center login-page">
      <div className="login-form-container">
        <div className="login-box">
          <h3 className="login-title">Login</h3>
          <p className="login-subtitle">P2P 플랫폼 000입니다.</p>
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                id="email" 
                className="form-control" 
                type="email" 
                placeholder="이메일" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            {/* Password */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                id="password" 
                className="form-control" 
                type="password" 
                placeholder="비밀번호" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} />
            </div>
            {/* Remember Me */}
            <div className="form-check">
              <input 
                id="rememberMe" 
                type="checkbox" 
                className="form-check-input" 
                checked={rememberMe} 
                onChange={() => setRememberMe(!rememberMe)} />
              <label className="form-check-label" htmlFor="rememberMe">아이디 저장</label>
            </div>
            {/* Submit Button */}
            <div className="form-group text-center">
              <button className="btn btn-login" type="submit">Login</button>
            </div>
            {/* SNS Signup Buttons */}
            <p>SNS계정으로 간편 로그인/회원가입</p>
            <div className="sns-signup-buttons">
              <button className="btn btn-google"><FcGoogle /></button>
              <button className="btn btn-facebook"><FaFacebook /></button>
              <button className="btn btn-naver"><SiNaver /></button>
              <button className="btn btn-kakao"><RiKakaoTalkFill color='black' /></button>
            </div>
            {/* Footer Links */}
            <div className="login-footer text-center mt-3">
              <a href="#">아이디 찾기</a> | <a href="#">비밀번호 찾기</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
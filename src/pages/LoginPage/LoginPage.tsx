import React, { useState } from 'react';
import './LoginPage.css'; 
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
              <label htmlFor="email">이메일</label>
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
              <label htmlFor="password">비밀번호</label>
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
              <button className="btn btn-login btn-login-primary" type="submit">Login1</button>
              <button className="btn btn-login btn-login-blue" type="submit">Login2</button>
              <button className="btn btn-login btn-login-gray" type="submit">Login3</button>
              <button className="btn btn-login btn-login-purple" type="submit">Login4</button>
              <button className="btn btn-login btn-login-red" type="submit">Login5</button>
              <button className="btn btn-login btn-login-secondary" type="submit">Secondary6</button>
              <button className="btn btn-login btn-login-info" type="submit">Info7</button>
              <button className="btn btn-login btn-login-warning" type="submit">Warning8</button>
              <button className="btn btn-login btn-login-danger" type="submit">Danger9</button>
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
              <a href="idsearch">아이디 찾기</a> | <a href="passwordreset">비밀번호 찾기</a>| <a href="register">회원가입</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
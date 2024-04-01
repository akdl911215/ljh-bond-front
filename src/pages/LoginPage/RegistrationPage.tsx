import React, { ChangeEvent, FormEvent, useState } from 'react';
import './RegistrationPage.css';
import { FaFacebook } from "react-icons/fa";
import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {

  const [isInputValid, setIsInputValid] = useState({
    email: true,
    emailDomain: true,
    password: true,
    confirmPassword: true,
    nickname: true,
  });

  const [formData, setFormData] = useState({
    email: '',
    emailDomain: '',
    password: '',
    confirmPassword: '',
    nickname: '',
  });
  const [validationMessage, setValidationMessage] = useState('');
  const emailDomains = ["naver.com","daum.net","gmail.com", "yahoo.com", "outlook.com"];
  const [showCustomEmailInput, setShowCustomEmailInput] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "emailDomain" && value === "custom") {
      setShowCustomEmailInput(true);
      setFormData({ ...formData, emailDomain: '' }); // Reset emailDomain for custom input
      if (value === "custom") {
        setShowCustomEmailInput(true); // Show input field
        setFormData({ ...formData, emailDomain: '' }); // Reset emailDomain for custom input
      } else {
        setShowCustomEmailInput(false); // Show select box
        setFormData({ ...formData, [name]: value });
      }
  } else {
    setFormData({ ...formData, [name]: value });
  }
  

    setIsInputValid({ ...isInputValid, [name]: true });
    setValidationMessage('');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic validation for demonstration
    if (formData.password !== formData.confirmPassword) {
      setValidationMessage("Passwords do not match.");
      return;
    }
    if (!formData.email || !formData.emailDomain) {
      setValidationMessage("Please complete the email field.");
      return;
    }
    // Assuming all validations pass
    console.log('Form Submitted', formData);
  };

  return (
    <div className="registration-page">
      <h2>회원가입</h2>
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
      {/* // Inside the registration form component */}
        <div className="form-group email-group">
          <label htmlFor="email">이메일</label>
          <div className="email-inputs">
            <input
              className={!isInputValid.email ? "error" : ""}
              type="text"
              id="email"
              name="email"
              placeholder='이메일'
              value={formData.email}
              onChange={handleChange}
              required 
            />
            <span>@</span>
            {showCustomEmailInput ? (
            <input
              type="text"
              name="emailDomain"
              className={!isInputValid.emailDomain ? "error" : ""}
              placeholder="이메일 도메인"
              value={formData.emailDomain}
              onChange={handleChange}
              required
            />
          ) : (
            <select 
              name="emailDomain" 
              onChange={handleChange} 
              value={formData.emailDomain} 
              className={isInputValid.emailDomain ? "" : "error"} 
              required>
              <option value="">선택해주세요</option>
              {emailDomains.map(domain => (
                <option key={domain} value={domain}>{domain}</option>
              ))}
              <option value="custom">직접 입력</option>
            </select>
          )}
          </div>
          <button type="button" className="email-verify">이메일 인증하기</button>
        </div>
        <div className="form-group">
          <label htmlFor="password">비밀번호</label>
          <div>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</div>
          <br />
          <input type="password" id="password" name="password" placeholder='비밀번호' value={formData.password} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">비밀번호 확인</label>
          <input type="password" id="confirmPassword" name="confirmPassword" placeholder='비밀번호 확인' value={formData.confirmPassword} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="nickname">닉네임</label>
          <input type="text" id="nickname" name="nickname" placeholder = '별명 (2~20자)'value={formData.nickname} onChange={handleChange} required />
        </div>
        {validationMessage && <div className="validation-message">{validationMessage}</div>}
        <button type="submit" className="btn btn-primary">회원가입하기</button>
        <div className="login-redirect">
        이미 아이디가 있으신가요? <Link to="/login" className="login-link">로그인</Link>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
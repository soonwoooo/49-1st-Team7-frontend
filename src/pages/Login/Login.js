import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const navigate = useNavigate();

  const saveUserId = event => {
    setId(event.target.value);
  };
  const saveUserPw = event => {
    setPw(event.target.value);
  };

  const handleLogin = () => {
    fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'LOGIN_SUCCESS') {
          localStorage.setItem('token', data.accessToken);
        }
        //console.log(data);
        navigate('/login');
      });
  };
  const isInputValid = id.includes('@') && id.includes('.') && pw.length >= 10;

  return (
    <div className="login">
      <div className="Container">
        <div className="imageContainer">
          <img className="logo" src="/images/Logo.png" alt="로고" />
          <img className="wecode" src="/images/logo_wecode.png" alt="위코드" />
        </div>
        <div className="inputContainer">
          <input
            className="userInfo"
            type="text"
            placeholder="이메일"
            name="email"
            onChange={saveUserId}
          />
          <input
            className="userInfo"
            type="text"
            placeholder="비밀번호"
            name="password"
            onChange={saveUserPw}
          />
          <button
            className={isInputValid ? 'loginBtn' : 'loginBtnDisabled'}
            disabled={isInputValid ? false : true}
            onClick={handleLogin}
          >
            로그인
          </button>
        </div>
        <div className="loginOption">
          <div className="join">
            <Link to="/Join">
              <span>회원가입</span>
            </Link>
          </div>
          <div className="bar">|</div>
          <div className="Findpass">
            <span>비밀번호 찾기</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;

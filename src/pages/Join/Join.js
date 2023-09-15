import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Join.scss';

const Join = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pw2, setPw2] = useState('');
  const [nick, setNick] = useState('');

  const saveUserId = event => {
    setId(event.target.value);
  };
  const saveUserPw = event => {
    setPw(event.target.value);
  };
  const saveUserPw2 = event => {
    setPw2(event.target.value);
  };
  const saveUserNick = event => {
    setNick(event.target.value);
  };

  const navigate = useNavigate();

  const goToJoinDone = () => {
    navigate('/joindone');
  };

  const isInputValid =
    id.includes('@') && id.includes('.') && pw === pw2 && pw.length >= 10;

  const handleclick = () => {
    fetch('http://10.58.52.239:8000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: id,
        password: pw,
        nickname: nick,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message.includes('user create complete')) {
          goToJoinDone();
        }
        if (result.message === 'error! check your input key, plz') {
          alert('정보를 확인해주세요');
        }
      });
  };

  return (
    <div className="main">
      <div className="joinInfo">
        <header>
          <div className="backDiv">
            <Link to="/">
              <img
                className="backIcon"
                src="/images/Back_arrow.png"
                alt="뒤로가기"
              />
            </Link>
            <span className="back">뒤로</span>
          </div>
        </header>
        <container>
          <h1>회원가입</h1>
          <div className="text">
            <span className="text1">기본정보</span>
            <span className="text2">필수사항</span>
          </div>
          <div className="useInfo">
            <input
              type="text"
              placeholder="이메일"
              className="user"
              onChange={saveUserId}
            />
            <input
              type="text"
              placeholder="비밀번호"
              className="user"
              onChange={saveUserPw}
            />
            <input
              type="text"
              placeholder="비밀번호확인"
              className="user"
              onChange={saveUserPw2}
            />
          </div>
          <div className="nicks">
            <label htmlFor="nickName">
              닉네임
              <span className="option">선택사항</span>
            </label>
            <input
              type="text"
              placeholder="닉네임"
              className="nickName"
              onChange={saveUserNick}
            />
          </div>
          <div className="phone">
            <label htmlFor="phoneNumber">
              전화번호
              <span className="option">선택사항</span>
            </label>
            <div className="selectInput">
              <select defaultValue="010">
                <option value="010">010</option>
                <option value="011">011</option>
                <option value="016">016</option>
                <option value="017">017</option>
                <option value="019">019</option>
              </select>
              <input
                type="tel"
                placeholder="휴대폰 번호를 입력하세요"
                id="phoneNumber"
              />
            </div>
          </div>
          <div className="birthday">
            <label htmlFor="birthSelect">
              생일
              <span className="option">선택사항</span>
            </label>
            <div className="selectBox">
              <select className="yearWrap" defaultValue="년">
                <option value="1990년">1990년</option>
                <option value="1991년">1991년</option>
                <option value="1992년">1992년</option>
                <option value="1993년">1993년</option>
                <option value="1994년">1994년</option>
                <option value="1995년">1995년</option>
              </select>

              <select className="monthWrap" defaultValue="월">
                <option value="1월">1월</option>
                <option value="2월">2월</option>
                <option value="3월">3월</option>
                <option value="4월">4월</option>
                <option value="5월">5월</option>
              </select>

              <select className="dayWrap" defaultValue="일">
                <option value="1일">1일</option>
                <option value="2일">2일</option>
                <option value="3일">3일</option>
                <option value="4일">4일</option>
                <option value="5일">5일</option>
                <option value="6일">6일</option>
                <option value="7일">7일</option>
                <option value="8일">8일</option>
                <option value="9일">9일</option>
                <option value="10일">10일</option>
              </select>
            </div>
          </div>
        </container>
        <div className="userJoin">
          <button
            className={isInputValid ? 'JoinBtn' : 'JoinBtnDisabled'}
            disabled={!isInputValid}
            onClick={handleclick}
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join;

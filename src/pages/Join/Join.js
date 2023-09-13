import React from 'react';
import './Join.scss';

const Main = () => {
  const SelectsBirthYear = () => {
    const years = [];
    for (let i = 2023; i >= 1920; i--) {
      years.push(<option key={i}>{i}년</option>);
    }
    return (
      <select className="birthYear" id="birthSelect" defaultValue="2000년">
        {years}
      </select>
    );
  };

  const SelectsBirtMonth = () => {
    const months = [];
    for (let i = 1; i <= 12; i++) {
      months.push(<option key={i}>{i}월</option>);
    }
    return (
      <select className="birthMonth" defaultValue="1월">
        {months}
      </select>
    );
  };

  const SelectsBirtDay = () => {
    const days = [];
    for (let i = 1; i <= 31; i++) {
      days.push(<option key={i}>{i}일</option>);
    }
    return (
      <select className="birthDay" defaultValue="1일">
        {days}
      </select>
    );
  };

  return (
    <div className="main">
      <div className="joinInfo">
        <header>
          <div className="backDiv">
            <img
              className="backIcon"
              src="/images/Back_arrow.png"
              alt="뒤로가기"
            />
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
            <input type="text" placeholder="이메일" className="user" />
            <input type="text" placeholder="비밀번호" className="user" />
            <input type="text" placeholder="비밀번호확인" className="user" />
          </div>
          <div className="nicks">
            <label htmlFor="nickName">
              닉네임
              <span className="option">선택사항</span>
            </label>
            <input type="text" placeholder="닉네임" className="nickName" />
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
              <div className="yearWrap">
                <SelectsBirthYear />
              </div>
              <div className="monthWrap">
                <SelectsBirtMonth />
              </div>
              <div className="dayWrap">
                <SelectsBirtDay />
              </div>
            </div>
          </div>
        </container>
        <div className="userJoin">
          <button className="infoJoin">회원가입</button>
        </div>
      </div>
    </div>
  );
};

export default Main;

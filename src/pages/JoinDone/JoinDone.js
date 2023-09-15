import React from 'react';
import { useNavigate } from 'react-router-dom';
import './JoinDone.scss';

const JoinDone = () => {
  const navigate = useNavigate();

  const goToJoin = () => {
    navigate('/join');
  };

  const goToLogin = () => {
    navigate('/');
  };

  return (
    <div className="Joindone">
      <header>
        <div className="topInformationContainer">
          <img
            src={`${process.env.PUBLIC_URL}/images/Back_arrow.png`}
            alt="회원가입화면으로 이동화살표" /*회원가입 완료에서 뒤로가면 로그인으로 가야할거같은데... */
            onClick={goToJoin}
          />

          <p>뒤로</p>
        </div>
      </header>
      <div className="centerInformation">
        <img
          src={`${process.env.PUBLIC_URL}/images/square_check.png`}
          alt="체크이미지"
        />

        <div className="centerLetter">
          <h1>회원 가입되었습니다!</h1>
          <h2>이제 로그인해주세요</h2>
        </div>
      </div>
      <div className="okayButton">
        <button onClick={goToLogin}>확인</button>
      </div>
    </div>
  );
};

export default JoinDone;

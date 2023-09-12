import React from 'react';
import './JoinDone.scss';
import { useNavigate } from 'react-router-dom';

const JoinDone = () => {
  const navigate = useNavigate();

  const goToJoin = () => {
    navigate('/join');
  };

  const goToMain = () => {
    navigate('/main');
  };
  return (
    <div className="Joindone">
      <header>
        <div className="topInformationContainer">
          <img
            src={`${process.env.PUBLIC_URL}/images/Back_arrow.png`}
            alt="로그인화면으로 이동화살표"
            onClick={goToJoin}
          />

          <p>뒤로</p>
        </div>
      </header>
      <div className="centerInformation">
        <img
          src={`${process.env.PUBLIC_URL}/images/banner_square.png`}
          alt="체크이미지"
        />

        <div className="centerLetter">
          <h1>회원 가입되었습니다!</h1>
          <h2>이제 로그인해주세요</h2>
        </div>
      </div>
      <div className="okayButton">
        <button onClick={goToMain}>확인</button>
      </div>
    </div>
  );
};

export default JoinDone;

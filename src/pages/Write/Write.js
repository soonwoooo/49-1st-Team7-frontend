import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Write.scss';

const Write = () => {
  const [saveText, setSaveText] = useState('');
  const navigate = useNavigate();

  const goToBack = () => {
    navigate('/main');
  };

  const handleSaveText = e => {
    setSaveText(e.target.value);
  };

  const handleCommit = () => {
    if (saveText.length < 1) {
      alert('내용을 입력해 주세요.');

      return;
    }

    // fetch(
    //   //"api주소"//,
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json;charset=utf-8',
    //     },
    //     body: JSON.stringify({
    //       content: saveText,
    //     }),
    //   },
    // );
    //   .then(response => response.json())
    //   .then(data => console.log(data));
    //  }
  };

  return (
    <div className="writeContainer">
      <div className="contentAndButtonWrapper">
        <div className="publishWrapper">
          <div className="contentWrapper">
            <p>nickname</p>
            <textarea
              placeholder="스레드를 시작하세요"
              onChange={handleSaveText}
            />
          </div>
        </div>
        <div className="buttonWrapper">
          <button className="cancle" onClick={goToBack}>
            취소
          </button>
          <button className="commit" onClick={handleCommit}>
            게시
          </button>
        </div>
      </div>
    </div>
  );
};

export default Write;

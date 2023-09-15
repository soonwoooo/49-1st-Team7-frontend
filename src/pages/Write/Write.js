import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Write.scss';

const Write = () => {
  const [saveText, setSaveText] = useState('');
  const [userdata, setUserData] = useState([]);
  const navigate = useNavigate();
  const goToBack = () => {
    navigate('/main');
  };

  const handleSaveText = e => {
    setSaveText(e.target.value);
  };

  // useEffect(() => {
  //   fetch('http://10.58.52.239:8000/posts')
  //     .then(res => res.json())
  //     .then(data => {
  //       setUserData(data);
  //     });
  // }, []);

  const handleCommit = () => {
    if (saveText.length < 1) {
      alert('내용을 입력해 주세요.');

      return;
    }

    fetch('http://10.58.52.239:8000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        content: saveText,
        nickname: '권순우',
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'new post create completes') {
          alert('게시글이 작성되었습니다');

          goToBack();

          //   if()
          // //  confirm("ok")
          // goToBack();
        }
      });
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

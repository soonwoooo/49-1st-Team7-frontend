import React, { useState /*useEffect*/ } from 'react';
import { useNavigate } from 'react-router-dom';
import './Write.scss';

const Write = () => {
  const [saveText, setSaveText] = useState('');
  // const [userdata,setUserData] = useState([]) /*닉네임 fetch 주석풀면 주석 제거 */
  const navigate = useNavigate();

  const goToBack = () => {
    navigate('/main');
  };

  const handleSaveText = e => {
    setSaveText(e.target.value);
  };

  /*닉네임 가져오는 fectch */
  // useEffect(() => {
  //   fetch('http://localhost:8000/posts', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setUserData(data.postList);
  //     });
  // }, []);

  /* 작성버튼을 눌렀을때 통신*/
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
    // Authorization: localStorage.getItem('token')
    //     },
    //     body: JSON.stringify({
    //       content: saveText,
    //     }),
    //   }, );
    //   .then(response => response.json())
    //   .then(result => {
    //   if(result.message === 'post_success'){
    //     alert('게시글이 작성되었습니다')
    //     {goToBack}
    //   }
    // })
  };

  return (
    <div className="writeContainer">
      <div className="contentAndButtonWrapper">
        <div className="publishWrapper">
          <div className="contentWrapper">
            <p>nickname</p>
            {/* <p>{data.nickname}</p> */}
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

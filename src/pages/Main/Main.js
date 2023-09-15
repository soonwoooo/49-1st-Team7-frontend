import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.scss';

const Main = () => {
  const navigate = useNavigate();
  const [postList, setPostList] = useState([]);

  const goToWrite = () => {
    navigate('/write');
  };

  useEffect(() => {
    fetch('http://localhost:8000/posts')
      // fetch('/data/data.json')
      .then(res => res.json())
      .then(data => {
        setPostList(data.postData);
      });
  }, []);
  return (
    <div className="mainContainer">
      <div className="allWrapper">
        <div className="postWrapper">
          {postList.map(user => {
            const { id, nickname, created_at, content } = user;

            return (
              <div className="contentContainer" key={id}>
                <div className="nameWrapper">
                  <p className="name">{nickname}</p>
                  <p className="date">{created_at}</p>
                </div>
                <div className="letterWrapper">
                  <p>{content}</p>
                </div>
                <div className="commentWrapper">댓글 00</div>
              </div>
            );
          })}
        </div>
        <div className="buttonWrapper">
          <button className="writeButton" onClick={goToWrite}>
            글 쓰기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;

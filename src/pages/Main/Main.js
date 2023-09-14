import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.scss';

const Main = () => {
  const navigate = useNavigate();
  const [userList, setUserList] = useState([]);

  const goToWrite = () => {
    navigate('/write');
  };

  useEffect(() => {
    fetch('/data/data.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setUserList(data);
      });
  }, []);

  return (
    <div className="mainContainer">
      <div className="allWrapper">
        <div className="postWrapper">
          {userList.map(user => (
            <div className="contentContainer" key={user.id}>
              <div className="nameWrapper">
                <p className="name">{user.nickname}</p>
                <p className="date">{user.createAt}</p>
              </div>
              <div className="letterWrapper">
                <p>{user.content}</p>
              </div>
              <div className="commentWrapper">댓글 00</div>
            </div>
          ))}
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

import React from 'react';

const User = function(props) {
  return (
    <div className="others-list">
      <div>
        <img src={props.user.url} className="other-user-image" alt="NA"></img>
      </div>
      <div className="others-info">
        <span>{props.user.name}</span>
      </div>
      <div className="others-info">
        <button onClick={() => {}}>
          {props.user.followingStatus ? 'UNFOLLOW' : 'FOLLOW'}
        </button>
      </div>
    </div>
  );
};

export default User;

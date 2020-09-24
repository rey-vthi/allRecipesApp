import React, {useEffect, useState} from 'react';
import recipeAPI from './recipeAPI';

const User = function(props) {
  const [user, setUser] = useState(props.user);
  return (
    <div className="others-list">
      <div>
        <img src={user.url} className="other-user-image" alt="NA"></img>
      </div>
      <div>
        <span>{user.name}</span>
      </div>
      <div>
        <button
          onClick={() => recipeAPI.toggleFollowStatus(user.id).then(setUser)}
        >
          {user.followingStatus ? 'UNFOLLOW' : 'FOLLOW'}
        </button>
      </div>
    </div>
  );
};

const Others = function(props) {
  const list = props.info.map((user, index) => {
    return <User key={index} user={user} />;
  });
  return <div>{list}</div>;
};

const Profile = function() {
  const [user, setUser] = useState({});
  const [others, setOthers] = useState([]);

  useEffect(() => {
    recipeAPI.getProfile().then(setUser);
  }, []);

  useEffect(() => {
    recipeAPI.getOthers().then(setOthers);
  }, []);

  return (
    <div>
      <img src={user.url} className="profile-img" alt="NA" />
      <h1>{user.name}</h1>
      <p>Followers: 0</p>
      <p>Following: 0</p>
      <div>
        <Others info={others} />
      </div>
    </div>
  );
};

export default Profile;

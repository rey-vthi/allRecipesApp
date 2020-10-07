import React, {useEffect, useState} from 'react';
import Others from './Others';
import recipeAPI from './recipeAPI';

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
      <div className="profile-container">
        <div>
          <img src={user.url} className="profile-img" alt="NA" />
        </div>
        <div className="details">
          <h1>{user.name}</h1>
          <p>Followers: 0</p>
          <p>Following: 0</p>
        </div>
      </div>
      <div>
        <Others info={others} />
      </div>
    </div>
  );
};

export default Profile;

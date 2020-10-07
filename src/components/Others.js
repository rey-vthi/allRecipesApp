import React from 'react';
import User from './User';

const Others = function(props) {
  const list = props.info.map((user, index) => {
    return <User key={index} user={user} />;
  });
  return <div>{list}</div>;
};

export default Others;

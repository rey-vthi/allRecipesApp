import React from 'react';

const Image = props => {
  return (
    <div>
      <img className={props.className} src={props.path} alt="NA" />
    </div>
  );
};

export default Image;

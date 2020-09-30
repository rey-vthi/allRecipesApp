import React from 'react';
import Image from './Image';
import {Link} from 'react-router-dom';
import '../App.css';

const InformationPanel = function(props) {
  return (
    <div className="left-header">
      <Link to="/">
        <Image className="logo" path={props.path} />
      </Link>
      <div>
        <h2 style={{color: 'orange', marginTop: '3vw'}}>{props.name}</h2>
      </div>
    </div>
  );
};

export default InformationPanel;

import React from 'react';
import '../App.css';
import Image from './Image';
import {Link} from 'react-router-dom';

const InformationPanel = function(props) {
  return (
    <div className="left-header">
      <Link to="/">
        <Image className="logo" path={props.path} />
      </Link>
      <div>
        <p className={props.style}>{props.name}</p>
      </div>
    </div>
  );
};

const Header = function(props) {
  return (
    <div className="header">
      <InformationPanel path="/logo.png" style="app-name" name="AllRecipes" />
      <div className="right-panel">
        <Link to="/recipes/add">
          <Image className="plus-icon" path="/addIcon.png"></Image>
        </Link>
        <Link to="/user/profile">
          <Image className="logo" path="/profile.png" />
        </Link>
      </div>
    </div>
  );
};

export default Header;

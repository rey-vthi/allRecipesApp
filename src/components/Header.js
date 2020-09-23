import React from 'react';
import '../App.css';
import Image from './Image';
import {Link} from 'react-router-dom';

const InformationPanel = function(props) {
  return (
    <div className="left-header">
      <Image className="logo" path={props.path} />
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
        <Link to="/recipes/add">Add</Link>
        <Link to="/user/profile">
          <Image className="logo" path="/profile.png" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
